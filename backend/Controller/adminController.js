const User = require('../Model/userModel');
const { StatusCodes } = require('http-status-codes')
const BadRequestError = require('../Error/BadRequest')
const UnauthenticatedError = require('../Error/UnauthorizedError')
const NotFoundError = require('../Error/NotFoundError');
const { findById, findByIdAndUpdate, find, findOne } = require('../Model/userModel');
const refreshJWTToken = require('../database/refreshToken')
const jwt = require('jsonwebtoken')
const sendEmail = require('./emailController');
const crypto = require('crypto')
const generateOtp = require('../Middleware/AdditionalFunc')
const ProxyUser = require('../Model/proxyUserModel')
const UserDocuments = require('../Model/userDocumentsModel')
const Loan = require('../Model/loanModel')


const getAllUserDetails = async (req, res) => {
    const users = await User.find({role:'user'})
    console.log(users);
    let userDetails = []
    let addUserDetails = users.map((user) => {
        userDetails.push({
            client_ID : user._id,
            client_name: user.first_name + ' ' + user.middle_name + ' ' + user.last_name,
            client_email: user.email,
            client_inquiries: user.loanInquiries.length,
            client_mobile: user.mobile
        })
    })
    await Promise.all(addUserDetails)
    res.status(StatusCodes.OK).json(userDetails)
}

const getUserDetails = async (req, res) => {
    const { id: userId, email: email } = req.params;
    const user = await User.findOne({ _id: userId, email: email })
    if (!user) throw new `No user found`
    res.status(StatusCodes.OK).json({
        salutation:user.salutation,
        first_name: user.first_name,
        middle_name: user.last_name,
        last_name: user.last_name,
        email: user.email,
        mobile: user.mobile,
        address: user.address,
        city: user.city,
        pin: user.pin,
        state: user.state,
        dob: user.dob.toDateString(),
        gender: user.gender,
        country: user.country
    })
}

const getUserLoanInquiries = async(req, res) => {
    const { id:userId,email:email } = req.params;
    const user = await User.findOne({ _id: userId, email: email }).select("loanInquiries").populate("loanInquiries")
    if (!user) {
        throw new NotFoundError(`No user found with USER_ID:${userId}`)
    }
    const loanInquiries = user.loanInquiries
    const userLoanDetails = []
    const loanDetails = loanInquiries.map((inquiry) => {
        userLoanDetails.push({
            loan_id : inquiry._id,
            loan_type: inquiry.loanType,
            loan_amount: inquiry.loanAmount,
            loan_status: inquiry.applicationStatus
        })
    })
    await Promise.all(loanDetails)
    res.status(StatusCodes.OK).json(userLoanDetails)
}

const getLoanInquiryDetails = async (req, res) => {
    const { userId: userId, email: email, id: loanId } = req.params;
    const user = await User.findOne({ _id: userId, email: email }).select("loanInquiries").populate("loanInquiries")
    if (!user) {
        throw new NotFoundError(`No user found with USER_ID:${userId}`)
    }
    console.log(loanId);
    const loanInquiries = user.loanInquiries
    let loanDetails = {}
    const loan = loanInquiries.map((loanInquiry) => {
        console.log(loanInquiry._id.toString());
        if (loanInquiry._id.toString() === loanId) {
            console.log("here");
            loanDetails = {
                loan_amount: loanInquiry.loanAmount,
                loan_type: loanInquiry.loanType,
                emp_status: loanInquiry.empStatus,
                firm_address: loanInquiry.firmAddress,
                buisness_name: loanInquiry.businessName,
                application_date: loanInquiry.applicationDate.toDateString(),
                application_status: loanInquiry.applicationStatus
            }
        }
    })
    await Promise.all(loan)
    res.status(StatusCodes.OK).json(loanDetails)
}

const createProxyUser = async (req, res) => {
    const proxyUser = await ProxyUser.create(req.body)
    console.log(proxyUser);
    // const otp = await generateOtp()
    const token = crypto.randomBytes(32).toString("hex")
    proxyUser.otpToken = crypto.createHash("sha256").update(token).digest("hex")
    proxyUser.otpExp = Date.now() + 1000 * 60 * 60 * 24 * 2
    await proxyUser.save()
    console.log("done");
    const url = `<p> Hello ${proxyUser.first_name} ${proxyUser.last_name}, your inquiry has been registered with us. Please follow thw bellow link to fill few details and verify yourself to start your account<p><br></br>
    <h2><a href='http://localhost:3000/user/verify/${proxyUser.otpToken}'>Click here</a></h2><br></br><p>Please note that this link is valid for only 2 days</p>`
    const data = {
        to: proxyUser.email,
        subject: 'Account verification',
        text: 'Hello user',
        html: url
    }
    sendEmail(data)
    res.status(StatusCodes.CREATED).json({ msg: "User successfully registered" })
}

const checkVerficationDetails = async (req, res) => {
    const { email,mobile,dob } = req.body;
    const {userToken} = req.params
    const proxyUser = await ProxyUser.findOne({email: email,mobile:mobile,dob:dob, otpExp: { $gt: Date.now() }, otpToken: userToken})
    if (!proxyUser) {
        throw new NotFoundError('Invalid Information')
    }
    const pUser = await ProxyUser.findOne({ email: proxyUser.email, mobile: proxyUser.mobile })
    const u = {
        salutation: pUser.salutation,
        first_name: pUser.first_name,
        middle_name: pUser.middle_name,
        last_name: pUser.last_name,
        gender: pUser.gender,
        dob: pUser.dob,
        address: pUser.address,
        pin: pUser.pin,
        city: pUser.city,
        state: pUser.state,
        country: pUser.country,
        email: pUser.email,
        mobile: pUser.mobile,
        role: pUser.role,
        loanInquiries: pUser.loanInquiries,
    }
    console.log(">>",u);
    const user = await User.create(u)
    const document = await UserDocuments.create({})
    user.userDocuments = document._id
    await user.save()
    const token = await user.createJWT()
    res.cookie("Token", token, {
        httpOnly: true,
        expires: new Date(Date.now()+1000*60*3)
    })
    res.status(StatusCodes.OK).json({msg:'Success'})
}

const getLoanDocumentDetails = async (req, res) => {
    const { userId: userId, email: email, id: loanId } = req.params;
    const user = await User.findOne({ _id: userId, email: email }).select("userDocuments")
    if (!user) {
        throw new NotFoundError(`No user found with USER_ID:${userId}`)
    }
    const loanDetails = await Loan.findOne({ _id: loanId })
    const loanType = loanDetails.loanType;
    console.log(loanType);
    const documents = await UserDocuments.findOne({_id:user.userDocuments.toString()},{_id:0})
    console.log(documents);
    let requiredDocuments = []

    function doc() {
        for (key in documents) {
            if (loanType === 'Business') {
                if (key === 'document_photoID' || key === 'document_addressProof' || key === 'document_bankStatement' || key === 'document_ITR' || key === 'document_incomeProof' || key === 'document_loans_debts' || key === 'document_accounts' || key === 'document_COI' || key === 'document_GST' || key === 'document_cashFlow' || key === 'document_cancelledCheque') {
                    let update = {
                        document_type: key,
                        document_verification: documents[key].file_verification,
                        document_status: documents[key].file_status
                    }
                    requiredDocuments.push(update)
                }
            }else if (loanType === 'Education') {
                if (key === 'document_photoID' || key === 'document_addressProof' || key === 'document_bankStatement' || key === 'document_ITR' || key === 'document_incomeProof' || key === 'document_loans_debts' || key === 'document_accounts' || key === 'document_proofOfAdmission' || key === 'document_marksheet' || key === 'document_marksheet') {
                    let update = {
                        document_type: key,
                        document_verification: documents[key].file_verification,
                        document_status: documents[key].file_status
                    }
                    requiredDocuments.push(update)
                }
            }else if (loanType === 'Home') {
                if (key === 'document_photoID' || key === 'document_addressProof' || key === 'document_bankStatement' || key === 'document_ITR' || key === 'document_incomeProof' || key === 'document_loans_debts' || key === 'document_accounts' || key === 'document_COI' || key === 'document_employmentLetter' || key === 'document_salarySlip' || key === 'document_form16' || key === 'document_propertyDoc' || key === 'document_officeAddressProof' || key === 'document_officeOwnershipProof') {
                    let update = {
                        document_type: key,
                        document_verification: documents[key].file_verification,
                        document_status: documents[key].file_status
                    }
                    requiredDocuments.push(update)
                }
            }else if (loanType === 'Personal') {
                if (key === 'document_photoID' || key === 'document_addressProof' || key === 'document_bankStatement' || key === 'document_ITR' || key === 'document_incomeProof' || key === 'document_loans_debts' || key === 'document_accounts' || key === 'document_jobContinuityProof' || key === 'document_form16' || key === 'document_salarySlip') {
                    let update = {
                        document_type: key,
                        document_verification: documents[key].file_verification,
                        document_status: documents[key].file_status
                    }
                    requiredDocuments.push(update)
                }
            }
        }
    }
    await doc()
    res.status(StatusCodes.OK).json(requiredDocuments)
}

const getLoanDocumentLink = async (req, res) => {
    const { userId: userId, email: email,doc:doc } = req.params;
    const user = await User.findOne({ _id: userId, email: email }).select("userDocuments")
    if (!user) {
        throw new NotFoundError(`No user found with USER_ID:${userId}`)
    }
    const documents = await UserDocuments.findOne({ _id: user.userDocuments.toString() }, { _id: 0 })
    const url = documents[doc].file_location
    if (!url) throw new NotFoundError('No documents found')
    res.status(StatusCodes.OK).send(url)
}

const setLoanDocumentVerify = async (req, res) => {
    const { decision } = req.body
    console.log(decision);
    const { userId: userId, email: email,doc:doc } = req.params;
    const user = await User.findOne({ _id: userId, email: email }).select("userDocuments")
    if (!user) {
        throw new NotFoundError(`No user found with USER_ID:${userId}`)
    }
    const documents = await UserDocuments.findOne({ _id: user.userDocuments.toString() }, { _id: 0 })
    let updateDoc = ''
    let details = documents[doc]
    async function docf() {
        if (documents[doc].file_location) {
            if (decision === 'Approve') {
                details.file_verification = 'Verified'
                updateDoc = await UserDocuments.findOneAndUpdate({ _id: user.userDocuments.toString() }, {
                    [doc]: details
                }, {
                    new: true,
                runValidators:true})
            }
            else if (decision === 'Reject') {
                details.file_verification = 'Unverified'
                details.file_name = '',
                details.file_location = '',
                details.file_status = 'Pending'    
                updateDoc = await UserDocuments.findOneAndUpdate({ _id: user.userDocuments.toString() }, {
                    [doc]: details
                }, {
                    new: true,
                runValidators:true})
            }
        } else {
            throw new NotFoundError('No document uploaded')
        }
    }
    await docf()
    res.status(StatusCodes.OK).send("true")
}

const setDocumentStatus = async (req, res) => {
    const { userId: userId, email: email, loanId: loanId } = req.params;
    const user = await User.findOne({ _id: userId, email: email }).select("userDocuments")
    if (!user) {
        throw new NotFoundError(`No user found with USER_ID:${userId}`)
    }
    const loanDetails = await Loan.findOne({ _id: loanId })
    const loanType = loanDetails.loanType;
    const documents = await UserDocuments.findOne({_id:user.userDocuments.toString()},{_id:0})
    let requiredDocuments = []
    function doc() {
        for (key in documents) {
            if (loanType === 'Business') {
                if (key === 'document_photoID' || key === 'document_addressProof' || key === 'document_bankStatement' || key === 'document_ITR' || key === 'document_incomeProof' || key === 'document_loans_debts' || key === 'document_accounts' || key === 'document_COI' || key === 'document_GST' || key === 'document_cashFlow' || key === 'document_cancelledCheque') {
                    if (documents[key].file_location === undefined || '') {
                        requiredDocuments.push(key)
                    }
                    
                }
            }else if (loanType === 'Education') {
                if (key === 'document_photoID' || key === 'document_addressProof' || key === 'document_bankStatement' || key === 'document_ITR' || key === 'document_incomeProof' || key === 'document_loans_debts' || key === 'document_accounts' || key === 'document_proofOfAdmission' || key === 'document_marksheet' || key === 'document_marksheet') {
                    // let update = {
                    //     document_type: key,
                    //     document_verification: documents[key].file_verification,
                    //     document_status: documents[key].file_status
                    // }
                    // requiredDocuments.push(update)
                    if (documents[key].file_location === '') {
                        requiredDocuments.push(key)
                    }
                }
            }else if (loanType === 'Home') {
                if (key === 'document_photoID' || key === 'document_addressProof' || key === 'document_bankStatement' || key === 'document_ITR' || key === 'document_incomeProof' || key === 'document_loans_debts' || key === 'document_accounts' || key === 'document_COI' || key === 'document_employmentLetter' || key === 'document_salarySlip' || key === 'document_form16' || key === 'document_propertyDoc' || key === 'document_officeAddressProof' || key === 'document_officeOwnershipProof') {
                    // let update = {
                    //     document_type: key,
                    //     document_verification: documents[key].file_verification,
                    //     document_status: documents[key].file_status
                    // }
                    // requiredDocuments.push(update)
                    if (documents[key].file_location === '') {
                        requiredDocuments.push(key)
                    }
                }
            }else if (loanType === 'Personal') {
                if (key === 'document_photoID' || key === 'document_addressProof' || key === 'document_bankStatement' || key === 'document_ITR' || key === 'document_incomeProof' || key === 'document_loans_debts' || key === 'document_accounts' || key === 'document_jobContinuityProof' || key === 'document_form16' || key === 'document_salarySlip') {
                    // let update = {
                    //     document_type: key,
                    //     document_verification: documents[key].file_verification,
                    //     document_status: documents[key].file_status
                    // }
                    // requiredDocuments.push(update)
                    if (documents[key].file_location === '') {
                        requiredDocuments.push(key)
                    }
                }
            }
        }
    }
    const printList = () =>{
        return `<li>Hello</li>`
    }
    await doc()
    const url = `<p> Hello ${user.first_name} ${user.last_name},<br></br>To complete your ${loanType} loan with id: '${loanId}' <br></br> please provide the following documents <br></br> ${requiredDocuments}</p>`
    // const url = "hello"
    const data = {
        to: email,
        subject: 'Account verification',
        text: 'Hello user',
        html: url
    }
    sendEmail(data)
    res.status(StatusCodes.OK).json({msg:"Mail sent"})
}

const setLoanStatus = async (req, res) => {
    const { userId: userId, email: email, loanId: loanId } = req.params;
    const {decision} = req.body
    const user = await User.findOne({ _id: userId, email: email }).select("userDocuments")
    if (!user) {
        throw new NotFoundError(`No user found with USER_ID:${userId}`)
    }
    const loanDetails = await Loan.findOne({ _id: loanId })
    loanDetails.applicationStatus = decision
    await loanDetails.save()
    res.status(StatusCodes.OK).json({msg:"Status Updated"})
}

module.exports = {getAllUserDetails,getUserDetails,getUserLoanInquiries,getLoanInquiryDetails,createProxyUser,checkVerficationDetails,getLoanDocumentDetails,getLoanDocumentLink,setLoanDocumentVerify,setDocumentStatus,setLoanStatus}
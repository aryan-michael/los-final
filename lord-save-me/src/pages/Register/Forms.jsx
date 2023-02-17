import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import LoanDetails from "./LoanDetails";
import { useNavigate } from 'react-router-dom';
import { Alert, Button } from "react-bootstrap";

function validatePinCode(value) {
    let status = true
    let error = ''
    if (value.length > 6 || value === '') {
        status = false
        error = 'Pincode: Should be exactly 6 digits'
    }
    if (isNaN(value) && typeof value !== "undefined") {
        status = false
        error = 'Pincode: Number expected'
    }

    return {
        status,
        value,
        error
    }
}
function validateName(value) {
    let error = ''
    let status = true
    for (let letter of value) {
        if (!isNaN(letter)) {
            error = "Name: Letter expected"
            status = false
            break
        }
    }
    return {
        status,
        value: value.toLocaleUpperCase(),
        error
    }
}
function validateMobile(value) {
    let error = ''
    let status = true
    if (value.length > 10 || value.length === '') {
        status = false
        error = 'Mobile: Cannot be empty or accept more than 10 digits'
    }
    for (let number of value) {
        if (isNaN(number)) {
            error = "Mobile: Number expected"
            status = false
            break
        }
    }
    return {
        status,
        value,
        error
    }
}

// function validateEmail(value) {
//     let error = ''
//     let status = true
//     if (!value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
//         status = false
//         error = 'Email: Please enter a valid email'
//     }
//     return {
//         status,
//         value,
//         error
//     }
// }

const fieldValidations = {
    pin: validatePinCode,
    first_name: validateName,
    middle_name: validateName,
    last_name: validateName,
    mobile: validateMobile,
    //email: validateEmail
}

function Forms({ loan_type, country }) {
    const [page, setPage] = useState(0);
    const [error, setError] = useState('');
    const [personalDetails, setPersonalDetails] = useState({
        //personal details
        salutation: '',
        first_name: '',
        middle_name: '',
        last_name: '',
        gender: '',
        dob: '',
        mobile: '',
        email: '',
        address: '',
        pin: '',
        city: '',
        state: '',
        country: country,
    });
    const [loanDetails, setLoanDetails] = useState({
        loanAmount: '',
        loanType: loan_type, //display | not input
        empStatus: '', //professional | business
        firmAddress: '',
        businessName: ''
    })  //loan details




    const handlePersonalDetails = (e) => {
        const targetName = e.target.name
        let valid = { status: true, value: e.target.value }

        const validateFn = fieldValidations[targetName]
        if (typeof validateFn === "function") {
            valid = validateFn(valid.value) // boolean value
            //console.log(valid)
        }
        if (!valid.status) {
            setError(valid.error)
            return
        } else {
            setError('')
        }

        // if (name === "pin" && (value.length > 6 || isNaN(value))) {
        //     console.log("invalid")
        //     return;
        // }
        // else if (name === "firstname") {
        //     value = value.toUpperCase();
        // }
        let x = { ...personalDetails };
        x[targetName] = valid.value;
        setPersonalDetails(x);
    };

    const handleLoanDetails = (e) => {
        const targetName = e.target.name
        let valid = { status: true, value: e.target.value }

        const validateFn = fieldValidations[targetName]
        if (typeof validateFn === "function") {
            valid = validateFn(valid.value) // boolean value
            //console.log(valid)
        }
        if (!valid.status) {
            setError(valid.error)
            return
        } else {
            setError('')
        }

        // if (name === "pin" && (value.length > 6 || isNaN(value))) {
        //     console.log("invalid")
        //     return;
        // }
        // else if (name === "firstname") {
        //     value = value.toUpperCase();
        // }
        let x = { ...loanDetails };
        x[targetName] = valid.value;
        setLoanDetails(x);
    };

    const Navigate = useNavigate();
    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
        console.log("button working!")
        e.preventDefault();

        for (let x in personalDetails) {
            if (personalDetails[x] === '') {
                console.log("hello");
                break
                //return false;
            }
            else {
                return true;
            }
        }

        for (let x in loanDetails) {
            if (loanDetails[x] === '') {
                console.log("hi");
                break
                //return false;
            }
            else {
                return true;
            }
        }

        if (page === FormTitles.length - 1) {
            //alert("An Email has been sent for verification");
            console.log(personalDetails);
            console.log(loanDetails);
            Navigate('/otp');
        } else {
            setPage((currentPage) => currentPage + 1);
        }

    };

    const FormTitles = ["Personal Details", "Loan Details"];

    const pageDisplay = () => {
        if (page === 0) {
            return <PersonalDetails personalDetails={personalDetails} setPersonalDetails={handlePersonalDetails} />;
        } else {
            return <LoanDetails loanDetails={loanDetails} setLoanDetails={handleLoanDetails} />;
        }
    };
    return (
        <div className="form">
            <div className="progressbar">
                <div style={{ width: page === 0 ? "50%" : "100%" }} />
            </div>
            <div className="form-container">
                <Alert>{error}</Alert>
                <div className="header text-center">
                    <h1>{FormTitles[page]}</h1>
                </div>
                <div className="body">{pageDisplay()}</div>
                <div className="footer text-center">
                    <button
                        type="button"
                        //onClick={submitButton} 
                        className="me-4 btn btn-danger btn-lg"
                        disabled={page === 0}
                        onClick={() => {
                            setPage((currentPage) => currentPage - 1);
                        }}
                    >Previous</button>

                    <Button
                        type="submit"
                        className="me-4 btn btn-success btn-lg"
                        //  disabled={!validated}
                        onClick={handleSubmit}
                    >
                        {page === FormTitles.length - 1 ? "Submit" : "Next"}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Forms;


// PAN number validation

// function validatePAN(value) {
//     let status = true
//     let error = ''
//     if (value.length > 10) {
//         status = false
//         error = 'Pincode: can not accept more than 10.'
//     }
//     if (isNaN(value[5]) && typeof value[5] !== "undefined") {
//         status = false
//         error = 'Pincode: number expected'
//     }

//     if (value[9] && !isNaN(value[9])) {
//         status = false
//         error = 'Pincode: letter expected'
//     }

//     return {
//         status,
//         value: value.toLocaleUpperCase(),
//         error
//     }
// }
import React, { useState,useContext,createContext } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import "./personalDetails.css"

export let id;

const PersonalDetails = ({setpersonalId}) => {

    const navigate = useNavigate()
    const [personalDetails, setpersonalDetails] = useState({
        salutation:"",
        firstname: "",
        middlename: "",
        lastname: "",
        gender: "",
        dob: "",
        loanAmount: "",
        empStatus: "",
        firmName: "",
        address: "",
        pincode: "",
        city: "",
        district: "",
        state: "",
        country:"",
        loanType:""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setpersonalDetails({
            ...personalDetails,
            [name]: value
        }) 

        console.log(personalDetails)
    }

    const registerPersonalDetails = () => {
        axios.post("http://localhost:5000/api/v1/personal-detail/create", personalDetails).then(response => {
            console.log(response)
            // setpersonalId(response.data.id);
            id = response.data.id;
            console.log(id)
            alert(response.data.msg)
            navigate("/signup")
        })
    }

    return (
        <div className="personalDetails">
            <h1>Personal details</h1>
            <input type="text" name="salutation" value={personalDetails.salutation} placeholder="Enter salutation" onChange={handleChange} />
            <input type="text" name="firstname" value={personalDetails.firstname} placeholder="Enter your first name" onChange={handleChange} />
            <input type="text" name="middlename" value={personalDetails.middlename} placeholder="Enter your middle name" onChange={handleChange} />
            <input type="text" name="lastname" value={personalDetails.lastname} placeholder="Enter your last name" onChange={handleChange} />
            <input type="text" name="gender" value={personalDetails.gender} placeholder="Enter your gender" onChange={handleChange} />
            <input type="date" name="dob" value={personalDetails.dob} placeholder="Enter your Date of birth" onChange={handleChange} />
            <input type="number" name="loanAmount" value={personalDetails.loanAmount} placeholder="Enter your loan amount" onChange={handleChange} />
            <input type="text" name="empStatus" value={personalDetails.empStatus} placeholder="Enter your emp status" onChange={handleChange} />
            <input type="text" name="firmName" value={personalDetails.firmName} placeholder="Enter your firm name" onChange={handleChange} />
            <input type="text" name="address" value={personalDetails.address} placeholder="Enter your address" onChange={handleChange} />
            <input type="number" name="pincode" value={personalDetails.pincode} placeholder="Enter pincode" onChange={handleChange} />
            <input type="text" name="city" value={personalDetails.city} placeholder="Enter your city" onChange={handleChange} />
            <input type="text" name="district" value={personalDetails.district} placeholder="Enter your district" onChange={handleChange} />
            <input type="text" name="state" value={personalDetails.state} placeholder="Enter your state" onChange={handleChange} />
            <input type="text" name="country" value={personalDetails.country} placeholder="Enter your country" onChange={handleChange} />
            <input type="text" name="loanType" value={personalDetails.loanType} placeholder="Enter your loan type" onChange={handleChange} />
            <div className="button" onClick={registerPersonalDetails} >Next</div>
            <div>or</div>
            <div className="button" onClick={()=>navigate('/login')} >Login</div>
            {/* <div className="button" onClick={()=>navigate('/signup')} >Next</div> */}
        </div>
    )
}

export default PersonalDetails;
import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import LoanDetails from "./LoanDetails";
import axios from "axios"
import {  decString, encJsonData } from "../middleware/encDecMiddleware";

export let userToken

function Forms({ loan_type }) {
    const [page, setPage] = useState(0);
    const [fullDetails, setFullDetails] = useState({
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
        pincode: '',
        city: '',
        state: '',
        country: '',
        //loan details
        loanAmount: '',
        loanType: loan_type, //display | not input
        empStatus: '', //professional | business
        firmAddress: '',
        businessName: ''

    });

    const handleChange = (e) => {
        const el = e.target;
        let x = { ...fullDetails };
        x[el.name] = el.value;
        setFullDetails(x);
    };

    const PrintData = async (e) => {

        e.preventDefault();
        if (page === FormTitles.length - 1) {
            //alert("An Email has been sent for verification");
            const encUserDetails = { enc : encJsonData(fullDetails) }
            try {
                await axios.post("http://localhost:5000/api/v1/user/signup", encUserDetails)
                    .then(response => {
                        userToken = decString(response.data.encToken)
                        // alert(response.data.msg)
                        alert("An email has been sent for verfication")
                    })
            } catch (err) {
                if (err.response) {
                    alert(err.response.data.msg)
                }else{
                    alert("Something went wrong")
                }
            }
        } else {
            setPage((currentPage) => currentPage + 1);
        }
    };

    const FormTitles = ["Personal Details", "Loan Details"];

    const PageDisplay = () => {
        if (page === 0) {
            return <PersonalDetails fullDetails={fullDetails} setFullDetails={handleChange} />;
        } else {
            return <LoanDetails fullDetails={fullDetails} setFullDetails={handleChange} />;
        }
    };

    return (
        <div className="form">
            <div className="progressbar">
                <div style={{ width: page === 0 ? "50%" : "100%" }} />
            </div>
            <div className="form-container">
                <div className="header">
                    <h1>{FormTitles[page]}</h1>
                </div>
                <div className="body">{PageDisplay()}</div>
                <div className="footer">
                    <button
                        type="submit"
                        //onClick={submitButton} 
                        className="me-4 btn btn-danger btn-lg btn-block"
                        disabled={page === 0}
                        onClick={() => {
                            setPage((currentPage) => currentPage - 1);
                        }}
                    >Previous</button>

                    <button
                        type="submit"
                        className="me-4 btn btn-success btn-lg btn-block"
                        onClick={PrintData}
                    >
                        {page === FormTitles.length - 1 ? "Submit" : "Next"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Forms;
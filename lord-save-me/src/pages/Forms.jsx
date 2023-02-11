import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import LoanDetails from "./LoanDetails";


function Forms() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
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
        country: '',
        //loan details
        loanAmount: '',
        loanType: '', //display | not input
        empStatus: '', //professional | business
        firmAddress: '',
        businessName: ''

    });

    const FormTitles = ["Personal Details", "Loan Details"];

    const PageDisplay = () => {
        if (page === 0) {
            return <PersonalDetails formData={formData} setFormData={setFormData} />;
        } else {
            return <LoanDetails formData={formData} setFormData={setFormData} />;
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
                        onClick={() => {
                            if (page === FormTitles.length - 1) {
                                alert("An Email has been sent for verification");
                                console.log(formData);
                            } else {
                                setPage((currentPage) => currentPage + 1);
                            }
                        }}
                    >
                        {page === FormTitles.length - 1 ? "Submit" : "Next"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Forms;
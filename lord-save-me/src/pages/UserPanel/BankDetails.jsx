import React, { useState } from "react";
import SideBar from "../../components/Sidebar/SideBar";
import PostLoginNavBar from "../../components/NavBar/PostLoginNavBar";
import { Alert, Form, Row, Button } from 'react-bootstrap';

function validateAccountNumber(value) {
    let error = ''
    let status = true
    if (value.length > 14 || value.length === '') {
        status = false
        error = 'Account Number: Cannot be empty or accept more than 14 digits'
    }
    for (let number of value) {
        if (isNaN(number)) {
            error = "Account Number: Number expected"
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

function validateCardNumber(value) {
    let error = ''
    let status = true
    if (value.length > 12 || value.length === '') {
        status = false
        error = 'Card Number: Cannot be empty or accept more than 12 digits'
    }
    for (let number of value) {
        if (isNaN(number)) {
            error = "Card Number: Number expected"
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

function validateCVV(value) {
    let error = ''
    let status = true
    if (value.length > 3 || value.length === '') {
        status = false
        error = 'CVV: Cannot be empty or accept more than 3 digits'
    }
    for (let number of value) {
        if (isNaN(number)) {
            error = "CVV: Number expected"
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

function validateCardHolder(value) {
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

function validateExpiryDate(value) {
    let error = ''
    let status = true
    var expiry_date = new Date(value)
    var diff_ms = Date.now() - expiry_date.getTime();
    var age_dt = new Date(diff_ms);
    const age = Math.abs(age_dt.getUTCFullYear() - 1970);
    if (age < 0) {
        error = "Expiry Date: Invalid"
    }
    return {
        value,
        error,
        status
    }
}

const fieldValidations = {
    account_number: validateAccountNumber,
    card_number: validateCardNumber,
    cvv: validateCVV,
    cardholder: validateCardHolder,
    expiry_date: validateExpiryDate
}


const BankDetails = () => {

    const [error, setError] = useState({
        account_number: '',
        card_number: '',
        cvv: '',
        cardholder: '',
        expiry_date: '',
    });

    const [bankDetails, setBankDetails] = useState({
        account_number: '',
        card_number: '',
        cvv: '',
        cardholder: '',
        expiry_date: '',
    });

    const handleBankDetails = (e) => {
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

        let x = { ...bankDetails };
        x[targetName] = valid.value;
        setBankDetails(x);
    };

    const handleSubmit = (e) => {
        console.log("button working!")
        e.preventDefault();

        let isFormEmpty = false;

        for (let x in bankDetails) {
            if (bankDetails[x] === '') {
                console.log("bank details", x, bankDetails[x]);
                isFormEmpty = true;

                break
                //return false;
            }

        }

        if (isFormEmpty === false) {
            //alert("An OTP has been sent for verification");
            console.log(bankDetails);
        }

    };


    return (
        <>
            <PostLoginNavBar />
            <div style={{ display: 'flex' }}>
                <SideBar />
                <Form bankDetails={bankDetails} setBankDetails={handleBankDetails} error={error} className="container mt-3 mb-3" autoComplete='off'>
                    <Row className="mb-3">
                        {/* <Alert>{error}</Alert> */}
                        <div className="title"> Bank Details </div>
                    </Row>

                    <Row className="mb-3">
                        {/* BANK ACCOUNT NUMBER */}
                        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                            <Form.Label>Bank Account Number</Form.Label>
                            <Form.Control type="number" name="account_number" className="form-control" value={bankDetails.account_number} onChange={setBankDetails} required />
                            <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type='invalid'>Please provide your 14 digit bank account number</Form.Control.Feedback>
                        </Form.Group>

                        {/* OTP */}
                        <Form.Group controlId="formGridpin" className="col col-sm-3">
                            <Form.Label>Enter OTP</Form.Label>
                            <Form.Control className="form-control" type="text" name="bank_otp" value={bankDetails.bank_otp} onChange={setBankDetails} required />
                        </Form.Group>
                        <Form.Group controlId="formGridCheckbox" className="col col-sm-2">
                            <Button type="submit" className="me-4 mt-4 btn-xs">Check OTP</Button>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        {/* CREDIT/DEBIT CARD INFO */}
                        <Form.Group controlId="formBasicEmail" className="col col-sm-4">
                            <Form.Label>Credit / Debit Card Number</Form.Label>
                            <Form.Control type="number" name="card_number" className="form-control" value={bankDetails.card_number} onChange={setBankDetails} required />
                            <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type='invalid'>Please provide your credit/debit card number</Form.Control.Feedback>
                        </Form.Group>
                        {/* CVV */}
                        <Form.Group controlId="formBasicEmail" className="col col-sm-1">
                            <Form.Label>CVV</Form.Label>
                            <Form.Control type="password" name="cvv" className="form-control" value={bankDetails.cvv} onChange={setBankDetails} required />
                            <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type='invalid'>Please enter your cvv</Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        {/* CARD HOLDER"S NAME*/}
                        <Form.Group controlId="formGridpin" className="col col-sm-3">
                            <Form.Label>Card Holder's Name</Form.Label>
                            <Form.Control className="form-control" type="text" name="cardholder" value={bankDetails.cardholder} onChange={setBankDetails} required />
                            <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type='invalid'>Please provide the name on the card</Form.Control.Feedback>
                        </Form.Group>
                        {/* CARD EXPIRY DATE */}
                        <Form.Group controlId="formGridpin" className="col col-sm-2">
                            <Form.Label>Expiry Date</Form.Label>
                            <Form.Control className="form-control" type="date" name="expiry_date" value={bankDetails.expiry_date} onChange={setBankDetails} required />
                            <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type='invalid'>Please provide the expiry date of your card</Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    {/* SUBMIT BUTTON */}
                    <Row className="mb-3">
                        <Form.Group controlId="formGridCheckbox" className="col col-sm-2 text-center">
                            <Button type="submit" className="me-4 btn btn-success btn-xs btn-block" onClick={handleSubmit}>
                                Submit</Button>
                        </Form.Group>
                    </Row>
                </Form>
            </div>
        </>
    );
}

export default BankDetails

// 1. bank account number >> check button
// 2. credit/debit card number >> check button
// 3. cvv >> check button
// 4. expiry date >> check button
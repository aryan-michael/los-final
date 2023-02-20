import React from 'react';
import { Form, Row, InputGroup } from 'react-bootstrap';

const LoanDetails = ({ loanDetails, setLoanDetails,loanValidated,error }) => {

    return (
        <>
            <Form className="container mt-3 mb-3" autoComplete='off' validated={loanValidated} hasValidation>
                <Row className="mb-3">
                    {/* LOAN AMOUNT */}
                    <Form.Group controlId="formBasicNumber" className="col col-sm-6">
                        <Form.Label>Desired Loan Amount</Form.Label>
                        <InputGroup>
                            <InputGroup.Text id="basic-addon1">₹</InputGroup.Text>
                            <Form.Control aria-label="Loan Amount" type="number" aria-describedby="basic-addon1" className="form-control" name="loanAmount" value={loanDetails.loanAmount} onChange={setLoanDetails} required />
                        <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type='invalid'>Please provide loan amount.</Form.Control.Feedback>
                            <Form.Control.Feedback style={{ display: error.loanAmount ? 'block' : 'none' }} type='invalid'>{error.loanAmount}</Form.Control.Feedback>    
                        </InputGroup>   
                    </Form.Group>
                    {/* LOAN TYPE : ONLY DISPLAY */}
                    <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                        <Form.Label>Loan Type</Form.Label>
                        <Form.Control type="text" name="loanType" value={loanDetails.loanType} readOnly />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    {/* EMPLOYMENT STATUS */}
                    <Form.Group controlId="formGridState" className="col col-sm-3">
                        <Form.Label>Employment Status</Form.Label>
                        <Form.Select className="form-control" name="empStatus" value={loanDetails.empStatus} onChange={setLoanDetails} required>
                            <option defaultValue value=''>Choose...</option>
                            <option value="business">Business Owner</option>
                            <option value="professional">Professional</option>
                            <option value="salaried_employee">Salaried Employee</option>
                        </Form.Select>
                        <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type='invalid'>Please provide loan amount.</Form.Control.Feedback>
                    </Form.Group>
                    {/* BUSINESS NAME */}
                    <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                        <Form.Label>Firm Name / Business Name</Form.Label>
                        <Form.Control type="name" name="businessName" value={loanDetails.businessName} onChange={setLoanDetails} className="form-control" required />
                        <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type='invalid'>Please provide loan amount.</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    {/* FIRM/BUSINESS ADDRESS*/}
                    <Form.Group className=" col col-sm-6" controlId="formGridAddress1">
                        <Form.Label>Firm Address / Business Address</Form.Label>
                        <Form.Control className="form-control" type="text" name="firmAddress" value={loanDetails.firmAddress} onChange={setLoanDetails} required />
                        <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type='invalid'>Please provide loan amount.</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                {/* <Row className="mb-3">
                    <Form.Group controlId="formGridCheckbox" className="col col-sm-6">
                        <Button type="submit" onClick={submitButton} className="me-4 btn btn-success btn-lg btn-block">Submit</Button>
                        <Button type="reset" onClick="{resetButton} "className="me-4 btn btn-danger btn-lg btn-block">Reset</Button>
                    </Form.Group>
                </Row> */}
            </Form>
        </>
    );
}

export default LoanDetails;
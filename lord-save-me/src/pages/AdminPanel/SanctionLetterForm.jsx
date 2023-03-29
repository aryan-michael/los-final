import { Container, Form, Row, InputGroup, Button } from 'react-bootstrap';
import { MDBBadge } from "mdb-react-ui-kit";
import PostLoginNavBar from "../../components/NavBar/PostLoginNavBar";
import AdminSideBar from "../../components/Sidebar/AdminSideBar";

const SanctionLetterForm = () => {

    return (
        <>
            <PostLoginNavBar />
            <div style={{ display: 'flex' }}>
                <AdminSideBar />

                <Container fluid="sm" className="mt-3 mb-3">
                    <div className="p-2 title"><MDBBadge pill color='secondary' light>SANCTION LETTER FORM</MDBBadge></div>
                    <div className="p-2"></div>

                    <Row className="mb-3">

                        {/* LOAN ID */}
                        <Form.Group controlId="formBasicEmail" className="col col-sm-4">
                            <Form.Label><MDBBadge pill color='secondary' light>LOAN ID</MDBBadge></Form.Label>
                            <Form.Control type="name" name="loan_id" className="form-control" readOnly />
                        </Form.Group>

                        {/* LOAN AMOUNT */}
                        <Form.Group controlId="formGridpin" className="col col-sm-5">
                            <Form.Label><MDBBadge pill color='secondary' light>LOAN AMOUNT SANCTIONED</MDBBadge></Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="basic-addon1">₹</InputGroup.Text>
                                <Form.Control aria-label="loan amount" type="number" aria-describedby="basic-addon1" className="form-control" name="loan_amount" readOnly />
                            </InputGroup>
                        </Form.Group>

                        {/* SANCTION DATE */}
                        <Form.Group controlId="formGridpin" className="col col-sm-3">
                            <Form.Label><MDBBadge pill color='secondary' light>SANCTION DATE</MDBBadge></Form.Label>
                            <Form.Control className="form-control" type="date" name="sanction_date" readOnly />
                        </Form.Group>

                    </Row>

                    <Row className="mb-3">
                        {/* APPLICANT NAME */}
                        <Form.Group controlId="formGridpin" className="col col-sm-6">
                            <Form.Label><MDBBadge pill color='secondary' light>APPLICANT'S NAME</MDBBadge></Form.Label>
                            <Form.Control className="form-control" type="name" name="name" readOnly />
                        </Form.Group>

                        {/* MOBILE */}
                        <Form.Group controlId="formBasicMobile" className="col col-sm-6">
                            <Form.Label><MDBBadge pill color='secondary' light>APPLICANT'S MOBILE NUMBER</MDBBadge></Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
                                <Form.Control aria-label="Mobile Number" type="mobile" aria-describedby="basic-addon1" className="form-control" name="mobile" readOnly />
                            </InputGroup>
                        </Form.Group>

                    </Row>

                    <Row className="mb-3">

                        {/* APPLICANT'S EMAIL */}
                        <Form.Group controlId="formBasicEmail" className="col col-sm-8">
                            <Form.Label><MDBBadge pill color='secondary' light>APPLICANT'S EMAIL</MDBBadge></Form.Label>
                            <Form.Control type="name" name="email" className="form-control" readOnly />
                        </Form.Group>

                        {/* LOAN TENOR */}
                        <Form.Group controlId="formBasicMobile" className="col col-sm-4">
                            <Form.Label><MDBBadge pill color='secondary' light>LOAN TENOR</MDBBadge></Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control aria-label="Loan Tenor" type="number" aria-describedby="basic-addon1" className="form-control" name="tenor" required />
                                <InputGroup.Text id="basic-addon1">years</InputGroup.Text>
                            </InputGroup>
                        </Form.Group>

                    </Row>

                    <Row className="mb-3">

                        {/* RATE OF INTEREST */}
                        <Form.Group className=" col col-sm-8" controlId="formGridAddress1">
                            <Form.Label><MDBBadge pill color='secondary' light>RATE OF INTEREST</MDBBadge></Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control aria-label="roi" type="number" aria-describedby="basic-addon1" className="form-control" name="roi" required />
                                <InputGroup.Text id="basic-addon1">%</InputGroup.Text>
                            </InputGroup>
                            <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type='invalid'>Please provide this information.</Form.Control.Feedback>
                        </Form.Group>

                        {/* TOTAL PROCESSING CHARGES */}
                        <Form.Group controlId="formGridpin" className="col col-sm-4">
                            <Form.Label><MDBBadge pill color='secondary' light>TOTAL PROCESSING CHARGES</MDBBadge></Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="basic-addon1">₹</InputGroup.Text>
                                <Form.Control aria-label="processing charges" type="number" aria-describedby="basic-addon1" className="form-control" name="processing" required />
                            </InputGroup>
                            <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type='invalid'>Please provide this information.</Form.Control.Feedback>
                        </Form.Group>

                    </Row>

                    <Row className="mb-3">

                        {/* ORIGINATION FEE (INCLUSIVE OF GST) */}
                        <Form.Group controlId="formGridCity" className="col col-sm-4">
                            <Form.Label><MDBBadge pill color='secondary' light>ORIGINATION FEE (INCLUSIVE OF GST)</MDBBadge></Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="basic-addon1">₹</InputGroup.Text>
                                <Form.Control aria-label="origination" type="number" aria-describedby="basic-addon1" className="form-control" name="origination" required />
                            </InputGroup>
                            <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type='invalid'>Please provide this information.</Form.Control.Feedback>
                        </Form.Group>

                        {/* SANCTION LETTER VALIDITY */}
                        <Form.Group controlId="formGridState" className="col col-sm-4">
                            <Form.Label><MDBBadge pill color='secondary' light>SANCTION LETTER VALIDITY</MDBBadge></Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control aria-label="validity" type="number" aria-describedby="basic-addon1" className="form-control" name="validity" required />
                                <InputGroup.Text id="basic-addon1">months</InputGroup.Text>
                            </InputGroup>
                            <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type='invalid'>Please provide this information.</Form.Control.Feedback>
                        </Form.Group>

                        {/* EMI (INR) */}
                        <Form.Group controlId="formGridpin" className="col col-sm-4">
                            <Form.Label><MDBBadge pill color='secondary' light>EMI</MDBBadge></Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="basic-addon1">₹</InputGroup.Text>
                                <Form.Control aria-label="emi (inr)" type="text" aria-describedby="basic-addon1" className="form-control" name="emi(inr)" required />
                            </InputGroup>
                        </Form.Group>

                    </Row>

                    <div className="p-2"></div>

                    <div className="footer text-center">
                        <Button type="submit" className="me-4 btn-secondary btn-lg">Submit</Button>
                    </div>

                </Container>

            </div>
        </>
    );
}

export default SanctionLetterForm

import { Form, Row, InputGroup } from 'react-bootstrap';
import PostLoginNavBar from '../../components/NavBar/PostLoginNavBar';
import SideBar from "../../components/Sidebar/SideBar";


const LoanInfo = () => {
    return (
        <>
            <PostLoginNavBar />
            <div style={{ display: 'flex' }}>
                <SideBar />
                <div>
                    <div className="title"> Loan Information </div>
                    <Form className="container mt-3 mb-3 loan" autoComplete='off'>
                        <Row className="mb-3">
                            {/* LOAN AMOUNT */}
                            <Form.Group controlId="formBasicNumber" className="col col-sm-6">
                                <Form.Label>Desired Loan Amount</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text id="basic-addon1">₹</InputGroup.Text>
                                    <Form.Control aria-label="Loan Amount" type="number" aria-describedby="basic-addon1" className="form-control" name="loanAmount" readOnly />
                                </InputGroup>
                            </Form.Group>
                            {/* LOAN TYPE : ONLY DISPLAY */}
                            <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                <Form.Label>Loan Type</Form.Label>
                                <Form.Control type="text" name="loanType" readOnly />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            {/* EMPLOYMENT STATUS */}
                            <Form.Group controlId="formGridState" className="col col-sm-5">
                                <Form.Label>Employment Status</Form.Label>
                                <Form.Select className="form-control" name="empStatus" readOnly >
                                    <option defaultValue value="Choose...">Choose...</option>
                                </Form.Select>
                            </Form.Group>
                            {/* BUSINESS NAME */}
                            <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                <Form.Label>Firm Name / Business Name</Form.Label>
                                <Form.Control type="name" name="businessName" className="form-control" readOnly />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            {/* FIRM/BUSINESS ADDRESS*/}
                            <Form.Group className=" col col-sm-6" controlId="formGridAddress1">
                                <Form.Label>Firm Address / Business Address</Form.Label>
                                <Form.Control className="form-control" type="text" name="firmAddress" readOnly />
                            </Form.Group>
                        </Row>

                    </Form>
                </div>
            </div>
        </>
    );
}

export default LoanInfo
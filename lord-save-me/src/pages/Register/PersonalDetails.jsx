import React from 'react';
import { Form, Row, InputGroup } from 'react-bootstrap';

const PersonalDetails = ({ personalDetails, setPersonalDetails,validated,error}) => {

    return (
        <>
            <Form className="container mt-3 mb-3" autoComplete='off' validated={validated} hasValidation  >
                <Row className="mb-3">
                    {/* SALUTATION */}
                    <Form.Group controlId="formGridState" className="col col-sm-4">
                        <Form.Label>Salutation</Form.Label>
                        <Form.Select className="form-control" name="salutation" value={personalDetails.salutation} onChange={setPersonalDetails} required >
                            <option defaultValue value=''>Choose...</option>
                            <option value="mr">Mr.</option>
                            <option value="mrs">Mrs.</option>
                            <option value="ms">Ms.</option>
                        </Form.Select>
                        <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type='invalid'>Please provide your salutation.</Form.Control.Feedback>
                    </Form.Group>
                    {/* FIRSTNAME */}
                    <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="name" name="first_name" value={personalDetails.first_name} onChange={setPersonalDetails} className="form-control" required />
                        <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type='invalid'>Please provide your first name.</Form.Control.Feedback>
                        <Form.Control.Feedback style={{ display: error.first_name ? 'block' : 'none' }} type='invalid'>{error.first_name}</Form.Control.Feedback>
                        {/* <p style={{ display: error.first_name ? 'block' : 'none' }}>{error.first_name}</p> */}
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    {/* MIDDLENAME */}
                    <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                        <Form.Label>Middle Name</Form.Label>
                        <Form.Control type="name" name="middle_name" value={personalDetails.middle_name} onChange={setPersonalDetails} className="form-control" required />
                        <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type='invalid'>Please provide your middle name.</Form.Control.Feedback>
                        <Form.Control.Feedback style={{ display: error.middle_name ? 'block' : 'none' }} type='invalid'>{error.middle_name}</Form.Control.Feedback>
                    </Form.Group>
                    {/* LASTNAME */}
                    <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="name" name="last_name" value={personalDetails.last_name} onChange={setPersonalDetails} className="form-control" required />
                        <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type='invalid'>Please provide your last name.</Form.Control.Feedback>
                        <Form.Control.Feedback style={{ display: error.last_name ? 'block' : 'none' }} type='invalid'>{error.last_name}</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    {/* GENDER */}
                    <Form.Group controlId="formGridState" className="col col-sm-3">
                        <Form.Label>Gender</Form.Label>
                        <Form.Select className="form-control" name="gender" value={personalDetails.gender} onChange={setPersonalDetails} required>
                            <option defaultValue value=''>Choose...</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </Form.Select>
                        <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type='invalid'>Please provide your gender.</Form.Control.Feedback>
                    </Form.Group>
                    {/* DOB */}
                    <Form.Group controlId="formGridpin" className="col col-sm-4">
                        <Form.Label>Date Of Birth</Form.Label>
                        <Form.Control className="form-control" type="date" name="dob" value={personalDetails.dob} onChange={setPersonalDetails} required />
                        <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type='invalid'>Please provide your DOB.</Form.Control.Feedback>
                        <Form.Control.Feedback style={{ display: error.dob ? 'block' : 'none' }} type='invalid'>{error.dob}</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    {/* MOBILE */}
                    <Form.Group controlId="formBasicMobile" className="col col-sm-6">
                        <Form.Label>Mobile Number</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
                            <Form.Control aria-label="Mobile Number" type="mobile" aria-describedby="basic-addon1" className="form-control" name="mobile" value={personalDetails.mobile} onChange={setPersonalDetails} required />
                            <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type='invalid'>Please provide your mobile number.</Form.Control.Feedback>
                            <Form.Control.Feedback style={{ display: error.mobile ? 'block' : 'none' }} type='invalid'>{error.mobile}</Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    {/* EMAIL */}
                    <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                        <Form.Label>Email</Form.Label>
                        <Form.Control aria-label="Recipient's username" type="email" name="email" value={personalDetails.email} onChange={setPersonalDetails} required />
                        <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type='invalid'>Please provide your email.</Form.Control.Feedback>
                        <Form.Control.Feedback style={{display:error.email?'block':'none'}} type='invalid'>{error.email}</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    {/* ADDRESS*/}
                    <Form.Group className=" col col-sm-6" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control className="form-control" type="text" name="address" value={personalDetails.address} onChange={setPersonalDetails} required />
                        <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type='invalid'>Please provide your address.</Form.Control.Feedback>
                    </Form.Group>
                    {/* PINCODE */}
                    <Form.Group controlId="formGridpin" className="col col-sm-4">
                        <Form.Label>Pin Code</Form.Label>
                        <Form.Control className="form-control" type="pin" name="pin" value={personalDetails.pin} onChange={setPersonalDetails} required />
                        <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type='invalid'>Please provide your pincode.</Form.Control.Feedback>
                        <Form.Control.Feedback style={{ display: error.pin ? 'block' : 'none' }} type='invalid'>{error.pin}</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    {/* CITY */}
                    <Form.Group controlId="formGridCity" className="col col-sm-4">
                        <Form.Label>City</Form.Label>
                        <Form.Control className="form-control" type="text" name="city" value={personalDetails.city} onChange={setPersonalDetails} required />
                        <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type='invalid'>Please provide your city.</Form.Control.Feedback>
                    </Form.Group>
                    {/* STATE */}
                    <Form.Group controlId="formGridState" className="col col-sm-4">
                        <Form.Label>State</Form.Label>
                        <Form.Select className="form-control" name="state" value={personalDetails.state} onChange={setPersonalDetails} required>
                            <option defaultValue value=''>Choose...</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Kashmir">Kashmir</option>
                        </Form.Select>
                        <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type='invalid'>Please choose your state.</Form.Control.Feedback>
                    </Form.Group>
                    {/* Country */}
                    <Form.Group controlId="formGridpin" className="col col-sm-4">
                        <Form.Label>Country</Form.Label>
                        <Form.Control className="form-control" type="text" name="country" value={personalDetails.country} readOnly />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    {/* ORDER DETAILS */}
                    {/* <Form.Group controlId="formGridlabel" className="col col-sm-6">
                    <Form.Label>Order Details</Form.Label>
                    <Form.Control as="textarea" rows="{3}" className="form-control" name="order" value={personalDetails.order} onChange={setPersonalDetails} />
                </Form.Group> */}
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

export default PersonalDetails;
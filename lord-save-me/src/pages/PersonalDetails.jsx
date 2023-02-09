import React from 'react';
import { Form, Row, InputGroup } from 'react-bootstrap';

const PersonalDetails = ({ formData, setFormData }) => {
    return (
        <>
            <Form className="container mt-3 mb-3">
                <Row className="mb-3">
                    {/* SALUTATION */}
                    <Form.Group controlId="formGridState" className="col col-sm-4">
                        <Form.Label>Salutation</Form.Label>
                        <Form.Select defaultValue="Choose..." className="form-control" name="salutation" value={formData.salutation} onChange={setFormData}>
                            <option value="Choose...">Choose...</option>
                            <option value="mr">Mr.</option>
                            <option value="mrs">Mrs.</option>
                            <option value="ms">Ms.</option>
                        </Form.Select>
                    </Form.Group>
                    {/* FIRSTNAME */}
                    <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="name" name="first_name" value={formData.first_name} onChange={setFormData} className="form-control" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    {/* MIDDLENAME */}
                    <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                        <Form.Label>Middle Name</Form.Label>
                        <Form.Control type="name" name="middle_name" value={formData.middle_name} onChange={setFormData} className="form-control" />
                    </Form.Group>
                    {/* LASTNAME */}
                    <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="name" name="last_name" value={formData.last_name} onChange={setFormData} className="form-control" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    {/* GENDER */}
                    <Form.Group controlId="formGridState" className="col col-sm-3">
                        <Form.Label>Gender</Form.Label>
                        <Form.Select defaultValue="Choose..." className="form-control" name="gender" value={formData.gender} onChange={setFormData}>
                            <option value="Choose...">Choose...</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </Form.Select>
                    </Form.Group>
                    {/* DOB */}
                    <Form.Group controlId="formGridpin" className="col col-sm-4">
                        <Form.Label>Date Of Birth</Form.Label>
                        <Form.Control className="form-control" type="date" name="dob" value={formData.dob} onChange={setFormData} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    {/* MOBILE */}
                    <Form.Group controlId="formBasicMobile" className="col col-sm-6">
                        <Form.Label>Mobile Number</Form.Label>
                        <InputGroup>
                            <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
                            <Form.Control aria-label="Mobile Number" type="mobile" aria-describedby="basic-addon1" className="form-control" name="mobile" value={formData.mobile} onChange={setFormData} />
                        </InputGroup>
                    </Form.Group>
                    {/* EMAIL */}
                    <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                        <Form.Label>Email</Form.Label>
                        <Form.Control aria-label="Recipient's username" type="email" name="email" value={formData.email} onChange={setFormData} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    {/* ADDRESS*/}
                    <Form.Group className=" col col-sm-6" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control className="form-control" type="text" name="address" value={formData.address} onChange={setFormData} />
                    </Form.Group>
                    {/* PINCODE */}
                    <Form.Group controlId="formGridpin" className="col col-sm-4">
                        <Form.Label>Pin Code</Form.Label>
                        <Form.Control className="form-control" type="pin" name="pin" value={formData.pin} onChange={setFormData} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    {/* CITY */}
                    <Form.Group controlId="formGridCity" className="col col-sm-4">
                        <Form.Label>City</Form.Label>
                        <Form.Control className="form-control" type="text" name="city" value={formData.city} onChange={setFormData} />
                    </Form.Group>
                    {/* STATE */}
                    <Form.Group controlId="formGridState" className="col col-sm-4">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose..." className="form-control" name="state" value={formData.state} onChange={setFormData}>
                            <option value="Choose...">Choose...</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Kashmir">Kashmir</option>
                        </Form.Select>
                    </Form.Group>
                    {/* Country */}
                    <Form.Group controlId="formGridpin" className="col col-sm-4">
                        <Form.Label>Country</Form.Label>
                        <Form.Control className="form-control" type="text" name="country" value={formData.country} onChange={setFormData} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    {/* ORDER DETAILS */}
                    {/* <Form.Group controlId="formGridlabel" className="col col-sm-6">
                    <Form.Label>Order Details</Form.Label>
                    <Form.Control as="textarea" rows="{3}" className="form-control" name="order" value={formData.order} onChange={setFormData} />
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
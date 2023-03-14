import { Form, Row, InputGroup } from 'react-bootstrap';
import PostLoginNavBar from '../../components/NavBar/PostLoginNavBar';
import AdminSideBar from "../../components/Sidebar/AdminSideBar";


const ClientDetails = () => {
    return (
        <>
            <PostLoginNavBar />
            <div style={{ display: 'flex' }}>
                <AdminSideBar />
                <div>
                    <div className="title"> Personal Information </div>
                    <Form className="container mt-3 mb-3 personal" autoComplete='off'>
                        <Row className="mb-3">
                            {/* SALUTATION */}
                            <Form.Group controlId="formGridState" className="col col-sm-4">
                                <Form.Label>Salutation</Form.Label>
                                <Form.Select className="form-control" name="salutation" readOnly >
                                    <option defaultValue value="Choose...">Choose...</option>
                                </Form.Select>
                            </Form.Group>
                            {/* FIRSTNAME */}
                            <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="name" name="first_name" className="form-control" readOnly />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            {/* MIDDLENAME */}
                            <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                <Form.Label>Middle Name</Form.Label>
                                <Form.Control type="name" name="middle_name" className="form-control" readOnly />
                            </Form.Group>
                            {/* LASTNAME */}
                            <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="name" name="last_name" className="form-control" readOnly />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            {/* GENDER */}
                            <Form.Group controlId="formGridState" className="col col-sm-3">
                                <Form.Label>Gender</Form.Label>
                                <Form.Select className="form-control" name="gender" readOnly >
                                    <option defaultValue value="Choose...">Choose...</option>
                                </Form.Select>
                            </Form.Group>
                            {/* DOB */}
                            <Form.Group controlId="formGridpin" className="col col-sm-4">
                                <Form.Label>Date Of Birth</Form.Label>
                                <Form.Control className="form-control" type="date" name="dob" readOnly />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            {/* MOBILE */}
                            <Form.Group controlId="formBasicMobile" className="col col-sm-6">
                                <Form.Label>Mobile Number</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
                                    <Form.Control aria-label="Mobile Number" type="mobile" aria-describedby="basic-addon1" className="form-control" name="mobile" readOnly />
                                </InputGroup>
                            </Form.Group>
                            {/* EMAIL */}
                            <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                <Form.Label>Email</Form.Label>
                                <Form.Control aria-label="Recipient's username" type="email" name="email" readOnly />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            {/* ADDRESS*/}
                            <Form.Group className=" col col-sm-6" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control className="form-control" type="text" name="address" readOnly />
                            </Form.Group>
                            {/* PINCODE */}
                            <Form.Group controlId="formGridpin" className="col col-sm-4">
                                <Form.Label>Pin Code</Form.Label>
                                <Form.Control className="form-control" type="pin" name="pin" readOnly />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            {/* CITY */}
                            <Form.Group controlId="formGridCity" className="col col-sm-4">
                                <Form.Label>City</Form.Label>
                                <Form.Control className="form-control" type="text" name="city" readOnly />
                            </Form.Group>
                            {/* STATE */}
                            <Form.Group controlId="formGridState" className="col col-sm-4">
                                <Form.Label>State</Form.Label>
                                <Form.Select className="form-control" name="state" readOnly >
                                    <option defaultValue value="Choose...">Choose...</option>
                                    {/* {data ? Object.keys(data).map((d) => (
                    <option key={d} value={d}>{d}</option>
                  )) : null} */}
                                </Form.Select>
                            </Form.Group>
                            {/* Country */}
                            <Form.Group controlId="formGridpin" className="col col-sm-4">
                                <Form.Label>Country</Form.Label>
                                <Form.Control className="form-control" type="text" name="country" readOnly />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">

                        </Row>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default ClientDetails
import { Container, Form, Row, Col, InputGroup } from 'react-bootstrap';
import PostLoginNavBar from '../../components/NavBar/PostLoginNavBar';
import AdminSideBar from "../../components/Sidebar/AdminSideBar";
import { useEffect, useState } from "react";
import axios from "axios";
import DataTable, { createTheme } from "react-data-table-component";
import { MDBBadge } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

createTheme("solarized", {
    text: {
        primary: "#268bd2",
        secondary: "#2aa198"
    },
    background: {
        default: "#002b36"
    },
    context: {
        background: "#cb4b16",
        text: "#FFFFFF"
    },
    divider: {
        default: "#073642"
    },
    action: {
        button: "rgba(0,0,0,.54)",
        hover: "rgba(0,0,0,.08)",
        disabled: "rgba(0,0,0,.12)"
    }
}); //color scheme system

const ClientDetails = () => {

    const Navigate = useNavigate();

    const columns = [
        {
            name: "Loan ID",
            selector: (row) => row.LoanID,
            sortable: true
        },
        {
            name: "Type",
            selector: (row) => row.LoanType,
            sortable: true
        },
        {
            name: "Amount",
            selector: (row) => <img src={row.LoanAmount} alt="MDN logo" />,
            sortable: true
        },
        {
            name: "ROI (%)",
            selector: (row) => row.Interest,
            sortable: true
        },
        {
            name: "Status",
            selector: (row) => row.Status,
            sortable: true,
        },
    ];

    const clientSummary = [
        {
            LoanID: 1,
            LoanType: "Aston Villa",
            LoanAmount: "https://resources.premierleague.com/premierleague/badges/50/t7.png",
            Interest: "MID",
            Status: <MDBBadge pill color='success' light>Completed</MDBBadge>
        },
        {
            LoanID: 2,
            LoanType: "Manchester United",
            LoanAmount: "https://resources.premierleague.com/premierleague/badges/50/t1.png",
            Interest: "DEF",
            Status: <MDBBadge pill className='mx-2' color='danger' light>Rejected</MDBBadge>
        },
        {
            LoanID: 3,
            LoanType: "Everton",
            LoanAmount: "https://resources.premierleague.com/premierleague/badges/50/t11.png",
            Interest: "MID",
            Status: <MDBBadge pill color='warning' light>Waitlisted</MDBBadge>
        },
        {
            LoanID: 4,
            LoanType: "Spurs",
            LoanAmount: "https://resources.premierleague.com/premierleague/badges/50/t6.png",
            Interest: "MID",
            Status: <MDBBadge pill className='mx-2' color='danger' light>Rejected</MDBBadge>
        },
        {
            LoanID: 5,
            LoanType: "Aston Villa",
            LoanAmount: "https://resources.premierleague.com/premierleague/badges/50/t7.png",
            Interest: "FWD",
            Status: <MDBBadge pill className='mx-2' color='danger' light>Rejected</MDBBadge>
        },
        {
            LoanID: 6,
            LoanType: "Manchester City",
            LoanAmount: "https://resources.premierleague.com/premierleague/badges/50/t43.png",
            Interest: "MID",
            Status: <MDBBadge pill color='success' light>Completed</MDBBadge>
        },
        {
            LoanID: 7,
            LoanType: "Wolves",
            LoanAmount: "https://resources.premierleague.com/premierleague/badges/50/t39.png",
            Interest: "DEF",
            Status: <MDBBadge pill color='success' light>Completed</MDBBadge>
        },
        {
            LoanID: 8,
            LoanType: "Manchester United",
            LoanAmount: "https://resources.premierleague.com/premierleague/badges/50/t1.png",
            Interest: "MID",
            Status: <MDBBadge pill color='success' light>Completed</MDBBadge>
        },
        {
            LoanID: 9,
            LoanType: "Manchester United",
            LoanAmount: "https://resources.premierleague.com/premierleague/badges/50/t1.png",
            Interest: "FWD",
            Status: <MDBBadge pill color='success' light>Completed</MDBBadge>
        },
        {
            LoanID: 10,
            LoanType: "Chelsea",
            LoanAmount: "https://resources.premierleague.com/premierleague/badges/50/t8.png",
            Interest: "DEF",
            Status: <MDBBadge pill color='warning' light>Waitlisted</MDBBadge>
        },
        {
            LoanID: 11,
            LoanType: "Manchester United",
            LoanAmount:
                "https://resources.premierleague.com/premierleague/badges/50/t1.png",
            Gender: "Portugal",
            Age:
                "https://www.countryflags.com/wp-content/uploads/portugal-flag-400.png",
            Interest: "MID",
            Status: <MDBBadge pill color='success' light>Completed</MDBBadge>,
        },
        {
            LoanID: 12,
            LoanType: "Manchester United",
            LoanAmount: "https://resources.premierleague.com/premierleague/badges/50/t1.png",
            Interest: "FWD",
            Status: <MDBBadge pill color='success' light>Completed</MDBBadge>,
        },
        {
            LoanID: 13,
            LoanType: "Chelsea",
            LoanAmount: "https://resources.premierleague.com/premierleague/badges/50/t8.png",
            Interest: "DEF",
            Status: <MDBBadge pill color='warning' light>Waitlisted</MDBBadge>,
        },

    ];

    const handleRowClicked = (row) => {
        Navigate('/admin-sidebar/client-details/loan-data');
    };


    return (
        <>
            <PostLoginNavBar />
            <div style={{ display: 'flex' }}>
                <AdminSideBar />
                <Container fluid>
                    <Row>
                        <Col>
                            <div className="p-2 title"><MDBBadge pill color='secondary' light>Personal Details</MDBBadge></div>
                            <Form className="container mt-3 mb-3 personal" autoComplete='off'>
                                <Row className="mb-3">
                                    {/* SALUTATION */}
                                    <Form.Group controlId="formGridState" className="col col-sm-4">
                                        <Form.Label>Salutation</Form.Label>
                                        <Form.Control type="name" name="salutation" className="form-control" readOnly />
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
                                        <Form.Control name="gender" className="form-control" readOnly />
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
                                        <Form.Control className="form-control" type="text" name="state" readOnly />
                                    </Form.Group>
                                    {/* Country */}
                                    <Form.Group controlId="formGridpin" className="col col-sm-4">
                                        <Form.Label>Country</Form.Label>
                                        <Form.Control className="form-control" type="text" name="country" readOnly />
                                    </Form.Group>
                                </Row>
                            </Form>
                        </Col>
                        <Col>
                            <div className="p-2 title"><MDBBadge pill color='secondary' light>Loan History</MDBBadge></div>
                            <Form className="container mt-3 mb-3 personal" autoComplete='off'>
                                <Row className="mb-3">
                                    <DataTable
                                        //title="Loan History"
                                        columns={columns}
                                        //data={loanDetails}
                                        data={clientSummary}
                                        defaultSortFieldId
                                        pagination={10}
                                        fixedHeader
                                        fixedHeaderScrollHeight="510px"
                                        onRowClicked={handleRowClicked}
                                        highlightOnHover
                                    />
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default ClientDetails

{/* {data ? Object.keys(data).map((d) => (
 <option key={d} value={d}>{d}</option>)) : null} */}
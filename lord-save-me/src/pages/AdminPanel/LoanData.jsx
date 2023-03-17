import AdminSideBar from "../../components/Sidebar/AdminSideBar";
import PostLoginNavBar from "../../components/NavBar/PostLoginNavBar";
import { Container, Form, Row, Col, InputGroup, Button, Modal } from 'react-bootstrap';
import { MDBBadge } from "mdb-react-ui-kit";
import DataTable, { createTheme } from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const LoanData = () => {

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

	const Navigate = useNavigate();

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const columns = [
		{
			name: "Document ID",
			selector: (row) => row.DocID,
			sortable: true
		},
		{
			name: "Document Name",
			selector: (row) => row.DocName,
			sortable: true
		},
		{
			name: "Status",
			selector: (row) => row.Status,
			sortable: true,
		},
		{
			name: "Verification",
			selector: (row) => row.Verification,
			sortable: true,
		},
	];

	const documentList = [
		{
			DocID: 1,
			DocName: "Aston Villa",
			Status: <MDBBadge pill color='success' light>Received</MDBBadge>,
			Verification: <MDBBadge pill color='success' light>Verified</MDBBadge>
		},
		{
			DocID: 2,
			DocName: "Manchester United",
			Status: <MDBBadge pill className='mx-1' color='danger' light>Pending</MDBBadge>,
			Verification: <MDBBadge pill color='success' light>Verified</MDBBadge>
		},
		{
			DocID: 3,
			DocName: "Everton",
			Status: <MDBBadge pill color='success' light>Received</MDBBadge>,
			Verification: <MDBBadge pill color='success' light>Verified</MDBBadge>
		},
		{
			DocID: 4,
			DocName: "Spurs",
			Status: <MDBBadge pill className='mx-1' color='danger' light>Pending</MDBBadge>,
		},
		{
			DocID: 5,
			DocName: "Aston Villa",
			Status: <MDBBadge pill className='mx-1' color='danger' light>Pending</MDBBadge>,
		},
		{
			DocID: 6,
			DocName: "Manchester City",
			Status: <MDBBadge pill color='success' light>Received</MDBBadge>,
			Verification: <MDBBadge pill color='success' light>Verified</MDBBadge>
		},
		{
			DocID: 7,
			DocName: "Wolves",
			Status: <MDBBadge pill color='success' light>Received</MDBBadge>,
		},
		{
			DocID: 8,
			DocName: "Manchester United",
			Status: <MDBBadge pill className='mx-1' color='danger' light>Pending</MDBBadge>,
		},
		{
			DocID: 9,
			DocName: "Manchester United",
			Status: <MDBBadge pill color='success' light>Received</MDBBadge>,
			Verification: <MDBBadge pill color='success' light>Verified</MDBBadge>
		},
		{
			DocID: 10,
			DocName: "Chelsea",
			Status: <MDBBadge pill className='mx-1' color='danger' light>Pending</MDBBadge>,
		},
		{
			DocID: 11,
			DocName: "Manchester United",
			Status: <MDBBadge pill color='success' light>Received</MDBBadge>,
		},
		{
			DocID: 12,
			DocName: "Manchester United",
			Status: <MDBBadge pill color='success' light>Received</MDBBadge>,
			Verification: <MDBBadge pill color='success' light>Verified</MDBBadge>
		},
		{
			DocID: 13,
			DocName: "Chelsea",
			Status: <MDBBadge pill className='mx-1' color='danger' light>Pending</MDBBadge>,
		},
	];

	const handleRowClicked = (row) => {
		//OPEN DOCUMENT IN NEW PAGE
	};

	return (
		<>
			<PostLoginNavBar />
			<div style={{ display: 'flex' }}>
				<AdminSideBar />

				<Container fluid>
					<Row>
						<Col>
							<div className="p-4 title"><MDBBadge pill color='secondary' light>Loan Data</MDBBadge></div>
							<Form className="container mt-3 mb-3">
								<Row className="mb-3">
									{/* LOAN AMOUNT */}
									<Form.Group controlId="formBasicNumber" className="col col-sm-8">
										<Form.Label>Desired Loan Amount</Form.Label>
										<InputGroup>
											<InputGroup.Text id="basic-addon1">₹</InputGroup.Text>
											<Form.Control aria-label="Loan Amount" type="amount" aria-describedby="basic-addon1" className="form-control" readOnly />
										</InputGroup>
									</Form.Group>
									{/* LOAN TYPE : ONLY DISPLAY */}
									<Form.Group controlId="formBasicEmail" className="col col-sm-4">
										<Form.Label>Loan Type</Form.Label>
										<Form.Control type="text" name="loanType" readOnly />
									</Form.Group>
								</Row>

								<Row className="mb-3">
									{/* EMPLOYMENT STATUS */}
									<Form.Group controlId="formGridState" className="col col-sm-4">
										<Form.Label>Employment Status</Form.Label>
										<Form.Control className="form-control" name="empStatus" readOnly />
									</Form.Group>
									{/* BUSINESS NAME */}
									<Form.Group controlId="formBasicEmail" className="col col-sm-8">
										<Form.Label>Firm Name / Business Name</Form.Label>
										<Form.Control type="name" name="businessName" readOnly />
									</Form.Group>
								</Row>

								<Row className="mb-3">
									{/* FIRM/BUSINESS ADDRESS*/}
									<Form.Group className=" col col-sm-12" controlId="formGridAddress1">
										<Form.Label>Firm Address / Business Address</Form.Label>
										<Form.Control className="form-control" type="text" name="firmAddress" readOnly />
									</Form.Group>
								</Row>
							</Form>
						</Col>
						<Col>
							<div className="p-4 title"><MDBBadge pill color='secondary' light>Documents</MDBBadge></div>
							<Form className="container mt-3 mb-3 personal" autoComplete='off'>
								<Row className="mb-3">
									<DataTable
										//title="Loan History"
										columns={columns}
										//data={loanDetails}
										data={documentList}
										defaultSortFieldId
										pagination={5}
										fixedHeader
										fixedHeaderScrollHeight="240px"
										onRowClicked={handleRowClicked}
										highlightOnHover
									/>
								</Row>
							</Form>
						</Col>
					</Row>

					<div className="p-2" />

					<div className="text-center p-3 mb-3" >
						<Button variant="dark" size="lg" onClick={handleShow}>
							Take Decision
						</Button>

						<Modal show={show} onHide={handleClose}>
							<Modal.Header closeButton>
								<Modal.Title><MDBBadge pill color='warning' light>Final Decision</MDBBadge></Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<Form>
									<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
										<Form.Label><MDBBadge pill color='success' light>DECISION</MDBBadge></Form.Label>
										<Form.Select className="form-control" name="add-user" required >
											<option defaultValue value=''>Choose...</option>
											<option className="option">Accept</option>
											<option className="option">Reject</option>
											<option className="option">Waitlist</option>
										</Form.Select>
									</Form.Group>
									<Form.Group
										className="mb-3"
										controlId="exampleForm.ControlTextarea1"
									>
										<Form.Label><MDBBadge pill color='danger' light>STATE REASONS</MDBBadge></Form.Label>
										<Form.Control as="textarea" rows={3} />
									</Form.Group>
								</Form>
							</Modal.Body>
							<Modal.Footer>
								<Button variant="outline-secondary" onClick={handleClose}>
									Close
								</Button>
								<Button variant="outline-secondary" onClick={handleClose}>
									Save Changes
								</Button>
							</Modal.Footer>
						</Modal>
					</div>
				</Container>

			</div>
		</>
	)
};

export default LoanData

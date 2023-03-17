import SideBar from "../../components/Sidebar/SideBar";
import PostLoginNavBar from "../../components/NavBar/PostLoginNavBar";
import { Container, Form, Row, Col, InputGroup } from 'react-bootstrap';
import { MDBBadge } from "mdb-react-ui-kit";
import DataTable, { createTheme } from "react-data-table-component";
import { useNavigate } from "react-router-dom";

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
    ];

    const documentList = [
        {
            DocID: 1,
            DocName: "Aston Villa",
            Status: <MDBBadge pill color='success' light>Received</MDBBadge>
        },
        {
            DocID: 2,
            DocName: "Manchester United",
            Status: <MDBBadge pill className='mx-1' color='danger' light>Pending</MDBBadge>
        },
        {
            DocID: 3,
            DocName: "Everton",
            Status: <MDBBadge pill color='success' light>Received</MDBBadge>
        },
        {
            DocID: 4,
            DocName: "Spurs",
            Status: <MDBBadge pill className='mx-1' color='danger' light>Rejected</MDBBadge>
        },
        {
            DocID: 5,
            DocName: "Aston Villa",
            Status: <MDBBadge pill className='mx-1' color='danger' light>Rejected</MDBBadge>
        },
        {
            DocID: 6,
            DocName: "Manchester City",
            Status: <MDBBadge pill color='success' light>Received</MDBBadge>
        },
        {
            DocID: 7,
            DocName: "Wolves",
            Status: <MDBBadge pill color='success' light>Received</MDBBadge>
        },
        {
            DocID: 8,
            DocName: "Manchester United",
            Status: <MDBBadge pill color='success' light>Received</MDBBadge>
        },
        {
            DocID: 9,
            DocName: "Manchester United",
            Status: <MDBBadge pill color='success' light>Received</MDBBadge>
        },
        {
            DocID: 10,
            DocName: "Chelsea",
            Status: <MDBBadge pill className='mx-1' color='danger' light>Rejected</MDBBadge>
        },
        {
            DocID: 11,
            DocName: "Manchester United",
            Status: <MDBBadge pill color='success' light>Completed</MDBBadge>,
        },
        {
            DocID: 12,
            DocName: "Manchester United",
            Status: <MDBBadge pill color='success' light>Completed</MDBBadge>,
        },
        {
            DocID: 13,
            DocName: "Chelsea",
            Status: <MDBBadge pill className='mx-1' color='danger' light>Rejected</MDBBadge>,
        },
    ];

    const handleRowClicked = (row) => {
    	//OPEN DOCUMENT IN NEW PAGE
    };

	  return (
	    <>
	      <PostLoginNavBar />
	      <div style={{ display: 'flex' }}>
	        <SideBar />
	  		  <div>
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
				                            <Form.Control aria-label="Loan Amount" type="amount" aria-describedby="basic-addon1" className="form-control" readOnly/>   
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
		                                    fixedHeaderScrollHeight="200px"
		                                    onRowClicked={handleRowClicked}
		                                    highlightOnHover
		                                />
		                            </Row>
		                        </Form>
		                </Col>
			        </Row>
		        </Container>
		      </div>	
	      </div>
	    </>
	  )
};

export default LoanData

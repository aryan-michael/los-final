import { useNavigate } from "react-router-dom";
import PostLoginNavBar from "../../components/NavBar/PostLoginNavBar";
import SideBar from "../../components/Sidebar/SideBar";
import { MDBBadge } from "mdb-react-ui-kit";
import { Container, Form, Row, Col } from 'react-bootstrap';
import DataTable from "react-data-table-component";

const CheckStatus = () => {
	
	const documentList = [
		{
			DocID: 1,
			DocName: "Aston Villa",
			VerficationStatus:'Approve',
			Status: <MDBBadge pill color='success' light>Received</MDBBadge>,
		},
		{
			DocID: 2,
			DocName: "Manchester United",
			VerficationStatus:'Reject',
			Status: <MDBBadge pill color='danger' light>Pending</MDBBadge>,
		},
		{
			DocID: 3,
			DocName: "Everton",
			VerficationStatus:'Approve',
			Status: <MDBBadge pill color='success' light>Received</MDBBadge>,
		},
		{
			DocID: 4,
			DocName: "Spurs",
			VerficationStatus:'Reject',
			Status: <MDBBadge pill color='danger' light>Pending</MDBBadge>,
		},
		{
			DocID: 5,
			DocName: "Aston Villa",
			VerficationStatus:'Approve',
			Status: <MDBBadge pill color='success' light>Received</MDBBadge>,
		},
		{
			DocID: 6,
			DocName: "Manchester City",
			VerficationStatus:'Reject',
			Status: <MDBBadge pill color='danger' light>Pending</MDBBadge>,
		},
		{
			DocID: 7,
			DocName: "Wolves",
			VerficationStatus:'Approve',
			Status: <MDBBadge pill color='success' light>Received</MDBBadge>,
		},
		{
			DocID: 8,
			DocName: "Manchester United",
			VerficationStatus:'Reject',
			Status: <MDBBadge pill color='danger' light>Pending</MDBBadge>,
		},
		{
			DocID: 9,
			DocName: "Manchester United",
			VerficationStatus:'Approve',
			Status: <MDBBadge pill color='success' light>Received</MDBBadge>,
		},
		{
			DocID: 10,
			DocName: "Chelsea",
			VerficationStatus:'Reject',
			Status: <MDBBadge pill color='danger' light>Pending</MDBBadge>,
		},
		{
			DocID: 11,
			DocName: "Manchester United",
			VerficationStatus:'Approve',
			Status: <MDBBadge pill color='success' light>Received</MDBBadge>,
		},
		{
			DocID: 12,
			DocName: "Manchester United",
			VerficationStatus:'Reject',
			Status: <MDBBadge pill color='danger' light>Pending</MDBBadge>,
		},
		{
			DocID: 13,
			DocName: "Chelsea",
			VerficationStatus:'Approve',
			Status: <MDBBadge pill color='success' light>Received</MDBBadge>,
		}
	];

	
	
	const Navigate = useNavigate();
	
	const viewDocument = () => {
		window.open(`/hello`);
	}
		
	
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
			selector: (row) => row.VerficationStatus === 'Approve' ?<MDBBadge pill color='success' light>Approved</MDBBadge> : <MDBBadge pill color='danger' light>Rejected</MDBBadge> ,
			sortable: true,
		},
	];	

	

  return (
    <>
      <PostLoginNavBar />
      <div style={{ display: 'flex' }}>
        <SideBar />
        <Container>
        	<Row className="p-4 title"><MDBBadge pill color='secondary' light>Check Document Status</MDBBadge></Row>
        	
        	<Row>
						<DataTable	
							columns={columns}
							data={documentList}
							defaultSortFieldId
							pagination={5}
							fixedHeader
							fixedHeaderScrollHeight="400px"
							onRowClicked={viewDocument}
							highlightOnHover
							pointerOnHover
						/>
        	</Row>
      	</Container>
      </div>
    </>
  )
};

export default CheckStatus

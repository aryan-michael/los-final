import PostLoginNavBar from "../../components/NavBar/PostLoginNavBar";
import SideBar from "../../components/Sidebar/SideBar";
import { MDBBadge } from "mdb-react-ui-kit";
import { Container, Form, Row, Col } from 'react-bootstrap';

const CheckStatus = () => {
  return (
    <>
      <PostLoginNavBar />
      <div style={{ display: 'flex' }}>
        <SideBar />
        <Container fluid>
        	<Row className="p-4 title"><MDBBadge pill color='secondary' light>Check Status</MDBBadge></Row>
      	</Container>
      </div>
    </>
  )
};

export default CheckStatus

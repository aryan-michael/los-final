
import AdminSideBar from "../../components/Sidebar/AdminSideBar";
import PostLoginNavBar from "../../components/NavBar/PostLoginNavBar";
import Footer from "../../components/Footer/Footer";
import { MDBBadge } from "mdb-react-ui-kit";
import { Container, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBusinessTime, FaHome } from 'react-icons/fa';
import { MdCastForEducation } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';
import "./AdminDashboard.css";

function AdminDashboard() {

	return (
		<>
			<PostLoginNavBar />
			<div style={{ height: '100%', display: 'flex' }}>
				<AdminSideBar />

				<Container fluid>
					
						<Row className="p-4 title"><MDBBadge pill color='secondary' light>Admin Dashboard</MDBBadge></Row>

						<Row className="tile text-center p-3 mb-1">
							<Col className="p-3" xs={16} md={10} lg={4}>
								<div className="tag px-5 pt-4 pb-2">
										<FaBusinessTime className="icons" />
										<h4 className="mt-2">Business Loan</h4>
										<h6>✅ Approved - 4</h6>
										<h6>❌ Rejected - 7</h6>
								</div>
							</Col>
							<Col className="p-3" xs={16} md={10} lg={4}>
								<div className="tag px-5 pt-4 pb-2">
										<FaHome className="icons" />
										<h4 className="mt-2">Home Loan</h4>
										<h6>✅ Approved - 9</h6>
										<h6>❌ Rejected - 13</h6>
								</div>
							</Col>
						</Row>
						
						<Row className="tile text-center p-3 mb-1">
							<Col className="p-3" xs={16} md={10} lg={4}>
								<div className="tag px-5 pt-4 pb-2">
										<MdCastForEducation className="icons" />
										<h4 className="mt-2">Education Loan</h4>
										<h6>✅ Approved - 1</h6>
										<h6>❌ Rejected - 4</h6>
								</div>
							</Col>
							<Col className="p-3" xs={16} md={10} lg={4}>
								<div className="tag px-5 pt-4 pb-2">
										<BsFillPersonFill className="icons" />
										<h4 className="mt-2">Personal Loan</h4>
										<h6>✅ Approved - 2</h6>
										<h6>❌ Rejected - 8</h6>
								</div>
							</Col>
						</Row>

						<Row className="text-center p-3"></Row>

						<Row className="text-center p-3 mb-3">
							<Footer />
						</Row>


				</Container>

			</div>
		</>
	);
}

export default AdminDashboard








						


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
					<Form className="mt-3 mb-3" autoComplete='off'>
						<Row className="p-4 title"><MDBBadge pill color='secondary' light>Admin Dashboard</MDBBadge></Row>

						<Row className="text-center p-3 mb-3">
							<Col className="p-3" xs={12} md={6} lg={3}>
								<div className="tag px-5 pt-5 pb-3">
									<Link to={`loan/business`} className="text-black text-decoration-none ">
										<FaBusinessTime className="icons" />
										<h4 className="mt-2">Business Loan</h4>
									</Link>
								</div>
							</Col>
							<Col className="p-3" xs={12} md={6} lg={3}>
								<div className="tag px-5 pt-5 pb-3">
									<Link to={`loan/home`} className="text-black text-decoration-none ">
										<FaHome className="icons" />
										<h4 className="mt-2">Home Loan</h4>
									</Link>
								</div>
							</Col>
							<Col className="p-3" xs={12} md={6} lg={3}>
								<div className="tag px-5 pt-5 pb-3">

									<Link to={`loan/education`} className="text-black text-decoration-none ">
										<MdCastForEducation className="icons" />
										<h4 className="mt-2">Education Loan</h4>
									</Link>
								</div>
							</Col>
							<Col className="p-3" xs={12} md={6} lg={3}>
								<div className="tag px-5 pt-5 pb-3">

									<Link to={`loan/personal`} className="text-black text-decoration-none ">
										<BsFillPersonFill className="icons" />
										<h4 className="mt-2">Personal Loan</h4>
									</Link>
								</div>
							</Col>
						</Row>

						<Row className="text-center p-3 mb-4"></Row>

						<Row className="text-center p-3 mb-3">
							<Footer />
						</Row>

					</Form>
				</Container>

			</div>
		</>
	);
}

export default AdminDashboard

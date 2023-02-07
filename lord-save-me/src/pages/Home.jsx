import { Container, Row, Col, Image } from "react-bootstrap";
import './Home.css';
import { Link, Outlet } from 'react-router-dom';
import business from '../assets/business.png'
import home from '../assets/home.png'
import education from '../assets/education.png'
import personal from '../assets/personal.png'


const Home = () => {
    return (
        <>
            <Container fluid>
                <Row className="text-center ">
                    <Col className="p-3" xs={12} md={6} lg={3}>
                        <div className="tag px-5 pt-5 pb-3">
                            <Link to={`loan/business`} className="text-black text-decoration-none ">
                                <Image
                                    src={business}
                                    thumbnail
                                />
                                <h4 className="mt-2">Business Loan</h4>
                            </Link>
                        </div>
                    </Col>
                    <Col className="p-3" xs={12} md={6} lg={3}>
                        <div className="tag px-5 pt-5 pb-3">
                            <Link to={`loan/home`} className="text-black text-decoration-none ">
                                <Image
                                    src={home}
                                    thumbnail
                                />
                                <h4 className="mt-2">Home Loan</h4>
                            </Link>
                        </div>
                    </Col>
                    <Col className="p-3" xs={12} md={6} lg={3}>
                        <div className="tag px-5 pt-5 pb-3">

                            <Link to={`loan/education`} className="text-black text-decoration-none ">
                                <Image
                                    src={education}
                                    thumbnail
                                />
                                <h4 className="mt-2">Education Loan</h4>
                            </Link>
                        </div>
                    </Col>
                    <Col className="p-3" xs={12} md={6} lg={3}>
                        <div className="tag px-5 pt-5 pb-3">

                            <Link to={`loan/personal`} className="text-black text-decoration-none ">
                                <Image
                                    src={personal}
                                    thumbnail
                                />
                                <h4 className="mt-2">Personal Loan</h4>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Outlet />
        </>
    );
}

export default Home;
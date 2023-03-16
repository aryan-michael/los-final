import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
//import { BiPowerOff } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { MDBIcon } from "mdb-react-ui-kit";
import "./NavBars.css";

const PostLoginNavBar = () => {
    return ( 
        <>
            <Navbar className="navbar" sticky="top" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <MDBIcon color='secondary' icon='gem' className='me-3' /> LOS
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/policy">Policy Agreement</Nav.Link>
                            <Nav.Link href="/creators">Creators</Nav.Link>
                            {/* <NavDropdown title="Products" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/loan/business">
                                    Business Loan
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/loan/home">
                                    Home Loan
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/loan/education">
                                    Education Loan
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/loan/personal">
                                    Personal Loan
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Upcoming Products
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav>
                            <Nav.Link href="/sidebar">SideBar</Nav.Link>
                            <NavDropdown title=<CgProfile className="icon" /> 
                            	id="collasible-nav-dropdown">
                                <NavDropdown.Item eventKey={2} href="">
                                    Profile Settings
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/login/client">
                                    Log Out
                                </NavDropdown.Item>
                            </NavDropdown> 
                            {/*<Nav.Link href="/login/client"><CgProfile /></Nav.Link>*/}
                        </Nav>
                        <br />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default PostLoginNavBar

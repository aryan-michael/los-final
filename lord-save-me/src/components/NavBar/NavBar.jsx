import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

const NavBar = () => {
    return (
        <>
            <Navbar sticky="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        LOS
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/policy">Policy Agreement</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Products" id="collasible-nav-dropdown">
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
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/new-navbar">PostLogin Navbar</Nav.Link>
                            <Nav.Link href="/sidebar">SideBar</Nav.Link>
                            <Nav.Link href="/admin-sidebar">AdminSideBar</Nav.Link>
                            <NavDropdown title="Login" id="collasible-nav-dropdown">
                                <NavDropdown.Item eventKey={2} href="/login/client">
                                    Client
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey={2} href="/login/admin">
                                    Admin
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <br />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;

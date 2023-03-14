import { Container, Form, Row } from 'react-bootstrap';
import SideBar from "../../components/Sidebar/SideBar";
import PostLoginNavBar from "../../components/NavBar/PostLoginNavBar";
//import NewInquiryForm from "../UserPanel/NewInquiryForm";
import { useEffect, useState } from 'react';

const AddInquiry = () => {

    const [loan, setLoan] = useState("Choose...");

    const [business, setBusiness] = useState(false);
    const [home, setHome] = useState(false);
    const [education, setEducation] = useState(false);
    const [personal, setPersonal] = useState(false);

    useEffect(() => {
        loan === "business" ? setBusiness(true) : setBusiness(false);
        loan === "home" ? setHome(true) : setHome(false);
        loan === "education" ? setEducation(true) : setEducation(false);
        loan === "personal" ? setPersonal(true) : setPersonal(false);
    }, [loan])

    const handleChange = (e) => {
        setLoan(e.target.value);
        
        /*if (e.target.value === "business"){
        	<div>
                        <Forms loan_type={"Business"} country={"India"} />       
                </div>
        }
        if (e.target.value === "home"){
        	<div>
                        <Forms loan_type={"Home"} country={"India"} />    
                </div>
        }
        if (e.target.value === "education"){
        	<div>
                        <Forms loan_type={"Education"} country={"India"} />      
                </div>
        }
        if (e.target.value === "personal"){
        	<div>
                        <Forms loan_type={"Personal"} country={"India"} />   
                </div>
        }*/
        
        
        /*window.open(`/admin-sidebar/add-user/loan/${e.target.value}`);*/
    }

    return (
        <>
            <PostLoginNavBar />
            <div style={{ display: 'flex' }}>
                <SideBar />

                <Container fluid>
                    <Form className="container mt-3 mb-3" autoComplete='off'>
                        <Row className="title">Apply for a new loan</Row>
                        <Row className="mb-3">
                            {/* ADDING INQUIRY VIA USER */}
                            <Form.Group controlId="formGridState" className="col col-sm-3">
                                <Form.Label>Choose new loan type</Form.Label>
                                <Form.Select className="form-control" name="add-user" value={loan} onChange={handleChange} required >
                                    <option defaultValue value=''>Choose...</option>
                                    <option value="business">Business Loan</option>
                                    <option value="home">Home Loan</option>
                                    <option value="education">Education Loan</option>
                                    <option value="personal">Personal Loan</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        {/* <Row className="mb-3">
                            <Form.Group controlId="formGridCheckbox" className="col col-sm-3">
                                <Button type="submit" className="me-4 btn btn-success btn-lg btn-block">Submit
                                </Button>
                            </Form.Group>
                        </Row> */}
                    </Form>
                    {/*<div>
                        {business && <NewInquiryForm loan_type={"Business"} country={"India"} />}
                        {home && <NewInquiryForm loan_type={"Home"} country={"India"} />}
                        {education && <NewInquiryForm loan_type={"Education"} country={"India"} />}
                        {personal && <NewInquiryForm loan_type={"Personal"} country={"India"} />}
                    </div>*/}
                </Container>

            </div>
        </>
    );
}

export default AddInquiry

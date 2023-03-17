import { useState, useEffect } from "react";
import PostLoginNavBar from "../../components/NavBar/PostLoginNavBar";
import SideBar from "../../components/Sidebar/SideBar";
import { Form, Col, Row, Button, InputGroup, Container } from "react-bootstrap";
import DocRequirements from "./DocRequirements";
import { MDBBadge } from "mdb-react-ui-kit";
import "./KYC.css";


export default function KYC() {

  const business_documents = [
    'Photo Identity Proof',
    'Address Proof',
    'Certificate of Incorporation',
    'Income Tax Returns',
    'GST Returns',
    'Bank Statements (max 1 year old)',
    'List of existing loans and debts',
    'List of Accounts',
    'Cash Flow Statements',
    'Cancelled Cheque',
  ]

  const home_documents = [
    'Photo Identity Proof',
    'Address Proof',
    'Employment Appointment Letter',
    'Salary slip (3 months old)',
    'Bank Statement (6 months old)',
    'Form 16 (2 years)',
    'Property Document (Sale deed, Khata)',
    'IT Returns',
    'Office Address Proof',
    'Office Ownership Proof',
    'Business Existence Proof (COI)',
    'Income Proof',

  ]

  const education_documents = [
    'Photo Identity Proof (Applicant/Co-Applicant)',
    'Address Proof (Applicant/Co-Applicant)',
    'Income Proof (Applicant/Co-Applicant)',
    'Bank Statements',
    'Proof of Admission',
    'Marksheet (S.S.C./H.S.C./Degree/Diploma)',
    'Collateral Property Document'
  ]

  const personal_documents = [
    'Photo Identity Proof',
    'Address Proof',
    'Income Proof',
    'Job Continuity Proof',
    'Bank Statements (max 1 year old)',
    'Form 16 (2 years)',
    'Salary Slip',
    'List of existing loans and debts',
    'List of Accounts',
  ]

  const [modalShow, setModalShow] = useState(false);

  const [value, setValue] = useState([1]);
  const handleAdd = () => {
    const x = [...value, []]
    setValue(x)
  }
  const handleChange = (onChangeValue, i) => {
    const inputdata = [...value]
    inputdata[i] = onChangeValue.target.value;
    setValue(inputdata)
  }
  const handleDelete = (i) => {
    const deleteValue = [...value]
    deleteValue.splice(i, 1)
    setValue(deleteValue)
  }
  console.log(value, "data-");


  // state that will hold the Array of objects
  // initialized with empty array
  const [files, setFiles] = useState([]);
  // onChange function that reads files on uploading them
  // files read are encoded as Base64
  function onFileUpload(event) {
    event.preventDefault();
    // Get the file Id
    let id = event.target.id;
    // Create an instance of FileReader API
    let file_reader = new FileReader();
    // Get the actual file itself
    let file = event.target.files[0];
    file_reader.onload = () => {
      // After uploading the file
      // appending the file to our state array
      // set the object keys and values accordingly
      setFiles([...files, { file_id: id, uploaded_file: file_reader.result }]);
    };
    // reading the actual uploaded file
    file_reader.readAsDataURL(file);
  }
  // handle submit button for form
  function handleSubmit(e) {
    e.preventDefault();
    console.log(files);
  }
  // button state whether it's disabled or enabled
  const [enabled, setEnabled] = useState(false);
  // using useEffect we can detect if user uploaded any file,
  // so enable submit button
  useEffect(() => {
    if (files.length === 0) {
      setEnabled(false);
    } else {
      setEnabled(true);
    }
  }, [files]);

  return (
    <>
      <PostLoginNavBar />
      <div style={{ display: 'flex' }}>
        <SideBar />

        <div className="container-fluid">

          <div className="p-4 title"><MDBBadge pill color='secondary' light>KYC Documents</MDBBadge></div>

          <Form onSubmit={handleSubmit} className="container mt-3 mb-3">

            {/* DOC UPLOAD ROW */}
            <Row className="drop p-3 mb-3" >

              {/* MAP FUNCTION */}
              {value.map((data, i) => {
                return (
                  <>
                    <div className="mt-2">

                      {/* MAIN DOC UPLOAD COLUMN */}
                      <Col style={{
                        paddingLeft: "5px",
                        paddingRight: "5px",
                        backgroundColor: "#212529",
                        borderRadius: '10px',
                      }}>
                        <Row>

                          {/* CHOOSE DOCUMENT */}
                          <Col className="col-md-4">
                            <Form.Group controlId="formGridState">
                              <Form.Label style={{ color: "white" }}>Choose Document</Form.Label>
                              <Form.Select value={data} onChange={e => handleChange(e, i)} className="form-control" name="salutation" required >
                                <option defaultValue value=''>Choose...</option>
                                <option disabled>-------------------BUSINESS LOAN-------------------</option>
                                {business_documents.map((option) => <option>{option}</option>)}
                                <option disabled>---------------------HOME LOAN--------------------</option>
                                {home_documents.map((option) => <option>{option}</option>)}
                                <option disabled>-----------------EDUCATION LOAN------------------</option>
                                {education_documents.map((option) => <option>{option}</option>)}
                                <option disabled>------------------PERSONAL LOAN------------------</option>
                                {personal_documents.map((option) => <option>{option}</option>)}
                              </Form.Select>
                              <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                              <Form.Control.Feedback type='invalid'>Please provide a document!</Form.Control.Feedback>
                            </Form.Group>
                          </Col>

                          {/* TEXT ABOVE DOCUMENT */}
                          <Col className="col-md-8">
                            <label
                              style={{ color: "white" }}
                              className="form-label" for="customFile">Looks good / please upload</label>
                            <input
                              onChange={onFileUpload}
                              id={1}
                              accept=".jpeg, .pdf"
                              type="file"
                              className="form-control"
                              required />
                          </Col>

                        </Row>

                      </Col>

                      {/* BLANK SPACE */}
                      <div className="p-1" />

                      {/* DELETE & REQUIREMENTS BUTTONS */}
                      <div className="text-center p-3 mb-3" >
                        <Button
                          onClick={() => handleDelete(i)}
                          type="button"
                          variant="outline-danger"
                          className="me-4 btn btn-sm">Delete</Button>

                        <Button
                          variant="outline-primary"
                          className="me-4 btn btn-sm"
                          onClick={() => setModalShow(true)}>Requirements
                        </Button>
                        <DocRequirements
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        />
                      </div>

                    </div>

                    {/* BLANK SPACE */}
                    <div className="p-2" />
                  </>
                )
              })}

            </Row>

            {/* BLANK SPACE */}
            <div className="p-2" />

            {/* ADD DOC & SUBMIT BUTTON */}
            <div className="text-center p-3 mb-3" >
              <Button
                onClick={() => handleAdd()}
                type="button"
                variant="outline-dark"
                className="me-4 btn btn-sm">Add Document</Button>


              <Button
                type="submit"
                variant="outline-success"
                className="me-4 btn btn-sm">Submit</Button>
            </div>

          </Form>

        </div>
      </div>
    </>
  );
};
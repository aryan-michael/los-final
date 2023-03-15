import { useState, useEffect } from "react";
import PostLoginNavBar from "../../components/NavBar/PostLoginNavBar";
import SideBar from "../../components/Sidebar/SideBar";
import { Form, Col, Row, Button, InputGroup } from "react-bootstrap";
//import { MDBAccordion, MDBAccordionItem, MDBIcon } from 'mdb-react-ui-kit';


export default function KYC() {
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
          <div className="title ms-4"> KYC Documents </div>
            
            <Form onSubmit={handleSubmit} className="upload--container">

              <Row className="ms-4">

              <div style={{width: '80vw'}}>
                <Col 
                  style={{
                    backgroundColor: "#212529",
                    borderRadius: '10px',
                    width: '750px'
                  }}>
                  <Row>

                    <Col className="col-md-4">
                      <Form.Group controlId="formGridState">
                            <Form.Label style={{color: "white"}}>Choose Document</Form.Label>
                            <Form.Select className="form-control" name="salutation" required >
                                <option defaultValue value=''>Choose...</option>
                                <option value="Mr.">Mr.</option>
                                <option value="Mrs.">Mrs.</option>
                                <option value="Ms.">Ms.</option>
                            </Form.Select>
                            <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type='invalid'>Please provide your salutation.</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    
                   {/* <Col className="col-md-4"></Col>*/}

                    <Col className="col-md-8">
                        <label 
                        style={{color: "white"}}
                        className="form-label" for="customFile">Photo ID</label>
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
              </div>


                <Col className="add-button">
                      <div className="text-center">
                        <Button >+</Button> <br />
                        <Form.Label className="text-center" style={{color: "black", padding: "10px 0 0 0"}}>Add File</Form.Label>
                      </div>
                </Col>


              </Row>
                
              <div className="p-2" />

              <Row className="ms-4"> 
               <div className="text-center">
                <Button type="submit">Submit</Button>
               </div>
              </Row>
              
              {/*SUBMIT BUTTON
              <Row className="ms-4 me-4 btn btn-dark btn-sm">
                {enabled ? (
                    <Button 
                      type="submit">
                      Submit
                    </Button>
                  ) : (
                    <Button 
                      disabled type="submit">
                      Submit
                    </Button>
                  )}
              </Row>*/}

            </Form>
        </div>
      </div>
    </>
  );
};



            {/*<div className="upload--button">
              <label className="form-label" for="customFile">PAN Card </label>
              <input
                onChange={onFileUpload}
                id={1} 
                accept=".jpeg, .pdf"
                type="file"
                className="form-control"
              />
            </div>
            <div className="upload--button">
              <input
                onChange={onFileUpload}
                id={2}
                accept=".jpeg, .pdf"
                type="file"
                className="form-control"
              />
            </div>
            <div className="upload--button">
              <input
                onChange={onFileUpload}
                id={3}
                accept=".jpeg, .pdf"
                type="file"
                className="form-control"
              />
            </div>
            {enabled ? (
              <Button type="submit">Submit</Button>
            ) : (
              <Button disabled type="submit">
                Submit
              </Button>
            )}*/}


            // <Row>
            //       <Col style={{
            //         backgroundColor: "#212529",
            //         borderRadius: '20px'
            //       }}>
            //         <label style={{
            //         color: "white"}}
            //         className="form-label" for="customFile">Address Proof</label>
            //         <input
            //           onChange={onFileUpload}
            //           id={2}
            //           accept=".jpeg, .pdf"
            //           type="file"
            //           className="form-control"
            //           required
            //         />
            //       </Col>
            //     </Row>
            //     <div className="p-2" />
            //     <Row>
            //       <Col style={{
            //         backgroundColor: "#212529",
            //         borderRadius: '20px'
            //       }}>
            //         <label style={{
            //         color: "white"}}
            //         className="form-label" for="customFile">Employment Proof</label>
            //         <input
            //           onChange={onFileUpload}
            //           id={3}
            //           accept=".jpeg, .pdf"
            //           type="file"
            //           className="form-control"
            //           required
            //         />
            //       </Col>
            //     </Row>


            // MDB ACCORDION
            //                 <Row>
            //       <MDBAccordion>
            //       <MDBAccordionItem collapseId={2} headerTitle={<><MDBIcon fas icon="question-circle" /> &nbsp; Policy #2</>}>
            //       Legal verification of documents.
            //       </MDBAccordionItem>
            //       </MDBAccordion>
            //     </Row>
            //     <div className="p-2" />
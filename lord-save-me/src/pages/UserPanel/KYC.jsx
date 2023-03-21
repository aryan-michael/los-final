import { useState, useEffect } from "react";
import PostLoginNavBar from "../../components/NavBar/PostLoginNavBar";
import SideBar from "../../components/Sidebar/SideBar";
import { Form, Col, Row, Button, InputGroup } from "react-bootstrap";
import { MDBAccordion, MDBAccordionItem, MDBIcon } from 'mdb-react-ui-kit';
import axios from "axios";

export default function KYC() {

  

  const [value, setValue] = useState([1]);
   const handleAdd=()=>{
       const x=[...value,[]]
       setValue(x)
   }
   const handleChange=(onChangeValue,i)=>{
    const inputdata=[...value]
    inputdata[i]=onChangeValue.target.value;
    setValue(inputdata)
   }
   const handleDelete=(i)=>{
        const deleteValue=[...value]
        deleteValue.splice(i,1)
        setValue(deleteValue)  
   }
   console.log(value,"data-");


  // state that will hold the Array of objects
  // initialized with empty array
  const [files, setFiles] = useState([]);
  // onChange function that reads files on uploading them
  // files read are encoded as Base64
  async function onFileUpload(event) {
    event.preventDefault();
    
    console.log(">",event.target.value);
    // Create an instance of FileReader API
    // let file_reader = new FileReader();
    
    // Get the actual file itself
    const formData = new FormData()
    let file = event.target.files[0];
    formData.append('document', file)
    const name = document.getElementsByClassName("form-control")
  
    await setFiles([...files, { documentType: name.documentType.value, uploaded_file: file,file_name:file.name}]);
    
    // setFiles([...files, {formData}]);
    // reading the actual uploaded file
    // file_reader.readAsDataURL(file);
  }
  // handle submit button for form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(); 

    console.log(files);

    files.forEach(file => {
      formData.append('fileList',file.uploaded_file)
    })

    try {
      await axios.post("http://localhost:5000/api/v1/file/upload/cloud", formData, {
        withCredentials:true,
        headers: {
                    "Content-Type": "multipart/form-data"
        }
      }).then(response => {
        console.log(response);
      })
    } catch (err) {
      console.log(err);
      return
    }
    try {
      await axios.post("http://localhost:5000/api/v1/file/upload/details", files, {
        withCredentials: true
      } ).then(response => {
        console.log(response);
      })
    } catch (err) {
      console.log(err);
    }
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

              <Row className="ms-4" style={{width: '90vw'}}>


            {value.map((data,i)=>{
              return(
                <div className="mt-2">

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
                              <Form.Select value={data} onChange={e=>handleChange(e,i)} className="form-control" name="documentType" required >
                                  <option defaultValue value=''>Choose...</option>
                                  <option value="document_aadhar">Aadhar Card</option>
                                  <option value="document_pan">PAN Card</option>
                                  <option value="document_gst_return">GST Returns</option>
                              </Form.Select>
                              <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                              <Form.Control.Feedback type='invalid'>Please provide your salutation.</Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      <Col className="col-md-7">
                          <label 
                          style={{color: "white"}}
                          className="form-label" for="customFile">File should be .jpeg or .pdf</label>
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

                  <Col className="mt-3 col-md-2">
                        <Button
                        onClick={()=>handleDelete(i)}
                        type="button"
                        variant="outline-danger" 
                        className="me-4 btn btn-sm">Delete</Button>
                  </Col>

                </div>
                )
            })}

              </Row>
                
              <div className="p-2" />

              <div style={{margin: "0 360px 0 0"}} className="text-center">
                    <Button
                        onClick={()=>handleAdd()}
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


                //             <div className="accordion">
                //       <Col className="col-md-4">
                //           <MDBAccordion>
                //              <MDBAccordionItem collapseId={2} headerTitle={<><MDBIcon fas icon="question-circle" /> &nbsp; Policy #2</>}>
                //                 Legal verification of documents.
                //              </MDBAccordionItem>
                //           </MDBAccordion>
                //       </Col>
                // </div>


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
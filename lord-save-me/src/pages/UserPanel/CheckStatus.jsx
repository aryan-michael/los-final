import { useState } from "react";
import PostLoginNavBar from "../../components/NavBar/PostLoginNavBar";
import SideBar from "../../components/Sidebar/SideBar";
import { Form, Col, Row, Button } from "react-bootstrap";

const CheckStatus = () => {

  const [val,setVal]=useState([]);
   const handleAdd=()=>{
       const abc=[...val,[]]
       setVal(abc)
   }
   const handleChange=(onChangeValue,i)=>{
    const inputdata=[...val]
    inputdata[i]=onChangeValue.target.value;
    setVal(inputdata)
   }
   const handleDelete=(i)=>{
       const deletVal=[...val]
       deletVal.splice(i,1)
       setVal(deletVal)  
   }
   console.log(val,"data-");


  return (
    <>
      <PostLoginNavBar />
      <div style={{ display: 'flex' }}>
        <SideBar />
        <div>

          <Button onClick={()=>handleAdd()}>Add</Button>
            {val.map((data,i)=>{
                return(
                   <div>
                        <Form.Group controlId="formGridState">
                              <Form.Label style={{color: "black"}}>Choose Document</Form.Label>
                              <Form.Select value={data} onChange={e=>handleChange(e,i)} className="form-control" name="salutation" required >
                                  <option defaultValue value=''>Choose...</option>
                                  <option value="Mr.">Mr.</option>
                                  <option value="Mrs.">Mrs.</option>
                                  <option value="Ms.">Ms.</option>
                              </Form.Select>
                              <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                              <Form.Control.Feedback type='invalid'>Please provide your salutation.</Form.Control.Feedback>
                        </Form.Group>
                        {/*<input value={data} onChange={e=>handleChange(e,i)} />*/}
                        <Button onClick={()=>handleDelete(i)}>x</Button>
                   </div>
                )
            })}

        </div>
      </div>
    </>
  );
};

export default CheckStatus





// return(
//     <>
//     <button onClick={()=>handleAdd()}>Add</button>
//         {val.map((data,i)=>{
//             return(
//                <div>
//                     <input value={data} onChange={e=>handleChange(e,i)} />
//                     <button onClick={()=>handleDelete(i)}>x</button>
//                </div>
//             )
//         })}
//     </>
// );
// }
// export default AddDynamicInput;
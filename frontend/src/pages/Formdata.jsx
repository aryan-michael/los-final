import React from "react";
import { useState } from "react";
import axios from "axios";

function Formdata() {
  const [name, setName] = useState(""); //separate out first and last name
  const [loanType, setLoanType] = useState("");
  const [agreement, setAgreement] = useState(false);
  const [gender, setGender] = useState("Male");

  function changeValues(event) {
    let { name, type } = event.target;
    let value = type === "checkbox" ? event.target.checked : event.target.value;
    if (name === "name") setName(value);
    if (name === "loanType") setLoanType(value);
    if (name === "gender") setGender(value);
    if (name === "agreement") setAgreement(value);
  }


  // Created this submit form function which will post the data inputed in the form to the URL displayed below. Below url has a create form function which will collect the data from the form any create a new data in the form database.
  function submitForm() {
    if (name && loanType && gender && agreement) {
      const form = { name, loanType, gender, agreement }; // here form object is created
      axios.post("http://localhost:5000/form", form).then(response => console.log(response)) // Here the data is send to the url
      //The only issue is that the response we are getting from the back function is not getting displayed. The page refresh after clicking the submit form button and i think that is the problem
    } else {
      alert("Invalid Input")
    } 
  }

  return (
    <div>
      <p>Name : {name} </p>
      <p>Loan Type : {loanType}</p>
      <p>Gender : {gender}</p>
      <p>
        Do you agree to all the terms and conditions? {agreement ? "yes" : "no"}{" "}
      </p>

      <form>
        {/* name  */}
        <p>
          Name -
          <input
            type="text"
            onChange={changeValues}
            name="name"
            autoComplete="false"
          />
        </p>
        <br />

        <fieldset>
          <select name="loanType" onChange={(e) => setLoanType(e.target.value)}>
            <option disabled selected value="">
              Select
            </option>
            <option value="Home">Home</option>
            <option value="Business">Business</option>
            <option value="Education">Education</option>
            <option value="Personal">Personal</option>
          </select>
        </fieldset>

        <br />
        {/* agreement */}
        <label>
          <input type="checkbox" onChange={changeValues} name="agreement" />
          Do you agree?
        </label>

        <br />
        {/* gender */}
        <p>Gender: </p>
        <label>
          <input
            type="radio"
            onChange={changeValues}
            name="gender"
            value="Male"
            checked={gender === "Male"}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            onChange={changeValues}
            name="gender"
            value="Female"
            checked={gender === "Female"}
          />
          Female
        </label>
        {/* submit button */}
        <div class="form-example">
          <input type="submit" onClick={submitForm} value="Submit" />
          {/* Added the submit form function to the submit button */}
        </div>
      </form>
    </div>
  );
}

export default Formdata;

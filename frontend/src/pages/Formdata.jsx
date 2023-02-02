import React from "react";
import { useState } from "react";

function Formdata() {
  const [name, setName] = useState(""); //separate out first and last name
  const [loanType, setLoanType] = useState("");
  const [agreement, setAgreement] = useState(false);
  const [gender, setGender] = useState("");

  function changeValues(event) {
    let { name, type } = event.target;
    let value = type === "checkbox" ? event.target.checked : event.target.value;
    if (name === "name") setName(value);
    if (name === "loanType") setLoanType(value);
    if (name === "gender") setGender(value);
    if (name === "agreement") setAgreement(value);
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
        <label>
          <input
            type="radio"
            onChange={changeValues}
            name="gender"
            value="Others"
            checked={gender === "Others"}
          />
          Others
        </label>
        {/* submit button */}
        <div class="form-example">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default Formdata;

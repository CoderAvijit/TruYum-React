import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [tc, setTc] = useState(false);

  // State variables to track whether each field has been touched
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [PhoneTouched, setPhoneTouched] = useState(false);
  const [addressTouched, setAddressTouched] = useState(false);
  const [tcTouched, setTcTouched] = useState(false);
  // State variable for storing user data
//   const [users, setUsers] = useState([]);
  // Constants and state variable for character limit and remaining characters
  const maxCharacterLimit = 30;
  const remainingCharacters = maxCharacterLimit - address.length;
  // State variable for toggling a UI element
  // const [toggle, setToggle] = useState(false);
  const navigate = useNavigate('');






  // Function to handle form submission

  const submitData = (evt) => {
    evt.preventDefault();

    // Check for validation errors

    // Validation checks
    const nameValid = name.length > 0;
    const emailValid = email.length > 0;
    const passwordValid = password.length > 0;
    const phoneValid = phone !== "";
    const addressValid = address.length > 0;

    // Update the touched state for each field
    setNameTouched(true);
    setEmailTouched(true);
    setPasswordTouched(true);
    setPhoneTouched(true);
    setAddressTouched(true);
    setTcTouched(true);

    // Check if any field is invalid
    if (
      !(
        nameValid &&
        emailValid &&
        passwordValid &&
        phoneValid &&
        addressValid &&
        tc
      )
    ) {
      return;
    }

    // Create a new user object and update the state
    const newUser = {
      name,
      email,
      password,
      phone,
      address,
    };
    console.log("Users :",newUser);
    const regUrl = `http://localhost:8080/registration/regcontroller?name=${name}&email=${email}&location=${address}&phone=${phone}&password=${password}`;

    fetch(regUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if(response.ok){
            console.log("user is registred");
            // navigate('/success-page');
            alert("User is registred")
            navigate('/Login')
        }
    })
    .catch(error => {
        // Handle errors
        console.error("Error is ", error);
    });
    // setUsers((prevUsers) => [...prevUsers, newUser]);

    // Clear form inputs
    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setAddress("");
    setTc(false);
    // Reset the touched state for all fields
    setNameTouched(false);
    setEmailTouched(false);
    setPasswordTouched(false);
    setPhoneTouched(false);
    setAddressTouched(false);
    setTcTouched(false);
    // setToggle(true);
    
  };

  // Function to remove a user row



  return (
    <div className="register-page">
      <form
        className="formDesign" action="POST"
        style={
          name.length > 0
            ? { backgroundColor: "GrayText" }
            : { backgroundColor: "" }
        }
        onSubmit={submitData}
      >
        <input
          type="text"
          className="input-text"
          placeholder="Enter your name"
          onChange={(event) => {
            setName(event.target.value);
            setNameTouched(true); // Field is touched when the user starts typing
          }}
          value={name}
        />
        {nameTouched && !name && (
          <p className="error" style={{ color: "red" }}>
            This field is required*
          </p>
        )}
        {/* Repeat similar validation checks for other fields */}
        <input
          type="email"
          className="input-text"
          autoComplete="current-email"
          placeholder="Enter your email"
          onChange={(event) => {
            setEmail(event.target.value);
            setEmailTouched(true);
          }}
          value={email}
        />
        {emailTouched && !email && (
          <p className="error" style={{ color: "red" }}>
            This field is required*
          </p>
        )}
        <input
          type="tel"
          className="input-text"
          placeholder="Enter your Phone Number"
          onChange={(event) => {
            setPhone(event.target.value);
            setPhoneTouched(true);
          }}
          value={phone}
        />
        {PhoneTouched && !phone && (
          <p className="error" style={{ color: "red" }}>
            This field is required*
          </p>
        )}
        <input
          type="password"
          className="input-text"
          placeholder="Enter your password"
          autoComplete="current-password"
          onChange={(event) => {
            setPassword(event.target.value);
            setPasswordTouched(true);
          }}
          value={password}
        />
        {passwordTouched && !password && (
          <p className="error" style={{ color: "red" }}>
            This field is required*
          </p>
        )}
        <br />
        <textarea
          placeholder="Enter your address"
          onChange={(event) => {
            setAddress(event.target.value);
            setAddressTouched(true);
          }}
          rows="5"
          cols="33"
          maxLength={maxCharacterLimit}
          value={address}
        />
        <p>{remainingCharacters} character(s) remaining</p>{" "}
        {addressTouched && !address && (
          <p className="error" style={{ color: "red" }}>
            This field is required*
          </p>
        )}
        <br></br>
        <input
          type="checkbox"
          className="checkBox"
          onChange={(event) => {
            setTc(event.target.checked);
            setTcTouched(true);
          }}
          checked={tc}
        />{" "}
        I accept t&c <br />
        {tcTouched && !tc && (
          <p className="error" style={{ color: "red" }}>
            This field is required*
          </p>
        )}
        
        <br />
            <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;

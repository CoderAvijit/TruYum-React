import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EmailContext } from "../context/EmailContext";
function SignIn() {
  // const [id, setId] = useState("");
  const {id,setId} = useContext(EmailContext);
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Customer"); // Set an initial role
  const [passwordErr, setPasswordErr] = useState(false);
  const [idErr, setIdErr] = useState(false);
  const navigate=useNavigate('');
  const [check,SetCheck] = useState(false);
  const handleLogin = () => {
    const loginURL = `http://localhost:8080/login/logincontroller?role=${role}&email=${id}&password=${password}`;

    fetch(loginURL, {
      method: "POST", // Adjust the method as needed (e.g., POST or GET)
      headers: {
        "Content-Type": "text/json", // Set the appropriate content type
      },
      // You can add additional options like headers and request body data if needed
    })
      .then((response) => {
        if (response.ok) {
          // Handle a successful login response
          // You might want to redirect the Customer or perform other actions
          return response.json(); // Parse the response body as JSON
        } 
        
      })
      .then((data) => {
        // Handle the JSON response data (if any)
        if (data.message === "user") {
          console.log("Logged in as", data.message);
          navigate('/user-menu');
        }else if(data.message==='admin'){
          console.log("logged in as ",data.message);
          navigate('/admin-menu');
        }
        
        // You can perform actions like redirecting the user here
      })
      .catch((error) => {
        // Handle network errors or fetch request issues
        SetCheck(true);
        console.error("resgister your self:",error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!id) {
      setIdErr(true);
    } else {
      setIdErr(false);
    }

    if (!password) {
      setPasswordErr(true);
    } else {
      setPasswordErr(false);
    }

    if (id && password) {
      handleLogin(id, password);
    }
  };

  const handleIdChange = (e) => {
    setIdErr(false);
    setId(e.target.value); // Update the 'id' state
  };

  const handlePasswordChange = (e) => {
    setPasswordErr(false);
    setPassword(e.target.value); // Update the 'password' state
  };

  const register = ()=>{
    navigate('/sign-up');
  }
  return (
    <div className="login-container">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              value="Customer"
              name="role"
              checked={role === "Customer"}
              onChange={() => setRole("Customer")}
            />{" "}
            Customer
          </label>
          <label>
            <input
              type="radio"
              value="Admin"
              name="role"
              checked={role === "Admin"}
              onChange={() => setRole("Admin")}
            />{" "}
            Admin
          </label>
        </div>
        <input
          type="text"
          className="input-text"
          placeholder="ID"
          autoComplete="current-email"
          value={id}
          onChange={handleIdChange}
        />
        {idErr && <p className="error-message">This field is required**</p>}
        <input
          type="password"
          className="input-text"
          placeholder="Password"
          autoComplete="current-password"
          value={password}
          onChange={handlePasswordChange}
        />
        {passwordErr && (
          <p className="error-message">This field is required**</p>
        )}
        {check&&<p style={{color:'red'}}>Invalid user id or password</p>}
        <button type="submit">Login</button>
        <p>Don't have an account? Register here</p>
        <button onClick={register}>Register</button>
      </form>
    </div>
  );
}

export default SignIn;

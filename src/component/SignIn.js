import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EmailContext } from "../context/EmailContext";

function SignIn() {
  const { id, setId } = useContext(EmailContext);
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Customer");
  const [passwordErr, setPasswordErr] = useState(false);
  const [idErr, setIdErr] = useState(false);
  const navigate = useNavigate('');
  const [check, setCheck] = useState(false);
  const [loggedInAs, setLoggedInAs] = useState("");

  const handleLogin = () => {
    const loginURL = `https://java-backend-production-4cd7.up.railway.app/login/logincontroller`;
    const loginResponse = JSON.stringify({
      role: role,
      email: id,
      password: password
    });

    fetch(loginURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: loginResponse,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.json();
      })
      .then((data) => {
        if (data.message === "user") {
          console.log("Logged in as", data.message);
          setLoggedInAs("Logged in as Customer");
          navigate('/user-menu');
        } else if (data.message === 'admin') {
          console.log("Logged in as", data.message);
          setLoggedInAs("Logged in as Admin");
          navigate('/admin-menu');
        } else {
          console.log("Unexpected response:", data.message);
          // Handle unexpected response here
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
        setCheck(true);
        // Handle errors here
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
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordErr(false);
    setPassword(e.target.value);
  };

  const register = () => {
    navigate('/sign-up');
  };

  return (
    <div className="login-container">
      <h2>Login Form</h2>
      <div className="login-as">
        <h3>Log in As:</h3>
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
      </div>
      {loggedInAs && <p className="login-message">{loggedInAs}</p>}
      <form onSubmit={handleSubmit}>
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
        {check && <p style={{ color: 'red' }}>Invalid user id or password</p>}
        <button type="submit" className="submit-button">Login</button>
        <p className="register-link">Don't have an account? <a href="#" onClick={register}>Register here</a></p>
      </form>
    </div>
  );  
}

export default SignIn;

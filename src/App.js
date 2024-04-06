// Import necessary dependencies
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./component/NavBar";
import SidePanel from "./component/SidePanel";
import HomePage from "./component/HomePage";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import SuccessStatus from "./component/SuccessStatus";
import UserMenu from "./component/UserMenu";
import AdminMenu from "./component/AdminMenu";
import ViewCart from "./component/ViewCart";
import { EmailContext } from "./context/EmailContext";
import AboutUs from "./component/AboutUs";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [id, setId] = useState("");

  const addtocart = (name) => {
    console.log("email id is : ", id);
    fetch(`https://java-backend-production-4cd7.up.railway.app/customercontroller/addtocart?name=${name}&email=${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("items are", data.message);
        setCartItems([...cartItems, data.message]);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log("Items are :", cartItems);
  };

  return (
    <Router>
      <div className="app-container">
        {/* Navbar */}
        <NavBar />

        {/* Side Panel and Main Content */}
        <div className="main-container">
          {/* Side Panel */}
          <div className="side-panel">
            <SidePanel />
          </div>

          {/* Main Content */}
          <div className="main-content">
            {/* Wrap Routes in EmailContext.Provider to provide context */}
            <EmailContext.Provider value={{ id, setId }}>
              <Routes>
                {/* Define routes for different component */}
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/success-page" element={<SuccessStatus />} />
                <Route
                  path="/user-menu"
                  element={<UserMenu setCartItems={setCartItems} addtocart={addtocart} />}
                />
                <Route path="/admin-menu" element={<AdminMenu />} />
                <Route path="/view-cart" element={<ViewCart cartItems={cartItems} />} />
                <Route path="/about-us" element={<AboutUs/>}/>
              </Routes>
            </EmailContext.Provider>
          </div>
          {/* Footer */}
        <footer className="footer">
          <p>This site is designed and developed by Avijit Rana @2024</p>
        </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;

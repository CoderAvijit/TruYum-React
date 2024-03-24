import "./App.css";
import SignIn from "./component/SignIn";
import HomePage from "./component/HomePage";
import SignUp from "./component/SignUp";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SuccessStatus from "./component/SuccessStatus";
import UserMenu from "./component/UserMenu";
import AdminMenu from "./component/AdminMenu";
import NavBar from "./component/NavBar";
import ViewCart from "./component/ViewCart";
import React from "react";
import { useState } from "react";
import { EmailContext } from "./context/EmailContext";
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [id, setId] = useState("");
  // const navigate = useNavigate("");
  const addtocart = (name) => {
    console.log("email id is : ",id);
    fetch(`http://localhost:8080/customercontroller/addtocart?name=${name}&email=${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log("items are",data.message);
        setCartItems(...cartItems, data.message);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log("Items are :" + cartItems);
  };
  // console.log("Cart Items are: ",cartItems);
  // const editItem=()=>{
  //   navigate('/edit-item');
  // }
  return (
    // <React.StrictMode>

    <Router>
      <EmailContext.Provider value={{id,setId}}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/Login" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/success-page" element={<SuccessStatus />} />
        <Route
          path="/user-menu"
          element={
            <UserMenu setCartItems={setCartItems} addtocart={addtocart} />
          }
        />
        <Route path="/admin-menu" element={<AdminMenu />} />
        <Route path="/view-cart" element={<ViewCart cartItems={cartItems} />} />
      </Routes>
      </EmailContext.Provider>
    </Router>
  );
}

export default App;

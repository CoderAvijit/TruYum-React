import React, { useState, useEffect, useContext } from "react";
import { EmailContext } from "../context/EmailContext";
import { useNavigate } from "react-router-dom";

export default function ViewCart() {
  const [cartItems, setCartItems] = useState([]);
  const { id } = useContext(EmailContext);
  const navigate = useNavigate();

  // Calculate total price
  const calculateTotalPrice = () => {
    let total = 0;
    if (cartItems&&cartItems.length > 0) {
      total = cartItems.reduce((acc, item) => acc + item.price, 0);
    }
    return total;
  };

  const remove = (name) => {
    fetch(
      `http://localhost:8080/customercontroller/removefromcart?name=${name}&email=${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCartItems(data.message);
        console.log("Item deleted successfully", name);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    fetch(`http://localhost:8080/customercontroller/viewcart?email=${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCartItems(data.message);
      })
      .catch((error) => {});
  }, [id]);

  const totalPrice = calculateTotalPrice(); // Calculate total price

  return (
    <div className="view-cart">
      <h1>Cart</h1>
      <p>
        <strong>Logged in as:</strong> <u>{id}</u>&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={() => navigate("/Login")}>Log Out</button>
      </p>
      <table border={1}>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Availability</th>
            <th>Free Delivery</th>
            <th>Date of Launch</th>
            <th>Price</th>
          </tr>

          {cartItems &&
            cartItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.availability}</td>
                <td>{item.freeDelivery}</td>
                <td>{item.dateOfLaunch}</td>
                <td>{item.price}</td>
                <td>
                  <button onClick={() => remove(item.name)}>remove</button>
                </td>
              </tr>
            ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5}>Total Price: {totalPrice}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

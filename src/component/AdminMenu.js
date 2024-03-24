import React, { useEffect, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

export default function AdminMenu() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const [index, setIndex] = useState(null);
  const [id, setId] = useState(null);
  const [check, setCheck] = useState(false);
  const [name, setName] = useState(""); // Added state for the name input field
  const [price, setPrice] = useState(""); // Added state for the name input field
  const [availability, setAvailability] = useState(""); // Added state for the name input field
  const [freeDelivery, setFreeDeliovery] = useState(""); // Added state for the name input field
  const [dateOfLaunch, setDateOfLaunch] = useState(""); // Added state for the name input field

  useEffect(() => {
    fetch(`http://localhost:8080/admin/getallitems`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        setItems(data.message);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const editItem = (index) => {
    setIndex(index);
    setCheck(true);
    const selectedItem = items[index];
    setName(selectedItem.name);
    setPrice(selectedItem.price);
    setAvailability(selectedItem.availability);
    setFreeDeliovery(selectedItem.freeDelivery);
    setDateOfLaunch(selectedItem.dateOfLaunch);
    setId(selectedItem.id);
  };

  function Update(e) {
    e.preventDefault();
    // Create a copy of the items array to avoid directly modifying the state
    const updatedItems = [...items];
    // Update the item at the selected index with the new values
    updatedItems[index] = {
      ...updatedItems[index],
      name,
      price,
      availability,
      freeDelivery,
      dateOfLaunch,
    };
    // Update the state with the modified items
    setItems(updatedItems);

    const regUrl = `http://localhost:8080/admin/updateItem?id=${id}&name=${name}&price=${price}&availability=${availability}&freeDelivery=${freeDelivery}&dateOfLaunch=${dateOfLaunch}`;

    fetch(regUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          // navigate('/success-page');
          alert("Item is modified");
          navigate("/success-page");
        }
      })
      .catch((error) => {
        // Handle errors
        console.error("Error is ", error);
      });
    // Reset the form and hide the edit section
    setCheck(false);
  }

  return !check ? (
    <div className="admin-menu">
      <h1>Admin Menu</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Availability</th>
            <th>free_delivery</th>
            <th>date_of_launch</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.availability}</td>
              <td>{item.freeDelivery}</td>
              <td>{item.dateOfLaunch}</td>
              <td>
                <button onClick={() => editItem(index)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div className="edit-item">
      <h1 style={{ textAlign: "center" }}>Edit Menu</h1>
      <form onSubmit={Update}>
        <p>Name: </p>
        <input
          className="input-text1"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name" // Added a placeholder for the input
        />
        <p>Price: </p>
        <input
          className="input-text1"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price" // Added a placeholder for the input
        />
        <p>Availability: </p>
        <input
          className="input-text1"
          type="text"
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
          placeholder="Availability" // Added a placeholder for the input
        />
        <p>Free Delivery: </p>
        <input
          className="input-text1"
          type="text"
          value={freeDelivery}
          onChange={(e) => setFreeDeliovery(e.target.value)}
          placeholder="Free Delivery" // Added a placeholder for the input
        />
        <p>Date Of Launch: </p>
        <input
          className="input-text1"
          type="text"
          value={dateOfLaunch}
          onChange={(e) => setDateOfLaunch(e.target.value)}
          placeholder="Date Of Launch" // Added a placeholder for the input
        />
        <button type="Submit">Update</button>
      </form>
    </div>
  );
}

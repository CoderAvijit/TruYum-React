import { useState,useEffect } from "react";

// import React, { useEffect, useState } from "react";

export default function UserMenu({ addtocart }) {
  console.log("Before items: ");
 const [items,setItems] = useState([]);
//  const [cartItems,setCartItems] = useState([]);
useEffect(() => {
    fetch(`http://localhost:8080/customercontroller/showitems`)
      .then((response) => response.json())
      .then((data) => {
        setItems(data.message);
      })
      .catch((error) => {
        console.error("Error Message ", error);
      });
  }, []);

  // const addtocart=(name)=>{
  //   fetch(`http://localhost:8080/customercontroller/addtocart?name=${name}`,{
  //     method: "POST",
  //     headers: {
  //         "Content-Type": "application/json"
  //     }
  // }).then((response=>{
  //     return response.json();

  //   })).then((data=>{
  //     console.log(data.message);
  //     setCartItems(data.message);
  //   })).catch((error=>{
  //     console.error(error);
  //   }))
  // }
  
  // const getCartItems=()=>{
  //   // console.log("CartItems: ",cartItems);
  //   return cartItems;

  // }

  return (
    <div className="items-menu">
      <h1>items Menu</h1>
      {/* <button onClick={getData}>Get Data</button> */}
      <table border={1}>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Availability</th>
          <th>free_delivery</th>
          <th>date_of_launch</th>
        </tr>
        <tbody>
        {console.log(items)}
          {items.map((items, index) => (
            
            <tr>
              <td>{items.name}</td>
              <td>{items.price}</td>
              <td>{items.availability}</td>
              <td>{items.freeDelivery}</td>
              <td>{items.dateOfLaunch}</td>
              <td>
                <button onClick={()=>{addtocart(items.name)}}>Add to Cart</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

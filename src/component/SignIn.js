import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  
  const fetchItems = async () => {
    try {
      const response = await fetch('https://java-backend-production-4cd7.up.railway.app/customercontroller/showitems');
      if (!response.ok) {
        throw new Error('Failed to fetch items');
      }
      const data = await response.json();
      setItems(data.message);
    } catch (error) {
      console.error('Fetch Error:', error);
      // Handle fetch error
    }
  };

  return (
    <div>
      <button onClick={fetchItems}>Fetch Items</button>
      <div>
        {items.map(item => (
          <div key={item.id}>
            <p>Name: {item.name}</p>
            <p>Price: {item.price}</p>
            <p>Availability: {item.availability}</p>
            <p>Date of Launch: {item.dateOfLaunch}</p>
            <p>Free Delivery: {item.freeDelivery}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

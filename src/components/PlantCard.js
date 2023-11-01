import React, { useState } from "react";

function PlantCard({plant, handleDelete}) {

  const {name, image ="https://via.placeholder.com/400", price} = plant

  const [toggle, setToggle] = useState(true)

  function toggleButton() {
    setToggle(!toggle)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {toggle ? (
        <button onClick={toggleButton} className="primary">In Stock</button>
      ) : (
        <button onClick={toggleButton}>Out of Stock</button>
      )}
      <button key={plant.id} onClick={()=>handleDelete(plant.id)}>Delete</button>
    </li>
  );
}

export default PlantCard;

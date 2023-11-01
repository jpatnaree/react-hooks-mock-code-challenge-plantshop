import React, { useState } from "react";

function PlantCard({plant}) {

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
    </li>
  );
}

export default PlantCard;

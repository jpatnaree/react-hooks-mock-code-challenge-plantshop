import React, { useState } from "react";

function NewPlantForm({plants, setPlants}) {

  const [newPlant, setNewPlant] = useState({});

  function handleInput(e) {
    const {name, value} = e.target
    if(name === "price") {
      setNewPlant({...newPlant, [name]: Number(value)})
    } else {
      setNewPlant({...newPlant, [name]: value})
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:6001/plants`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
    .then(resp => resp.json())
    .then(addedPlant => {
      setPlants([...plants, addedPlant])
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleInput} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleInput} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleInput} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

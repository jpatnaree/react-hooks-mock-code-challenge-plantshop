import React, { useState } from "react";

function NewPlantForm({retrievePlants}) {

  const [newPlant, setNewPlant] = useState({name: '', image: '', price: ''})

  function changePlant(event) {
    setNewPlant({...newPlant, [event.target.name]: event.target.value})
    console.log(newPlant)
  }

  function postPlant(event) {
    event.preventDefault()
    fetch('http://localhost:6001/plants' ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newPlant)
    })
    .then(() => {retrievePlants()})

  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={postPlant} >
        <input onChange={changePlant} type="text" name="name" placeholder="Plant name" />
        <input onChange={changePlant} type="text" name="image" placeholder="Image URL" />
        <input onChange={changePlant} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
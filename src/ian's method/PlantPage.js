import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";



function PlantPage() {

  const [allPlants, setAllPlants] = useState([])
  const [searchText, setSearchText] = useState('')

  const displayPlants = allPlants.filter(plant => plant.name.toLowerCase().includes(searchText.toLowerCase()))

  function retrievePlants() {
    fetch('http://localhost:6001/plants')
    .then(r => r.json())
    .then(data => {setAllPlants(data)})
  }

  useEffect(() => {retrievePlants()},[])

  return (

    <main>
      <NewPlantForm retrievePlants={retrievePlants}/>
      <Search setSearchText={setSearchText}/>
      <PlantList displayPlants={displayPlants}/>
    </main>
  );
}

export default PlantPage;
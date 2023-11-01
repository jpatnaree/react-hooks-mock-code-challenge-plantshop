import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [searchPlant, setSearchPlant] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(resp => resp.json())
    .then(plantsJson => {
      setPlants(plantsJson)
    })
  }, [])

  function handleSearch(e) {
    setSearchPlant(e.target.value)
  }
  
  const filteredSearch = plants.filter(plant => {
    return plant.name.toUpperCase().includes(searchPlant.toUpperCase())
  })

  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants} />
      <Search handleSearch={handleSearch} />
      <PlantList plants={filteredSearch} />
    </main>
  );
}

export default PlantPage;

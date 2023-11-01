import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, handleDelete}) {

  const plantsDisplay = plants.map(plant => {
    return <PlantCard key={plant.id} plant={plant} handleDelete={handleDelete} />
  })

  return (
    <ul className="cards">{plantsDisplay}</ul>
  );
}

export default PlantList;

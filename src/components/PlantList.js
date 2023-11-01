import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

  const plantsDisplay = plants.map(plant => {
    return <PlantCard key={plant.id} plant={plant} />
  })

  return (
    <ul className="cards">{plantsDisplay}</ul>
  );
}

export default PlantList;

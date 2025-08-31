import React from "react";
import Card from "./Card";
const Restaurants = ({ restaurants }) => {
  return (
    <div className="flex ">  
      <div className="flex flex-row justify-center gap-4 h-120 px-50">
      {restaurants && Array.isArray(restaurants) &&
          restaurants.map((restaurants) => {
            return (
              <Card
                key={restaurants.id}
                id={restaurants.id}
                title={restaurants.title}
                type={restaurants.type}
                imageUrl={restaurants.imageUrl}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Restaurants;

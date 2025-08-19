import React, { useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2"; 
import restaurantService from "../services/restaurant.service";

const Add = () => {
  const [restaurant, setRestaurant] = useState({
    title: "",
    type: "",
    img: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

    const newRestaurant = {
    title: restaurant.title,
    type: restaurant.type,
    imageUrl: restaurant.imageUrl,
  };

   const navigate = useNavigate();


  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/restaurants", {
        method: "POST",
        headers: {
    "Content-Type": "application/json",
  },
        body: JSON.stringify(restaurant),
      });
      if (response.ok) {
        alert("Restaurannt Adds succesfully!!!");
        setRestaurant({
          title: "",
          type: "",
          img: "",
        });
        navigate("/");
      
  } else {
        const errorData = await response.json();
        Swal.fire({
          title: "Error adding restaurant",
          icon: "error",
          text: errorData.message || "Something went wrong!",
        });
      }
    } catch (error) {
      console.error("Error during add:", error);
      Swal.fire({
        title: "Error adding restaurant",
        icon: "error",
        text: error.message || "Something went wrong!",
      });
    }
  };
  return (
    <div className="container mx-auto">
      <div class="relative flex flex-col justify-center h-screen overflow-hidden">
        <div class="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-lg">
          <h1 class="text-2xl font-semibold text-center text-gray-700 mb-6">
            Add Item
          </h1>
          <form class="space-y-4"  onSubmit={handleSubmit}>
            <div>
              <label class="label">
                <span class="text-base label-text">Title</span>
              </label>

              <input
                type="text"
                placeholder="Enter title"
                class="w-full input input-bordered"
                name="title"
                onChange={handleChange}
              />
            </div>

            <div>
              <label class="label">
                <span class="text-base label-text">Type</span>
              </label>
              <input
                type="text"
                placeholder="Enter type"
                class="w-full input input-bordered"
                name="type"
                onChange={handleChange}
              />
            </div>

            <div>
              <label class="label">
                <span class="text-base label-text">Image URL</span>
              </label>
              <input
                type="text"
                ClassName="grow"
                class="w-full input input-bordered"
                onChange={handleChange}
                placeholder="Restaurant Img"
                name="img"
              />

              {restaurant.img && (
                <div ClassName="flex items-center gap-2">
                  <img ClassName="h-32" src={restaurant.img}></img>
                </div>
              )}
            </div>

            <div class="flex justify-center items-center my-6 space-x-4">
              <button
                type="submit"
                class="btn bg-green-500 text-white px-6"
        
              >
                Add
              </button>
              <a href={"/"} button type="button" class="btn bg-red-500 text-white px-6">
                Cancel
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;

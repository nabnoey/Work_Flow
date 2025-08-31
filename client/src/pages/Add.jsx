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

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // ป้องกัน page reload
    const newRestaurant = {
      title: restaurant.title,
      type: restaurant.type,
      imageUrl: restaurant.img, // map img -> imageUrl
    };

    try {
      const response = await fetch("http://localhost:5001/api/v1/restaurants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRestaurant),
      });

      if (response.ok) {
        Swal.fire({
          title: "Success",
          text: "Restaurant added successfully!",
          icon: "success",
        });
        setRestaurant({ title: "", type: "", img: "" });
        navigate("/"); // กลับหน้า Home
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
      <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-lg">
          <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">
            Add Item
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Title */}
            <div>
              <label className="label">
                <span className="text-base label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="Enter title"
                className="w-full input input-bordered"
                name="title"
                value={restaurant.title}
                onChange={handleChange}
                required
              />
            </div>

            {/* Type */}
            <div>
              <label className="label">
                <span className="text-base label-text">Type</span>
              </label>
              <input
                type="text"
                placeholder="Enter type"
                className="w-full input input-bordered"
                name="type"
                value={restaurant.type}
                onChange={handleChange}
                required
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="label">
                <span className="text-base label-text">Image URL</span>
              </label>
              <input
                type="text"
                placeholder="Restaurant Image URL"
                className="w-full input input-bordered"
                name="img"
                value={restaurant.img}
                onChange={handleChange}
              />
              {restaurant.img && (
                <div className="flex items-center gap-2 mt-2">
                  <img
                    className="h-32 rounded-md shadow-md"
                    src={restaurant.img}
                    alt="Preview"
                  />
                </div>
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-center items-center my-6 space-x-4">
              <button
                type="submit"
                className="btn bg-green-500 text-white px-6 hover:scale-105 transition-transform"
              >
                Add
              </button>
              <button
                type="button"
                className="btn bg-red-500 text-white px-6 hover:scale-105 transition-transform"
                onClick={() => navigate("/")}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;

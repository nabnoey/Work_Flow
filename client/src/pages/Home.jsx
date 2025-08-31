import React, { useState, useEffect } from "react";
import Restaurants from "../components/Restaurants";
import restaurantService from "../services/restaurant.service";
import Swal from "sweetalert2";
import Footer from "../components/Footer";
import axios from "axios";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const handleSearch = (keyword) => {
    if (keyword === "") {
      setFilteredRestaurants(restaurants);
      return;
    }
    const result = restaurants.filter((restaurant) => {
      return (
        restaurant.title.toLowerCase().includes(keyword.toLowerCase()) ||
        restaurant.type.toLowerCase().includes(keyword.toLowerCase())
      );
    });
    setFilteredRestaurants(result);
  };

  useEffect(() => {
  const getAllRestaurant = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/v1/restaurants");
      const data = await response.json();
      setRestaurants(data);
      setFilteredRestaurants(data);
    } catch (error) {
      Swal.fire({
        title: "Get All Restaurant",
        icon: "error",
        text: error.message,
      });
    }
  };
  getAllRestaurant();
}, []);


  return (
    <div className="w-full">

      {/* Hero Section */}
      <div
        className="hero h-screen mb-12 relative"
        style={{
          backgroundImage: "url('img/img.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="hero-content text-center text-white relative z-10 px-4">
          <div className="max-w-2xl">
            <h1 className="mb-6 text-5xl md:text-6xl font-extrabold drop-shadow-lg">
              Hello there
            </h1>
            <p className="mb-6 text-lg md:text-xl drop-shadow-md">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary btn-lg hover:scale-105 transition-transform shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* LOVINGLY GROWN Section */}
      <div className="bg-green-50 py-20 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800">
            LOVINGLY GROWN
          </h2>
          <p className="text-lg md:text-xl text-gray-700 italic">
            "ปลูกด้วยรัก ดูแลด้วยใจ"
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
            จากความตั้งใจจริงที่จะปลูกผัก ผลไม้ปลอดภัย รสชาติอร่อยและมีคุณภาพสูงและการเพาะปลูกที่เน้นความปลอดภัยต่อผู้บริโภคและใส่ใจในสิ่งแวดล้อม...
            {/* สามารถใส่เนื้อหาเต็ม */}
          </p>
        </div>
      </div>

  

      {/* Search Box */}
      <div className="flex justify-center my-8">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="flex items-center px-3 bg-gray-100">
            <svg
              className="w-6 h-6 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8" strokeWidth="2" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="ค้นหาผลไม้หรือร้านอาหาร..."
            className="flex-1 px-4 py-3 outline-none text-gray-700"
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-primary rounded-none rounded-r-lg px-6 hover:scale-105 transition-transform"
          >
            ค้นหา
          </button>
        </form>
      </div>

      {/* Recommended Fruits Title */}
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-green-800">
          ผลไม้แนะนำ
        </h3>
      </div>

      {/* Carousel */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <Restaurants restaurants={filteredRestaurants} />
      </div>

      {/* Restaurants List
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-green-800">
          ร้านอาหารและผลไม้
        </h3>
      </div> */}
   
   

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import Restaurants from "../components/Restaurants";
import restaurantService from "../services/restaurant.service";
import Swal from "sweetalert2";
import Footer from "../components/Footer";

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
        const response = await restaurantService.getAllRestaurant();
        if (response.status === 200) {
          setRestaurants(response.data);
          setFilteredRestaurants(response.data);
        }
      } catch (error) {
        Swal.fire({
          title: "Get All Restaurant",
          icon: "error",
          text: error?.response?.data?.message || error.message,
        });
      }
    };
    getAllRestaurant();
  }, []);

  return (
    <div className="w-full">

      {/* Hero Section */}
      <div
        className="hero h-screen mb-12"
        style={{
          backgroundImage:
            "url('img/img.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-50"></div>
        <div className="hero-content text-center text-white px-4">
          <div className="max-w-2xl">
            <h1 className="mb-6 text-5xl md:text-6xl font-bold">Hello there</h1>
            <p className="mb-6 text-lg md:text-xl">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary btn-lg">Get Started</button>
          </div>
        </div>
      </div>

      {/* LOVINGLY GROWN Section */}
<div className="bg-green-50 py-16 px-4">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
      LOVINGLY GROWN
    </h2>
    <p className="text-lg md:text-xl text-gray-700 mb-6 italic">
      "ปลูกด้วยรัก ดูแลด้วยใจ"
    </p>
    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
      จากความตั้งใจจริงที่จะปลูกผัก ผลไม้ปลอดภัย รสชาติอร่อยและมีคุณภาพสูงและการเพาะปลูกที่เน้นความปลอดภัยต่อผู้บริโภคและใส่ใจในสิ่งแวดล้อม จึงทำให้เกิดคอนเซ็ปที่ว่า “LOVINGLY GROWN (ปลูกด้วยความรัก)” ความใส่ใจในการเพาะปลูกในทุกขั้นตอนเริ่มตั้งแต่คัดเลือกเมล็ดพันธุ์ที่ดี วิธีเพาะปลูกที่เป็นมิตรกับสิ่งแวดล้อมไม่ก่อมลภาวะหลังจากเก็บเกี่ยว เราเลือกที่จะไม่เผาขยะและเลือกใช้วิธีไถกลบเศษพืชที่เหลือ เช่น ตอซังข้าวโพด เศษผัก ลงแปลงปลูกเพื่อหมักเป็นปุ๋ยสด แทนการนำเศษพืชไปเผา เพื่อป้องกันการเกิดก๊าซคาร์บอนไดอ็อกไซด์ ในด้านการบรรจุภัณฑ์เราได้เริ่มใช้บรรจุภัณฑ์จากกระดาษบางส่วน ใช้หลอดกระดาษ เลือกใช้ถุงหูหิ้วจากไบโอแทนถุงพลาสติกและพัฒนาขั้นตอนการจัดส่งที่รวดเร็วเพื่อความสดใหม่ของสินค้า เพื่อสุขภาพที่ดีของลูกค้า เราจึงคัดสรรสิ่งที่ดีที่สุด และส่งมอบผัก ผลไม้สดใหม่ที่ปลอดสาร 100% ที่มีคุณประโยชน์ช่วยบำรุงร่างกาย ผิวพรรณให้สดใส เป็นคุณค่าที่ส่งมอบสิ่งดีที่สุดให้คนที่คุณรัก อีกทั้งยังมีการส่งเสริมให้เกษตรกรพันธมิตรในพื้นที่ให้มีรายได้เพิ่มบนพื้นฐานของธุรกิจที่เป็นธรรม
    </p>
  </div>
</div>


      {/* Search Box */}
      <div className="mb-10 flex justify-center">
        <label className="input flex items-center gap-2 w-full max-w-2xl">
          <svg
            className="h-5 opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            name="keyword"
            onChange={(e) => handleSearch(e.target.value)}
            required
            placeholder="Search restaurants..."
            className="flex-1 outline-none bg-white bg-opacity-30 placeholder-white text-white px-3 py-2 rounded-md"
          />
        </label>
      </div>

     {/* Recommended Fruits Title */}
<div className="text-center mb-8">
  <h3 className="text-2xl md:text-3xl font-semibold text-green-800">
    ผลไม้แนะนำ
  </h3>
</div>

    {/* Carousel */}
<div className="flex justify-center mb-12">
  <div className="carousel carousel-end rounded-box max-w-4xl w-full">
    {[
      "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
      "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
      "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
      "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
      "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
      "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
      "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
    ].map((url, index) => (
      <div className="carousel-item" key={index}>
        <img src={url} alt={`Slide ${index + 1}`} className="rounded-lg" />
      </div>
    ))}
  </div>
</div>

<Footer/>

      {/* Restaurants List */}
      <div className="mb-16">
        <Restaurants restaurants={filteredRestaurants} />
      </div>
    </div>
  );
};

export default Home;

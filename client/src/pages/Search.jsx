import React, { useState } from "react";
import Card from "../components/Card";

const Search = ({ data, onSearch, onDelete }) => {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch && onSearch(keyword);
  };

  // กรองข้อมูลตาม keyword
  const filteredData = data?.filter((item) =>
    item.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="px-4">
      {/* Search Box */}
      <div className="flex justify-center my-8">
        <form
          onSubmit={handleSubmit}
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
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-primary rounded-none rounded-r-lg px-6 hover:scale-105 transition-transform"
          >
            ค้นหา
          </button>
        </form>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredData?.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            type={item.type}
            imageUrl={item.image}
            onDelete={onDelete} // callback จาก parent
          />
        ))}
      </div>
    </div>
  );
};

export default Search;

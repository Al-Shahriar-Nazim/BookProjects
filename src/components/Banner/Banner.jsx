import React from "react";
import bookImage from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="flex justify-around items-center py-10">
      <div>
        <h1 className="text-6xl font-bold">Welcome to the Book Store</h1>
        <p className="text-xl py-4 text-gray-600">
          Find your next great read here!
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          click me..!
        </button>
      </div>
      <div>
        <img src={bookImage} alt="Books" className="rounded-lg shadow-2xl" />
      </div>
    </div>
  );
};

export default Banner;

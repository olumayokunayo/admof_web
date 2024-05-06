import React from "react";
import eggs from "../../assets/eggs.jpg";
import chick from "../../assets/chick.jpg";
import chicken from "../../assets/chicken1.png";

const Reviews = () => {
  return (
    <section>
      <div className="flex items-center justify-between">
        <div className="bg-[#0e584b] w-1/2 h-screen  flex flex-col justify-center p-4">
          <div className="review-slide">
            <h1 className="text-4xl">WHAT OUR CLIENTS SAY</h1>
            <div className="review">
              <p className="text-white">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                viverra non odio congue aliquet."
              </p>
              <p className="text-gray-300">- John Doe, New York</p>
            </div>
            <div className="review">
              <p className="text-white">
                "Phasellus ornare dolor blandit dui ultricies convallis."
              </p>
              <p className="text-gray-300">- Jane Smith, Los Angeles</p>
            </div>
            {/* Add more reviews as needed */}
          </div>
        </div>
        <div className="bg-[#ccc] w-1/2 flex justify-center items-center">
          <div className="grid grid-cols-3 gap-1">
            <div className="bg-red-200 ">
              <img src={chick} alt="poultry" />
            </div>
            <div className="bg-blue-200 flex items-center justify-center">
              <img src={chick} alt="poultry" />
            </div>
            <div className="bg-green-200  flex items-center justify-center">
              <img src={chick} alt="poultry" />
            </div>
            <div className="bg-yellow-200  flex items-center justify-center">
              <img src={chick} alt="poultry" />
            </div>
            <div className="bg-purple-200  flex items-center justify-center">
              <img src={chick} alt="poultry" />
            </div>
            <div className="bg-indigo-200  flex items-center justify-center">
              <img src={chick} alt="poultry" />
            </div>
            <div className="bg-pink-200 flex items-center justify-center">
              <img src={chick} alt="poultry" />
            </div>
            <div className="bg-gray-200  flex items-center justify-center">
              <img src={chick} alt="poultry" />
            </div>
            <div className="bg-orange-200  flex items-center justify-center">
              <img src={chick} alt="poultry" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

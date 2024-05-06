import React from "react";
// import poultry from "../../assets/poultry1.png";
// import poultry1 from "../../assets/poultry2.jpg";
import poultry from "../../assets/poultry.jpg";
import eggs from "../../assets/eggs.jpg";
import chick from "../../assets/chick.jpg";
import chicken from "../../assets/chicken1.png";

const Services = () => {
  return (
    <section className="h-screen  pt-20 px-32 bg-[#fff8e7]">
      <div className="flex items-center justify-center gap-10">
        <h1 className="text-8xl text-[#0e584b] mb-6 font-extrabold tracking-wide break-normal w-11/12 text-center">
          Services for the best clients.
        </h1>
      </div>
      <div className="flex px-32 items-center justify-around pt-20 gap-4">
        <div className="bg-[#222] rounded-md shadow-lg p-4 relative flex flex-col items-center justify-center">
          <span className="absolute top-[-10px] right-50 bg-[#0e584b] p-2 rounded-full px-2 text-center text-white font-bold">
            POULTRY
          </span>
          <img
            src={poultry}
            alt="poultry"
            className="w-full h-full object-cover rounded-2xl"
          />
          <h1 className="text-[#fff] text-2xl font-bold pt-4">
            The Best Poultry
          </h1>
          <p className="text-[#ccc] pt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            viverra non odio congue aliquet. In scelerisque mi sed condimentum
            lobortis. Phasellus ornare dolor blandit dui ultricies convallis.
          </p>
        </div>

        <div className="bg-[#222] rounded-md shadow-lg p-4 relative flex flex-col items-center justify-center">
          <span className="absolute top-[-10px] right-50 bg-[#0e584b] p-2 rounded-full w-20 text-center text-white font-bold">
            CHICKS
          </span>
          <img
            src={poultry}
            alt="poultry"
            className="w-full h-full object-cover rounded-2xl"
          />
          <h1 className="text-[#fff] text-2xl font-bold pt-4">Chick Quality</h1>
          <p className="text-[#ccc] pt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            viverra non odio congue aliquet. In scelerisque mi sed condimentum
            lobortis. Phasellus ornare dolor blandit dui ultricies convallis.{" "}
          </p>
        </div>
        <div className="bg-[#222] rounded-md shadow-lg p-4 relative flex flex-col items-center justify-center">
          <span className="absolute top-[-10px] right-50 bg-[#0e584b] p-2 rounded-full w-20 text-center text-white font-bold">
            EGGS
          </span>
          <img
            src={poultry}
            alt="poultry"
            className="w-full h-full object-cover rounded-2xl"
          />
          <h1 className="text-[#fff] text-2xl font-bold pt-4">
            Pasteurized Egg
          </h1>
          <p className="text-[#ccc] pt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            viverra non odio congue aliquet. In scelerisque mi sed condimentum
            lobortis. Phasellus ornare dolor blandit dui ultricies convallis.{" "}
          </p>
        </div>
        {/* <div className="bg-[#222] rounded-md shadow-lg shadow-[#0e584b] p-4">
          <img
            src={poultry}
            alt="poultry"
            className="w-full h-full object-cover rounded-2xl"
          />
          <h1 className="text-[#fff] text-2xl font-bold pt-4">
            Quality Chicks
          </h1>
          <p className="text-[#ccc] pt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            viverra non odio congue aliquet. In scelerisque mi sed condimentum
            lobortis. Phasellus ornare dolor blandit dui ultricies convallis.{" "}
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Services;

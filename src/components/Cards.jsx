import React from "react";
import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";
const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-6 rounded-lg hover:scale-105 duration-300">
          <img src={single} alt="/" className="w-20 mx-auto  bg-white" />
          <h2 className="text-xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-3xl font-bold">₹149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-6">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] text-black font-medium rounded-md mx-auto md:mx-0 my-6 py-2 w-[200px]">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300">
          <img src={single} alt="/" className="w-20 mx-auto  bg-white" />
          <h2 className="text-xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-3xl font-bold">₹499</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-6">1 TB Storage</p>
            <p className="py-2 border-b mx-8">2 Granted User's</p>
            <p className="py-2 border-b mx-8">Send up to 5 GB</p>
          </div>
          <button className="bg-[#00df9a] text-black font-medium rounded-md mx-auto md:mx-0 my-6 py-2 w-[200px]">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-6 rounded-lg hover:scale-105 duration-300">
          <img src={single} alt="/" className="w-20 mx-auto  bg-white" />
          <h2 className="text-xl font-bold text-center py-8">Triple User</h2>
          <p className="text-center text-3xl font-bold">₹799</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-6">2TB GB Storage</p>
            <p className="py-2 border-b mx-8">3 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 10 GB</p>
          </div>
          <button className="bg-[#00df9a] text-black font-medium rounded-md mx-auto md:mx-0 my-6 py-2 w-[200px]">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

import React from "react";
import Typed from "react-typed";
const Hero = () => {
  return (
    <div className="text-white">
      <div
        className="max-w-[800px] mt-[96px]
        w-full h-screen mx-auto text-center flex flex-col"
      >
        <p className="text-[#00df9a] font-bold p-2">Master data analystics</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            lopp
          />
        </div>
        
    <p className="md:text-2xl text-xl font-bold text-gray-500">Monitor your data to increase revenue</p>
    <button className="bg-[#00df9a] text-black font-medium rounded-md mx-auto my-6 py-3 w-[200px]">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;

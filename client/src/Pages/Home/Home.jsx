import React from "react";
import { Link } from "react-router-dom";
import HomeImg from "../../assets/Home.jpg";

const Home = () => {
  return (
    <div className="w-full min-h-[80vh] flex flex-wrap gap-10 items-center justify-around">
      <div className="flex flex-col gap-10 p-10 items-center">
        <h5 className=" text-2xl">Easy buy & sell products </h5>
        <h1 className="text-4xl font-black font-mono max-sm:text-center ">
          <span className="text-blue-600">Buy</span> Better.{" "}
          <span className="text-blue-600">Sell</span> Smarter.
        </h1>

        <Link
          to="/buy"
          className="px-4 py-2 font-bold w-20 bg-blue-500 text-white 
          rounded-md text-center"
        >
          BUY
        </Link>
      </div>
      <div className="w-1/2 h-full overflow-hidden flex items-center justify-center">
        <img src={HomeImg} alt="home image" />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import chair from "../../assets/images/chair.png";

const Banner = () => {
  return (
    <div className="hero container mx-auto min-h-screen md:p-4 p-4 bg-hero">
      <div className="grid md:grid-cols-2 flex-row-reverse gap-5">
        <div>
          <h1 className="text-6xl font-bold ">Your New Smile Starts Here</h1>
          <p className="py-6 font-medium">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">
            Get Started
          </button>
        </div>
        <img src={chair} alt="" className="rounded-lg shadow-2xl" />
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import treatment from "../../assets/images/treatment.png";
const Treatment = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 bg-base-100 shadow-xl my-72 md:mx-20 rounded items-center">
      <div className="">
        <img className="rounded-lg" src={treatment} alt="" />
      </div>
      <div className="text-center p-11 md:relative">
        <h2 className="text-5xl font-semibold my-4 ">
          Exceptional Dental Care, on Your Terms
        </h2>
        <p className='font-semibold text-gray-400'>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
            <button className="md:absolute md:left-12 md:mt-5 mt-6 btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">
                Get Started
            </button>
      </div>
    </div>
  );
};

export default Treatment;

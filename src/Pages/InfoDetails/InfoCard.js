import React from "react";

const InfoCard = ({ img,bgClass,title }) => {
  return (
    <div className={`card lg:card-side bg-base-100 shadow-xl md:p-5 p-5 my-5 ${bgClass}`}>
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title font-bold text-2xl">{title}</h2>
        <p className="font-bold">Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="card  bg-base-100 shadow-xl px-4">
      <figure className="">
        <img src={service.img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{service.title}</h2>
        <p>
          Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has
          been the
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;

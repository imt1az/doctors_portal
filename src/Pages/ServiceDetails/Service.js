import React from "react";
import ServiceCard from "./ServiceCard";
import fluride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import treatment from "../../assets/images/treatment.png";
import Treatment from "./Treatment";
import MakeAppointment from "./MakeAppointment";
import Testimonial from "./Testimonial";
import ContactUs from "./ContactUs";

const Service = () => {
  const services = [
    {
      id: 1,
      img: fluride,
      title: "Fluoride Treatment",
    },
    {
      id: 2,
      img: cavity,
      title: "Cavity Filling",
    },
    {
      id: 3,
      img: whitening,
      title: "Teeth Whitening",
    },
  ];
  return (
    <div className="my-5">
      <div className="my-28">
        <h1 className="font-bold text-xl text-center text-primary my-5">
          OUR SERVICES
        </h1>
        <h1 className="font-bold text-3xl text-center text-accent my-5">
          Services We Provide
        </h1>
      </div>
      <div className="grid md:grid-cols-3 gap-10 grid-cols-1 justify-items-center md:p-1 p-4">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>

       <Treatment></Treatment>
       <MakeAppointment></MakeAppointment>
       <Testimonial></Testimonial>
       <ContactUs></ContactUs>
     
    </div>
  );
};

export default Service;

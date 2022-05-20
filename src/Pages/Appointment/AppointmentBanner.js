import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AppointmentBanner = ({date,setDate}) => {
   if(date <= new Date()){
    //  console.log('perfect')
   }
  return (
    <div className="hero  min-h-screen md:p-4 p-4 bg-hero">
      <div className="grid md:grid-cols-2 gap-5">
        <div className=" md:order-none order-last md:ml-28 md:px-24 mx-auto">
         <div className="bg-white shadow-lg rounded-lg md:px-16">
           
         <DayPicker mode="single" selected={date} onSelect={setDate} />
         </div>
         <p className="font-semibold ml-4">You Have Selected : {format(date, 'PP')}</p>
        </div>
        <img src={chair} alt="" className="rounded-lg shadow-2xl" />
      </div>
    </div>
  );
};

export default AppointmentBanner;

import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";

const MakeAppointment = () => {
  return (
    <section style={{background:`url(${appointment})`}} className="grid md:grid-cols-2 gap-4 items-center md:my-14 md:p-0 p-5">
      <div className="">
        <img className="mt-[-180px] hidden lg:block" src={doctor} alt="" />
      </div>
      <div className="p-4">
        <p className="font-bold text-green-500 my-4">Appointment</p>
        <h1 className="text-white text-4xl font-bold my-4">
          Make an appointment Today
        </h1>
        <p className="text-white my-4">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">
            Get Started
          </button>
      </div>
    </section>
  );
};

export default MakeAppointment;

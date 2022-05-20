import React from "react";

const AppointService = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card w-full bg-base-100 shadow-xl p-5">
      <div className="card-body text-center">
        <h2 className="text-center font-bold text-2xl text-secondary">
          {name}
        </h2>
        <p className="text-center">
          {slots.length > 0 ? (
            <span className="font-semibold">{slots[0]}</span>
          ) : (
            <span className="text-red-500 font-semibold">
              No Space Available
            </span>
          )}
        </p>
        <p className="font-semibold">
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
        </p>
        <div className="card-actions justify-center">
          <label
            htmlFor="booking-modal"
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointService;

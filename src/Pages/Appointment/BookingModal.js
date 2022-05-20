import React from "react";
import { format } from "date-fns";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import { toast } from "react-toastify";
const BookingModal = ({ treatment, date, setTreatment }) => {
  const { _id,name, slots } = treatment;
  const [user, loading, error] = useAuthState(auth);
 const formattedDate = format(date,'PP');
  const handleSubmit = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    
    const booking ={
      treatment_id :_id,
      treatment:name,
      date : formattedDate,
      slot,
      patient : user.email,
      patientName : user.displayName,
      phone : event.target.phone.value,
    }
    axios.post('http://localhost:5000/booking',booking)
    .then(response =>{
      const {data} =response;
      console.log(data);
      if(data.success){
        toast.success(`Appointmnet is set on ${formattedDate} at ${slot}`);
      }
      else{
        toast.error(`Already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`);
      }
     
    })
    // To CLose The Modal
    setTreatment(null);
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-semibold text-xl text-secondary text-center">
            Booking For : {name}
          </h3>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4 justify-items-center my-4"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot,index) => (
                <option key={index} value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <button
              type="submit"
              className="w-1/2 btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;

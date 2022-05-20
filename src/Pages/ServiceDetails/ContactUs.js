import React from "react";
import appointment from "../../assets/images/appointment.png";
const ContactUs = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className=" grid md:grid-cols-1 gap-4 items-center md:my-14 md:p-0 p-5"
    >
      <div className="p-20">
        <h1 className="text-xl text-primary font-semibold text-white text-center">
          Contact Us
        </h1>
        <h1 className="text-3xl font-semibold text-white text-center">
          Stay connected with us
        </h1>
        <div className="w-full  flex items-center justify-center">
          <form className="w-full md:w-2/3  my-10  rounded-lg">
            <div className="md:px-12 pb-10 py-4">
              <div className="w-full mb-2">
                <div className="flex items-center p-2">
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="mx-6  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
                  />
                </div>
              </div>
              <div className="w-full mb-2">
                <div className="flex items-center p-2">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="mx-6  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
                  />
                </div>
              </div>
              <div className="w-full mb-2">
                <div className="flex items-center p-2">
                  <textarea
                    type="text"
                    placeholder="Your Message"
                    className="mx-6   w-full border rounded px-3 py-7 text-gray-700 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex justify-center items-center my-5">
                <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary flex w-1/2">
                 Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

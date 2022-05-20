import React from "react";
import quote from "../../assets/icons/quote.svg";
import image1 from "../../assets/images/people1.png";
import image2 from "../../assets/images/people2.png";
import image3 from "../../assets/images/people3.png";
import Review from "./Review";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Harry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: image1,
      location : 'California'
    },
    {
      _id: 2,
      name: "Winson Harry",
      review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: image2,
      location : 'California'
    },
    {
      _id: 3,
      name: "Winson Harry",
      review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: image3,
      location : 'California'
    },
  ];

  return (
    <section>
      <div className="flex justify-between items-center my-10 md:p-0 p-4 ">
        <div>
          <h2 className="font-bold text-primary text-2xl">Testimonial</h2>
          <h1 className="text-4xl">What Our Patients Says</h1>
        </div>
        <div>
          <img src={quote} alt="" className="lg:w-48 w-24 mt-10"></img>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 justify-items-center md:p-0 p-4">
          {
              reviews.map(review => 
              <Review
              key={review._id}
              review = {review}
              >

              </Review>)
          }
      </div>
    </section>
  );
};

export default Testimonial;

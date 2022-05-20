import React from "react";

const Review = ({ review }) => {
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl mt-5 md:p-0">
        <div className="card-body p-14">
          <p className="font-medium">{review.review}</p>
          <div className="card-actions items-center">
            <div className="avatar py-4">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                <img src={review.img} alt="" />
              </div>
            </div>
            <div>

            <p className="text-xl font-semibold px-4">{review.name}</p>
            <p className="text-xl font-semibold px-4">{review.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

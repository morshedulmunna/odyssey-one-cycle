import React from "react";
import { AiFillStar } from "react-icons/ai";

const ReviewsDetails = () => {
  return (
    <div className="reviews">
      <div className="reviewer">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/70575c38-1215-426d-b99f-313578a907e3._CR1,0,497,497_SX48_.jpg"
          alt=""
        />
        <div className="reviewer__Name">
          <p>Jonathan Nolan</p>
          <span>Austin, Texas</span>
        </div>
      </div>
      <div className="review">
        <div className="ratting">
          <span style={{ marginRight: "10px" }}>4.9</span>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h4>Highly Recommended Products</h4>
        <p>
          I have used Fitbits for many years - all the way back to the days of
          the first Fitbit Flex. I have upgraded over the years to the Charge,
          the Charge HR, Charge 2, and now the Versa I and finally the II.
        </p>
      </div>
      <div className="status">
        <span>13/6/2021</span>
        <span>8:23PM</span>
      </div>
    </div>
  );
};

export default ReviewsDetails;

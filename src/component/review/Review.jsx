import "./Review.css";
import ReviewsDetails from "./ReviewsDetails";

const Review = () => {
  return (
    <>
      <div className="review_section">
        <div className="container">
          <div className="review__wrapper">
            <h2>User Review</h2>
            <div className="review-content">
              <div className="review_title">
                <p>Reviewer</p>
                <p>Review</p>
                <p>Status</p>
              </div>
              <ReviewsDetails />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;

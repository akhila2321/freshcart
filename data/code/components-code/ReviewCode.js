export const ReviewOneCode = `
"use client";
// import custom component
import ReviewSummary from "components/reviews/ReviewSummary";

const Page = () => {
  return <ReviewSummary writeBtn={false} />;
};

export default Page;

`.trim();
export const ReviewTwoCode = `
"use client";
// import custom component
import ReviewButton from "components/reviews/ReviewButton";

const Page = () => {
  return <ReviewButton />;
};

export default Page;

`.trim();

export const ReviewThreeCode = `
"use client";
// import node module libraries
import { Col } from "react-bootstrap";

// import custom component
import FilterReview from "components/reviews/FilterReview";
import SingleReview from "components/reviews/SingleReview";

// import required data file
import { reviewsData } from "data/ReviewsData";

const Page = () => {
  return (
    <Col md={8}>
      <div className="mb-10">
        <FilterReview />
        {reviewsData.slice(0, 2).map((review, index) => {
          return <SingleReview data={review} key={review.id} index={index} />;
        })}
      </div>
    </Col>
  );
};

export default Page;

`.trim();

export const ReviewFourCode = `
"use client";

// import custom components
import CreateReview from "components/reviews/CreateReview";

const Page = () => {
  return <CreateReview />;
};

export default Page;

`.trim();

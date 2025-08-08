// import node module libraries
import { Form } from "react-bootstrap";

// import custom components
import StarRatings from "components/reviews/StarRating";

const ProductRatingFilter = ({ className }) => {
  return (
    <div className={`mb-8 ${className}`}>
      <h5 className="mb-3">Rating</h5>
      <div>
        {[5, 4, 3, 2, 1].map((rating, index) => (
          <Form.Check className="mb-2" key={rating}>
            <Form.Check.Input
              type="checkbox"
              id={"rating" + index}
              defaultChecked={index === 0}
            />
            <Form.Check.Label htmlFor={"rating" + index}>
              <StarRatings rating={rating} size={14} />
            </Form.Check.Label>
          </Form.Check>
        ))}
      </div>
    </div>
  );
};

export default ProductRatingFilter;

// import node module libraries
import { Button } from "react-bootstrap";

const ReviewButton = () => {
  return (
    <div className="d-grid">
      <h4>Review this product</h4>
      <p className="mb-0">Share your thoughts with other customers.</p>
      <Button href="#" variant="outline-gray-400" className="mt-4 text-muted">
        Write the Review
      </Button>
    </div>
  );
};

export default ReviewButton;

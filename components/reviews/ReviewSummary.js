// import node module libraries
import { StarFill } from "react-bootstrap-icons";
import { ProgressBar } from "react-bootstrap";

// import custom components
import StarRatings from "./StarRating";
import ReviewButton from "./ReviewButton";

const ReviewSummary = ({ writeBtn = true }) => {
  return (
    <div className="me-lg-12 mb-6 mb-md-0">
      <div className="mb-5">
        <h4 className="mb-3">Customer reviews</h4>
        <span className="d-flex align-items-center">
          <small className="text-warning">
            <StarRatings rating={4.5} size={12} />
          </small>
          <span className="ms-3">4.1 out of 5</span>
          <small className="ms-3">11,130 global ratings</small>
        </span>
      </div>
      <div className="mb-8">
        <div className="d-flex align-items-center mb-2">
          <div className="text-nowrap me-3 text-muted">
            <span className="d-inline-block align-middle text-muted">5</span>
            <StarFill className="ms-1 small text-warning" />
          </div>
          <div className="w-100">
            <ProgressBar
              now={"60"}
              max="100"
              min={"0"}
              variant="warning"
              style={{ height: "6px" }}
            />
          </div>
          <span className="text-muted ms-3">53%</span>
        </div>

        <div className="d-flex align-items-center mb-2">
          <div className="text-nowrap me-3 text-muted">
            <span className="d-inline-block align-middle text-muted">4</span>
            <i className="bi bi-star-fill ms-1 small text-warning"></i>
          </div>
          <div className="w-100">
            <ProgressBar
              now={"50"}
              max="100"
              min={"0"}
              variant="warning"
              style={{ height: "6px" }}
            />
          </div>
          <span className="text-muted ms-3">22%</span>
        </div>

        <div className="d-flex align-items-center mb-2">
          <div className="text-nowrap me-3 text-muted">
            <span className="d-inline-block align-middle text-muted">3</span>
            <i className="bi bi-star-fill ms-1 small text-warning"></i>
          </div>
          <div className="w-100">
            <ProgressBar
              now={"35"}
              max="100"
              min={"0"}
              variant="warning"
              style={{ height: "6px" }}
            />
          </div>
          <span className="text-muted ms-3">14%</span>
        </div>

        <div className="d-flex align-items-center mb-2">
          <div className="text-nowrap me-3 text-muted">
            <span className="d-inline-block align-middle text-muted">2</span>
            <i className="bi bi-star-fill ms-1 small text-warning"></i>
          </div>
          <div className="w-100">
            <ProgressBar
              now={"22"}
              max="100"
              min={"0"}
              variant="warning"
              style={{ height: "6px" }}
            />
          </div>
          <span className="text-muted ms-3">5%</span>
        </div>

        <div className="d-flex align-items-center mb-2">
          <div className="text-nowrap me-3 text-muted">
            <span className="d-inline-block align-middle text-muted">1</span>
            <i className="bi bi-star-fill ms-1 small text-warning"></i>
          </div>
          <div className="w-100">
            <ProgressBar
              now={"14"}
              max="100"
              min={"0"}
              variant="warning"
              style={{ height: "6px" }}
            />
          </div>
          <span className="text-muted ms-3">7%</span>
        </div>
      </div>
      {writeBtn && <ReviewButton />}
    </div>
  );
};

export default ReviewSummary;

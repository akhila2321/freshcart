// import node module libraries
import Link from "next/link";
import { Image } from "react-bootstrap";

// import custom components
import StarRatings from "components/reviews/StarRating";

const StoreDetails = () => {
  return (
    <div className="d-flex flex-column">
      <div>
        <Image
          src="/images/stores-logo/stores-logo-1.svg"
          alt=""
          className="rounded-circle icon-shape icon-xxl"
        />
      </div>
      <div className="mt-4">
        <h1 className="mb-1 h4">E-Grocery Super Market</h1>
        <div className="small text-muted">
          <span>Everyday store prices</span>
        </div>
        <div>
          <span>
            <small>
              <Link href="#!">100% satisfaction guarantee</Link>
            </small>
          </span>
        </div>
        <div className="d-flex align-items-center gap-1 mt-2">
          <small className="text-warning">
            <StarRatings rating={4.5} size={12} />
          </small>
          <span className="ms-2">5.0</span>
          <span className="text-muted ms-1">(3,400 reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default StoreDetails;

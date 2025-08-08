// import node module libraries
import { Image } from "react-bootstrap";
import Link from "next/link";
import { Flag, ThumbsUp } from "react-feather";

// import custom components
import StarRatings from "./StarRating";

const SingleReview = ({ data, index }) => {
  const {
    name,
    avatar,
    review_date,
    rating,
    tag,
    review_title,
    review,
    images,
  } = data;

  return (
    <div
      className={`d-flex border-bottom pb-6 mb-6 ${index != 0 ? "pt-4" : ""}`}
    >
      <Image src={avatar} alt="" className="rounded-circle avatar-lg" />
      <div className="ms-5 w-100">
        <h6 className="mb-1">{name}</h6>

        <p className="small">
          <span className="text-muted">{review_date}</span>
          {tag === "Verified Purchase" ? (
            <span className="ms-3 fw-bold text-primary ">
              Verified Purchase
            </span>
          ) : (
            <span className="ms-3 fw-bold text-danger ">
              Unverified Purchase
            </span>
          )}
        </p>

        <div className="mb-2 d-flex align-items-center">
          <StarRatings rating={rating} />
          <span className="ms-3 text-dark fw-bold">{review_title}</span>
        </div>

        <p>{review}</p>

        {images?.length > 0 && (
          <div>
            {images.map((item) => (
              <div
                className="border icon-shape icon-lg border-2 me-2"
                key={item.id}
              >
                <Image src={item.image} alt="" className="img-fluid" />
              </div>
            ))}
          </div>
        )}

        <div className="mt-4 d-flex justify-content-end">
          <Link href="#" className="text-muted">
            <ThumbsUp className="me-1" size={14} />
            Helpful
          </Link>
          <Link href="#" className="text-muted ms-4">
            <Flag className="me-2" size={14} />
            Report abuse
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;

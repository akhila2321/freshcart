// import node module libraries
import { Fragment } from "react";
import { Image, Card } from "react-bootstrap";
import Link from "next/link";

// import custom components
import StarRatings from "components/reviews/StarRating";
import FreshBadge from "components/common/FreshBadge";

// import helper utility file
import { calculateSalePrice, calculateAvgRating } from "helper/utils";

const ProductCardSix = ({ product }) => {
  //Return null if product data is not defined
  if (!product) return null;

  const { product_title, featuredImage, discount, price, slug, reviews } =
    product;

  const salePrice = calculateSalePrice(price, discount);

  const { avgRating } = calculateAvgRating(reviews);

  return (
    <Fragment>
      <Card className="card-product mb-4">
        <div className="card-body text-center py-8">
          <Link href={`/shop/${slug}`}>
            <Image
              src={featuredImage}
              alt={product_title}
              className="mb-3"
              width={150}
              height={"auto"}
            />
          </Link>
        </div>
      </Card>

      <div>
        <FreshBadge content={`${discount}%`} bg="danger" pill />
        <h2 className="mt-3 fs-6">
          <Link href={`/shop/${slug}`} className="text-inherit">
            {product_title}
          </Link>
        </h2>
        <div>
          <span className="text-dark fs-5 fw-bold">{`$${salePrice}`}</span>
          <span className="text-decoration-line-through text-muted">{` $${price}`}</span>
        </div>
        <div className="text-warning d-flex align-items-center gap-1">
          <small>
            <StarRatings rating={avgRating} size={13} />
          </small>
          <span className="text-muted small">{avgRating}</span>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductCardSix;

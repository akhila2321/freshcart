// import node module libraries
import { Fragment } from "react";
import Link from "next/link";
import { Card, Image } from "react-bootstrap";
import { ArrowLeftRight, Eye } from "react-bootstrap-icons";
import { Heart, Plus } from "react-feather";

// import custom components
import FreshTippy from "components/common/FreshTippy";
import CountdownTimer from "components/common/CountdownTimer";
import StarRatings from "components/reviews/StarRating";
import { QuickViewModal } from "components/modal/QuickViewModal";

// import required hooks
import useToggle from "hooks/useToggle";
import { useWishlist } from "hooks/useWishlist";
import useCartOperations from "hooks/useCartOperations";

// import helper utility file
import { calculateAvgRating, calculateSalePrice } from "helper/utils";

const ProductWithCountdown = ({ product }) => {
  const {
    id,
    product_title,
    product_category,
    slug,
    featuredImage,
    price,
    badge,
    discount,
    reviews,
    unit,
  } = product;

  const { addToWishlist } = useWishlist();

  const { addItemToCart } = useCartOperations();

  //Calculate Sale Price
  const salePrice = calculateSalePrice(price, discount);

  //Calculate Average Rating
  const { avgRating } = calculateAvgRating(reviews);

  //Quick View Modal
  const { isToggled, toggle, handleClose } = useToggle();

  const addItemToCartHandler = (e) => {
    e.preventDefault();
    const cartItems = {
      id,
      product_title,
      product_category,
      price,
      salePrice,
      unit,
      featuredImage,
    };
    addItemToCart(cartItems);
  };

  return (
    <Fragment>
      <Card className="card-product">
        <Card.Body>
          <div className="text-center position-relative">
            <Link href="">
              <Image
                src={featuredImage}
                alt="Grocery Ecommerce Template"
                className="mb-3 img-fluid"
              />
            </Link>
            <div className="card-product-action d-flex gap-1 justify-content-center">
              <FreshTippy content="Quick View">
                <Link
                  href=""
                  className="btn-action"
                  onClick={(e) => {
                    e.preventDefault();
                    toggle();
                  }}
                >
                  <Eye size={14} />
                </Link>
              </FreshTippy>
              <FreshTippy content="Quick View">
                <Link
                  href=""
                  className="btn-action"
                  onClick={(e) => {
                    e.preventDefault();
                    addToWishlist(product);
                  }}
                >
                  <Heart size={14} />
                </Link>
              </FreshTippy>
              <FreshTippy content="Quick View">
                <Link href="" className="btn-action">
                  <ArrowLeftRight size={14} />
                </Link>
              </FreshTippy>
            </div>
          </div>
          <div className="text-small mb-1">
            <Link href="#!" className="text-decoration-none text-muted">
              <small>{product_category}</small>
            </Link>
          </div>
          <h2 className="fs-6">
            <Link href="" className="text-inherit text-decoration-none">
              {product_title}
            </Link>
          </h2>

          {/* Pricing */}
          <div className="d-flex justify-content-between align-items-center mt-3">
            <div>
              <span className="text-dark">${salePrice} </span>
              <span className="text-decoration-line-through text-muted">
                ${price}
              </span>
            </div>
            <div className="d-flex align-items-center gap-1">
              <small className="text-warning">
                <StarRatings rating={avgRating} size={12} />
              </small>
              <span>
                <small>{avgRating > 0 ? avgRating : ""}</small>
              </span>
            </div>
          </div>
          {/* Add to cart */}
          <div className="d-grid mt-2">
            <Link
              href=""
              className="btn btn-primary"
              onClick={addItemToCartHandler}
            >
              <Plus size={16} /> Add to cart
            </Link>
          </div>

          {/* Sale countdown */}
          <div className="d-flex justify-content-start text-center mt-3">
            <CountdownTimer endDate={"2028/10/10 00:00:00"} />
          </div>
        </Card.Body>
      </Card>

      {/* Quick View Modal */}
      <QuickViewModal
        product={product}
        isModalOpen={isToggled}
        modalClose={handleClose}
      />
    </Fragment>
  );
};

export default ProductWithCountdown;

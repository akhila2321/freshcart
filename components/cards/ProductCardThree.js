// import node module libraries
import Link from "next/link";
import { Fragment } from "react";
import { Card, Button, Image } from "react-bootstrap";
import { ArrowLeftRight, Eye, Heart } from "react-bootstrap-icons";

// import custom components
import FreshTippy from "components/common/FreshTippy";
import StarRatings from "components/reviews/StarRating";
import { QuickViewModal } from "components/modal/QuickViewModal";
import FreshBadge from "components/common/FreshBadge";

// import helper utility file
import { calculateAvgRating, calculateSalePrice } from "helper/utils";

// import required hooks
import useToggle from "hooks/useToggle";
import { useWishlist } from "hooks/useWishlist";
import useCartOperations from "hooks/useCartOperations";

const ProductCardThree = ({
  product,
  badgeBg = "info",
  badgeText = "white",
}) => {
  const { addToWishlist } = useWishlist();
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
    stocks,
  } = product;

  const { addItemToCart } = useCartOperations();

  const salePrice = calculateSalePrice(price, discount);

  //Calculate Rating
  const { totalReview, avgRating } = calculateAvgRating(reviews);

  //Quick View Toggled
  const { isToggled, toggle, handleClose } = useToggle();

  const addItemToCartHandler = () => {
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
      <Card className="card-product-v2 h-100">
        <Card.Body className="position-relative">
          <div className="text-center position-relative">
            <div className="position-absolute top-0 start-0">
              {badge && (
                <FreshBadge
                  content={badge}
                  bg="white"
                  text={"danger"}
                  pill={false}
                />
              )}

              {discount > 0 && (
                <FreshBadge
                  content={`${discount}%`}
                  bg={badgeBg}
                  text={badgeText}
                  pill={false}
                />
              )}
            </div>

            <Link href={`/shop/${slug}`}>
              <Image
                src={featuredImage}
                alt="Grocery Ecommerce Template"
                className="mb-3 img-fluid"
              />
            </Link>

            <div className="product-action-btn">
              <FreshTippy content="Quick View">
                <Link
                  href="#!"
                  className="btn-action mb-1"
                  onClick={(e) => {
                    e.preventDefault();
                    toggle();
                  }}
                >
                  <Eye />
                </Link>
              </FreshTippy>
              <FreshTippy content="Wishlist">
                <Link
                  href=""
                  className="btn-action mb-1"
                  onClick={(e) => {
                    e.preventDefault();
                    addToWishlist(product);
                  }}
                >
                  <Heart />
                </Link>
              </FreshTippy>
              <FreshTippy content="Compare">
                <Link href="#!" className="btn-action">
                  <ArrowLeftRight />
                </Link>
              </FreshTippy>
            </div>
          </div>

          <h2 className="fs-6">
            <Link
              href={`/shop/${slug}`}
              className="text-inherit text-decoration-none"
            >
              {product_title}
            </Link>
          </h2>
          <div className="d-flex align-items-center gap-1 ">
            <small className="text-warning">
              <StarRatings rating={avgRating} size={12} />
            </small>
            <span className="text-muted small">
              {avgRating}({totalReview})
            </span>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <div>
              <span className="text-danger">${salePrice} </span>
              <span className="text-decoration-line-through text-muted">
                ${price}
              </span>
            </div>
            <div>
              <span className="text-uppercase small text-primary">
                In Stock
              </span>
            </div>
          </div>

          <div className="product-fade-block">
            <div className="d-grid mt-4">
              <Button
                onClick={addItemToCartHandler}
                variant="primary"
                className="rounded-pill"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </Card.Body>

        <div
          className="product-content-fade border-info"
          style={{ marginBottom: "-60px" }}
        ></div>
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

export default ProductCardThree;

// import node module libraries
import { Fragment } from "react";
import Link from "next/link";
import { Card, Button, Image } from "react-bootstrap";
import { ArrowLeftRight, Eye, Heart } from "react-bootstrap-icons";

// import custom components
import FreshTippy from "components/common/FreshTippy";
import StarRatings from "components/reviews/StarRating";
import { QuickViewModal } from "components/modal/QuickViewModal";

// import helper utility file
import { calculateAvgRating, calculateSalePrice } from "helper/utils";

// import required hooks
import useToggle from "hooks/useToggle";
import { useWishlist } from "hooks/useWishlist";
import useCartOperations from "hooks/useCartOperations";
import FreshBadge from "components/common/FreshBadge";

const ProductCardTwo = ({ product }) => {
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
      <Card className={`card-product h-100`}>
        <Card.Body className="position-relative">
          <div className="text-center position-relative">
            <div className="position-absolute top-0 start-0 ">
              <div className="d-flex flex-column gap-1">
                {badge && (
                  <FreshBadge
                    content="Sale"
                    pill={false}
                    bg="danger"
                    text={"white"}
                  />
                )}

                {discount > 0 && (
                  <FreshBadge
                    content={`${discount}%`}
                    pill={false}
                    bg="warning"
                    text={"dark"}
                  />
                )}
              </div>
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

          <div className="d-grid mt-4">
            <Button
              onClick={addItemToCartHandler}
              variant="primary"
              className="rounded-pill"
            >
              Add to Cart
            </Button>
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

export default ProductCardTwo;

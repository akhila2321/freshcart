// import node module libraries
import { Fragment } from "react";
import { Button, Card, Image, ProgressBar } from "react-bootstrap";
import Link from "next/link";
import { ArrowLeftRight, Eye, Heart } from "react-bootstrap-icons";

// import custom components
import FreshBadge from "components/common/FreshBadge";
import FreshTippy from "components/common/FreshTippy";
import StarRatings from "components/reviews/StarRating";
import { QuickViewModal } from "components/modal/QuickViewModal";

// import helper utility file
import { calculateAvgRating, calculateSalePrice } from "helper/utils";

// import requied hooks
import useToggle from "hooks/useToggle";
import { useWishlist } from "hooks/useWishlist";
import useCartOperations from "hooks/useCartOperations";
import ProductBadge from "components/common/ProductBadge";

const ProductCardWithProgressBar = ({ product }) => {
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
    stocks,
    unit,
  } = product;

  const { addToWishlist } = useWishlist();
  const { addItemToCart } = useCartOperations();

  const salePrice = calculateSalePrice(price, discount);

  //Calculate Rating
  const { totalReview, avgRating } = calculateAvgRating(reviews);

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
        <Card.Body className="position-relative text-center">
          <div className="text-center position-relative">
            <div className="position-absolute top-0">
              <FreshBadge content={badge} bg={"info"} />
            </div>
            <ProductBadge
              badge={badge}
              tagBg={"white"}
              tagCls={"danger"}
              discount={discount}
              discountBg={"info"}
            />

            {/* Product Image */}
            <Link href={`/shop/${slug}`}>
              <Image
                src={featuredImage}
                alt="Grocery Ecommerce Template"
                className="mb-3 img-fluid"
              />
            </Link>

            {/* Product Action */}
            <div className="product-action-btn">
              <FreshTippy content="Quick View">
                <Link
                  href=""
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
                <Link href="" className="btn-action mb-1">
                  <ArrowLeftRight />
                </Link>
              </FreshTippy>
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-3">
            <span className="text-dark">${salePrice}</span>
          </div>

          {/* Product Title */}
          <h2 className="fs-6">
            <Link
              href={`/shop/${slug}`}
              className="text-inherit text-decoration-none"
            >
              {product_title}
            </Link>
          </h2>

          {/* Product Rating */}
          <div className="d-flex align-items-center justify-content-center">
            <small className="text-warning">
              <StarRatings rating={avgRating} size={12} />
            </small>
            <span className="text-muted small">
              {avgRating}({totalReview})
            </span>
          </div>

          {/* Quantity Available */}
          <div className="mt-3">
            <span className="text-uppercase small text-primary">In Stock</span>
          </div>
          {/*Progress Bar  */}
          <div className="mt-4">
            <ProgressBar
              min="0"
              max="100"
              now="88"
              style={{ width: "88%", height: "8px" }}
              variant="gray-400"
              className="mt-6"
            />
            <div className="my-3">
              <small>
                the available products :
                <span className="text-dark fw-bold">{stocks}</span>
              </small>
            </div>
          </div>

          {/* Add To Cart */}
          <div className="product-fade-block">
            <div className="d-grid mt-4">
              <Button
                variant="primary"
                className="rounded-pill"
                onClick={addItemToCartHandler}
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

export default ProductCardWithProgressBar;

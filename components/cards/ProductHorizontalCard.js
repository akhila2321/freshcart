// import node module libraries
import Link from "next/link";
import { Fragment } from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import FreshTippy from "components/common/FreshTippy";
import { ArrowLeftRight, Eye, Heart } from "react-bootstrap-icons";
import { ShoppingBag } from "react-feather";

// import custom components
import StarRatings from "components/reviews/StarRating";
import ProductBadge from "components/common/ProductBadge";
import { QuickViewModal } from "components/modal/QuickViewModal";

// import helper utility file
import { calculateSalePrice, calculateAvgRating } from "helper/utils";

// import required hooks
import useToggle from "hooks/useToggle";
import { useWishlist } from "hooks/useWishlist";
import useCartOperations from "hooks/useCartOperations";

const ProductHorizontalCard = ({ product }) => {
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

  //Quick View Toggle
  const { isToggled, toggle, handleClose } = useToggle();

  //Calculate Sale Price
  const salePrice = calculateSalePrice(price, discount);

  //Calculate rating
  const { totalReview, avgRating } = calculateAvgRating(reviews);

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
          <Row className="align-items-center">
            <Col md={4} xs={12}>
              <div className="text-center position-relative">
                <div className="position-absolute top-0">
                  <ProductBadge
                    discount={discount}
                    badge={badge}
                    tagBg={"danger"}
                  />
                </div>
                <Link href={`/shop/${slug}`}>
                  <Image
                    src={featuredImage}
                    alt="Grocery Ecommerce Template"
                    className="mb-3 img-fluid"
                  />
                </Link>
              </div>
            </Col>
            <Col md={8} xs={12} className="flex-grow-1">
              <div className="text-small mb-1">
                <Link href="#!" className="text-decoration-none text-muted">
                  <small>{product_category}</small>
                </Link>
              </div>
              <h2 className="fs-6">
                <Link
                  href={`/shop/${slug}`}
                  className="text-inherit text-decoration-none"
                >
                  {product_title}
                </Link>
              </h2>
              <div>
                <StarRatings rating={4.5} />
                <span className="text-muted small">
                  {avgRating}({totalReview})
                </span>
              </div>

              <div className="mt-6">
                <div>
                  <span className="text-dark">${salePrice} </span>
                  <span className="text-decoration-line-through text-muted">
                    ${price}
                  </span>
                </div>

                <div className="d-flex gap-1 mt-3">
                  <FreshTippy content="Quick View">
                    <Link
                      href=""
                      className="btn btn-icon btn-sm btn-outline-gray-400 text-muted"
                      onClick={(e) => {
                        e.preventDefault();
                        toggle();
                      }}
                    >
                      <Eye size={14} />
                    </Link>
                  </FreshTippy>

                  <FreshTippy content="Wishlist">
                    <Link
                      href=""
                      className="btn btn-icon btn-sm btn-outline-gray-400 text-muted"
                      onClick={(e) => {
                        e.preventDefault();
                        addToWishlist(product);
                      }}
                    >
                      <Heart size={14} />
                    </Link>
                  </FreshTippy>

                  <FreshTippy content="Compare">
                    <Link
                      href=""
                      className="btn btn-icon btn-sm btn-outline-gray-400 text-muted"
                    >
                      <ArrowLeftRight size={14} />
                    </Link>
                  </FreshTippy>
                </div>

                <div className="mt-2">
                  <Link
                    href="#!"
                    className="btn btn-primary"
                    onClick={addItemToCartHandler}
                  >
                    <ShoppingBag size={16} className="me-2" />
                    Add to Cart
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <QuickViewModal
        product={product}
        isModalOpen={isToggled}
        modalClose={handleClose}
      />
    </Fragment>
  );
};

export default ProductHorizontalCard;

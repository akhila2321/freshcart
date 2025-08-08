// import node module libraries
import Link from "next/link";
import { Fragment } from "react";
import { Plus, Heart } from "react-feather";
import { Button, Card, Image } from "react-bootstrap";
import { Eye, ArrowLeftRight } from "react-bootstrap-icons";

// import custom components
import FreshTippy from "components/common/FreshTippy";
import StarRatings from "components/reviews/StarRating";
import ProductBadge from "components/common/ProductBadge";
import { QuickViewModal } from "components/modal/QuickViewModal";

// import required hooks
import useToggle from "hooks/useToggle";
import { useWishlist } from "hooks/useWishlist";
import useCartOperations from "hooks/useCartOperations";

// import helper utility file
import { calculateSalePrice, calculateAvgRating } from "helper/utils";

const ProductCard = ({ product }) => {
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

  const { addItemToCart } = useCartOperations();

  //Quick View Modal
  const { isToggled, toggle, handleClose } = useToggle();

  const salePrice = calculateSalePrice(price, discount);
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

  const { addToWishlist, removeWishlistItem, wishListItems } = useWishlist();
  const isWishlisted = wishListItems.some(item => item.id === id);

  const toggleWishlist = (e) => {
    e.preventDefault();
    if (isWishlisted) {
      removeWishlistItem(id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <Fragment>
      <Card className="border-0 shadow-none">
        <Card.Body>
          <div className="text-center position-relative">
            <ProductBadge discount={discount} badge={badge} tagBg={"danger"} />

            <Link href={`/shop/${slug}`}>
              <Image
                src={featuredImage}
                alt="Grocery Ecommerce Template"
                className="mb-3 img-fluid"
              />
            </Link>
            <div className="card-product-action d-flex gap-1 justify-content-center">
              <FreshTippy content="Quick View">
                <Link
                  className="btn-action"
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    toggle();
                  }}
                >
                  <Eye size={14} />
                </Link>
              </FreshTippy>

              <FreshTippy content="Compare">
                <Link className="btn-action" href="">
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
            <Link
              href={`/shop/${slug}`}
              className="text-inherit text-decoration-none"
            >
              {product_title}
            </Link>
          </h2>
          <div className="d-inline-flex gap-1 align-items-center ">
            <small className="text-warning">
              <StarRatings rating={avgRating} size={12} />
            </small>
            <span className="text-muted small">
              {avgRating} ({totalReview})
            </span>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <div>
              <span className="text-dark">${salePrice} </span>
              <span className="text-decoration-line-through text-muted">
                ${price}
              </span>
            </div>
            <div className="d-flex gap-2 align-items-center">
              <Button
                variant="link"
                className="p-0 border-0 shadow-none text-decoration-none"
                onClick={toggleWishlist}
              >
                <Heart 
                  size={18} 
                  fill={isWishlisted ? "#198754" : "none"} 
                  color={isWishlisted ? "#198754" : "#6c757d"} 
                />
              </Button>
              <Button
                href="#!"
                className="btn btn-primary btn-sm d-flex align-items-center gap-1"
                onClick={addItemToCartHandler}
              >
                <Plus size={16} /> Add to Cart
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>

      {/*Quick View Modal */}
      <QuickViewModal
        product={product}
        isModalOpen={isToggled}
        modalClose={handleClose}
      />
    </Fragment>
  );
};

export default ProductCard;

// import node module libraries
import { useState } from "react";
import {
  Container,
  Row,
  Col,
  ToggleButton,
  Button,
  InputGroup,
  Form,
} from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, ShoppingBag } from "react-feather";
import { ArrowLeftRight } from "react-bootstrap-icons";

// import custom components
import ProductImageSlider from "components/shop/ProductImageSlider";
import StarRatings from "components/reviews/StarRating";
import FreshTippy from "components/common/FreshTippy";
import SocialShare from "components/shop/SocialShare";
import ProductImageSliderTwo from "components/shop/ProductImageSliderTwo";

// import helper utility file
import { calculateSalePrice, calculateAvgRating } from "helper/utils";

// import required hooks
import { useWishlist } from "hooks/useWishlist";
import useCartOperations from "hooks/useCartOperations";

const SingleProductDetails = ({ data }) => {
  const [quantity, setQuantity] = useState(1);
  const [buttons, setButtons] = useState([
    { id: 1, label: "250g", checked: false },
    { id: 2, label: "500g", checked: false },
    { id: 3, label: "1kg", checked: false },
  ]);

  const {
    product_title,
    product_category,
    product_images,
    price,
    discount,
    reviews,
  } = data;

  const location = usePathname();
  const { addToWishlist } = useWishlist();
  const { addItemToCart } = useCartOperations();

  const salePrice = calculateSalePrice(price, discount);
  const { totalReview, avgRating } = calculateAvgRating(reviews);

  // Button Select Function
  const handleButtonClick = (id) => {
    const updatedButtons = buttons.map((button) => ({
      ...button,
      checked: button.id === id,
    }));
    setButtons(updatedButtons);
  };

  //Handle Change
  const handleQuantityChange = (e) => {
    let enteredQuantity = Number(e.target.value);
    setQuantity((prev) => {
      return isNaN(enteredQuantity) ? prev : enteredQuantity;
    });
  };

  return (
    <section className="mt-8">
      <Container>
        <Row>
          <Col md={6}>
            {location.includes("nutrichoice-digestive") ? (
              <ProductImageSliderTwo images={product_images} />
            ) : (
              <ProductImageSlider images={product_images} />
            )}
          </Col>
          <Col md={6}>
            <div className="ps-lg-10 mt-6 mt-md-0">
              <Link href="" className="mb-4 d-block">
                {product_category}
              </Link>

              <h1 className="mb-1">{product_title}</h1>
              <div className="mb-4 d-flex align-items-center">
                <StarRatings rating={avgRating} size={12} />
                <Link href="#" className="ms-2">
                  ({totalReview} reviews)
                </Link>
              </div>

              <div className="fs-4">
                <span className="fw-bold text-dark">${salePrice} </span>
                <span className="text-decoration-line-through text-muted">
                  ${price}
                </span>
                <span>
                  {discount > 0 ? (
                    <small className="fs-6 ms-2 text-danger">
                      {discount}% Off
                    </small>
                  ) : (
                    ""
                  )}
                </span>
              </div>

              <hr className="my-6" />
              <div className="mb-5 d-flex gap-1">
                {buttons.map((button) => (
                  <ToggleButton
                    key={button.id}
                    type="checkbox"
                    variant="outline-secondary"
                    name="size"
                    checked={button.checked}
                    onClick={() => handleButtonClick(button.id)}
                  >
                    {button.label}
                  </ToggleButton>
                ))}
              </div>

              <div className="w-20">
                <InputGroup className="input-spinner">
                  <Button
                    size="sm"
                    className="button-minus text-dark"
                    onClick={() => {
                      if (quantity > 1) {
                        setQuantity((prev) => prev - 1);
                      }
                    }}
                  >
                    -
                  </Button>

                  <Form.Control
                    type="number"
                    className="quantity-field form-input"
                    size="sm"
                    value={quantity}
                    name="quantity"
                    onChange={handleQuantityChange}
                  />

                  <Button
                    size="sm"
                    className="button-plus text-dark"
                    onClick={() => setQuantity((prev) => prev + 1)}
                  >
                    +
                  </Button>
                </InputGroup>
              </div>

              <Row className="mt-3 justify-content-start g-2 align-items-center">
                <Col xxl={4} lg={4} md={5} xs={5} className="d-grid">
                  <Button variant="primary" onClick={() => addItemToCart(data)}>
                    <ShoppingBag className="me-2" />
                    Add to cart
                  </Button>
                </Col>

                <Col md={4} xs={4}>
                  <FreshTippy content="Compare">
                    <Button variant="light" className="me-1">
                      <ArrowLeftRight />
                    </Button>
                  </FreshTippy>
                  <FreshTippy content="Wishlist">
                    <Button variant="light" onClick={() => addToWishlist(data)}>
                      <Heart size={14} />
                    </Button>
                  </FreshTippy>
                </Col>
              </Row>

              <hr className="my-6" />

              <div>
                <table className="table table-borderless mb-0">
                  <tbody>
                    <tr>
                      <td>Product Code:</td>
                      <td>FBB00255</td>
                    </tr>
                    <tr>
                      <td>Availability:</td>
                      <td>In Stock</td>
                    </tr>
                    <tr>
                      <td>Type:</td>
                      <td>Fruits</td>
                    </tr>
                    <tr>
                      <td>Shipping:</td>
                      <td>
                        <small>
                          01 day shipping.
                          <span className="text-muted">
                            ( Free pickup today)
                          </span>
                        </small>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <SocialShare />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SingleProductDetails;

// import ndoe module libraries
import { useState } from "react";
import {
  Row,
  Col,
  Modal,
  Button,
  InputGroup,
  ToggleButton,
  Form,
} from "react-bootstrap";
import Link from "next/link";
import { ArrowLeftRight } from "react-bootstrap-icons";
import { Heart, ShoppingBag } from "react-feather";

// import custom components
import FreshTippy from "components/common/FreshTippy";
import ProductImageSlider from "components/shop/ProductImageSlider";
import StarRatings from "components/reviews/StarRating";

// import helper utility file
import { calculateAvgRating, calculateSalePrice } from "helper/utils";

export const QuickViewModal = ({ isModalOpen, modalClose, product }) => {
  const {
    product_title,
    product_category,
    product_images,
    price,
    discount,
    reviews,
  } = product;

  const [quantity, setQuantity] = useState(1);
  const [buttons, setButtons] = useState([
    { id: 1, label: "250g", checked: false },
    { id: 2, label: "500g", checked: false },
    { id: 3, label: "1kg", checked: false },
  ]);

  //Calculate Rating
  const { totalReview, avgRating } = calculateAvgRating(reviews);
  const salePrice = calculateSalePrice(price, discount);

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
    <Modal
      id="quickViewModal"
      show={isModalOpen}
      onHide={modalClose}
      size="xl"
      centered
    >
      <Modal.Dialog bsPrefix="modal-content" scrollable={false}>
        <Modal.Body className="p-8">
          <div className="position-absolute top-0 end-0 me-3 mt-3">
            <Button type="button" bsPrefix="btn-close" onClick={modalClose} />
          </div>
          <Row>
            {/* Image Slider */}
            <Col lg={6}>
              <ProductImageSlider images={product_images} />
            </Col>
            <Col lg={6}>
              <div className="ps-lg-8 mt-6 mt-lg-0">
                <Link href="" className="mb-4 d-block">
                  {product_category}
                </Link>
                <h2 className="mb-1 h1">{product_title}</h2>

                <div className="mb-4 d-flex align-items-center ">
                  <small className="text-warning d-flex gap-1">
                    <StarRatings rating={avgRating} size={14} />
                  </small>

                  <Link href="#" className="ms-2">
                    ({totalReview} reviews)
                  </Link>
                </div>
                <div className="fs-4">
                  <span className="fw-bold text-dark">{`$${salePrice}`} </span>
                  <span className="text-decoration-line-through text-muted">
                    {`$${price}`}
                  </span>
                  <span>
                    <small className="fs-6 ms-2 text-danger">
                      {discount > 0 ? `${discount} % Off` : ""}
                    </small>
                  </span>
                </div>
                <hr className="my-6" />
                <div className="mb-4 d-flex gap-1">
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

                <div className="w-25">
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
                  <Col lg={4} md={5} xs={6} className="d-grid">
                    <Button variant="primary">
                      <ShoppingBag className="me-2" size={16} />
                      Add to cart
                    </Button>
                  </Col>

                  <Col md={4} xs={5}>
                    <div className="d-flex gap-1">
                      <FreshTippy content="Compare">
                        <Link className="btn btn-light" href="#">
                          <ArrowLeftRight size={14} />
                        </Link>
                      </FreshTippy>
                      <FreshTippy content="Wishlist">
                        <Link className="btn btn-light" href="#!">
                          <Heart size={14} />
                        </Link>
                      </FreshTippy>
                    </div>
                  </Col>
                </Row>
                <hr className="my-6" />
                <div>
                  <table className="table table-borderless">
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
                            01 day shipping.{" "}
                            <span className="text-muted">
                              ( Free pickup today)
                            </span>
                          </small>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
};

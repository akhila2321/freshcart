// import node module libraries
import { Row, Col, Image, InputGroup, Form } from "react-bootstrap";
import { Trash2 } from "react-feather";
import Link from "next/link";

// import required hook
import { useDispatch } from "react-redux";
import useCartOperations from "hooks/useCartOperations";

// import required redux actions
import { updateCart } from "store/storeSlices/cartSlice";

const CartItem = ({ product, className }) => {
  const {
    id,
    product_title,
    featuredImage,
    quantity,
    unit,
    price,
    salePrice,
    totalPrice,
  } = product;

  const dispatch = useDispatch();
  const { removeCartItem } = useCartOperations();

  const handleIncrease = () => {
    dispatch(
      updateCart({
        id: id,
        quantity: parseInt(quantity) + 1,
      })
    );
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      dispatch(
        updateCart({
          id: id,
          quantity: parseInt(quantity) - 1,
        })
      );
    }
  };

  const handleChange = (e) => {
    dispatch(
      updateCart({
        id: id,
        quantity: parseInt(e.target.value < 1 ? 1 : e.target.value),
      })
    );
  };

  return (
    <Row className={`align-items-center ${className}`}>
      <Col xs={6} md={6} lg={7}>
        <div className="d-flex">
          <Image
            src={featuredImage}
            alt="Ecommerce"
            className="icon-shape icon-xxl"
          />
          <div className="ms-3">
            <Link href="" className="text-inherit">
              <h6 className="mb-0">{product_title}</h6>
            </Link>
            <span>
              <small className="text-muted">{unit}</small>
            </span>

            <div className="mt-2 small lh-1">
              <Link
                href="#!"
                className="text-decoration-none text-inherit"
                onClick={(e) => {
                  e.preventDefault();
                  removeCartItem(id);
                }}
              >
                <span className="me-1 align-text-bottom">
                  <Trash2 className="text-success" size={14} />
                </span>
                <span className="text-muted">Remove</span>
              </Link>
            </div>
          </div>
        </div>
      </Col>
      <Col xs={4} md={3} lg={3}>
        <InputGroup className="input-spinner" size="sm">
          <Form.Control
            type="button"
            bsPrefix="button-minus btn btn-sm"
            onClick={() => handleDecrease()}
            value="-"
          />
          <Form.Control
            type="number"
            bsPrefix="quantity-field form-control-sm form-input"
            size="sm"
            name="quantity"
            value={quantity}
            readOnly
            onChange={() => handleChange()}
          />
          <Form.Control
            type="button"
            bsPrefix="button-plus btn btn-sm"
            onClick={() => handleIncrease()}
            value="+"
          />
        </InputGroup>
      </Col>
      <Col xs={2} md={2} className="text-center">
        <span className="fw-bold">${totalPrice?.toFixed(2)}</span>
      </Col>
    </Row>
  );
};

export default CartItem;

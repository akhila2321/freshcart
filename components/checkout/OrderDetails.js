// import node module libraries
import { useState, useEffect } from "react";
import { Row, Col, ListGroup, Card, Image } from "react-bootstrap";
import { Info } from "react-feather";

// import custom components
import FreshTippy from "../common/FreshTippy";

// import required hook
import useCartOperations from "hooks/useCartOperations";
import { useSelector } from "react-redux";

const OrderDetails = () => {
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const { cartItems, cartSummary } = useSelector((state) => state.cart);

  const { getCartSubtotal, getGrandTotal } = useCartOperations();

  useEffect(() => {
    setCartSubTotal(getCartSubtotal(cartItems));
  }, [cartItems, getCartSubtotal]);

  return (
    <div className="mt-4 mt-lg-0" style={{ maxWidth: "390px" }}>
      <Card className="shadow-sm">
        <h5 className="px-6 py-4 bg-transparent mb-0">Order Details</h5>
        <ListGroup as="ul" variant="flush">
          {cartItems.map((item) => (
            <ListGroup.Item className="px-4 py-3" key={item.id} as="li">
              <Row className="align-items-center">
                <Col xs={2} md={2}>
                  <Image
                    src={item.featuredImage}
                    alt="Ecommerce"
                    className="img-fluid"
                  />
                </Col>
                <Col xs={5} md={5}>
                  <h6 className="mb-0">{item.product_title}</h6>
                  <span>
                    <small className="text-muted">{item.unit}</small>
                  </span>
                </Col>
                <Col xs={2} md={2} className="text-center text-muted">
                  <span>{item.quantity}</span>
                </Col>
                <Col
                  xs={3}
                  md={3}
                  className="text-lg-end text-start text-md-end"
                >
                  <span className="fw-bold">${item.totalPrice.toFixed(2)}</span>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}

          <ListGroup.Item className="px-4 py-3" as="li">
            <div className="d-flex align-items-center justify-content-between   mb-2">
              <div>Item Subtotal</div>
              <div className="fw-bold">{`$${cartSubTotal.toFixed(2)}`}</div>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2 ">
              <div>
                Shipping Fee{" "}
                <FreshTippy content="Default tooltip">
                  <Info className="text-muted" size={14} />
                </FreshTippy>
              </div>

              <div className="fw-bold">{`$${cartSummary.shipping.toFixed(
                2
              )}`}</div>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2 ">
              <div>{`Tax Vat ${cartSummary.tax}%`}</div>
              <div className="fw-bold">
                {`$${cartSummary.taxAmount.toFixed(2)}`}
              </div>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="px-4 py-3">
            <div className="d-flex align-items-center justify-content-between mb-2 fw-bold">
              <div>Grand Total</div>
              <div>{`$${getGrandTotal().toFixed(2)}`}</div>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default OrderDetails;

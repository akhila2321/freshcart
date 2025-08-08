"use client";
// import node module libraries
import { Fragment } from "react";
import { Row, Col, Alert, ListGroup, Button } from "react-bootstrap";
import Link from "next/link";

// import sub components
import CartHeading from "./CartHeading";

// import custom components
import OrderSummary from "components/shop/OrderSummary";
import CartItem from "components/cart/CartItem";

// import required hooks
import useCartOperations from "hooks/useCartOperations";

const ShoppingCartItems = () => {
  const { cartItems } = useCartOperations();
  return (
    <Fragment>
      <CartHeading />
      <Row>
        <Col lg={8} md={7}>
          <div className="py-3">
            <Alert variant="danger" className="p-2">
              You’ve got FREE delivery. Start{" "}
              <Alert.Link href="/shop/shop-checkout" as={Link}>
                checkout now!
              </Alert.Link>
            </Alert>

            <ListGroup variant="flush" as="ul">
              {cartItems.length > 0 &&
                cartItems.map((product, index) => (
                  <ListGroup.Item
                    as="li"
                    className={`py-3 ps-0 ${index === 0
                        ? "border-top"
                        : index === cartItems.length - 1
                          ? "border-bottom"
                          : ""
                      }`}
                    key={product.id}
                  >
                    <CartItem product={product} />
                  </ListGroup.Item>
                ))}
            </ListGroup>
            <div className="d-flex justify-content-between mt-4">
              <Button href="/shop/shop-grid" variant="primary" as={Link}>
                Continue Shopping
              </Button>
              <Button href="/shop/shop-checkout" variant="dark" as={Link}>
                Proceed to checkout
              </Button>
            </div>
          </div>
        </Col>
        <Col lg={4} md={5} xs={12}>
          <OrderSummary />
        </Col>
      </Row>
    </Fragment>
  );
};

export default ShoppingCartItems;

// import node module libraries
import React from "react";
import Link from "next/link";
import { Dropdown, ListGroup, Row, Col, Image, Button } from "react-bootstrap";
import { ShoppingCart } from "react-feather";
import { X } from "react-bootstrap-icons";

// import required hooks
import useCartOperations from "hooks/useCartOperations";

const CustomToggle = React.forwardRef(
  ({ children, onClick, className }, ref) => (
    <Link
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      href=""
      className={`text-reset ${className}`}
    >
      <span>
        <ShoppingCart size={16} className="align-text-bottom" />
      </span>
      <span> {children}</span>
    </Link>
  )
);

CustomToggle.displayName = "Custom Toggle";

const CartDropdown = ({ className, toggleIcon = false }) => {
  const { cartItems, removeCartItem } = useCartOperations();

  //Calculate subtotal from cart items
  const subTotal = cartItems.reduce(
    (total, item) => total + item.totalPrice,
    0
  );

  return (
    <Dropdown className={className} align={"end"}>
      <Dropdown.Toggle
        as={CustomToggle}
        className={toggleIcon ? "dropdown-toggle" : ""}
      >
        ${subTotal.toFixed(2)}
      </Dropdown.Toggle>
      <Dropdown.Menu bsPrefix="dropdown-menu dropdown-menu-end dropdown-menu-lg p-5">
        <div className="d-flex justify-content-between align-items-center border-bottom pb-5 mb-3">
          <div className="d-flex align-items-center gap-1">
            <ShoppingCart size={14} />
            <span className="text-success">{cartItems.length}</span>
          </div>
          <div>
            <span>Total: </span>
            <span className="text-success">${subTotal.toFixed(2)}</span>
          </div>
        </div>

        <ListGroup as="ul" variant="flush">
          {cartItems &&
            cartItems.map((item) => (
              <ListGroup.Item as="li" className="px-0 py-3" key={item.id}>
                <Row className="align-items-center g-0 ">
                  <Col lg={3} xs={3} className="text-center">
                    <Image
                      src={item.featuredImage}
                      alt=""
                      className="icon-xxl"
                    />
                  </Col>
                  <Col lg={7} xs={7}>
                    <Link href="">
                      <h6 className="mb-0">{item.product_title}</h6>
                    </Link>
                    <small className="text-muted">
                      {item.quantity} x ${item.salePrice.toFixed(2)}
                    </small>
                  </Col>
                  <Col lg={2} xs={2} className="text-end">
                    <Link
                      href=""
                      className="text-inherit"
                      onClick={(e) => {
                        e.preventDefault();
                        removeCartItem(item.id);
                      }}
                    >
                      <X className="fs-4" />
                    </Link>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
        </ListGroup>

        {cartItems.length > 0 ? (
          <div className="mt-2 d-grid">
            <Button href="/shop/shop-checkout" variant="primary" as={Link}>
              Checkout
            </Button>
            <Button
              href="/shop/shop-cart"
              variant="light"
              className="mt-2"
              as={Link}
            >
              View Cart
            </Button>
          </div>
        ) : (
          <div className="mt-2 d-grid">
            <Button href="/shop/shop-grid" variant="primary" as={Link}>
              Shop Now
            </Button>
          </div>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CartDropdown;

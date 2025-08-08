// import node module libraries
import Link from "next/link";
import { Button, ListGroup, Offcanvas, Alert } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

// import custom components
import CartItem from "./CartItem";
import { deviceSize } from "components/common/DeviceSize";

// import required hooks
import useCartOperations from "hooks/useCartOperations";
import { useRouter } from "next/navigation";

const OffcanvasCart = ({ show, handleClose }) => {
  const { cartItems } = useCartOperations();
  const router = useRouter();

  const smallDevice = useMediaQuery({ maxWidth: deviceSize.small });

  const handleShopClick = () => {
    handleClose();
    router.push("/shop/shop-grid");
  };

  const handleCheckoutClick = () => {
    handleClose();
    router.push("/shop/shop-checkout");
  };

  return (
    <Offcanvas
      id="offcanvasRight"
      show={show}
      onHide={handleClose}
      placement="end"
    >
      <Offcanvas.Header className="border-bottom" closeButton>
        <div className="text-start">
          <h5 id="offcanvasRightLabel" className="mb-0 fs-4">
            Shop Cart
          </h5>
          <small>Location in 382480</small>
        </div>
      </Offcanvas.Header>

      <Offcanvas.Body>
        {cartItems.length > 0 && (
          <Alert variant="danger" className="p-2">
            You’ve got FREE delivery. Start{" "}
            <Link href="#!" className="alert-link">
              checkout now!
            </Link>
          </Alert>
        )}

        {cartItems.length > 0 ? (
          <ListGroup variant="flush" as="ul">
            {cartItems.map((item) => (
              <ListGroup.Item
                className="py-3 ps-0 border-bottom"
                as="li"
                key={item.id}
              >
                <CartItem product={item} />
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          <div className="d-flex justify-content-center align-items-center  h-100">
            <div className="text-center">
              <h3>Opps!</h3>
              <p className="fs-5 fw-normal">Your cart is empty</p>
              <Button variant="primary" onClick={handleShopClick}>
                Shop Now
              </Button>
            </div>
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="d-flex justify-content-between mt-4">
            <Button
              variant="primary"
              onClick={handleShopClick}
              size={smallDevice ? "sm" : ""}
            >
              Continue Shopping
            </Button>
            <Button
              variant="dark"
              onClick={handleCheckoutClick}
              size={smallDevice ? "sm" : ""}
            >
              Proceed To Checkout
            </Button>
          </div>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default OffcanvasCart;

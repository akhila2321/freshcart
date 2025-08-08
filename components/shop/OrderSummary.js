// import node module libraries
import { useState, useEffect } from "react";
import { Card, ListGroup, Button, Form, Alert } from "react-bootstrap";
import Link from "next/link";

// import required hooks
import useCartOperations from "hooks/useCartOperations";
import { useDispatch, useSelector } from "react-redux";

// import required redux actions
import { applyCoupon } from "store/storeSlices/cartSlice";

// import subcomponents
import SummaryItem from "./SummaryItem";

const OrderSummary = () => {
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [couponCodeFound, setCouponCodeFound] = useState(null);

  const dispatch = useDispatch();

  //Destructuring function from hooks
  const { getDiscountAmount, getGrandTotal, getCartSubtotal } =
    useCartOperations();

  const { cartItems, cartSummary, couponCodes } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    setCartSubTotal(getCartSubtotal(cartItems));
  }, [cartItems, getCartSubtotal]);

  const applyCouponCode = (e) => {
    e.preventDefault();
    const couponInfo = couponCodes.find((coupon) => coupon.code === couponCode);

    if (couponInfo) {
      setCouponCodeFound(true);

      dispatch(
        applyCoupon({
          coupon: couponInfo.code,
          discount: couponInfo.discount,
        })
      );
    } else {
      setCouponCodeFound(false);

      dispatch(
        applyCoupon({
          coupon: couponCode,
          discount: 0,
        })
      );
    }

    setCouponCode("");
  };

  return (
    <Card className="mb-5 mt-6">
      {couponCodeFound === null ? (
        ""
      ) : couponCodeFound ? (
        <Card.Header>
          <Alert variant="success">
            <strong>{cartSummary.coupon}</strong> Coupon code is applied
            successfully!!.
          </Alert>
        </Card.Header>
      ) : (
        <Card.Header>
          <Alert variant="danger">
            Either <strong>{cartSummary.coupon}</strong> coupon code is invalid
            or expired.
          </Alert>
        </Card.Header>
      )}

      <Card.Body className="p-6">
        <h2 className="h5 mb-4">Summary</h2>
        <Card className="mb-2">
          <ListGroup variant="flush">
            <SummaryItem
              label="Item Subtotal"
              value={`$${cartSubTotal.toFixed(2)}`}
            />
            {couponCodeFound
              ? cartSummary.coupon && (
                <SummaryItem
                  label={`Discount (${cartSummary.coupon})`}
                  value={`-$${getDiscountAmount().toFixed(2)}`}
                />
              )
              : ""}
            <SummaryItem
              label="Shipping Fee"
              value={`$${cartSummary.shipping.toFixed(2)}`}
            />
            <SummaryItem
              label={`Tax Vat ${cartSummary.tax}%`}
              value={`$${cartSummary.taxAmount.toFixed(2)}`}
            />

            <SummaryItem
              label="Subtotal"
              value={`$${getGrandTotal().toFixed(2)}`}
              bold
            />
          </ListGroup>
        </Card>

        <div className="d-grid mb-1 mt-4">
          <Button
            variant="primary"
            size="lg"
            className="d-flex justify-content-between align-items-center"
            href="/shop/shop-checkout"
            as={Link}
          >
            Go to Checkout
            <span className="fw-bold">{`$${getGrandTotal().toFixed(2)}`}</span>
          </Button>
        </div>

        <p>
          <small>
            By placing your order, you agree to be bound by the Freshcart
            <Link href="#!"> Terms of Service </Link>
            and
            <Link href="#!"> Privacy Policy.</Link>
          </small>
        </p>

        <div className="mt-8">
          <h2 className="h5 mb-3">Add Promo or Gift Card</h2>
          <Form onSubmit={applyCouponCode}>
            <div className="mb-2">
              <Form.Label htmlFor="giftcard" className="sr-only">
                Email address
              </Form.Label>
              <Form.Control
                type="text"
                id="giftcard"
                placeholder="Promo or Gift Card"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
            </div>

            <div className="d-grid">
              <Button variant="outline-dark" className="mb-1" type="submit">
                Redeem
              </Button>
            </div>
            <p className="text-muted mb-0">
              <small>Terms & Conditions apply</small>
            </p>
          </Form>
        </div>
      </Card.Body>
    </Card>
  );
};

export default OrderSummary;

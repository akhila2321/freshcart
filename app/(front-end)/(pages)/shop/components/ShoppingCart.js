"use client";
// import node module libraries
import { Container } from "react-bootstrap";

// import sub components
import EmptyCart from "./EmptyCart";
import ShoppingCartItems from "./ShoppingCartItems";

// import required hooks
import useCartOperations from "hooks/useCartOperations";

const ShoppingCart = () => {
  const { cartItems } = useCartOperations();
  return (
    <section className="mb-lg-14 mb-8 mt-8">
      <Container>
        {cartItems.length > 0 ? <ShoppingCartItems /> : <EmptyCart />}
      </Container>
    </section>
  );
};

export default ShoppingCart;

// import required hooks
import { useDispatch, useSelector } from "react-redux";

// import required redux actions
import { updateCartSubTotal } from "store/storeSlices/cartSlice";
import { removeItemFromCart } from "store/storeSlices/cartSlice";
import { addToCart } from "store/storeSlices/cartSlice";

const useCartOperations = () => {
  const { cartSummary, cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // function to get cart subtotal
  const getCartSubtotal = (items) => {
    let subTotal = items.reduce(
      (total, item) => total + item.salePrice * item.quantity,
      0
    );

    dispatch(updateCartSubTotal(subTotal));

    return subTotal;
  };

  // function to get discount amount
  const getDiscountAmount = () => {
    return cartSummary.subTotal * (cartSummary.discount / 100);
  };

  // function to get grand total of cart
  const getGrandTotal = () => {
    let grossTotal = cartSummary.subTotal - cartSummary.discount;
    const taxAmount = grossTotal * (cartSummary.tax / 100);

    let grandTotal = grossTotal + taxAmount + cartSummary.shipping;
    return grandTotal;
  };

  const removeCartItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const addItemToCart = (data) => {
    const cartItems = {
      id: data.id,
      product_title: data.product_title,
      product_category: data.product_category,
      price: data.price,
      salePrice: data.salePrice,
      unit: data.unit,
      featuredImage: data.featuredImage,
    };

    dispatch(addToCart(cartItems));
  };

  return {
    getDiscountAmount,
    removeCartItem,
    getGrandTotal,
    cartItems,
    addItemToCart,
    getCartSubtotal,
  };
};

export default useCartOperations;

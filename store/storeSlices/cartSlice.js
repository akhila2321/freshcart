// import node module libraries
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

// import required data file
import { cartItemsData } from "data/products/ShoppingCartData";

const getCartSubtotal = (items) => {
  if (items.length == 0) {
    return 0;
  }

  let subTotal = items.reduce(
    (total, item) => total + item.salePrice * item.quantity,
    0
  );

  return subTotal;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: cartItemsData,
    totalQuantity: 0,
    cartSummary: {
      subTotal: 0,
      discount: 0,
      coupon: "",
      shipping: 0,
      tax: 18,
      taxAmount: 0,
    },
    couponCodes: [
      { code: "FRESH5", discount: 5 },
      { code: "NEW20", discount: 20 },
      { code: "FRESH15", discount: 15 },
    ],
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          product_title: newItem.product_title,
          product_category: newItem.product_category,
          price: newItem.price,
          salePrice: newItem.salePrice,
          unit: newItem.unit,
          featuredImage: newItem.featuredImage,
          quantity: 1,
          totalPrice: newItem.salePrice,
        });

        toast.success("Product added to cart", {
          position: "bottom-right",
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.salePrice;
        toast.success("Product updated to cart", {
          position: "bottom-right",
        });
      }
    },

    removeItemFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (product) => product.id !== action.payload
      );
    },
    updateCart(state, action) {
      let index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      let currentItem = state.cartItems[index];
      currentItem.quantity = action.payload.quantity;
      currentItem.totalPrice = currentItem.salePrice * action.payload.quantity;
      state.totalQuantity = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
    },
    updateCartSubTotal(state, action) {
      state.cartSummary.subTotal = action.payload;
      state.totalQuantity = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );

      const subTotal = getCartSubtotal(state.cartItems);
      const taxAmount = subTotal * (18 / 100);
      state.cartSummary.taxAmount = taxAmount;
    },

    applyCoupon(state, action) {
      state.cartSummary.coupon = action.payload.coupon;
      state.cartSummary.discount = action.payload.discount;
    },
  },
});

export const {
  addToCart,
  removeItemFromCart,
  updateCart,
  updateCartSubTotal,

  applyCoupon,
} = cartSlice.actions;
export const selectedCartItem = (state) => state.cart.cartItems;
export default cartSlice;

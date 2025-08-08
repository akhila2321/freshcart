// import node module libraries
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

// Import required data files
import { wishlistData } from "data/WishlistData";

const initialState = {
  items: wishlistData,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItems: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push(newItem);

        toast.success("Product added to wishlist", {
          position: "bottom-right",
        });
      } else {
        toast.error("Product already added to wishlist", {
          position: "bottom-right",
        });
      }
    },
    removeItems: (state, action) => {
      const productId = action.payload;
      const productIndex = state.items.findIndex(
        (item) => item.id === productId
      );

      if (productIndex >= 0) {
        state.items.splice(productIndex, 1);

        toast.success("Item removed from wishlist", {
          position: "bottom-right",
        });
      }
    },
  },
});

export const { addItems, removeItems } = wishlistSlice.actions;
export const wishlistSelectedItems = (state) => state.wishlist.items;
export default wishlistSlice;

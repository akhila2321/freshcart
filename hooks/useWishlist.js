// import helper utility file
import { calculateSalePrice } from "helper/utils";

// import required hooks
import { useDispatch, useSelector } from "react-redux";

// import required redux actions
import { addItems, removeItems } from "store/storeSlices/wishlistSlice";
import { wishlistSelectedItems } from "store/storeSlices/wishlistSlice";

export const useWishlist = () => {
  const dispatch = useDispatch();

  //Select Wishlist Item
  const wishListItems = useSelector(wishlistSelectedItems);

  //Add wishlist Handler
  const addToWishlist = (product) => {
    const salePrice = calculateSalePrice(product.price, product.discount);

    const wishListItem = {
      id: product.id,
      product_title: product.product_title,
      product_category: product.product_category,
      price: product.price,
      salePrice: salePrice,
      unit: product.unit,
      featuredImage: product.featuredImage,
      stocks: product.stocks,
    };

    dispatch(addItems(wishListItem));
  };

  //Remove wishlist handler
  const removeWishlistItem = (id) => {
    dispatch(removeItems(id));
  };

  return { addToWishlist, removeWishlistItem, wishListItems };
};

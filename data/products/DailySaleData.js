import { v4 as uuid } from "uuid";

export const dailySaleData = [
  {
    id: uuid(),
    title: "Roast Ground Coffee",
    category: "Tea, Coffee & Drinks",
    image: "/images/products/product-img-11.jpg",
    price: 18,
    salePrice: 13,
    rating: 4.5,
    salesEnd: "2028/10/10 00:00:00",
  },
  {
    id: uuid(),
    title: "Crushed Tomatoes",
    category: "Fruits & Vegetables",
    image: "/images/products/product-img-12.jpg",
    price: 13,
    salePrice: 18,
    rating: 4.5,
    salesEnd: "2028/09/10 00:00:00",
  },
  {
    id: uuid(),
    title: "Golden Pineapple",
    category: "Fruits & Vegetables",
    image: "/images/products/product-img-13.jpg",
    price: 13,
    salePrice: 18,
    rating: 4.5,
    salesEnd: "2028/07/10 00:00:00",
  },
];

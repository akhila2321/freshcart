import { v4 as uuid } from "uuid";

// Base categories with unique titles and appropriate images
const baseCategories = [
  {
    title: "Dairy, Bread & Eggs",
    image: "/images/category/category-dairy-bread-eggs.jpg",
    link: "shop/shop-grid",
  },
  {
    title: "Snacks & Munchies",
    image: "/images/category/category-snack-munchies.jpg",
    link: "shop/shop-grid",
  },
  {
    title: "Bakery & Biscuits",
    image: "/images/category/category-bakery-biscuits.jpg",
    link: "shop/shop-grid",
  },
  {
    title: "Instant Food",
    image: "/images/category/category-instant-food.jpg",
    link: "shop/shop-grid",
  },
  {
    title: "Tea, Coffee & Drinks",
    image: "/images/category/category-tea-coffee-drinks.jpg",
    link: "shop/shop-grid",
  },
  {
    title: "Atta, Rice & Dal",
    image: "/images/category/category-atta-rice-dal.jpg",
    link: "shop/shop-grid",
  },
  {
    title: "Baby Care",
    image: "/images/category/category-baby-care.jpg",
    link: "shop/shop-grid",
  },
  {
    title: "Chicken, Meat & Fish",
    image: "/images/category/category-chicken-meat-fish.jpg",
    link: "shop/shop-grid",
  },
  {
    title: "Cleaning Essentials",
    image: "/images/category/category-cleaning-essentials.jpg",
    link: "shop/shop-grid",
  },
  {
    title: "Pet Care",
    image: "/images/category/category-pet-care.jpg",
    link: "shop/shop-grid",
  },
  {
    title: "Fruits & Vegetables",
    image: "/images/category/category-fruits-vegetables.jpg",
    link: "shop/shop-grid",
  },
  {
    title: "Cold Drinks & Juices",
    image: "/images/category/category-cold-drinks-juices.jpg",
    link: "shop/shop-grid",
  },
];

// Generate unique IDs and ensure no duplicates
export const categoryData = Array.from(
  new Map(
    baseCategories.map(category => [
      category.title.toLowerCase(), 
      { ...category, id: uuid() }
    ])
  ).values()
);

export const categoryCircleData = [
  {
    id: uuid(),
    title: "Dairy, Bread & Eggs",
    image: "/images/category/dairy-bread-eggs.png",
    link: "",
  },
  {
    id: uuid(),
    title: "Fruits & Vegetables",
    image: "/images/category/fruits-vegetables.png",
    link: "",
  },
  {
    id: uuid(),
    title: "Snack & Munchies",
    image: "/images/category/snack-munchies.png",
    link: "",
  },
  {
    id: uuid(),
    title: "Bakery & Biscuits",
    image: "/images/category/bakery-biscuits.png",
    link: "",
  },
  {
    id: uuid(),
    title: "Instant Food",
    image: "/images/category/instant-food.png",
    link: "",
  },
  {
    id: uuid(),
    title: "Tea, Coffee & Drinks",
    image: "/images/category/tea-coffee-drinks.png",
    link: "",
  },
  {
    id: uuid(),
    title: "Cold Drinks & Juices",
    image: "/images/category/cold-drinks-juices.png",
    link: "",
  },
  {
    id: uuid(),
    title: "Chicken, Meat & Fish",
    image: "/images/category/chicken-meat-fish.png",
    link: "",
  },
  {
    id: uuid(),
    title: "Baby Care",
    image: "/images/category/baby-care.png",
    link: "",
  },
  {
    id: uuid(),
    title: "Cleaning Essentials",
    image: "/images/category/cleaning-essentials.png",
    link: "",
  },
  {
    id: uuid(),
    title: "Pet Care",
    image: "/images/category/pet-care.png",
    link: "",
  },
  {
    id: uuid(),
    title: "Atta, Rice & Dal",
    image: "/images/category/atta-rice-dal.png",
    link: "",
  },
];

export const shopByCategoryData = [
  { id: uuid(), title: "Bakery", image: "/images/icons/bakery.svg", link: "" },
  { id: uuid(), title: "Dairy", image: "/images/icons/dairy.svg", link: "" },
  {
    id: uuid(),
    title: "Vegetables",
    image: "/images/icons/vegetables.svg",
    link: "",
  },
  { id: uuid(), title: "Snacks", image: "/images/icons/snacks.svg", link: "" },
  {
    id: uuid(),
    title: "Baby Care",
    image: "/images/icons/baby-food.svg",
    link: "",
  },
  { id: uuid(), title: "Fish", image: "/images/icons/fish.svg", link: "" },
  {
    id: uuid(),
    title: "Pet Foods",
    image: "/images/icons/petfoods.svg",
    link: "",
  },
  { id: uuid(), title: "Fruits", image: "/images/icons/fruit.svg", link: "" },
  {
    id: uuid(),
    title: "Coffee & Tea",
    image: "/images/icons/coffee.svg",
    link: "",
  },
  { id: uuid(), title: "Wine", image: "/images/icons/wine.svg", link: "" },
];

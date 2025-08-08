import { v4 as uuid } from "uuid";
import {
  ShoppingBag,
  Gift,
  MapPin,
  Star,
  Book,
  PhoneCall,
  Clipboard,
} from "react-feather";

export const storeData = [
  {
    id: uuid(),
    storeName: "E-Grocery Super Market",
    storeLogo: "/images/stores-logo/stores-logo-1.svg",
    category: [
      { id: uuid(), name: "Organic" },
      { id: uuid(), name: "Groceries" },
      { id: uuid(), name: "Butcher Shop" },
    ],
    service: [
      { id: uuid(), name: "Delivery", deliveryTime: "" },
      { id: uuid(), name: "Pickup available" },
    ],
    features: [
      { id: uuid(), name: "7.5 mi away" },
      { id: uuid(), name: "In-store prices" },
    ],
  },
  {
    id: uuid(),
    storeName: "DealShare Mart",
    storeLogo: "/images/stores-logo/stores-logo-2.svg",
    category: [
      { id: uuid(), name: "Alcohol" },
      { id: uuid(), name: "Groceries" },
    ],
    service: [
      { id: uuid(), name: "Delivery", deliveryTime: "" },
      { id: uuid(), name: "Pickup available" },
    ],
    features: [{ id: uuid(), name: "7.2 mi away" }],
  },
  {
    id: uuid(),
    storeName: "DMart",
    storeLogo: "/images/stores-logo/stores-logo-3.svg",
    category: [
      { id: uuid(), name: "Groceries" },
      { id: uuid(), name: "Bakery" },
      { id: uuid(), name: "Deli" },
    ],
    service: [
      { id: uuid(), name: "Delivery", deliveryTime: "10:30pm" },
      { id: uuid(), name: "Pickup available" },
    ],
    features: [{ id: uuid(), name: "9.3 mi away" }],
  },
  {
    id: uuid(),
    storeName: "Blinkit Store",
    storeLogo: "/images/stores-logo/stores-logo-4.svg",
    category: [
      { id: uuid(), name: "Meal Kits" },
      { id: uuid(), name: "Prepared Meals" },
      { id: uuid(), name: "Organic" },
    ],
    service: [
      { id: uuid(), name: "Delivery", deliveryTime: "" },
      { id: uuid(), name: "Pickup available" },
    ],
    features: [{ id: uuid(), name: "40.5 mi away" }],
  },
  {
    id: uuid(),
    storeName: "StoreFront Super Market",
    storeLogo: "/images/stores-logo/stores-logo-5.svg",
    category: [
      { id: uuid(), name: "Groceries" },
      { id: uuid(), name: "Bakery" },
    ],
    service: [
      { id: uuid(), name: "Delivery", deliveryTime: "11:30pm" },
      { id: uuid(), name: "Pickup available" },
    ],
    features: [{ id: uuid(), name: "28.1 mi away" }],
  },
  {
    id: uuid(),
    storeName: "BigBasket",
    storeLogo: "/images/stores-logo/stores-logo-6.svg",
    category: [
      { id: uuid(), name: "Groceries" },
      { id: uuid(), name: "Deli" },
    ],
    service: [
      { id: uuid(), name: "Delivery", deliveryTime: "10:30pm" },
      { id: uuid(), name: "Pickup available" },
    ],
    features: [{ id: uuid(), name: "7.5 mi away" }],
  },
  {
    id: uuid(),
    storeName: "Swiggy Instamart",
    storeLogo: "/images/stores-logo/stores-logo-7.svg",
    category: [
      { id: uuid(), name: "Meal Kits" },
      { id: uuid(), name: "Prepared Meals" },
      { id: uuid(), name: "Organic" },
    ],
    service: [
      { id: uuid(), name: "Delivery", deliveryTime: "" },
      { id: uuid(), name: "Pickup available" },
    ],
    features: [{ id: uuid(), name: "40.5 mi away" }],
  },
  {
    id: uuid(),
    storeName: "Online Grocery Mart",
    storeLogo: "/images/stores-logo/stores-logo-8.svg",
    category: [
      { id: uuid(), name: "Groceries" },
      { id: uuid(), name: "Bakery" },
    ],
    service: [
      { id: uuid(), name: "Delivery", deliveryTime: "11:30pm" },
      { id: uuid(), name: "Pickup available" },
    ],
    features: [{ id: uuid(), name: "28.1 mi away" }],
  },
  {
    id: uuid(),
    storeName: "Spencers",
    storeLogo: "/images/stores-logo/stores-logo-9.svg",
    category: [
      { id: uuid(), name: "Groceries" },
      { id: uuid(), name: "Deli" },
    ],
    service: [
      { id: uuid(), name: "Delivery", deliveryTime: "10:30pm" },
      { id: uuid(), name: "Pickup available" },
    ],
    features: [{ id: uuid(), name: "7.5 mi away" }],
  },
];

export const storeNavigationData = [
  {
    id: uuid(),
    title: "Shop",
    icon: <ShoppingBag className="me-2" size={14} />,
    link: "",
  },
  {
    id: uuid(),
    title: "Deals",
    icon: <Gift className="me-2" size={14} />,
    link: "",
  },
  {
    id: uuid(),
    title: "Buy It Again",
    icon: <MapPin className="me-2" size={14} />,
    link: "",
  },
  {
    id: uuid(),
    title: "Reviews",
    icon: <Star className="me-2" size={14} />,
    link: "",
  },
  {
    id: uuid(),
    title: "Recipes",
    icon: <Book className="me-2" size={14} />,
    link: "",
  },
  {
    id: uuid(),
    title: "Contact",
    icon: <PhoneCall className="me-2" size={14} />,
    link: "",
  },
  {
    id: uuid(),
    title: "Policy",
    icon: <Clipboard className="me-2" size={14} />,
    link: "",
  },
];

export const storeCategoryData = [
  { id: uuid(), title: "Produce", link: "" },
  { id: uuid(), title: "Dairy & Eggs", link: "" },
  { id: uuid(), title: "Beverages", link: "" },
  { id: uuid(), title: "Meat & Seafood", link: "" },
  { id: uuid(), title: "Snacks & Candy", link: "" },
  { id: uuid(), title: "Frozen", link: "" },
  { id: uuid(), title: "Bakery", link: "" },
  { id: uuid(), title: "Prepared Foods", link: "" },
  { id: uuid(), title: "Alcohol", link: "" },
  { id: uuid(), title: "Dry Goods & Pasta", link: "" },
  { id: uuid(), title: "Condiments & Sauces", link: "" },
  { id: uuid(), title: "Canned Goods & Soups", link: "" },
  { id: uuid(), title: "Breakfast", link: "" },
  { id: uuid(), title: "Household", link: "" },
  { id: uuid(), title: "Baking Essentials", link: "" },
  { id: uuid(), title: "Oils, Vinegars, & Spices", link: "" },
  { id: uuid(), title: "Health Care", link: "" },
  { id: uuid(), title: "Personal Care", link: "" },
  { id: uuid(), title: "Kitchen Supplies", link: "" },
  { id: uuid(), title: "Floral", link: "" },
  { id: uuid(), title: "Party & Gift Supplies", link: "" },
];

export const storeEarningData = [
  {
    id: uuid(),
    sellerId: "#009",
    storeName: "E-Grocery Super Market",
    logo: "/images/stores-logo/stores-logo-1.svg",
    email: "heathercarpenter@dayrep.com",
    grossSale: 200,
    netEarning: 200,
  },
];

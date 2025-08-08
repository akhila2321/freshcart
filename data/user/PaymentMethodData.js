import { v4 as uuid } from "uuid";

export const paymentMethodData = [
  {
    id: uuid(),
    image: "/images/svg-graphics/visa.svg",
    card: "**** 1234",
    expiry: "10/2023",
    isExpried: false,
    isRemoved: true,
  },
  {
    id: uuid(),
    image: "/images/svg-graphics/mastercard.svg",
    card: "Mastercard ending in 1234",
    expiry: "03/2026",
    isExpried: false,
    isRemoved: false,
  },
  {
    id: uuid(),
    image: "/images/svg-graphics/discover.svg",
    card: "Discover ending in 1234",
    expiry: "07/2020",
    isExpried: true,
    isRemoved: false,
  },
  {
    id: uuid(),
    image: "/images/svg-graphics/americanexpress.svg",
    card: "American Express ending in 1234",
    expiry: "10/2021",
    isExpried: false,
    isRemoved: false,
  },
  {
    id: uuid(),
    image: "/images/svg-graphics/paypal.svg",
    card: "Paypal Express ending in 1234",
    expiry: "10/2021",
    isExpried: false,
    isRemoved: false,
  },
];

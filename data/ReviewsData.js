import { v4 as uuid } from "uuid";

export const reviewsData = [
  {
    id: uuid(),
    name: "Shankar Subbaraman",
    avatar: "/images/avatar/avatar-10.jpg",
    review_date: "30 December 2022",
    rating: 5,
    tag: "Verified Purchase",
    review_title: "Need to recheck the weight at delivery point",
    review:
      "Product quality is good. But, weight seemed less than 1kg. Since it is being sent in open package, there is a possibility of pilferage in between. FreshCart sends the veggies and fruits through sealed plastic covers and Barcode on the weight etc. .",
    images: [
      { id: uuid(), image: "/images/products/product-img-1.jpg" },
      { id: uuid(), image: "/images/products/product-img-2.jpg" },
      { id: uuid(), image: "/images/products/product-img-3.jpg" },
    ],
  },
  {
    id: uuid(),
    name: "Robert Thomas",
    avatar: "/images/avatar/avatar-12.jpg",
    review_date: "29 December 2022",
    rating: 4,
    tag: "Unverified Purchase",
    review_title: "Need to recheck the weight at delivery point",
    review:
      "Product quality is good. But, weight seemed less than 1kg. Since it is being sent in open package, there is a possibility of pilferage in between. FreshCart sends the veggies and fruits through sealed plastic covers and Barcode on the weight etc. .",
    images: [],
  },
  {
    id: uuid(),
    name: "Barbara Tay",
    avatar: "/images/avatar/avatar-9.jpg",
    review_date: "28 December 2022",
    rating: 4,
    tag: "Unverified Purchase",
    review_title: "Need to recheck the weight at delivery point",
    review:
      "Everytime i ordered from fresh i got greenish yellow bananas just like i wanted so go for it , its happens very rare that u get over riped ones.",
    images: [],
  },
  {
    id: uuid(),
    name: "Sandra Langevin",
    avatar: "/images/avatar/avatar-8.jpg",
    review_date: "8 December 2022",
    rating: 4,
    tag: "Verified Purchase",
    review_title: "Great product",
    review: "Great product & package. Delivery can be expedited.",
    images: [],
  },
];

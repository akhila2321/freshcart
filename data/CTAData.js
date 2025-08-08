import { v4 as uuid } from "uuid";

export const horizontalCTAData = [
  {
    id: uuid(),
    title: "Fruits & Vegetables",
    image: "/images/banner/grocery-banner.png",
    discount: 30,
    link: "",
  },
  {
    id: uuid(),
    title: "Freshly Baked Buns",
    image: "/images/banner/grocery-banner-2.jpg",
    discount: 25,
    link: "",
  },
];

export const verticalCTAData = {
  title: "100% Organic Coffee Beans.",
  desc: "Get the best deal before close.",
  image: "/images/banner/banner-deal.jpg",
  link: "",
};

export const ctaBannerData = [
  {
    id: uuid(),
    title: "Offer",
    image: "/images/banner/ad-banner-4.jpg",
    link: "",
    variant: "dark-info",
  },
  {
    id: uuid(),
    title: "Fresh Food & Bakery",
    image: "/images/banner/ad-banner-5.jpg",
    link: "",
    variant: "dark-warning",
  },
  {
    id: uuid(),
    title: "Mixed and Assorted fruits",
    image: "/images/banner/ad-banner-6.jpg",
    link: "",
    variant: "dark-danger",
  },
];

export const aboutCTAData = [
  {
    id: uuid(),
    title: "Grow my business with Freshcart",
    desc: "Duis placerat, urna ut dictum lobortis, erat libero feugiat nulla, ullamcorper fermentum lectus dolor ut tortor.",
    image: "/images/about/about-icons-1.svg",
    actionLabel: "FreshCart Platform",
    actionLink: "",
  },
  {
    id: uuid(),
    title: "Advertise my brand on Freshcart",
    desc: "Duis placerat, urna ut dictum lobortis, erat libero feugiat nulla, ullamcorper fermentum lectus dolor ut tortor.",
    image: "/images/about/about-icons-2.svg",
    actionLabel: "FreshCart ads",
    actionLink: "",
  },
  {
    id: uuid(),
    title: "Learn more about Freshcart",
    desc: "Vivamus non risus id sapien egestas tempus id sed lla mus justo metus, suscipit non hendrerit.",
    image: "/images/about/about-icons-3.svg",
    actionLabel: "FreshCart Platform",
    actionLink: "",
  },
];

export const companyStatData = {
  id: uuid(),
  title: "Trusted by retailers. Loved by customers.",
  desc: "We give everyone access to the food they love and more time to enjoy it together.",
  stats: [
    { id: uuid(), title: "Shoppers", value: "500", suffix: "k" },
    { id: uuid(), title: "Cities", value: "4500", suffix: "+" },
    { id: uuid(), title: "Stores", value: "40", suffix: "+" },
    { id: uuid(), title: "Retail Brands", value: "650", suffix: "+" },
  ],
};

export const discountOnShareData = {
  id: 1,
  title: "One Stop Grocery Shop",
  desc: `<p className="mb-0 lead">
          Shopping for your furry friend? Find food,
          <br />
          treats, and more in one easy spot.
        </p>`,
  image: "/images/svg-graphics/store-graphics.svg",
  actionLabel: "Get Discount on Share",
  actionLink: "",
};

export const newsLetterData = {
  title: "Get top deals, latest trends, and more.",
  desc: "Join our email subscription now to get updates on promotions and coupons.",
  discount: 30,
  discText: "discount for your first order",
  image: "/images/png/girl-email.png",
};

export const welcomeCTAData = {
  id: 1,
  title: "Welcome to FreshCart",
  desc: `<span>Download the app get free food & <span className="text-primary"> $30 </span> off on your first order.</span>`,
  image: "/images/about/about-icons-1.svg",
  actionLabel: "Download FreshCart App",
  actionLink: "",
};

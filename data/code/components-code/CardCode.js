export const FeaturedCategoryCardCode = `
import CategoryCard from "components/cards/CategoryCard";

const Page = () => {
  const category = {
    id: 1,
    title: "Dairy, Bread & Eggs",
    image: "/images/category/category-dairy-bread-eggs.jpg",
    link: "shop/shop-grid",
  };

  return <CategoryCard category={category} />;
};

export default Page;
`.trim();

export const CardThumbnailOneCode = `
import ProductCard from "components/cards/ProductCard";

const Page = () => {

  const productItem = {
    id: 1,
    product_title: "Haldiram's Sev Bhujia",
    product_category: "Snack & Munchies",
    slug: "haldirams-sev-bhujia",
    featuredImage: "/images/products/product-img-1.jpg",
    price: 21,
    badge: "Sale",
    discount: 14,
    reviews: [{ rating: 4.3 }],
    unit: "100g",
  };

  return <ProductCard product={productItem} />;
};

export default Page;
`.trim();

export const CardThumbnailTwoCode = `
import ProductCardThree from "components/cards/ProductCardThree";

const Page = () => {
  const productItems = {
    product_title: "Salted Instant Popcorn",
    slug: "salted-instant-popcorn",
    featuredImage: "/images/products/product-img-5.jpg",
    price: 18,
    badge: "",
    discount: 35,
    reviews: [{ rating: 4.3 }],
  };

  return <ProductCardThree product={productItems} />;
};

export default Page;
`.trim();

export const CardThumbnailThreeCode = `
import ProductWithCountdown from "components/cards/ProductWithCountdown";

const Page = () => {
  const productItems = {
    product_title: "Salted Instant Popcorn",
    slug: "salted-instant-popcorn",
    featuredImage: "/images/products/product-img-5.jpg",
    price: 18,
    badge: "",
    discount: 35,
    reviews: [{ rating: 4.3 }],
  };

  return <ProductWithCountdown product={productItems} />;
};

export default Page;
`.trim();

export const CardThumbnailWithProgressCode = `
import ProductCardWithProgressBar from "components/cards/ProductCardWithProgressBar";

const Page = () => {
  const productItems = {
    product_title: "Salted Instant Popcorn",
    slug: "salted-instant-popcorn",
    featuredImage: "/images/products/product-img-5.jpg",
    price: 18,
    discount: 25,
    discount: 35,
    reviews: [{ rating: 4.4 }],
    stock: 10,
  };

  return <ProductCardWithProgressBar product={productItems} />;
};

export default Page;
`.trim();

export const CardWithListCode = `
import ProductHorizontalCard from "components/cards/ProductHorizontalCard";

const Page = () => {
  const productItem = {
    id: 1,
    product_title: "Haldiram's Sev Bhujia",
    product_category: "Snack & Munchies",
    slug: "haldirams-sev-bhujia",
    featuredImage: "/images/products/product-img-1.jpg",
    price: 21,
    badge: "Sale",
    discount: 14,
    reviews: [{ rating: 4.3 }],
    unit: "100g",
  };

  return <ProductHorizontalCard product={productItem} />;
};

export default Page;
`.trim();

export const CardWithTextCode = `
import AddressCard from "components/cards/AddressCard";

const Page = () => {
  const addressData = {
    fName: "Jitu",
    lName: "Chauhan",
    address: "4450 North Avenue Oakland",
    address2: "",
    city: "Nebraska",
    country: "United States",
    isDefault: true,
    phone: "402-776-1106",
    type: "Home",
    zip: "",
  };

  return <AddressCard data={addressData} />;
};

export default Page;
`.trim();

export const CardWithTextCode2 = `
import ProductCardSix from "components/cards/ProductCardSix";

const Page = () => {
  const productItem = {
    discount: 10,
    featuredImage: "/images/products/product-img-1.jpg",
    price: 24,
    product_title: "Haldiram's Sev Bhujia",
    reviews: [{ rating: 4.5 }],
    slug: "haldirams-sev-bhujia",
  };

  return <ProductCardSix product={productItem} />;
};

export default Page;

`.trim();

export const CardWithIDCode = `
import StoreEarningCard from "components/cards/StoreEarningCard";

const Page = () => {
  const storeData = {
    sellerId: "#009",
    storeName: "E-Grocery Super Market",
    logo: "/images/stores-logo/stores-logo-1.svg",
    email: "heathercarpenter@dayrep.com",
    grossSale: 200,
    netEarning: 200,
  };

  return <StoreEarningCard data={storeData} />;
};

export default Page;

`.trim();

export const FeaturedStoreCode = `
import { v4 as uuid } from "uuid";
import StoreCard from "components/cards/StoreCard";

const Page = () => {
  const storeData = {
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
  };

  return <StoreCard storeDetails={storeData} />;
};

export default Page;
`.trim();

export const FeaturedStoreCode2 = `
import { v4 as uuid } from "uuid";
import StoreCard2 from "components/cards/StoreCard2";

const Page = () => {
  const storeData = {
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
  };

  return <StoreCard2 storeDetails={storeData} />;
};

export default Page;
`.trim();

export const ReadyToStartedCode = `
import AboutCTA from "components/cta/AboutCTA";

const Page = () => {
  const aboutData = {
    title: "Grow my business with Freshcart",
    image: "/images/about/about-icons-1.svg",
    desc: "Duis placerat, urna ut dictum lobortis, erat libero feugiat nulla, ullamcorper fermentum lectus dolor ut tortor.",
    actionLabel: "FreshCart Platform",
    actionLink: "",
  };

  return <AboutCTA data={aboutData} />;
};

export default Page;
`.trim();

export const EarningThumbnailCode = `
import EarningCard from "components/cards/EarningCard";

const Page = () => {
  const earningData = {
    duration: "Monthly revenue",
    earning: 93438.78,
  };

  return <EarningCard data={earningData} />;
};

export default Page;
`.trim();

export const ShopByCategoriesCode = `
import CategoryCard from "components/cards/CategoryCard";

const Page = () => {
  const category = {
    title: "Bakery",
    image: "/images/icons/bakery.svg",
    link: "",
  };

  return <CategoryCard category={category} type="icon" />;
};

export default Page;
`.trim();

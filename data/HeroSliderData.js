import { v4 as uuid } from "uuid";

export const heroSliderData = [
  {
    id: uuid(),
    title: "SuperMarket For Fresh Grocery",
    desc: " Introduced a new model for online grocery shopping and convenient home delivery.",
    badgeText: "Opening Sale Discount 50%",
    image: "/images/slider/slide-1.jpg",
  },
  {
    id: uuid(),
    title: "Free Shipping on orders over",
    desc: "Free Shipping to First-Time Customers Only, After promotions and discounts are applied.",
    badgeText: "Free Shipping - orders over $100",
    image: "/images/slider/slide-2.jpg",
  },
];

export const heroSlider2Data = [
  {
    id: uuid(),
    heading: "Best Online Deals, Free Stuff",
    desc: "Only on this week... Don’t miss",
    price: "5.99",
    badge: "15%",
    actionLabel: "Get Best Deal",
    image: "/images/slider/slider-image-1.jpg",
  },
  {
    id: uuid(),
    heading: "Chocozay wafer-rolls Deals",
    desc: "Only on this week... Don’t miss",
    price: "34.99",
    badge: "35%",
    actionLabel: "Shop Deals Now",
    image: "/images/slider/slider-image-2.jpg",
  },
  {
    id: uuid(),
    heading: "Cokoladni Kolutici Lasta",
    desc: "Only on this week... Don’t miss",
    price: "5.99",
    badge: "20%",
    actionLabel: "Shop This Week Offer",
    image: "/images/slider/slider-image-3.jpg",
  },
];

export const heroSlider3Data = [
  {
    id: uuid(),
    content: `<div style="background: url(/images/slider/hero-img-slider-1.jpg) no-repeat; background-size: cover; border-radius: 0.5rem; background-position: center">
                     <div class="ps-lg-12 py-lg-16 col-xxl-5 col-lg-7 col-md-8 py-14 px-8 text-xs-center">
                        <h1 class="text-white display-5 fw-bold mt-4">SuperMarket For Fresh Grocery</h1>
                        <p class="lead text-white">Introduced a new model for online grocery shopping and convenient home delivery at any time.</p>
                        <a href="#!" class="btn btn-dark mt-3">
                           Shop Now
                           <i class="feather-icon icon-arrow-right ms-1"></i>
                        </a>
                     </div>
                  </div>`,
  },
  {
    id: uuid(),
    content: `<div style="background: url(/images/slider/hero-img-slider-2.jpg) no-repeat; background-size: cover; border-radius: 0.5rem; background-position: center">
                     <div class="ps-lg-12 py-lg-16 col-xxl-5 col-lg-7 col-md-8 py-14 px-8 text-xs-center">
                        <h1 class="text-dark display-5 fw-bold mt-4">
                           Opening Sale
                           <br />
                           Discount up to
                           <span class="text-primary display-6">50%</span>
                        </h1>
                        <p class="lead">Snack on late-night munchies of delicious nuts & you’re guaranteed happiness before you doze!</p>
                        <a href="#!" class="btn btn-dark mt-3">
                           Shop Now
                           <i class="feather-icon icon-arrow-right ms-1"></i>
                        </a>
                     </div>
                  </div>`,
  },
  {
    id: uuid(),
    content: `<div style="background: url(/images/slider/hero-img-slider-3.jpg) no-repeat; background-size: cover; border-radius: 0.5rem; background-position: center">
                     <div class="ps-lg-12 py-lg-16 col-xxl-5 col-lg-7 col-md-8 py-14 px-8 text-xs-center">
                        <h1 class="text-dark display-5 fw-bold mt-4">Midnight Munch Combo</h1>
                        <p class="lead">Snack on late-night munchies of delicious nuts & you’re guaranteed happiness before you doze!</p>
                        <a href="#!" class="btn btn-dark mt-3">
                           Shop Now
                           <i class="feather-icon icon-arrow-right ms-1"></i>
                        </a>
                     </div>
                  </div>`,
  },
];

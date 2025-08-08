import { v4 as uuid } from "uuid";

export const offersData = [
  {
    id: uuid(),
    title: `10% cashback on <br /> personal care`,
    desc: `<p class="mb-0">Max cashback: $12</p><span>Code: <span class="fw-bold text-dark">CARE12</span></span>`,
    image: "/images/banner/ad-banner-1.jpg",
    link: "",
  },
  {
    id: uuid(),
    title: `Say yes to <br /> season’s fresh`,
    desc: `<p class="fs-5 mb-0"> Refresh your day <br /> the fruity way</p>`,
    image: "/images/banner/ad-banner-2.jpg",
    link: "",
  },
  {
    id: uuid(),
    title: `When in doubt, <br /> eat ice cream`,
    desc: `<p class="fs-5 mb-0"> Enjoy a scoop of <br /> summer today</p>`,
    image: "/images/banner/ad-banner-3.jpg",
    link: "",
  },
];

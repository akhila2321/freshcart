// import custom components
import { NextSlideArrow, PrevSlideArrow } from "components/common/SliderArrows";

//Homepage:4
export const shopCategorySettings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 1000,
  slidesToShow: 8,
  slidesToScroll: 2,
  arrows: true,
  loop: true,
  nextArrow: <NextSlideArrow size={18} />,
  prevArrow: <PrevSlideArrow size={18} />,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

export const popularProdSettings = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  dots: false,
  arrows: true,
  nextArrow: <NextSlideArrow size={18} />,
  prevArrow: <PrevSlideArrow size={18} />,
  speed: 1000,
  loop: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1400,
      settings: { slidesToShow: 4, slidesToScroll: 4 },
    },
    {
      breakpoint: 990,
      settings: { slidesToShow: 3, slidesToScroll: 1 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
  ],
};

//Home Page - 5 New Arrival Slider Settings
export const newArrivalSetting = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,

  dots: false,
  arrows: true,
  prevArrow: <PrevSlideArrow />,
  nextArrow: <NextSlideArrow />,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },

    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

//About Us: Our Leadership slider setting

export const ourTeamSliderSettings = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  dots: false,
  arrows: true,
  prevArrow: <PrevSlideArrow />,
  nextArrow: <NextSlideArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const categorySliderOneSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 2,
  autoplay: false,
  arrows: true,
  nextArrow: <NextSlideArrow size={20} className="position-absolute end-0" />,
  prevArrow: <PrevSlideArrow size={20} className="position-absolute start-0" />,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
      },
    },
  ],
};

export const biscuitsSnacksSliderSettings = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  dots: false,
  arrows: true,
  prevArrow: <PrevSlideArrow />,
  nextArrow: <NextSlideArrow />,
  responsive: [
    { breakpoint: 1400, settings: { slidesToShow: 4, slidesToScroll: 4 } },
    { breakpoint: 820, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

export const bestSellerSliderSettings = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  dots: false,
  arrows: true,
  prevArrow: <PrevSlideArrow />,
  nextArrow: <NextSlideArrow />,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const breakfastDairySliderSetting = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  dots: false,
  arrows: true,
  prevArrow: <PrevSlideArrow />,
  nextArrow: <NextSlideArrow />,
  responsive: [
    { breakpoint: 1400, settings: { slidesToShow: 4, slidesToScroll: 4 } },
    { breakpoint: 820, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

export const heroSliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  draggable: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  centerMode: true,
  centerPadding: "0%",
};

export const heroSliderThreeSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  draggable: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  centerMode: true,
  centerPadding: "0%",
};

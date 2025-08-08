import { v4 as uuid } from "uuid";
import {
  ArrowRepeat,
  BoxSeam,
  Clock,
  Gift,
  Tablet,
  Truck,
  BagCheck,
  ClockHistory,
  Phone,
  Reply,
} from "react-bootstrap-icons";

export const companyFeaturedData = [
  {
    id: uuid(),
    title: "Cheapest basket 25 years running",
    icon: <Clock size={34} className="text-primary" />,
    desc: `Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.`,
  },
  {
    id: uuid(),
    title: "Best Prices & Offers",
    icon: <Gift size={34} className="text-primary" />,
    desc: `Cheaper prices than your local supermarket, great cashback offers to top it off.`,
  },
  {
    id: uuid(),
    title: "Wide Assortment",
    icon: <BoxSeam size={34} className="text-primary" />,
    desc: `Choose from 5000+ products across food, personal care, household & other categories`,
  },
  {
    id: uuid(),
    title: "Shop with our app",
    icon: <Tablet size={34} className="text-primary" />,
    desc: `Shop on the go with our app for <a href="#">tablet and mobile</a> . Get live order tracking. Get latest feature updates`,
  },
  {
    id: uuid(),
    title: "Want your shopping today?",
    icon: <Truck size={34} className="text-primary" />,
    desc: `Choose from our award winning <a href="#">Express delivery</a> or collection options.`,
  },
  {
    id: uuid(),
    title: "Easy Returns/Refund",
    icon: <ArrowRepeat size={34} className="text-primary" />,
    desc: `Not satisfied with a product? Return it at the doorstep &
                    get a refund within hours. No questions asked
                    <a href="#">policy</a>`,
  },
];

export const companyFeaturedData2 = [
  {
    id: uuid(),
    title: "Download the FreshCart App to your Phone.",
    icon: <Phone size={20} fill="#0aad0a" />,
  },
  {
    id: uuid(),
    title: "Return Policy customers can return a product and ask for a refund.",
    icon: <Reply size={20} fill="#0aad0a" />,
  },
  {
    id: uuid(),
    title: "Order now so you don t miss the opportunities.",
    icon: <BagCheck size={20} fill="#0aad0a" />,
  },
  {
    id: uuid(),
    title: "Your order will arrive at your door in 15 minutes.",
    icon: <ClockHistory size={20} fill="#0aad0a" />,
  },
];

import {
  Bell,
  CreditCard,
  LogOut,
  MapPin,
  Settings,
  ShoppingBag,
} from "react-feather";
import { v4 as uuid } from "uuid";

export const userMenu = [
  {
    id: uuid(),
    title: "Your Orders",
    icon: <ShoppingBag className="me-2" size={14} />,
    link: "/user/account-orders",
  },
  {
    id: uuid(),
    title: "Settings",
    icon: <Settings className="me-2" size={14} />,
    link: "/user/account-settings",
  },
  {
    id: uuid(),
    title: "Address",
    icon: <MapPin className="me-2" size={14} />,
    link: "/user/account-address",
  },
  {
    id: uuid(),
    title: "Payment Method",
    icon: <CreditCard className="me-2" size={14} />,
    link: "/user/account-payment-method",
  },
  {
    id: uuid(),
    title: "Notification",
    icon: <Bell className="me-2" size={14} />,
    link: "/user/account-notification",
  },
];

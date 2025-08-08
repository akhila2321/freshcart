import { v4 as uuid } from "uuid";

export const websiteNotification = [
  { id: uuid(), title: "New Follower", isChecked: true },
  { id: uuid(), title: "Post Like", isChecked: false },
  { id: uuid(), title: "Someone you followed posted", isChecked: false },
  { id: uuid(), title: "Post added to collection", isChecked: false },
  { id: uuid(), title: "Order Delivery", isChecked: false },
];

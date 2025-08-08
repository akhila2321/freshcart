import { v4 as uuid } from "uuid";

export const addressListData = [
  {
    id: uuid(),
    fName: "Jitu",
    lName: "Chauhan",
    address: "4450 North Avenue Oakland",
    address2: "",
    city: "Nebraska",
    country: "United States",
    zip: "",
    phone: "402-776-1106",
    isDefault: true,
    type: "Home",
  },
  {
    id: uuid(),
    fName: "Nitu",
    lName: "Chauhan",
    address: "3853 Coal Road",
    address2: "Tannersville",
    city: "Pennsylvania",
    country: "United States",
    zip: "18372",
    phone: "402-776-1106",
    isDefault: false,
    type: "Office",
  },
];

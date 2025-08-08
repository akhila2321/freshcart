import { v4 as uuid } from "uuid";
// import node module libraries
import { Fragment } from "react";
import Link from "next/link";
import { Image } from "react-bootstrap";

import { userOrderStatus } from "helper/utils";
import { Eye } from "react-feather";
import FreshTippy from "components/common/FreshTippy";

export const userOrdersData = [
  {
    id: uuid(),
    date: "March 5, 2023",
    orderNo: "#14899",
    title: "Haldiram's Nagpur Aloo Bhujia",
    unit: "400g",
    image: "/images/products/product-img-1.jpg",
    price: 15,
    quantity: 1,
    status: "Processing",
  },
  {
    id: uuid(),
    date: "	July 9, 2023",
    orderNo: "#14658",
    title: "Nutri Choise Biscuit",
    unit: "2 Pkt",
    image: "/images/products/product-img-2.jpg",
    price: 45,
    quantity: 2,
    status: "Completed",
  },
  {
    id: uuid(),
    date: "Oct 03, 2023",
    orderNo: "#13778",
    title: "Cadbury Dairy Milk 5 Star Bites",
    unit: "202 g",
    image: "/images/products/product-img-3.jpg",
    price: 99,
    quantity: 4,
    status: "Completed",
  },
  {
    id: uuid(),
    date: "March 5, 2023",
    orderNo: "#13746",
    title: "Onion Flavour Potato",
    unit: "100 g",
    image: "/images/products/product-img-4.jpg",
    price: 12,
    quantity: 1,
    status: "Completed",
  },
  {
    id: uuid(),
    date: "July 9, 2023",
    orderNo: "#13566",
    title: "Salted Instant Popcorn",
    unit: "500 g",
    image: "/images/products/product-img-5.jpg",
    price: 6,
    quantity: 2,
    status: "Cancel",
  },
  {
    id: uuid(),
    date: "Oct 03, 2023",
    orderNo: "#12094",
    title: "Blueberry Greek Yogurt",
    unit: "500 g",
    image: "/images/products/product-img-6.jpg",
    price: 18,
    quantity: 4,
    status: "Completed",
  },
];

export const userOrderColumns = [
  {
    accessorKey: "image",
    header: "",
    cell: ({ row }) => {
      return (
        <Link href="">
          <Image
            src={row.original.image}
            alt=""
            className="icon-shape icon-xl"
          />
        </Link>
      );
    },
  },
  {
    accessorFn: (row) => `${row.title} ${row.unit}`,
    accessorKey: "title",
    header: "Product",
    cell: ({ row }) => {
      return (
        <Fragment>
          <Link href="" className="fw-semibold text-inherit">
            <h6 className="mb-0">{row.original.title}</h6>
          </Link>
          <span>
            <small className="text-muted">{row.original.unit}</small>
          </span>
        </Fragment>
      );
    },
  },
  {
    accessorKey: "orderNo",
    header: "Order",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "quantity",
    header: "Items",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => userOrderStatus(getValue()),
  },
  {
    accessorKey: "price",
    header: "Amount",
    cell: ({ getValue }) => {
      return `$${getValue().toFixed(2)}`;
    },
  },
  {
    id: "action",
    cell: () => {
      return (
        <FreshTippy content="View">
          <Link href="" className="text-inherit">
            <Eye size={14} />
          </Link>
        </FreshTippy>
      );
    },
  },
];

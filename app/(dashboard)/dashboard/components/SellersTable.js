"use client";
// import node module libraries
import { Dropdown } from "react-bootstrap";
import { PencilSquare, Trash3 } from "react-bootstrap-icons";
import { MoreVertical } from "react-feather";

// import custom components
import DashboardDataTable from "components/dashboard/common/DashboardDataTable";
import ActionMenuToggle from "components/common/ActionMenuToggle";

// import required data file
import { sellersEarningData } from "data/DashboardData";

const SellersTable = () => {
  //Define column to render table head
  const columns = [
    { accessorKey: "sellerId", header: "Seller Id" },
    { accessorKey: "storeName", header: "Store Name" },
    { accessorKey: "email", header: "Email" },
    {
      accessorKey: "grossSale",
      header: "Gross Sale",
      cell: ({ row }) => {
        return `$${row?.original?.grossSale.toFixed(2)}`;
      },
    },
    {
      accessorKey: "netEarning",
      header: "Earning",
      cell: ({ row }) => {
        return `$${row?.original?.netEarning.toFixed(2)}`;
      },
    },
    {
      accessorKey: "action",
      header: "",
      cell: () => {
        return (
          <ActionMenuToggle
            drop="down"
            align="end"
            toggle={<MoreVertical className="fs-5" size={18} />}
          >
            <Dropdown.Item>
              <Trash3 className="me-3" /> Delete
            </Dropdown.Item>
            <Dropdown.Item>
              <PencilSquare className="me-3" /> Edit
            </Dropdown.Item>
          </ActionMenuToggle>
        );
      },
    },
  ];

  return (
    <DashboardDataTable
      columns={columns}
      data={sellersEarningData}
      pagination={true}
      searchParams={[
        "sellerId",
        "storeName",
        "email",
        "grossSale",
        "netEarning",
      ]}
      placeholder={"Search Seller"}
    />
  );
};

export default SellersTable;

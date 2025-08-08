"use client";
// import node module libraries
import { Image, Dropdown } from "react-bootstrap";
import { PencilSquare, Trash3 } from "react-bootstrap-icons";
import { MoreVertical } from "react-feather";

// import custom components
import DashboardDataTable from "components/dashboard/common/DashboardDataTable";
import Checkbox from "components/table/Checkbox";
import FreshBadge from "components/common/FreshBadge";
import ActionMenuToggle from "components/common/ActionMenuToggle";

// import required data file
import { productCountsByCategory } from "data/DashboardData";

// import helper utility file
import { capitalizedWord } from "helper/utils";

const CategoryTable = () => {
  //Define column to render table head
  const columns = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler(),
          }}
        />
      ),
      cell: ({ row }) => (
        <div className="px-1">
          <Checkbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />
        </div>
      ),
    },
    {
      accessorKey: "image",
      header: "Icon",
      cell: ({ row }) => {
        return (
          <Image
            src={row.original.image}
            className="icon-shape icon-sm"
            alt=""
          />
        );
      },
    },
    { accessorKey: "category", header: "Name" },
    { accessorKey: "products", header: "Product" },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.original.status;
        return (
          <FreshBadge
            content={capitalizedWord(status)}
            pill={false}
            bg={status === "published" ? "light-primary" : "light-danger"}
            text={status === "published" ? "dark-primary" : "dark-danger"}
          />
        );
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
      data={productCountsByCategory}
      pagination={true}
      isFilter={true}
      searchParams={["category"]}
      placeholder={"Search Category"}
    />
  );
};

export default CategoryTable;

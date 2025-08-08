// import node module libraries
import { Image, Dropdown } from "react-bootstrap";
import { MoreVertical } from "react-feather";
import { Trash3, PencilSquare } from "react-bootstrap-icons";

// import required data file
import { products } from "data/products/AllProductsData";

// import helper utility file
import { capitalizedWord } from "helper/utils";

// import custom components
import DashboardDataTable from "components/dashboard/common/DashboardDataTable";
import Checkbox from "components/table/Checkbox";
import ActionMenuToggle from "components/common/ActionMenuToggle";
import FreshBadge from "components/common/FreshBadge";

const ProductTable = () => {
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
      header: "Image",
      cell: ({ row }) => {
        return (
          <Image
            src={row.original.featuredImage}
            className="icon-shape icon-md"
            alt=""
          />
        );
      },
    },
    { accessorKey: "product_title", header: "Product Name" },
    { accessorKey: "product_category", header: "Category" },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.original.status;
        return (
          <FreshBadge
            content={capitalizedWord(status)}
            pill={false}
            bg={
              status === "active"
                ? "light-primary"
                : status === "draft"
                  ? "light-warning"
                  : "light-danger"
            }
            text={
              status === "active"
                ? "dark-primary"
                : status === "draft"
                  ? "dark-warning"
                  : "dark-danger"
            }
          />
        );
      },
    },
    { accessorKey: "price", header: "Price" },
    { accessorKey: "createdAt", header: "Create at" },
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
      data={products}
      pagination={true}
      isFilter={true}
      searchParams={["product_title", "product_category"]}
      placeholder={"Search Products"}
    />
  );
};

export default ProductTable;

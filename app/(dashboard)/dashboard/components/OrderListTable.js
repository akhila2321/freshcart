// import node module libraries
import { Image, Dropdown } from "react-bootstrap";
import { MoreVertical } from "react-feather";
import { Trash3, PencilSquare } from "react-bootstrap-icons";

// import custom components
import Checkbox from "components/table/Checkbox";
import DashboardDataTable from "components/dashboard/common/DashboardDataTable";
import ActionMenuToggle from "components/common/ActionMenuToggle";
import FreshBadge from "components/common/FreshBadge";

// import required data file
import { orderListData } from "data/DashboardData";

// import helper utility file
import { capitalizedWord } from "helper/utils";

const OrderListTable = () => {
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
            src={row.original.image}
            className="icon-shape icon-md"
            alt=""
          />
        );
      },
    },
    { accessorKey: "orderNo", header: "Order Name" },
    { accessorKey: "customer", header: "Customer" },
    { accessorKey: "orderDate", header: "Date & Time" },
    { accessorKey: "paymentMethod", header: "Payment" },
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
              status === "success"
                ? "light-primary"
                : status === "pending"
                  ? "light-warning"
                  : "light-danger"
            }
            text={
              status === "success"
                ? "dark-primary"
                : status === "pending"
                  ? "dark-warning"
                  : "dark-danger"
            }
          />
        );
      },
    },
    { accessorKey: "amount", header: "Amount" },
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
      data={orderListData}
      pagination={true}
      isFilter={true}
      searchParams={[
        "customer",
        "orderNo",
        "amount",
        "orderDate",
        "paymentMethod",
      ]}
      placeholder={"Search"}
    />
  );
};

export default OrderListTable;

"use client";
// import node module libraries
import { Dropdown } from "react-bootstrap";
import { Trash3, PencilSquare } from "react-bootstrap-icons";
import { MoreVertical } from "react-feather";

//import custom components
import TanstackTable from "components/table/TanstackTable";
import ActionMenuToggle from "components/common/ActionMenuToggle";
import Checkbox from "components/table/Checkbox";
import FreshBadge from "components/common/FreshBadge";

//import required hooks
import { useCustomer } from "hooks/useCustomer";

// import helper utility file
import { capitalizedWord, formatDate } from "helper/utils";

const CustomerPaymentHistory = () => {
  const { selectedCustomer } = useCustomer();

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

    { accessorKey: "order_id", header: "Order ID" },
    { accessorKey: "transaction_id", header: "Transaction Id	" },
    {
      accessorKey: "date",
      header: "Date",
      cell: ({ row }) => {
        return <p>{formatDate(row.original.date)}</p>;
      },
    },
    {
      accessorKey: "amount",
      header: "Amount",
      cell: ({ row }) => {
        return <p>${Number(row.original.amount).toFixed(2)}</p>;
      },
    },
    { accessorKey: "method", header: "Method" },
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
              status === "Completed"
                ? "light-primary"
                : status === "Pending"
                ? "light-warning"
                : "light-danger"
            }
            text={
              status === "Completed"
                ? "dark-primary"
                : status === "Pending"
                ? "dark-warning"
                : "dark-danger"
            }
          />
        );
      },
    },

    {
      accessorKey: "action",
      header: <MoreVertical className="cursor-pointer" />,
      cell: ({ row }) => {
        return (
          <ActionMenuToggle
            drop="start"
            align="end"
            toggle={<MoreVertical className="cursor-pointer" />}
            className="text-muted"
          >
            <Dropdown.Item
              as="button"
              onClick={() => {
                console.log("Edit address:", row.original);
              }}
            >
              <PencilSquare className="me-2" />
              Edit
            </Dropdown.Item>
            <Dropdown.Item as="button">
              <Trash3 className="me-2" />
              Delete
            </Dropdown.Item>
          </ActionMenuToggle>
        );
      },
    },
  ];

  return (
    <TanstackTable
      data={selectedCustomer?.payments || []}
      columns={columns}
      className="table-responsive"
      tableClass={"table-centered text-nowrap mb-0 table-with-checkbox"}
      tdClass="align-middle border-top-0"
      hover={true}
      borderless={false}
      pagination={true}
    />
  );
};

export default CustomerPaymentHistory;

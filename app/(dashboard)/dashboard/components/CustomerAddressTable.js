"use client";
import { Dropdown } from "react-bootstrap";

import { Trash3, PencilSquare } from "react-bootstrap-icons";
import { MoreVertical } from "react-feather";

//import custom components
import TanstackTable from "components/table/TanstackTable";
import ActionMenuToggle from "components/common/ActionMenuToggle";
import Checkbox from "components/table/Checkbox";

import { useCustomer } from "hooks/useCustomer";
import CreateAddressModal from "components/modal/CreateAddressModal";

const CustomerAddressTable = () => {
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

    { accessorKey: "street", header: "Street" },
    { accessorKey: "city", header: "City" },
    { accessorKey: "country", header: "Country" },

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
            <Dropdown.Item
              as="button"
              onClick={() => {
                console.log("Delete address:", row.original);
              }}
            >
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
      data={selectedCustomer?.addresses || []}
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

export default CustomerAddressTable;

"use client";
// import node module libraries
import { Fragment, useState } from "react";
import Link from "next/link";
import { Image, Dropdown } from "react-bootstrap";
import { Trash3, PencilSquare } from "react-bootstrap-icons";
import { MoreVertical } from "react-feather";
import { useRouter } from "next/navigation";

// import custom components
import ActionMenuToggle from "components/common/ActionMenuToggle";
import DashboardDataTable from "components/dashboard/common/DashboardDataTable";
import Checkbox from "components/table/Checkbox";

//import required hooks
import { useCustomer } from "hooks/useCustomer";
import CustomerDetailsOffcanvas from "./CustomerDetailsOffcanvas";

const CustomerTable = () => {
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const { customers, handleSelectCustomer, handleDeleteCustomer } =
    useCustomer();

  const router = useRouter();

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
      accessorFn: (row) => `${row.image} ${row.name}`,
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => {
        return (
          <div className="d-flex align-items-center">
            <Image
              src={row.original.image}
              alt=""
              className="avatar avatar-xs rounded-circle"
            />
            <div
              className="ms-2"
              onClick={() => {
                handleSelectCustomer(row.original.id);
                setOffcanvasOpen(true);
              }}
            >
              <Link href="#" className="text-inherit">
                {row.original.name}
              </Link>
            </div>
          </div>
        );
      },
    },

    { accessorKey: "email", header: "Email" },
    {
      accessorKey: "date",
      header: "Purchase Date",
      cell: ({ row }) => {
        return (
          <span className="text-muted">
            {new Date(row.original.date).toLocaleDateString("en-US", {
              year: "numeric",
              day: "numeric",
              month: "long",
              hour: "2-digit",
            })}
          </span>
        );
      },
    },
    ,
    { accessorKey: "phone", header: "Phone" },
    { accessorKey: "spent", header: "Spent" },

    {
      accessorKey: "action",
      header: "",
      cell: ({ row }) => {
        const handleActionClick = () => {
          handleSelectCustomer(row.original.id);
          router.push("/dashboard/customers/edit-customer");
        };
        return (
          <ActionMenuToggle
            drop="down"
            align="end"
            toggle={<MoreVertical className="fs-5" size={18} />}
          >
            <Dropdown.Item
              onClick={() => handleDeleteCustomer(row.original.id)}
            >
              <Trash3 className="me-3" /> Delete
            </Dropdown.Item>
            <Dropdown.Item onClick={handleActionClick}>
              <PencilSquare className="me-3" /> Edit
            </Dropdown.Item>
          </ActionMenuToggle>
        );
      },
    },
  ];

  return (
    <Fragment>
      <DashboardDataTable
        columns={columns}
        data={customers}
        pagination={true}
        isFilter={false}
        searchParams={["name", "email", "date", "phone", "spent"]}
        placeholder="Search Customers"
      />
      <CustomerDetailsOffcanvas
        show={offcanvasOpen}
        handleClose={() => setOffcanvasOpen(false)}
      />
    </Fragment>
  );
};

export default CustomerTable;

// import node module libraries
import { Dropdown } from "react-bootstrap";
import { MoreVertical } from "react-feather";
import { Trash3, PencilSquare } from "react-bootstrap-icons";

// import required data file
import { reviewData } from "data/DashboardData";

// import custom components
import Checkbox from "components/table/Checkbox";
import ActionMenuToggle from "components/common/ActionMenuToggle";
import DashboardDataTable from "components/dashboard/common/DashboardDataTable";
import StarRatings from "components/reviews/StarRating";

// import helper utility file
import { stringToNumber } from "helper/utils";

const ReviewTable = () => {
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

    { accessorKey: "product", header: "Product" },
    { accessorKey: "name", header: "Name" },
    { accessorKey: "review", header: "Reviews" },
    {
      accessorKey: "rate",
      header: "Rating",
      cell: ({ row }) => {
        return <StarRatings rating={stringToNumber(row?.original?.rate)} />;
      },
    },
    { accessorKey: "date", header: "Date" },

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

  //Filter list
  const filterList = [
    "one star",
    "two star",
    "three star",
    "four star",
    "five star",
  ];

  return (
    <DashboardDataTable
      columns={columns}
      data={reviewData}
      pagination={true}
      isFilter={true}
      filterList={filterList}
      searchParams={["product", "name", "review", "date"]}
      placeholder={"Search Reviews"}
      filterItem="rate"
      dropListName="Select Rating"
    />
  );
};

export default ReviewTable;

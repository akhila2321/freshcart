// import node module libraries
import React, { Fragment, useState } from "react";
import { Table } from "react-bootstrap";
import { ChevronUp, ChevronDown } from "react-feather";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

// import custom components
import GlobalFilter from "./GlobalFilter";
import TablePagination from "./TablePagination";

const TanstackTable = ({
  data,
  columns,
  filter = false,
  pagination = false,
  filterPlaceholder,
  exportButton = false,
  header = true,
  onRowClick,
  icon,
  className,
  tableClass,
  tdClass,
  isSortable = false,
  ...props
}) => {
  const [filtering, setFiltering] = useState("");
  const [rowSelection, setRowSelection] = useState({});
  const [sorting, setSorting] = React.useState([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    enableSorting: isSortable,
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filtering,
      rowSelection: rowSelection,
      sorting,
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection,
    enableRowSelection: true,
    onGlobalFilterChange: setFiltering,

    debugTable: false,
  });

  return (
    <Fragment>
      {filter && (
        <GlobalFilter
          filtering={filtering}
          setFiltering={setFiltering}
          placeholder={filterPlaceholder}
          table={table}
        />
      )}

      <div className={className ? className : "table-responsive table-card"}>
        <Table
          className={
            tableClass ? tableClass : "text-nowrap table-centered mt-0"
          }
          style={{ width: "100%" }}
          id="example"
          {...props}
        >
          {header && (
            <thead className="bg-light">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                      colSpan={header.colSpan}
                    >
                      {header.isPlaceholder ? null : (
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? "sorting"
                              : "",
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: <ChevronUp size={16} />,
                            desc: <ChevronDown size={16} />,
                          }[header.column.getIsSorted()] ?? null}
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
          )}

          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className={tdClass}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {pagination && <TablePagination table={table} icon={icon} />}
    </Fragment>
  );
};

export default TanstackTable;

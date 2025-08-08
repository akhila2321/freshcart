// import node module libraries
import React from "react";
import { Navbar, Pagination } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "react-feather";

const TablePagination = ({ table, icon }) => {
  const pageSize = 10;
  const pageCount = table.getPageCount();
  const pageIndex = table.options.state.pagination.pageIndex;

  return (
    <div className="border-top d-md-flex justify-content-between align-items-center p-3">
      <div>
        Showing {pageIndex * pageSize + 1} to{" "}
        {Math.min(
          (pageIndex + 1) * pageSize,
          table.getFilteredRowModel().rows.length
        )}{" "}
        of {table.getFilteredRowModel().rows.length} entries
      </div>
      <Navbar className="mt-2 mt-md-0">
        <Pagination className="mb-0">
          {/* Preview Button */}
          <Pagination.Item
            disabled={!table.getCanPreviousPage() ? true : false}
            onClick={() => table.previousPage()}
          >
            {icon ? <ChevronLeft className="icon-xxs" /> : "Previous"}
          </Pagination.Item>

          {/* Pagination Pages */}
          {Array.from(Array(pageCount).keys()).map((page, index) => (
            <Pagination.Item
              key={index}
              active={pageIndex === page}
              onClick={() => table.setPageIndex(page)}
            >
              {page + 1}
            </Pagination.Item>
          ))}

          {/* Next Button */}
          <Pagination.Item
            disabled={!table.getCanNextPage() ? true : false}
            onClick={() => table.nextPage()}
          >
            {icon ? <ChevronRight className="icon-xxs" /> : "Next"}
          </Pagination.Item>
        </Pagination>
      </Navbar>
    </div>
  );
};

export default TablePagination;

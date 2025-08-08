// import node module libraries
import React from "react";
import ReactPaginate from "react-paginate";
import { ChevronLeft, ChevronRight } from "react-feather";

const Pagination = ({
  pageCount,
  onPageChange,
  pageNumber,
  itemPerPage,
  totalRecords,
  showLength,
  icon = true,
}) => {
  const setFromPage = (recordsPerPage, pageNo) => recordsPerPage * pageNo + 1;
  const setToPage = (recordsPerPage, pageNo, recordsOnCurrentPage) => {
    const upperLimit =
      recordsPerPage * (pageNo + 1) < totalRecords
        ? recordsPerPage * (pageNo + 1)
        : totalRecords;

    return recordsOnCurrentPage < recordsPerPage
      ? upperLimit - (recordsPerPage - recordsOnCurrentPage)
      : upperLimit;
  };

  return (
    <div className="d-md-flex justify-content-between align-items-center">
      {!showLength || (
        <p className="mb-0">
          {`Showing ${setFromPage(itemPerPage, pageNumber)} to ${setToPage(
            itemPerPage,
            pageNumber,
            itemPerPage
          )} of ${totalRecords} entries`}
        </p>
      )}
      <ReactPaginate
        breakLabel="..."
        previousLabel={icon ? <ChevronLeft size="14px" /> : "Previous"}
        nextLabel={icon ? <ChevronRight size="14px" /> : "Next"}
        pageRangeDisplayed={itemPerPage}
        pageCount={pageCount}
        onPageChange={onPageChange}
        containerClassName={"pagination mt-2 mt-md-0"}
        previousLinkClassName={"page-link mx-1 rounded"}
        nextLinkClassName={"page-link mx-1 rounded"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link mx-1 rounded"}
        disabledClassName={"disabled"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Pagination;

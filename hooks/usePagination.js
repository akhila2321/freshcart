// import node module libraries
import { useState } from "react";

const usePagination = (initialPage = 0) => {
  const [pageNumber, setPageNumber] = useState(initialPage);

  const changePageHandle = ({ selected }) => {
    setPageNumber(selected);
  };

  return { pageNumber, changePageHandle };
};

export default usePagination;

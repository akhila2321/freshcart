// import node module libraries
import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";

// import custom components
import BlogCard from "components/cards/BlogCard";
import Pagination from "components/common/Pagination";

// import required hook
import usePagination from "hooks/usePagination";

const BlogGrid = ({ data, itemPerPage }) => {
  const { pageNumber, changePageHandle } = usePagination();
  const pagesVisited = pageNumber * itemPerPage;
  const pageCount = Math.ceil(data?.length / itemPerPage);

  //Slice data for pagination
  const slicedData = data?.slice(pagesVisited, pagesVisited + itemPerPage);

  return (
    <Fragment>
      <Row>
        {slicedData?.map((item) => (
          <Col xs={12} md={6} lg={4} className="mb-10" key={item.id}>
            <BlogCard blog={item} showDate={true} />
          </Col>
        ))}
      </Row>
      <Pagination
        pageCount={pageCount}
        onPageChange={changePageHandle}
        pageNumber={pageNumber}
        itemPerPage={itemPerPage}
        totalRecords={data?.length}
      />
    </Fragment>
  );
};

export default BlogGrid;

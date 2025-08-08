// import node module libraries
import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";

// import required data file
import { sellersEarningData } from "data/DashboardData";

// import custom components
import StoreEarningCard from "components/cards/StoreEarningCard";
import Pagination from "components/common/Pagination";

// import required hook
import usePagination from "hooks/usePagination";

const SellersGrid = ({ showLength = true, itemPerPage = 9 }) => {
  const { pageNumber, changePageHandle } = usePagination();
  const pagesVisited = pageNumber * itemPerPage;
  const pageCount = Math.ceil(sellersEarningData.length / itemPerPage);

  const slicedData = sellersEarningData.slice(
    pagesVisited,
    pagesVisited + itemPerPage
  );

  return (
    <Fragment>
      <Row xs={1} md={2} lg={3} className="g-4 g-lg-6">
        {slicedData.map((item) => (
          <Col key={item.id}>
            <StoreEarningCard data={item} />
          </Col>
        ))}
      </Row>

      <Row className="mt-8">
        <Col>
          <Pagination
            pageCount={pageCount}
            onPageChange={changePageHandle}
            pageNumber={pageNumber}
            itemPerPage={itemPerPage}
            totalRecords={sellersEarningData?.length}
            showLength={showLength}
            icon={false}
          />
        </Col>
      </Row>
    </Fragment>
  );
};

export default SellersGrid;

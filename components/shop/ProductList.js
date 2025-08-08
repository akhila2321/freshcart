// import node module libraries
import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";

// import custom components
import ProductCard from "components/cards/ProductCard";
import Pagination from "components/common/Pagination";
import ProductHorizontalCard from "components/cards/ProductHorizontalCard";

// import required hooks
import usePagination from "hooks/usePagination";
import useToggle from "hooks/useToggle";

const ProductList = ({
  products,
  itemPerPage,
  xl,
  lg,
  xs,
  md,
  className,
  grid = true,
}) => {
  const { pageNumber, changePageHandle } = usePagination();
  const pagesVisited = pageNumber * itemPerPage;
  const pageCount = Math.ceil(products.length / itemPerPage);

  //Slice data for pagination
  const SlicedProducts = products?.slice(
    pagesVisited,
    pagesVisited + itemPerPage
  );

  const { toggle } = useToggle();

  return (
    <Fragment>
      <Row xl={xl} lg={lg} xs={xs} md={md} className={`g-4 mt-2 ${className}`}>
        {SlicedProducts?.map((product) => (
          <Col key={product.id}>
            {grid ? (
              <ProductCard product={product} toggleFunc={toggle} />
            ) : (
              <ProductHorizontalCard product={product} />
            )}
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
            totalRecords={products?.length}
          />
        </Col>
      </Row>
    </Fragment>
  );
};

export default ProductList;

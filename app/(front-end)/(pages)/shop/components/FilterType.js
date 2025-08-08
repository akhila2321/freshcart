// import node module libraries
import { useState } from "react";
import { Row, Col, Button, Collapse, Card } from "react-bootstrap";
import { Filter } from "react-feather";

// import custom components
import CategoriesCollapse from "components/shop/CategoriesCollapse";
import StoreFilterList from "components/shop/StoreFilterList";
import PriceRange from "components/common/PriceRange";
import ProductRatingFilter from "components/shop/ProductRatingFilter";

// import require data files
import { storeListData } from "data/StoreListData";

const FilterType = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <Col xs={12}>
      <Button
        variant="outline-gray-400"
        className="text-muted"
        onClick={() => setIsCollapsed((prev) => !prev)}
      >
        <Filter className="me-2" size={14} />
        Filters
      </Button>

      <Collapse
        className="mt-6"
        id="collapseFilter"
        in={isCollapsed}
        dimension="height"
      >
        <Row lg={4} xs={1} md={2}>
          <Col>
            <Card className="mb-4 mb-lg-0">
              <Card.Body className="p-6">
                <CategoriesCollapse />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mb-4 mb-lg-0">
              <Card.Body className="p-6">
                <StoreFilterList data={storeListData} />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mb-4 mb-lg-0">
              <Card.Body className="p-6">
                <PriceRange />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mb-4 mb-lg-0">
              <Card.Body className="p-6">
                <ProductRatingFilter />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Collapse>
    </Col>
  );
};

export default FilterType;

export const SampleFilterCode = `
"use client";
// import node module libraries
import { useState } from "react";
import { Row, Col, Button, Card, Collapse } from "react-bootstrap";
import { Filter } from "react-feather";

// import custom components
import CategoriesList from "components/shop/CategoriesList";
import StoreFilterList from "components/shop/StoreFilterList";
import ProductRatingFilter from "components/shop/ProductRatingFilter";

// import required routes files
import { storeListData } from "data/StoreListData";
import { CategoryNavigation } from "routes/CategoryNavigation";

const Page = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <Row>
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
            <CategoriesList data={CategoryNavigation} />
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
                  <ProductRatingFilter />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Collapse>
      </Col>
    </Row>
  );
};

export default Page;

`.trim();

export const CategoryExampleCode = `
// import custom component
import CategoriesCollapse from "components/shop/CategoriesCollapse";

const Page = () => {
  return <CategoriesCollapse />;
};

export default Page;

`.trim();

export const StoreListExampleCode = `
// import custom component
import StoreFilterList from "components/shop/StoreFilterList";

// import require data files
import { storeListData } from "data/StoreListData";

const Page = () => {
  return <StoreFilterList data={storeListData} />;
};

export default Page;
`.trim();

export const PricingRangeExampleCode = `
// import custom component
import PriceRange from "components/common/PriceRange";


const Page = () => {
  return <PriceRange />
};

export default Page;

`.trim();

export const RatingExampleCode = `
// import custom component
import ProductRatingFilter from "components/shop/ProductRatingFilter";

const Page = () => {
  return <ProductRatingFilter />;
};

export default Page;
`.trim();

export const FilterHeaderExampleCode = `
// import custom component
import ShopFilters from "components/shop/ShopFilters";

const Page = () => {
  return <ShopFilters />;
};

export default Page;
`.trim();

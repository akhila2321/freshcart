// import node module libraries
import { useState } from "react";
import { Row, Col, Tab, Button, Card, Collapse } from "react-bootstrap";
import { Filter } from "react-feather";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";
import CategoriesList from "components/shop/CategoriesList";
import StoreFilterList from "components/shop/StoreFilterList";
import ProductRatingFilter from "components/shop/ProductRatingFilter";

// import require data files
import { storeListData } from "data/StoreListData";
import { SampleFilterCode } from "data/code/components-code/FilterCode";

// import required routes files
import { CategoryNavigation } from "routes/CategoryNavigation";

const SampleFilter = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="" className="mb-4">
          <h2 className="mb-0">Filter</h2>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-light p-4"
              id="pills-filter-one-design"
            >
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
                      <Col>
                        <CategoriesList data={CategoryNavigation} />
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
                            <ProductRatingFilter />
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Collapse>
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={SampleFilterCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default SampleFilter;

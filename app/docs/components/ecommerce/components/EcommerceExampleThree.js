// import node module libraries
import { Row, Col, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";
import CategoriesCollapse from "components/shop/CategoriesCollapse";
import StoreFilterList from "components/shop/StoreFilterList";
import ProductRatingFilter from "components/shop/ProductRatingFilter";
import EcommerCTA from "components/cta/EcommerCTA";
import PriceRange from "components/common/PriceRange";

// import required data files
import { storeListData } from "data/StoreListData";
import { ecommerceExampleThreeCode } from "data/code/components-code/EcommerceCode";

const EcommerceExampleThree = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="" className="mb-4">
          <h2 className="fw-semi-bold mb-0">Component #3</h2>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-white border p-4"
            >
              <Row>
                <Col lg={{ offset: 1, span: 3 }} xs={12}>
                  <CategoriesCollapse />
                  <StoreFilterList data={storeListData} />
                  <PriceRange />
                  <ProductRatingFilter className={"mt-8"} />
                  <EcommerCTA />
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={ecommerceExampleThreeCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default EcommerceExampleThree;

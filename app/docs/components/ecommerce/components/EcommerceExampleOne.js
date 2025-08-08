// import node module libraries
import { Row, Col, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { ecommerceExampleOneCode } from "data/code/components-code/EcommerceCode";
import { products } from "data/products/AllProductsData";

// import sub components
import { QuickViewExample } from "./QuickViewExample";

const EcommerceExampleOne = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="" className="mb-4">
          <h2 className="fw-semi-bold mb-0">Component #1</h2>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey={"design"}>
              <QuickViewExample product={products.slice(0, 1)[0]} />
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={ecommerceExampleOneCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default EcommerceExampleOne;

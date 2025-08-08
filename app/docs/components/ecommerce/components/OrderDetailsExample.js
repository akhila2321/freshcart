// import node module libraries
import { Row, Col, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";
import OrderDetails from "components/checkout/OrderDetails";

// import required data file
import { OrderDetailsCode } from "data/code/components-code/EcommerceCode";

const OrderDetailsExample = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="" className="mb-4">
          <h2 className="fw-semi-bold mb-0">Component #4</h2>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey={"design"}>
              <OrderDetails />
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={OrderDetailsCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default OrderDetailsExample;

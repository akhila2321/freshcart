// import node module libraries
import { Row, Col, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";
import OrdersTable from "components/shop/OrdersTable";

// import required data files
import { userOrdersData, userOrderColumns } from "data/user/UserOrdersData";
import { OrderExampleCode } from "data/code/components-code/TableCode";

const OrderExample = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-white border p-4"
            >
              <Row>
                <Col lg={9} md={8} xs={12}>
                  <OrdersTable
                    columns={userOrderColumns}
                    data={userOrdersData}
                  />
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={OrderExampleCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default OrderExample;

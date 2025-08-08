// import node module libraries
import { Row, Col, Tab, Alert, ListGroup } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";
import CartItem from "components/cart/CartItem";
import OrderSummary from "components/shop/OrderSummary";

// import required data file
import { CheckoutExampleCode } from "data/code/components-code/EcommerceCode";

// import required hook
import useCartOperations from "hooks/useCartOperations";

const CheckoutExample = () => {
  const { cartItems } = useCartOperations();
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="" className="mb-4">
          <h2 className="fw-semi-bold mb-0">Component #2</h2>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-light p-4"
            >
              <Row>
                <Col lg={8} md={7}>
                  <div className="py-3">
                    <Alert variant="danger" className="p-2">
                      You’ve got FREE delivery. Start{" "}
                      <Alert.Link href="">checkout now!</Alert.Link>
                    </Alert>

                    <ListGroup variant="flush" as="ul">
                      {cartItems.map((item) => (
                        <ListGroup.Item
                          key={item.id}
                          className="py-3 py-lg-0 px-0 border-top"
                          as="li"
                        >
                          <CartItem product={item} className={"px-2 py-3"} />
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </div>
                </Col>
                <Col lg={4} md={5} xs={12}>
                  <OrderSummary />
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={CheckoutExampleCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default CheckoutExample;

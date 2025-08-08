// import node module libraries
import Link from "next/link";
import { Row, Col, Tab, Alert, ListGroup, Button } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import CartItem from "components/cart/CartItem";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { ListTwoCode } from "data/code/components-code/ListCode";

// import required hooks
import useCartOperations from "hooks/useCartOperations";

const ListTwo = () => {
  const { cartItems } = useCartOperations();

  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="" className="mb-4">
          <h2 className="mb-0">List #2</h2>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-light p-4"
            >
              <Row>
                <Col xs={12}>
                  <div className="py-3">
                    <Alert variant="danger" className="p-2">
                      You’ve got FREE delivery. Start{" "}
                      <Link href="#!" className="alert-link">
                        checkout now!
                      </Link>
                    </Alert>

                    <ListGroup variant="flush" as="ul">
                      {cartItems.map((item) => (
                        <ListGroup.Item
                          className="py-3 ps-0 border-bottom"
                          as="li"
                          key={item.id}
                        >
                          <CartItem product={item} />
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                    <div className="d-flex justify-content-between mt-4">
                      <Button variant="primary">Continue Shopping</Button>
                      <Button variant="dark">Update Cart</Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={ListTwoCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default ListTwo;

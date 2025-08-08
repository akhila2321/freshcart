"use client";
// import node module libraries
import {
  Row,
  Col,
  Nav,
  TabContainer,
  TabContent,
  TabPane,
  Card,
  Button,
} from "react-bootstrap";

//import custom components
import CustomerAddressTable from "./CustomerAddressTable";
import CustomerPaymentHistory from "./CustomerPaymentHistory";

// import required hooks
import { useCustomer } from "hooks/useCustomer";

const CustomerAdditionalInfo = () => {
  const { handleCreateAddressModal, handleCreatePaymentModal } = useCustomer();

  return (
    <Row>
      <Col md={12} className="text-center">
        <TabContainer defaultActiveKey={"address"}>
          <Nav
            variant="pills"
            as={"ul"}
            defaultActiveKey="address"
            className="justify-content-center mb-6 bg-white border d-inline-flex rounded-3 p-2"
          >
            <Nav.Item as={"li"}>
              <Nav.Link eventKey={"address"} id="address-tab">
                Address
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as={"li"}>
              <Nav.Link eventKey="payment" id="payment-tab">
                Payment
              </Nav.Link>
            </Nav.Item>
          </Nav>

          {/* Tabs Content Start */}
          <TabContent>
            <TabPane eventKey="address" id="address-tab-pane">
              <Card className="card-lg h-100">
                <div className="p-6">
                  <div className="d-flex justify-content-between flex-row align-items-center">
                    <div>
                      <h3 className="mb-0 h6">Addresses</h3>
                    </div>
                    <div>
                      <Button
                        type="button"
                        variant="primary"
                        onClick={() => handleCreateAddressModal(true)}
                      >
                        New Address
                      </Button>
                    </div>
                  </div>
                </div>
                <Card.Body className="p-0">
                  <CustomerAddressTable />
                </Card.Body>
              </Card>
            </TabPane>
            <TabPane eventKey="payment" id="payment-tab-pane">
              <Card className="card-lg h-100">
                <div className="p-6">
                  <div className="d-flex justify-content-between flex-row align-items-center">
                    <div>
                      <h3 className="mb-0 h6">Payments</h3>
                    </div>
                    <div>
                      <Button
                        type="button"
                        variant="primary"
                        onClick={() => handleCreatePaymentModal(true)}
                      >
                        New Payment
                      </Button>
                    </div>
                  </div>
                </div>
                <Card.Body className="p-0">
                  <CustomerPaymentHistory />
                </Card.Body>
              </Card>
            </TabPane>
          </TabContent>
        </TabContainer>
      </Col>
    </Row>
  );
};

export default CustomerAdditionalInfo;

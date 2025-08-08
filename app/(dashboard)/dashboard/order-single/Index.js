"use client";
// import node module libraries
import { Fragment } from "react";
import { Card, Row, Col } from "react-bootstrap";

// import custom components
import DashboardHeading from "components/dashboard/common/DashboardHeading";

// import sub components
import OrderSingleTable from "../components/OrderSingleTable";
import CustomerOrderInfo from "../components/CustomerOrderInfo";
import OrderSingleHeader from "../components/OrderSingleHeader";

// import required data file
import { orderSingleData } from "data/DashboardData";

const Index = () => {
  return (
    <Fragment>
      <DashboardHeading
        heading="Order Single"
        btnLabel="Back to all orders"
        btnLink="/dashboard/order-list"
      />

      <Row>
        <Col xl={12} xs={12} className="mb-5">
          <Card className="h-100 card-lg">
            <Card.Body className="p-6">
              <OrderSingleHeader />
              <CustomerOrderInfo />
            </Card.Body>
            <OrderSingleTable data={orderSingleData} />
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Index;

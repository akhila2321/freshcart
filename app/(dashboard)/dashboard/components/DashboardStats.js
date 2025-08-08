// import node module libraries
import CustomerCard from "components/cards/CustomerCard";
import EarningCard from "components/cards/EarningCard";
import OrderCard from "components/cards/OrderCard";
import { Row, Col } from "react-bootstrap";

// import required data file
import { earningData, orderData, newCustomerData } from "data/DashboardData";

const DashboardStats = () => {
  return (
    <div className="table-responsive-xl mb-6 mb-lg-0">
      <Row className="flex-nowrap pb-3 pb-lg-0">
        <Col lg={4} xs={12} className="mb-6">
          <EarningCard data={earningData} />
        </Col>
        <Col lg={4} xs={12} className="mb-6">
          <OrderCard data={orderData} />
        </Col>
        <Col lg={4} xs={12} className="mb-6">
          <CustomerCard data={newCustomerData} />
        </Col>
      </Row>
    </div>
  );
};

export default DashboardStats;

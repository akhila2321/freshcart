// import node module libraries
import { Row, Col } from "react-bootstrap";

// import sub components
import RevenueChart from "./RevenueChart";
import TotalSalesChart from "./TotalSalesChart";

const DashboardChart = () => {
  return (
    <Row>
      <Col xl={8} lg={6} md={12} xs={12} className="mb-6">
        <RevenueChart />
      </Col>
      <Col xl={4} lg={6} xs={12} className="mb-6">
        <TotalSalesChart />
      </Col>
    </Row>
  );
};

export default DashboardChart;

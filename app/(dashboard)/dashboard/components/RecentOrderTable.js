// import node module libraries
import { Row, Col, Card, Table } from "react-bootstrap";

// import required data file
import { recentOrderData } from "data/DashboardData";

// import helper utility file
import { getRecentOrderStatus } from "helper/utils";

const RecentOrderTable = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} xs={12} className="mb-6">
        <Card className="h-100 card-lg">
          <div className="p-6">
            <h3 className="mb-0 fs-5">Recent Order</h3>
          </div>

          <Card.Body className="p-0">
            <div className="table-responsive">
              <Table borderless hover className="table-centered text-nowrap ">
                <thead className="bg-light">
                  <tr>
                    <th scope="col">Order Number</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Order Date</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrderData.map((item) => (
                    <tr key={item.id}>
                      <td>{item.orderNo}</td>
                      <td>{item.product}</td>
                      <td>{item.date}</td>
                      <td>${item.price.toFixed(2)}</td>
                      <td>{getRecentOrderStatus(item.status)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default RecentOrderTable;

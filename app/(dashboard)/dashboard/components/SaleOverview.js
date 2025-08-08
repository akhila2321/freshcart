// import node module libraries
import Link from "next/link";
import { Row, Col, Card, ProgressBar } from "react-bootstrap";
import { Bell, Lightbulb } from "react-bootstrap-icons";

// import helper utility file
import { formatNumberWithCommas } from "helper/utils";

// import required data file
import { saleOverviewData } from "data/DashboardData";

const SaleOverview = () => {
  return (
    <Row>
      <Col xl={6} lg={6} md={12} xs={12} className="mb-6">
        <Card className="h-100 card-lg">
          <Card.Body className="p-6">
            <h3 className="mb-0 fs-5">Sales Overview</h3>
            <div className="mt-6">
              {saleOverviewData.map((item, index) => {
                const colors = ["primary", "info", "danger"];
                return (
                  <div className="mb-5" key={item.id}>
                    <div className="d-flex align-items-center justify-content-between">
                      <h5 className="fs-6">{item.title}</h5>
                      <span>
                        <span className="me-1 text-dark">
                          ${formatNumberWithCommas(item.value)}
                        </span>
                        ({item.percent}%)
                      </span>
                    </div>

                    <div>
                      <ProgressBar
                        min={0}
                        max={100}
                        now={item.percent}
                        variant={colors[index]}
                        className={`bg-light-${colors[index]}`}
                        style={{
                          height: "6px",
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={6} lg={6} md={12} xs={12} className="mb-6">
        <div className="position-relative h-100">
          <Card className="card-lg mb-6">
            <Card.Body className="px-6 py-8">
              <div className="d-flex align-items-center">
                <div>
                  <Bell size={32} className="text-warning" />
                </div>
                <div className="ms-4">
                  <h5 className="mb-1">
                    Start your day with New Notification.
                  </h5>
                  <p className="mb-0">
                    You have
                    <Link className="link-info" href="#!">
                      {" "}
                      2 new notification
                    </Link>
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card className="card-lg mb-6">
            <Card.Body className="px-6 py-8">
              <div className="d-flex align-items-center">
                <div>
                  <Lightbulb size={32} className="text-success" />
                </div>
                <div className="ms-4">
                  <h5 className="mb-1">Monitor your Sales and Profitability</h5>
                  <p className="mb-0">
                    You have
                    <Link className="link-info" href="#!">
                      {" "}
                      View Performance
                    </Link>
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Col>
    </Row>
  );
};

export default SaleOverview;

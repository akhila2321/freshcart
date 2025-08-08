// import node module libraries
import { Card, ListGroup } from "react-bootstrap";
import { CircleFill } from "react-bootstrap-icons";

// import custom components
import ApexCharts from "components/charts/ApexCharts";

// import required data files
import {
  totalSalesChartOptions,
  totalSalesChartSeries,
  totalSalesStat,
} from "data/DashboardData";

const TotalSalesChart = () => {
  return (
    <Card className="h-100 card-lg">
      <Card.Body className="p-6">
        <h3 className="mb-0 fs-5">Total Sales</h3>
        <div className="mt-6 d-flex justify-content-center">
          <ApexCharts
            series={totalSalesChartSeries}
            options={totalSalesChartOptions}
            type="donut"
            height={280}
            width={280}
          />
        </div>

        <div className="mt-4">
          <ListGroup className="mb-0" bsPrefix="list-unstyled">
            {totalSalesStat.map((item, index) => {
              const colors = ["primary", "warning", "danger", "info"];
              return (
                <ListGroup.Item className="mb-2" key={item.id}>
                  <CircleFill size={8} className={`text-${colors[index]}`} />
                  <span className="ms-1">
                    <span className="text-dark">
                      {item.title} ${item.value.toFixed(2)}
                    </span>{" "}
                    ({item.percent}%)
                  </span>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TotalSalesChart;

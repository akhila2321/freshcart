// import node module libraries
import { Card, Form } from "react-bootstrap";

// import custom components
import ApexCharts from "components/charts/ApexCharts";

// import required data file
import { revenueChartOptions, revenueChartSeries } from "data/DashboardData";

const RevenueChart = () => {
  return (
    <Card className="h-100 card-lg">
      <Card.Body className="p-6">
        <div className="d-flex justify-content-between">
          <div>
            <h3 className="mb-1 fs-5">Revenue</h3>
            <small>(+63%) than last year)</small>
          </div>
          <div>
            <Form.Select onChange={() => { }}>
              <option value={"2019"}>2019</option>
              <option value="2023">2020</option>
              <option value="2024">2021</option>
              <option value="2025">2022</option>
              <option value="2025">2023</option>
            </Form.Select>
          </div>
        </div>

        <ApexCharts
          series={revenueChartSeries}
          options={revenueChartOptions}
          type="area"
          height={350}
        />
      </Card.Body>
    </Card>
  );
};

export default RevenueChart;

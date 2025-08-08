// import node module libraries
import { Card } from "react-bootstrap";
import { CurrencyDollar } from "react-bootstrap-icons";

// import helper utility file
import { formatNumberWithCommas } from "helper/utils";

const EarningCard = ({ data, ...props }) => {
  return (
    <Card className="h-100 card-lg" {...props}>
      <Card.Body className="p-6">
        <div className="d-flex justify-content-between align-items-center mb-6">
          <div>
            <h4 className="mb-0 fs-5">Earnings</h4>
          </div>
          <div className="icon-shape icon-md bg-light-danger text-dark-danger rounded-circle">
            <CurrencyDollar className="fs-5" />
          </div>
        </div>
        <div className="lh-1">
          <h1 className="mb-2 fw-bold fs-2">
            $
            {data?.earning
              ? formatNumberWithCommas(data?.earning.toFixed(2))
              : "0.00"}
          </h1>
          <span>{data?.duration ? data?.duration : "No revenue"}</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EarningCard;

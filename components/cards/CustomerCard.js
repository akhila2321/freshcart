// import node module libraries
import { Card } from "react-bootstrap";
import { People } from "react-bootstrap-icons";

// import helper utility file
import { formatNumberWithCommas } from "helper/utils";

const CustomerCard = ({ data, ...props }) => {
  return (
    <Card className="h-100 card-lg" {...props}>
      <Card.Body className="p-6">
        <div className="d-flex justify-content-between align-items-center mb-6">
          <div>
            <h4 className="mb-0 fs-5">Customer</h4>
          </div>
          <div className="icon-shape icon-md bg-light-info text-dark-info rounded-circle">
            <People className="fs-5" />
          </div>
        </div>
        <div className="lh-1">
          <h1 className="mb-2 fw-bold fs-2">
            {data?.customer ? formatNumberWithCommas(data?.customer) : "0"}
          </h1>

          {data?.new ? (
            <span>
              <span className="text-dark me-1">{data?.new}+</span>
              new in 2 days
            </span>
          ) : (
            <span className="text-dark me-1">No new customer</span>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default CustomerCard;

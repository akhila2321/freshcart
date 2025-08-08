// import node module libraries
import { Card } from "react-bootstrap";
import { Cart } from "react-bootstrap-icons";

// import helper utility file
import { formatNumberWithCommas } from "helper/utils";

const OrderCard = ({ data, ...props }) => {
  return (
    <Card className="h-100 card-lg" {...props}>
      <Card.Body className="p-6">
        <div className="d-flex justify-content-between align-items-center mb-6">
          <div>
            <h4 className="mb-0 fs-5">Orders</h4>
          </div>
          <div className="icon-shape icon-md bg-light-warning text-dark-warning rounded-circle">
            <Cart className="fs-5" />
          </div>
        </div>
        <div className="lh-1">
          <h1 className="mb-2 fw-bold fs-2">
            {data?.value ? formatNumberWithCommas(data?.value) : "0"}
          </h1>

          {data?.order ? (
            <span>
              <span className="text-dark me-1">{data?.order}+</span>
              New Sales
            </span>
          ) : (
            <span className="text-dark me-1">No Sales</span>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default OrderCard;

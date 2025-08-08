// import node module libraries
import { ListGroup } from "react-bootstrap";

const SummaryItem = ({ label, value, bold }) => (
  <ListGroup.Item className="d-flex justify-content-between align-items-start">
    <div className="me-auto">
      <div className={bold ? "fw-bold" : ""}>{label}</div>
    </div>
    <span className={bold ? "fw-bold" : ""}>{value}</span>
  </ListGroup.Item>
);

export default SummaryItem;

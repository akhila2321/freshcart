// import node module libraries
import { Card } from "react-bootstrap";

const ShopHeading = ({ title }) => {
  return (
    <Card className="mb-4 bg-light border-0">
      <Card.Body className="p-9">
        <h2 className="mb-0 fs-1">{title}</h2>
      </Card.Body>
    </Card>
  );
};

export default ShopHeading;

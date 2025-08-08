// import node module libraries
import { Card } from "react-bootstrap";

const FeaturesWithLeftIcon = ({ data }) => {
  return (
    <Card className="mb-6">
      {data?.map((item, index) => (
        <Card.Body
          className={`d-flex align-items-center ${index != 0 ? "border-top" : ""
            }`}
          key={item.id}
        >
          <div>{item.icon}</div>
          <div className="ms-3">
            <p className="mb-0 small">{item.title}</p>
          </div>
        </Card.Body>
      ))}
    </Card>
  );
};

export default FeaturesWithLeftIcon;

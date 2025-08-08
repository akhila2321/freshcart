// import node module libraries
import { Card, Image } from "react-bootstrap";

const TestimonialsCard = ({ data }) => {
  const { title, desc, image, name, position } = data;

  return (
    <Card className="bg-light-warning border-0">
      <Card.Body className="p-5">
        <h6>{title}</h6>
        <p>{desc}</p>
        <div className="d-flex align-items-center">
          <div>
            <Image
              src={image}
              alt=""
              className="avatar avatar-md rounded-circle"
            />
          </div>
          <div className="ms-3 lh-1">
            <h6 className="mb-0">{name}</h6>
            <small>{position}</small>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TestimonialsCard;

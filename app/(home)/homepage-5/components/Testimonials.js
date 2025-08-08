// import node module libraries
import { Card, Image } from "react-bootstrap";

const Testimonials = () => {
  return (
    <div className="mb-8">
      <h5 className="mb-3">Testimonials</h5>
      <Card className="bg-light-warning border-0">
        <Card.Body className="p-5">
          <h6>The Best Grocery Store Design</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipis cing elit. Curabitur
            iaculis maximus purus, a gravida dui tempor eget.
          </p>
          <div className="d-flex align-items-center">
            <div>
              <Image
                src="/images/avatar/avatar-1.jpg"
                alt=""
                className="avatar avatar-md rounded-circle"
              />
            </div>
            <div className="ms-3 lh-1">
              <h6 className="mb-0">Alishia Jones</h6>
              <small>Sales Manager</small>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Testimonials;

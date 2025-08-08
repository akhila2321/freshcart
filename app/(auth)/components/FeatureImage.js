// import node module libraries
import { Col, Image } from "react-bootstrap";

const FeatureImage = ({ image }) => {
  return (
    <Col xs={{ span: 12, order: 2 }} md={6} lg={{ span: 4, order: 1 }}>
      <Image
        src={image || "/images/svg-graphics/signup-g.svg"}
        alt=""
        className="img-fluid"
      />
    </Col>
  );
};

export default FeatureImage;

// import node module libraries
import PropTypes from "prop-types";
import { Col, Button } from "react-bootstrap";

const HorizontalCTA = ({ item }) => {
  const { image, title, discount } = item;
  return (
    <Col xs={12} md={6} className="mb-3 mb-lg-0">
      <div
        className="py-10 px-8 rounded"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <h3 className="fw-bold mb-1">{title}</h3>
          {discount ? (
            <p className="mb-4">
              Get Upto <span className="fw-bold">{`${discount}%`}</span> Off
            </p>
          ) : (
            ""
          )}

          <Button href="#!" variant="dark">
            Shop Now
          </Button>
        </div>
      </div>
    </Col>
  );
};

HorizontalCTA.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  discount: PropTypes.string,
};

export default HorizontalCTA;

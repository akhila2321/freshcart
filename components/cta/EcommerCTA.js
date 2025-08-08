// import node module libraries
import { Image, Button } from "react-bootstrap";
import { ArrowRight } from "react-feather";

const EcommerCTA = ({ ...props }) => {
  return (
    <div className="mb-8 position-relative" {...props}>
      <div className="position-absolute p-5 py-8">
        <h3 className="mb-0">Fresh Fruits </h3>
        <p>Get Upto 25% Off</p>
        <Button variant="dark">
          Shop Now
          <ArrowRight className="ms-1" size={14} />
        </Button>
      </div>
      <Image
        src="/images/banner/assortment-citrus-fruits.png"
        alt=""
        className="img-fluid rounded "
      />
    </div>
  );
};

export default EcommerCTA;

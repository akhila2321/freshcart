// import node module libraries
import { Button } from "react-bootstrap";

// import helper utility file
import { createMarkup } from "helper/utils";

const OffersCTA = ({ data }) => {
  const { title, desc, image } = data;

  return (
    <div
      className="p-8 mb-3 rounded"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div>
        <h3
          className="mb-0 fw-bold"
          dangerouslySetInnerHTML={createMarkup(title)}
        />
        <div
          className="mt-4 mb-5 fs-5"
          dangerouslySetInnerHTML={createMarkup(desc)}
        ></div>
        <Button href="#" variant="dark">
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default OffersCTA;

// import node module libraries
import { Button } from "react-bootstrap";

const BannerStyle1 = () => {
  return (
    <div
      className="flex-fill px-8 py-9 mb-6 mb-md-0 mb-xl-6 rounded"
      style={{
        background: "url(/images/banner/ad-banner-1.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <h3 className="mb-0 fw-bold">
          10% cashback on
          <br />
          personal care
        </h3>
        <div className="mt-4 mb-5 fs-5">
          <p className="mb-0">Max cashback: $12</p>
          <span>
            Code:
            <span className="fw-bold text-dark">CARE12</span>
          </span>
        </div>
        <Button href="#" variant="dark">
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default BannerStyle1;

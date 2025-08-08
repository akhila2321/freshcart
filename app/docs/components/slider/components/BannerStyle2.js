// import node module libraries
import { Button } from "react-bootstrap";

const BannerStyle2 = () => {
  return (
    <div
      className="flex-fill px-8 py-8 rounded"
      style={{
        background: "url(/images/banner/ad-banner-2.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <h3 className="fw-bold mb-3">
          Say yes to <br /> season’s fresh{" "}
        </h3>
        <div className="mt-4 mb-5 fs-5">
          <p className="fs-5 mb-0">
            Refresh your day
            <br />
            the fruity way
          </p>
        </div>

        <Button href="#" variant="dark">
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default BannerStyle2;

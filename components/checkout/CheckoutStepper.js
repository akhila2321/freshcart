// import node module libraries
import { Button } from "react-bootstrap";

const CheckoutStepper = ({ prevHandler, nextHandler, lastIdx }) => {
  return (
    <div className="mt-5 d-flex justify-content-end">
      <Button
        variant="outline-gray-400"
        className="text-muted"
        onClick={prevHandler}
      >
        Prev
      </Button>
      {lastIdx == "3" ? (
        <Button variant="primary" className="ms-2">
          Place order
        </Button>
      ) : (
        <Button variant="primary" className="ms-2" onClick={nextHandler}>
          Next
        </Button>
      )}
    </div>
  );
};

export default CheckoutStepper;

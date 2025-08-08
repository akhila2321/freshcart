// import node module libraries
import { Fragment } from "react";
import { Button, ListGroup, Image } from "react-bootstrap";

// import custom components
import FreshBadge from "components/common/FreshBadge";
import AddPaymentMethod from "components/modal/AddPaymentMethod";

// import required hook
import useToggle from "hooks/useToggle";

// import required data files
import { paymentMethodData } from "data/user/PaymentMethodData";

const PaymentMethodList = () => {
  const { isToggled, toggle, handleClose } = useToggle();

  return (
    <Fragment>
      <div className="py-6 p-md-6 p-lg-10">
        <div className="d-flex justify-content-between mb-6 align-items-center">
          <h2 className="mb-0">Payment Methods</h2>
          <Button variant="outline-primary" onClick={toggle}>
            Add Payment
          </Button>
        </div>
        {/* Payment List */}
        <ListGroup as="ul" variant="flush">
          {paymentMethodData.map((item) => (
            <ListGroup.Item as="li" className="py-5 px-0" key={item.id}>
              <div className="d-flex justify-content-between">
                <div className="d-flex gap-4">
                  <Image src={item.image} alt="" />

                  <div className="">
                    <h5 className="mb-0 h6">{item.card}</h5>
                    <p className="mb-0 small">
                      Expires in {item.expiry}{" "}
                      {item.isExpried ? (
                        <FreshBadge
                          content="This card is expired"
                          bg="warning"
                          className="text-dark"
                          pill={false}
                        />
                      ) : (
                        ""
                      )}{" "}
                    </p>
                  </div>
                </div>
                <div>
                  <Button
                    href="#"
                    variant="outline-gray-400"
                    size="sm"
                    className={`${item.isRemoved ? "" : "text-muted"}`}
                    disabled={item.isRemoved}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>

      {/* Add Payment Modal */}
      <AddPaymentMethod isOpen={isToggled} closeModal={handleClose} />
    </Fragment>
  );
};

export default PaymentMethodList;

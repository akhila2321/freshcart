// import node module libraries
import { useState, Fragment } from "react";
import { Button, ListGroup, Image, Row, Col } from "react-bootstrap";

// import custom components
import FreshBadge from "components/common/FreshBadge";
import AddPaymentMethod from "components/modal/AddPaymentMethod";

// import required data files
import { paymentMethodData } from "data/user/PaymentMethodData";

// import required hook
import useToggle from "hooks/useToggle";

const PaymentMethod = ({ className }) => {
  const [paymentMethod, serPaymentMethods] = useState(paymentMethodData);

  const { isToggled, toggle, handleClose } = useToggle();

  return (
    <Fragment>
      <Row>
        <Col xs={12}>
          <div className={className}>
            <div className="d-flex justify-content-between mb-6 align-items-center">
              <h2 className="mb-0">Payment Methods</h2>
              <Button onClick={toggle} variant="outline-primary">
                Add Payment
              </Button>
            </div>
            {/* Payment List */}
            <ListGroup as="ul" variant="flush">
              {paymentMethod.map((item) => (
                <ListGroup.Item as="li" className="py-5" key={item.id}>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex">
                      <Image src={item.image} alt="" />

                      <div className="ms-4">
                        <h5 className="mb-0 h6">{item.card}</h5>
                        <p className="mb-0 small">
                          Expires in {item.expiry}{" "}
                          {item.isExpried ? (
                            <FreshBadge
                              content="This card is expired"
                              bg="warning"
                              className="text-dark"
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
        </Col>
      </Row>
      <AddPaymentMethod isOpen={isToggled} closeModal={handleClose} />
    </Fragment>
  );
};

export default PaymentMethod;

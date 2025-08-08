"use client";
// import node module libraries
import Link from "next/link";
import { Fragment, useState } from "react";
import { Container, Row, Col, Accordion, Button } from "react-bootstrap";
import { Clock, CreditCard, MapPin, ShoppingBag } from "react-feather";

// import custom components
import AddressCard from "components/cards/AddressCard";
import AccordionToggle from "components/common/AccordionToggle";
import DeliveryTimeTab from "components/checkout/DeliveryTimeTab";
import CheckoutStepper from "components/checkout/CheckoutStepper";
import DeliveryInstruction from "components/checkout/DeliveryInstruction";
import PaymentMethodForm from "components/checkout/PaymentMethodForm";
import OrderDetails from "components/checkout/OrderDetails";
import AddAddressModal from "components/modal/AddAddressModal";

// import required data file
import { addressListData } from "data/user/AddressListData";

// import helper utility file
import { generateDeliveryOptions } from "helper/utils";

// import required hook
import useToggle from "hooks/useToggle";
import { useMounted } from "hooks/useMounted";

const CheckoutAccordion = () => {
  const [isActive, setIsActive] = useState("0");
  const { isToggled, toggle, handleClose } = useToggle();
  const hasMounted = useMounted();

  // Prev and Next Handler
  const prevHandler = () => {
    const prevIndex = parseInt(isActive, 10) - 1;
    setIsActive(prevIndex.toString());
  };

  const nextHandler = () => {
    const nextIndex = parseInt(isActive, 10) + 1;
    setIsActive(nextIndex.toString());
  };

  return (
    <Fragment>
      <section className="mb-lg-14 mb-8 mt-8">
        <Container>
          <Row>
            <Col xs={12}>
              <div>
                <div className="mb-8">
                  <h1 className="fw-bold mb-0">Checkout</h1>
                  <p className="mb-0">
                    Already have an account? Click here to
                    <Link href="/signin"> Sign in</Link>.
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          <div>
            <Row>
              <Col lg={7} md={12}>
                <Accordion
                  flush
                  id="accordionFlushExample"
                  activeKey={isActive}
                  onSelect={(newKey) => {
                    if (newKey !== null) {
                      setIsActive(newKey);
                    }
                  }}
                >
                  {/* Add Delivery Address */}
                  <AccordionToggle eventKey="0" className="py-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link
                        href=""
                        className="fs-5 text-inherit h4"
                        onClick={(e) => e.preventDefault()}
                      >
                        <MapPin size={20} className="me-2 text-muted" />
                        Add delivery address
                      </Link>

                      <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={toggle}
                      >
                        Add a new address
                      </Button>
                    </div>

                    {hasMounted && <Accordion.Collapse eventKey="0" id="flush-collapseOne">
                      <div className="mt-5">
                        <Row>
                          {addressListData?.map((item) => (
                            <Col lg={6} xs={12} className="mb-4" key={item?.id}>
                              <AddressCard
                                data={item}
                                isDefault={item.isDefault}
                                defaultTextAsButton={false}
                              />
                            </Col>
                          ))}
                        </Row>
                      </div>
                    </Accordion.Collapse>}
                  </AccordionToggle>
                  {/* Delivery Time  */}
                  <AccordionToggle eventKey="1" className={"py-4"}>
                    <Link
                      href=""
                      className="text-inherit h5"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Clock size={20} className="me-2 text-muted" />
                      Delivery time
                    </Link>

                    <Accordion.Collapse eventKey="1" id="flush-collapseTwo">
                      <Fragment>
                        <DeliveryTimeTab data={generateDeliveryOptions()} />
                        <CheckoutStepper
                          prevHandler={prevHandler}
                          nextHandler={nextHandler}
                        />
                      </Fragment>
                    </Accordion.Collapse>
                  </AccordionToggle>

                  {/* Delivery Instruction  */}
                  <AccordionToggle eventKey="2" className={"py-4"}>
                    <Link
                      href=""
                      className="text-inherit h5"
                      onClick={(e) => e.preventDefault()}
                    >
                      <ShoppingBag size={20} className="me-2 text-muted" />
                      Delivery instructions
                    </Link>

                    <Accordion.Collapse eventKey="2" id="flush-collapseThree">
                      <Fragment>
                        <DeliveryInstruction />
                        <CheckoutStepper
                          prevHandler={prevHandler}
                          nextHandler={nextHandler}
                        />
                      </Fragment>
                    </Accordion.Collapse>
                  </AccordionToggle>

                  {/* Payment Method */}
                  <AccordionToggle eventKey="3" className={"py-4"}>
                    <Link
                      href=""
                      className="text-inherit h5"
                      onClick={(e) => e.preventDefault()}
                    >
                      <CreditCard size={20} className="me-2 text-muted" />
                      Payment Method
                    </Link>

                    <Accordion.Collapse eventKey="3" id="flush-collapseFour">
                      <Fragment>
                        <PaymentMethodForm />
                        <CheckoutStepper
                          prevHandler={prevHandler}
                          nextHandler={nextHandler}
                          lastIdx={isActive}
                        />
                      </Fragment>
                    </Accordion.Collapse>
                  </AccordionToggle>
                </Accordion>
              </Col>

              <Col xs={12} md={12} lg={{ offset: 1, span: 4 }}>
                <OrderDetails />
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* Address Modal */}
      <AddAddressModal isAddressOpen={isToggled} addressClose={handleClose} />
    </Fragment>
  );
};

export default CheckoutAccordion;

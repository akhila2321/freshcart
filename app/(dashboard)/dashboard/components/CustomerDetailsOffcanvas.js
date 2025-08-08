//import node module libraries
import FreshBadge from "components/common/FreshBadge";
import Link from "next/link";
import {
  Offcanvas,
  Image,
  Row,
  Col,
  Card,
  Form,
  ListGroup,
  Accordion,
  useAccordionButton,
} from "react-bootstrap";
import { ChevronDown } from "react-feather";

//import required hooks
import { useCustomer } from "hooks/useCustomer";

const CustomerDetailsOffcanvas = ({ show, handleClose }) => {
  const { selectedCustomer } = useCustomer();

  // Custom Toggle Function
  function ContextAwareToggle({ children, eventKey, callback }) {
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey)
    );

    return (
      <Card.Header className="bg-light rounded-top px-4 py-3 border-bottom-0">
        <Link
          href=""
          className="d-flex align-items-center justify-content-between text-inherit"
          onClick={(e) => {
            e.preventDefault();
            decoratedOnClick();
          }}
        >
          <div className="w-100 d-flex align-items-center justify-content-between text-inherit pe-4">
            {children}
          </div>
          <ChevronDown className="fs-4" />
        </Link>
      </Card.Header>
    );
  }

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasRightLabel">
          Customer Details
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className=" d-flex flex-column gap-4">
        <div className="d-flex flex-row align-items-center gap-4 w-100">
          <div className="flex-shrink-0">
            <Image
              src={selectedCustomer?.image || "/images/avatar/avatar-1.jpg"}
              alt="avatar"
              className="avatar avatar-xl rounded-circle"
            />
          </div>

          <div className="d-flex flex-column gap-1 flex-grow-1">
            <h3 className="mb-0 h5 d-flex flex-row gap-3">
              {selectedCustomer?.name}
              <FreshBadge
                bg="light-success"
                text="dark-success"
                pill={false}
                content={"Verified"}
              />
            </h3>

            <div className="d-md-flex align-items-center justify-content-between">
              <div className="">#CU001</div>
              <div className="text-black-50">
                Last Active:
                <span className="text-dark">31 May, 2025 3:24PM</span>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-md-row flex-column gap-md-6 gap-2">
          <div className="d-flex flex-row gap-2">
            <span className="text-dark fw-semibold">Email</span>
            <span className="text-black-50">{selectedCustomer?.email}</span>
          </div>
          <div className="d-flex flex-row gap-2">
            <span className="text-dark fw-semibold">Phone Number</span>
            <span className="text-black-50">{selectedCustomer?.phone}</span>
          </div>
        </div>

        <Card className="rounded">
          <Card.Body>
            <Row>
              <Col xs={4} className="border-end">
                <div className="d-flex flex-column gap-1">
                  <span className="text-black-50">Join Date</span>
                  <span className="text-dark">31 May, 2024</span>
                </div>
              </Col>
              <Col xs={4} className="border-end">
                <div className="d-flex flex-column gap-1">
                  <span className="text-black-50">Total Spent</span>
                  <span className="text-dark">$105</span>
                </div>
              </Col>
              <Col xs={4} className="border-end">
                <div className="d-flex flex-column gap-1">
                  <span className="text-black-50">Total Order</span>
                  <span className="text-dark">3</span>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card>
          <div className="border-bottom p-4">
            <h3 className="mb-0 h6">Details</h3>
          </div>
          <Card.Body className="p-4 d-flex flex-column gap-5">
            <div className="d-flex flex-column gap-2 lh-1">
              <div className="h6 mb-0">Email</div>
              <span className="text-black-50">{selectedCustomer?.email}</span>
            </div>
            <div className="d-flex flex-column gap-2 lh-1">
              <div className="h6 mb-0">Phone Number</div>
              <span className="text-black-50">{selectedCustomer?.phone}</span>
            </div>

            <div className="d-flex flex-column gap-2">
              <div className="h6 mb-0">Address</div>
              <div>
                <Form.Group className="d-flex align-items-center gap-2">
                  <Form.Check
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    defaultChecked
                  />
                  <Form.Check.Label htmlFor="flexRadioDefault2">
                    123 Apple St., Springfield, IL, 62701, USA
                  </Form.Check.Label>
                </Form.Group>
                <Form.Group className="d-flex align-items-center gap-2">
                  <Form.Check
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <Form.Check.Label htmlFor="flexRadioDefault2">
                    456 Banana St., Metropolis, NY, 10001, USA
                  </Form.Check.Label>
                </Form.Group>
              </div>
            </div>
          </Card.Body>
        </Card>

        <Accordion id="accordionExample">
          <Card>
            <ContextAwareToggle eventKey={"collapseOne"}>
              <div className="d-flex flex-row align-items-center gap-2">
                <h3 className="mb-0 h5">Orders</h3>
                <span className="text-black-50 lh-1">#001</span>
              </div>
              <div>
                <span className="text-inherit">
                  Date:
                  <span className="text-dark">31 May, 2025</span>
                </span>
              </div>
            </ContextAwareToggle>
            <Accordion.Collapse eventKey="collapseOne">
              <Card.Body>
                <ListGroup variant="flush" as="ul" className="mb-0 border-0">
                  <ListGroup.Item as="li" className="px-0 py-1">
                    <Link
                      href="#!"
                      className="text-inherit d-flex flex-row align-items-center justify-content-between"
                    >
                      <div className="d-flex flex-row justify-content-between gap-3 align-items-center">
                        <Image
                          src="/images/products/product-img-18.jpg"
                          className="icon-shape icon-xxl"
                          alt="product img"
                        />

                        <span className="h6 mb-0">Organic Banana</span>
                      </div>
                      <span className="text-black-50">$35.00</span>
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" className="px-0 py-1">
                    <Link
                      href="#!"
                      className="text-inherit d-flex flex-row align-items-center justify-content-between"
                    >
                      <div className="d-flex flex-row justify-content-between gap-3 align-items-center">
                        <Image
                          src="/images/products/product-img-15.jpg"
                          className="icon-shape icon-xxl"
                          alt="product img"
                        />

                        <span className="h6 mb-0">Fresh Apple</span>
                      </div>
                      <span className="text-black-50">$70.00</span>
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" className="px-0 py-1">
                    <Link
                      href="#!"
                      className="text-inherit d-flex flex-row align-items-center justify-content-between"
                    >
                      <div className="d-flex flex-row justify-content-between gap-3 align-items-center">
                        <Image
                          src="/images/products/product-img-19.jpg"
                          className="icon-shape icon-xxl"
                          alt="product img"
                        />

                        <span className="h6 mb-0">BeetRoot</span>
                      </div>
                      <span className="text-black-50">$29.00</span>
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" className="px-0 py-3">
                    <div className="d-flex flex-row justify-content-between">
                      <span className="text-dark fw-semibold">
                        Total Order Amount
                      </span>
                      <span className="text-dark fw-semibold">$134.00</span>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        <Accordion id="accordionExample">
          <Card>
            <ContextAwareToggle eventKey={"collapseTwo"}>
              <div className="d-flex flex-row align-items-center gap-2">
                <h3 className="mb-0 h5">Orders</h3>
                <span className="text-black-50 lh-1">#002</span>
              </div>
              <div>
                <span className="text-inherit">
                  Date:
                  <span className="text-dark">12 May, 2025</span>
                </span>
              </div>
            </ContextAwareToggle>
            <Accordion.Collapse eventKey="collapseTwo">
              <Card.Body>
                <ListGroup variant="flush" as="ul" className="mb-0 border-0">
                  <ListGroup.Item as="li" className="px-0 py-1">
                    <Link
                      href="#!"
                      className="text-inherit d-flex flex-row align-items-center justify-content-between"
                    >
                      <div className="d-flex flex-row justify-content-between gap-3 align-items-center">
                        <Image
                          src="/images/products/product-img-18.jpg"
                          className="icon-shape icon-xxl"
                          alt="product img"
                        />

                        <span className="h6 mb-0">Organic Banana</span>
                      </div>
                      <span className="text-black-50">$35.00</span>
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" className="px-0 py-1">
                    <Link
                      href="#!"
                      className="text-inherit d-flex flex-row align-items-center justify-content-between"
                    >
                      <div className="d-flex flex-row justify-content-between gap-3 align-items-center">
                        <Image
                          src="/images/products/product-img-15.jpg"
                          className="icon-shape icon-xxl"
                          alt="product img"
                        />

                        <span className="h6 mb-0">Fresh Apple</span>
                      </div>
                      <span className="text-black-50">$70.00</span>
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" className="px-0 py-1">
                    <Link
                      href="#!"
                      className="text-inherit d-flex flex-row align-items-center justify-content-between"
                    >
                      <div className="d-flex flex-row justify-content-between gap-3 align-items-center">
                        <Image
                          src="/images/products/product-img-19.jpg"
                          className="icon-shape icon-xxl"
                          alt="product img"
                        />

                        <span className="h6 mb-0">BeetRoot</span>
                      </div>
                      <span className="text-black-50">$29.00</span>
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" className="px-0 py-3">
                    <div className="d-flex flex-row justify-content-between">
                      <span className="text-dark fw-semibold">
                        Total Order Amount
                      </span>
                      <span className="text-dark fw-semibold">$134.00</span>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CustomerDetailsOffcanvas;

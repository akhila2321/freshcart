// import node module libraries
import React from "react";
import { Row, Col, Dropdown } from "react-bootstrap";
import Link from "next/link";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <Link
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    className="dropdown-toggle selectValue text-reset"
  >
    {children}
  </Link>
));

CustomToggle.displayName = "Custom Toggle";

const Topbar = () => {
  return (
    <Row className="align-items-center pt-2">
      <Col xl={3} lg={8} xs={7} className="d-flex">
        <Dropdown className="selectBox">
          <Dropdown.Toggle as={CustomToggle}>USD $</Dropdown.Toggle>
          <Dropdown.Menu as="ul">
            <Dropdown.Item as="li">
              <Link href="" className="dropdown-item">
                USD $
              </Link>
            </Dropdown.Item>
            <Dropdown.Item as="li">
              <Link href="" className="dropdown-item">
                EUR €
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div className="ms-6">
          <Dropdown className="selectBox">
            <Dropdown.Toggle as={CustomToggle}>English</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as="li">
                <Link href="" className="dropdown-item">
                  English
                </Link>
              </Dropdown.Item>
              <Dropdown.Item as="li">
                <Link href="" className="dropdown-item">
                  Espa&ntilde;ol
                </Link>
              </Dropdown.Item>
              <Dropdown.Item as="li">
                <Link href="" className="dropdown-item">
                  Fran&ccedil;ais
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Col>
      <Col
        xl={9}
        lg={4}
        xs={5}
        className="d-md-flex align-items-center justify-content-end"
      >
        <Link href="" className="text-reset">
          Support
        </Link>
        <Link href="" className="mx-md-8 ms-4 text-reset">
          Delivery
        </Link>
        <Link href="" className="text-reset d-none d-md-block">
          Warranty
        </Link>
      </Col>
    </Row>
  );
};

export default Topbar;

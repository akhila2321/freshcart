// import node module libraries
import React, { useState } from "react";
import { Container, Row, Col, Dropdown, Image } from "react-bootstrap";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <span
    ref={ref}
    onClick={onClick}
    className="dropdown-toggle selectValue text-reset cursor-pointer"
  >
    {children}
  </span>
));

CustomToggle.displayName = "Custom Toggle";

const Topbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="bg-light py-1">
      <Container>
        <Row>
          <Col xs={12} md={6} className="text-center text-md-start">
            <span>Super Value Deals - Save more with coupons</span>
          </Col>
          <Col className="text-end d-none d-md-block">
            <Dropdown drop="down" align={"start"} className="selectBox">
              <Dropdown.Toggle as={CustomToggle}>
                <Image
                  src={`/images/icons/${selectedLanguage.toLowerCase()}.svg`}
                  alt=""
                  className="me-2"
                />
                {selectedLanguage}
              </Dropdown.Toggle>
              <Dropdown.Menu className="cursor-pointer">
                <Dropdown.Item onClick={() => handleLanguageSelect("English")}>
                  <span className="me-2 d-flex align-items-center gap-2 ">
                    <Image src="/images/icons/english.svg" alt="" />
                    English
                  </span>
                </Dropdown.Item>

                <Dropdown.Item onClick={() => handleLanguageSelect("Deutsch")}>
                  <span className="me-2 d-flex align-items-center gap-2 ">
                    <Image src="/images/icons/deutsch.svg" alt="" />
                    Deutsch
                  </span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Topbar;

// import node module libraries
import { useState } from "react";
import { Row, Col, Tab, Button, Offcanvas, Dropdown } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { OffcanvasLiveDemoCode } from "data/code/OffcanvasCode";

const OffcanvasLiveDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="live-demo" className="mb-4">
          <h2>Live demo</h2>
          <p>
            Use the buttons below to show and hide an offcanvas element via
            JavaScript that toggles the
            <code> .show </code>
            class on an element with the
            <code> .offcanvas </code>
            class.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey={"design"}>
              <Button
                href=""
                variant="primary"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(true);
                }}
              >
                Link with href
              </Button>{" "}
              <Button
                variant="primary"
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                Button with data-bs-target
              </Button>
              <Offcanvas
                placement="start"
                id="offcanvasExample"
                show={isOpen}
                onHide={() => setIsOpen(false)}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="offcanvasExampleLabel">
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <div>
                    Some text as placeholder. In real life you can have the
                    elements you have chosen. Like, text, images, lists, etc.
                  </div>

                  <Dropdown className="mt-3">
                    <Dropdown.Toggle variant="secondary">
                      Dropdown button
                    </Dropdown.Toggle>
                    <Dropdown.Menu as="ul">
                      <Dropdown.Item as="li">Action</Dropdown.Item>
                      <Dropdown.Item as="li">Another action</Dropdown.Item>
                      <Dropdown.Item as="li">Something else here</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Offcanvas.Body>
              </Offcanvas>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={OffcanvasLiveDemoCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default OffcanvasLiveDemo;

// import node module libraries
import { useState } from "react";
import { Row, Col, Tab, Offcanvas, Button } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { BackdropOffcanvasCode } from "data/code/OffcanvasCode";

const BackdropOffcanvas = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="backdrop" className="mb-4">
          <h2>Backdrop</h2>
          <p>
            Scrolling the
            <code> &lt;body&gt; </code>
            element is disabled when an offcanvas and its backdrop are visible.
            Use the
            <code> data-bs-scroll </code>
            attribute to toggle
            <code> &lt;body&gt; </code>
            scrolling and
            <code> data-bs-backdrop </code>
            to toggle the backdrop.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey={"design"}>
              <Button
                variant="primary"
                className="mb-1 me-1"
                onClick={() => setIsOpen(true)}
              >
                Enable body scrolling
              </Button>
              <Button
                variant="primary"
                onClick={() => setIsOpen2(true)}
                className="mb-1 me-1"
              >
                Enable backdrop (default)
              </Button>
              <Button
                variant="primary"
                onClick={() => setIsOpen3(true)}
                className="mb-1"
              >
                Enable both scrolling & backdrop
              </Button>

              {/* Enable Body Scrolling */}
              <Offcanvas
                show={isOpen}
                onHide={() => setIsOpen(false)}
                backdrop={false}
                scroll
                placement="start"
                id="offcanvasScrolling"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="offcanvasScrollingLabel">
                    Colored with scrolling
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <p>
                    Try scrolling the rest of the page to see this option in
                    action.
                  </p>
                </Offcanvas.Body>
              </Offcanvas>
              {/* Enable Backdrop */}
              <Offcanvas
                show={isOpen2}
                onHide={() => setIsOpen2(false)}
                backdrop
                placement="start"
                id="offcanvasScrolling"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="offcanvasWithBothOptionsLabel">
                    Backdroped with scrolling
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>...</Offcanvas.Body>
              </Offcanvas>
              {/* Offcanvas with backdrop */}
              <Offcanvas
                show={isOpen3}
                onHide={() => setIsOpen3(false)}
                backdrop
                scroll
                placement="start"
                id="offcanvasScrolling"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="offcanvasWithBackdropLabel">
                    Offcanvas with backdrop
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <p>
                    Try scrolling the rest of the page to see this option in
                    action.
                  </p>
                </Offcanvas.Body>
              </Offcanvas>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={BackdropOffcanvasCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default BackdropOffcanvas;

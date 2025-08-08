// import node module libraries
import { Fragment, useState } from "react";
import { Row, Col, Tab, Button, Offcanvas } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import {
  OffcanvasBottomPlacementCode,
  OffcanvasRightPlacementCode,
  OffcanvasTopPlacementCode,
} from "data/code/OffcanvasCode";

const OffcanvasPlacement = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  return (
    <Fragment>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="placement" className="mb-4">
            <h2>Placement</h2>
            <p>
              There’s no default placement for offcanvas components, so you must
              add one of the modifier classes below;
            </p>
            <ul>
              <li>
                <code>.offcanvas-start </code>
                places offcanvas on the left of the viewport (shown above)
              </li>
              <li>
                <code> .offcanvas-end </code>
                places offcanvas on the right of the viewport
              </li>
              <li>
                <code>.offcanvas-top </code>
                places offcanvas on the top of the viewport
              </li>
              <li>
                <code>.offcanvas-bottom </code>
                places offcanvas on the bottom of the viewport
              </li>
            </ul>
            <p>Try the top, right, and bottom examples out below.</p>
          </div>
          <div className="mb-4">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Button variant="primary" onClick={() => setIsOpen(true)}>
                  Toggle top offcanvas
                </Button>
                <Offcanvas
                  show={isOpen}
                  onHide={() => setIsOpen(false)}
                  placement="top"
                  id="offcanvasTop"
                >
                  <Offcanvas.Header closeButton>
                    <h5 id="offcanvasTopLabel">Offcanvas top</h5>
                  </Offcanvas.Header>
                  <Offcanvas.Body>...</Offcanvas.Body>
                </Offcanvas>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={OffcanvasTopPlacementCode} />
              </Tab.Pane>
            </CustomTab>
          </div>

          {/* Offcanvas Right Placement */}
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Button variant="primary" onClick={() => setIsOpen2(true)}>
                  Toggle right offcanvas
                </Button>

                <Offcanvas
                  placement="end"
                  show={isOpen2}
                  onHide={() => setIsOpen2(false)}
                  id="offcanvasRight"
                >
                  <Offcanvas.Header closeButton>
                    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                  </Offcanvas.Header>
                  <Offcanvas.Body>...</Offcanvas.Body>
                </Offcanvas>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={OffcanvasRightPlacementCode} />
              </Tab.Pane>
            </CustomTab>
          </div>

          {/* Offcanvas Bottom  */}
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Button variant="primary" onClick={() => setIsOpen3(true)}>
                  Toggle bottom offcanvas
                </Button>

                <Offcanvas
                  show={isOpen3}
                  onHide={() => setIsOpen3(false)}
                  placement="bottom"
                  id="offcanvasBottom"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas bottom</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body className="small">...</Offcanvas.Body>
                </Offcanvas>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={OffcanvasBottomPlacementCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default OffcanvasPlacement;

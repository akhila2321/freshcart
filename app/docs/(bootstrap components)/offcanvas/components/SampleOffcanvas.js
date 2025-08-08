// import node module libraries
import { Row, Col, Tab, Offcanvas } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { OffcanvasSampleCode } from "data/code/OffcanvasCode";

const SampleOffcanvas = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="offcanvas-components" className="mb-4">
          <h2>Offcanvas components</h2>
          <p>
            Below is an offcanvas example that is shown by default (via
            <code>.show </code>
            on
            <code> .offcanvas </code>
            ). Offcanvas includes support for a header with a close button and
            an optional body class for some initial
            <code> padding </code>. We suggest that you include offcanvas
            headers with dismiss actions whenever possible, or provide an
            explicit dismiss action.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey={"design"}>
              <div
                className="offcanvas border show"
                id="offcanvas"
                aria-labelledby="offcanvasLabel"
                style={{
                  height: "200px",
                  display: "block",
                  position: "static",
                }}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title as="h2" id="offcanvasLabel">
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  Content for the offcanvas goes here. You can place just about
                  any Bootstrap component or custom elements here.
                </Offcanvas.Body>
              </div>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={OffcanvasSampleCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default SampleOffcanvas;

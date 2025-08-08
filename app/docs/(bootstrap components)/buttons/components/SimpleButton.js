// import node module libraries
import { Row, Col, Button, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { ButtonCode } from "data/code/ButtonCode";

const SimpleButton = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="button" className="mb-4">
          <h2>Buttons</h2>
          <p>
            Bootstrap includes several predefined button styles, each serving
            its own semantic purpose, with a few extras thrown in for more
            control.
          </p>
        </div>

        <div className="mb-10">
          <CustomTab defaultActiveKey="design">
            <Tab.Pane title="Design" eventKey="design">
              <Button variant="primary" className="mb-2 me-1">
                Primary
              </Button>
              <Button variant="secondary" className="mb-2 me-1">
                Secondary
              </Button>
              <Button variant="success" className="mb-2 me-1">
                Success
              </Button>
              <Button variant="danger" className="mb-2 me-1">
                Danger
              </Button>
              <Button variant="warning" className="mb-2 me-1">
                Warning
              </Button>
              <Button variant="info" className="mb-2 me-1">
                Info
              </Button>
              <Button variant="light" className="mb-2 me-1">
                Light
              </Button>
              <Button variant="dark" className="mb-2 me-1">
                Dark
              </Button>
              <Button variant="gray-400" className="mb-2 me-1">
                Gray 400
              </Button>
              <Button variant="link" className="mb-2">
                Link
              </Button>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey="code">
              <HighlightCode code={ButtonCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default SimpleButton;

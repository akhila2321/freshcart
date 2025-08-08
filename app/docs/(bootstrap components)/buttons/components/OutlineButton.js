// import node module libraries
import { Row, Col, Button, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data files
import { OutlineButtonCode } from "data/code/ButtonCode";

const OutlineButton = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="outline-button" className="mb-4">
          <h2>Outline buttons</h2>
          <p>
            In need of a button, but not the hefty background colors they bring?
            Replace the default modifier classes with the
            <code className="highlighter-rouge">.btn-outline-*</code>
            ones to remove all background images and colors on any button.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey="design">
            <Tab.Pane title="Design" eventKey="design">
              <Button variant="outline-primary" className="mb-2 me-1">
                Primary
              </Button>
              <Button variant="outline-secondary" className="mb-2 me-1">
                Secondary
              </Button>
              <Button variant="outline-success" className="mb-2 me-1">
                Success
              </Button>
              <Button variant="outline-danger" className="mb-2 me-1">
                Danger
              </Button>
              <Button variant="outline-warning" className="mb-2 me-1">
                Warning
              </Button>
              <Button variant="outline-info" className="mb-2 me-1">
                Info
              </Button>
              <Button variant="outline-light" className="mb-2 me-1">
                Light
              </Button>
              <Button variant="outline-dark" className="mb-2 me-1">
                Dark
              </Button>
              <Button variant="outline-gray-400" className="mb-2">
                Gray 400
              </Button>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey="code">
              <HighlightCode code={OutlineButtonCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default OutlineButton;

// import node module libraries
import { Row, Col, Button, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { GhostButtonCode } from "data/code/ButtonCode";

const GhostButton = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="ghost-button" className="mb-4">
          <h2>Ghost buttons</h2>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey="design">
            <Tab.Pane title="Design" eventKey="design">
              <Button variant="ghost-primary" className="mb-2">
                Primary
              </Button>
              <Button variant="ghost-secondary" className="mb-2">
                Secondary
              </Button>
              <Button variant="ghost-success" className="mb-2">
                Success
              </Button>
              <Button variant="ghost-danger" className="mb-2">
                Danger
              </Button>
              <Button variant="ghost-warning" className="mb-2">
                Warning
              </Button>
              <Button variant="ghost-info" className="mb-2">
                Info
              </Button>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey="code">
              <HighlightCode code={GhostButtonCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default GhostButton;

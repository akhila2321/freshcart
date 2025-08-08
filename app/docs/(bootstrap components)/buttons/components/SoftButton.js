// import node module libraries
import { Row, Col, Button, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { SoftButtonCode } from "data/code/ButtonCode";

const SoftButton = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="soft-button" className="mb-4">
          <h2>Soft buttons</h2>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey="design">
            <Tab.Pane title="Design" eventKey="design">
              <Button variant="soft-primary" className="mb-2 me-1">
                Primary
              </Button>
              <Button variant="soft-secondary" className="mb-2 me-1">
                Secondary
              </Button>
              <Button variant="soft-success" className="mb-2 me-1">
                Success
              </Button>
              <Button variant="soft-danger" className="mb-2 me-1">
                Danger
              </Button>
              <Button variant="soft-warning" className="mb-2 me-1">
                Warning
              </Button>
              <Button variant="soft-info" className="mb-2">
                Info
              </Button>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey="code">
              <HighlightCode code={SoftButtonCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default SoftButton;

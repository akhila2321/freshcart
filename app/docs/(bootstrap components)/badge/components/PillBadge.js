// import node module libraries
import { Row, Col, Tab, Badge } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { PillBadgeCode } from "data/code/BadgeCode";

const PillBadge = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="pill-badge" className="mb-4">
          <h2>Pill badges</h2>
          <p>
            Use the
            <code>.rounded-pill</code>
            utility class to make badges more rounded with a larger
            <code>border-radius</code>.
          </p>
        </div>

        <div className="mb-10">
          <CustomTab defaultActiveKey="design">
            <Tab.Pane title="Design" eventKey="design">
              <Badge bg="primary" pill={true} className="me-1">
                Primary
              </Badge>
              <Badge bg="secondary" pill={true} className="me-1">
                Secondary
              </Badge>
              <Badge bg="success" pill={true} className="me-1">
                Success
              </Badge>
              <Badge bg="danger" pill={true} className="me-1">
                Danger
              </Badge>
              <Badge bg="warning" pill={true} text="dark" className="me-1">
                Warning
              </Badge>
              <Badge bg="info" pill={true} text="dark" className="me-1">
                Info
              </Badge>
              <Badge bg="light" pill={true} text="dark" className="me-1">
                Light
              </Badge>
              <Badge bg="dark" pill={true}>
                Dark
              </Badge>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey="code">
              <HighlightCode code={PillBadgeCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default PillBadge;

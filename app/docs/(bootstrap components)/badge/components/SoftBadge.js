// import node module libraries
import { Row, Col, Tab, Badge } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { SoftBadgeCode } from "data/code/BadgeCode";

const SoftBadge = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="pill-badge" className="mb-4">
          <h2 className="mb-0">Soft badges</h2>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey="design">
            <Tab.Pane title="Design" eventKey="design">
              <Badge
                as="span"
                bg="light-primary"
                text="primary"
                className="me-1"
              >
                Primary
              </Badge>
              <Badge as="span" bg="light-secondary" className="me-1">
                Secondary
              </Badge>
              <Badge
                as="span"
                bg="light-success"
                text="success"
                className="me-1"
              >
                Success
              </Badge>
              <Badge as="span" bg="light-danger" text="danger" className="me-1">
                Danger
              </Badge>
              <Badge as="span" bg="light-warning" text="dark" className="me-1">
                Warning
              </Badge>
              <Badge as="span" bg="light-info" text="info" className="me-1">
                Info
              </Badge>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey="code">
              <HighlightCode code={SoftBadgeCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default SoftBadge;

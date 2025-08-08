// import node module libraries
import { Row, Col, Tab, Badge } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data files
import { BGBadgeCode } from "data/code/BadgeCode";

const BGColorBadge = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="bg-badge" className="mb-4">
          <h2>Background colors</h2>
          <p>
            Use our background utility classes to quickly change the appearance
            of a badge. Please note that when using Bootstrap’s default
            <code> .bg-light</code>, you’ll likely need a text color utility
            like
            <code>.text-dark </code>
            for proper styling. This is because background utilities do not set
            anything but
            <code>background-color</code>.
          </p>
        </div>

        <div className="mb-10">
          <CustomTab defaultActiveKey="design">
            <Tab.Pane title="Design" eventKey="design">
              <Badge bg="primary" as="span" className="me-1">
                Primary
              </Badge>
              <Badge bg="secondary" as="span" className="me-1">
                Secondary
              </Badge>
              <Badge bg="success" as="span" className="me-1">
                Success
              </Badge>
              <Badge bg="danger" as="span" className="me-1">
                Danger
              </Badge>
              <Badge bg="warning" text="dark" as="span" className="me-1">
                Warning
              </Badge>
              <Badge bg="info" text="dark" as="span" className="me-1">
                Info
              </Badge>
              <Badge bg="light" text="dark" as="span" className="me-1">
                Light
              </Badge>
              <Badge bg="dark" as="span">
                Dark
              </Badge>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey="code">
              <HighlightCode code={BGBadgeCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default BGColorBadge;

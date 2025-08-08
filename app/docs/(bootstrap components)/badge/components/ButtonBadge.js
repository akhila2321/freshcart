// import node module libraries
import { Row, Col, Tab, Badge, Button } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data files
import { ButtonBadgeCode } from "data/code/BadgeCode";

const ButtonBadge = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="mb-4">
          <h2>Buttons</h2>
          <p>
            Badges can be used as part of links or buttons to provide a counter.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey="design">
            <Tab.Pane title="Design" eventKey={"design"}>
              <Button variant="primary">
                Notifications <Badge bg="secondary">4</Badge>
              </Button>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={ButtonBadgeCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default ButtonBadge;

// import node module libraries
import { Fragment } from "react";
import { Row, Col, Tab, Badge, Button } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data files
import { PositionBadgeCode, PositionBadgeCode2 } from "data/code/BadgeCode";

const PositionBadge = () => {
  return (
    <Fragment>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="positioned-badge" className="mb-4">
            <h2>Positioned</h2>
            <p>
              Use utilities to modify a<code> .badge </code>
              and position it in the corner of a link or button.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey="design">
              <Tab.Pane title="Design" eventKey="design">
                <Button variant="primary" className="position-relative">
                  Inbox
                  <Badge
                    bg="danger"
                    pill
                    className="position-absolute top-0 start-100 translate-middle"
                  >
                    99+
                  </Badge>
                </Button>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey="code">
                <HighlightCode code={PositionBadgeCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-4">
            <p>
              You can also replace the
              <code> .badge </code>
              class with a few more utilities without a count for a more generic
              indicator.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Button variant="primary" className="position-relative">
                  Profile
                  <Badge
                    bg="danger"
                    className="position-absolute top-0 start-100 translate-middle p-2 border border-light rounded-circle"
                  >
                    {" "}
                  </Badge>
                </Button>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={PositionBadgeCode2} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default PositionBadge;

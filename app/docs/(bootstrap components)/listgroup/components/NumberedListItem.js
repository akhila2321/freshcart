// import node module libraries
import { Fragment } from "react";
import { Row, Col, Tab, ListGroup, Badge } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import {
  NumberedListItemCode,
  NumberedListItemCode2,
} from "data/code/ListGroupCode";

const NumberedListItem = () => {
  return (
    <Fragment>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="numbered" className="mb-4">
            <h2>Numbered</h2>
            <p>
              Add the
              <code> .list-group-numbered </code>
              modifier class (and optionally use an
              <code> &lt;ol&gt; </code>
              element) to opt into numbered list group items. Numbers are
              generated via CSS (as opposed to a<code> &lt;ol&gt; </code>s
              default browser styling) for better placement inside list group
              items and to allow for better customization.
            </p>
          </div>

          <div className="mb-6">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane
                title="Design"
                eventKey={"design"}
                className="bg-light p-4"
              >
                <ListGroup numbered>
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                </ListGroup>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={NumberedListItemCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      <p className="mb-4">These work great with custom content as well.</p>
      <div className="mb-10">
        <CustomTab defaultActiveKey={"design"}>
          <Tab.Pane title="Design" eventKey={"design"} className="bg-light p-4">
            <ListGroup numbered as="ol">
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>
                  Cras justo odio
                </div>
                <Badge bg="primary" pill>
                  14
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>
                  Cras justo odio
                </div>
                <Badge bg="primary" pill>
                  14
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>
                  Cras justo odio
                </div>
                <Badge bg="primary" pill>
                  14
                </Badge>
              </ListGroup.Item>
            </ListGroup>
          </Tab.Pane>
          <Tab.Pane title="Code" eventKey={"code"}>
            <HighlightCode code={NumberedListItemCode2} />
          </Tab.Pane>
        </CustomTab>
      </div>
    </Fragment>
  );
};

export default NumberedListItem;

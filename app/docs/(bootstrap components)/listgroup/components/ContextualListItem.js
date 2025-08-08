// import node module libraries
import { Fragment } from "react";
import { Row, Col, Tab, ListGroup, Badge } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import {
  ContextualListItemCode,
  ContextualListItemCode2,
} from "data/code/ListGroupCode";
import Link from "next/link";

const ContextualListItem = () => {
  return (
    <Fragment>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="contextual-classes" className="mb-4">
            <h2>Contextual classes</h2>
            <p>
              Use contextual classes to style list items with a stateful
              background and color.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane
                title="Design"
                eventKey={"design"}
                className="bg-light p-4"
              >
                <ListGroup>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item variant="primary">
                    This is a Primary list group item
                  </ListGroup.Item>
                  <ListGroup.Item variant="secondary">
                    This is a Secondary list group item
                  </ListGroup.Item>
                  <ListGroup.Item variant="success">
                    This is a Success list group item
                  </ListGroup.Item>
                  <ListGroup.Item variant="danger">
                    This is a Danger list group item
                  </ListGroup.Item>
                  <ListGroup.Item variant="warning">
                    This is a Warning list group item
                  </ListGroup.Item>
                  <ListGroup.Item variant="info">
                    This is a Info list group item
                  </ListGroup.Item>
                  <ListGroup.Item variant="light">
                    This is a Light list group item
                  </ListGroup.Item>
                  <ListGroup.Item variant="dark">
                    This is a Dark list group item
                  </ListGroup.Item>
                </ListGroup>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={ContextualListItemCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="with-badges" className="mb-4">
            <h2>With badges</h2>
            <p>
              Add badges to any list group item to show unread counts, activity,
              and more with the help of some
              <Link href="#">utilities</Link>.
            </p>
          </div>

          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane
                title="Design"
                eventKey={"design"}
                className="bg-light p-4"
              >
                <ListGroup>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center">
                    Cras justo odio <Badge bg="primary">14</Badge>{" "}
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center">
                    Dapibus ac facilisis in <Badge bg="danger">2</Badge>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center">
                    Morbi leo risus <Badge bg="warning">1</Badge>
                  </ListGroup.Item>
                </ListGroup>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={ContextualListItemCode2} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ContextualListItem;

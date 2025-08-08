// import node module libraries
import { Row, Col, Tab, ListGroup } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { DisabledListItemCode } from "data/code/ListGroupCode";

const DisabledListItem = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="disabled-items" className="mb-4">
          <h2>Disabled Items</h2>
          <p>
            Add
            <code className="highlighter-rouge"> .disabled </code>
            to a<code className="highlighter-rouge"> .list-group-item </code>
            to make it <em>appear</em>
            disabled. Note that some elements with
            <code className="highlighter-rouge"> .disabled </code>
            will also require custom JavaScript to fully disable their click
            events (e.g., links).
          </p>
        </div>

        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-light p-4"
            >
              <ListGroup as="ul">
                <ListGroup.Item as="li" disabled>
                  Cras justo odio
                </ListGroup.Item>
                <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item as="li">Morbi leo risus</ListGroup.Item>
                <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item as="li">Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={DisabledListItemCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default DisabledListItem;

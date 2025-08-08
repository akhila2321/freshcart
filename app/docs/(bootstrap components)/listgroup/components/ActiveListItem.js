// import node module libraries
import { Row, Col, Tab, ListGroup } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { ActiveListItemCode } from "data/code/ListGroupCode";

const ActiveListItem = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="active-items" className="mb-4">
          <h2>Active Item</h2>
          <p>
            Add
            <code className="highlighter-rouge"> .active </code>
            to a<code className="highlighter-rouge"> .list-group-item </code>
            to indicate the current active selection.
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
                <ListGroup.Item as="li" active>
                  Cras justo odio
                </ListGroup.Item>
                <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item as="li">Morbi leo risus</ListGroup.Item>
                <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item as="li">Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={ActiveListItemCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default ActiveListItem;

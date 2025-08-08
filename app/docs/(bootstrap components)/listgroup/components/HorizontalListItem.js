// import node module libraries
import { Row, Col, Tab, ListGroup } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { HorizontalListItemCode } from "data/code/ListGroupCode";

const HorizontalListItem = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="horizontal" className="mb-4">
          <h2>Horizontal</h2>
          <p>
            Add
            <code className="highlighter-rouge"> .list-group-horizontal </code>
            to change the layout of list group items from vertical to horizontal
            across all breakpoints. Alternatively, choose a responsive variant
            <code className="highlighter-rouge">
              .list-group-horizontal-{` sm | md | lg | xl`}
            </code>
            to make a list group horizontal starting at that breakpoint’s
            <code className="highlighter-rouge"> min-width </code>. Currently
            <strong>
              horizontal list groups cannot be combined with flush list groups.
            </strong>
          </p>
          <p>
            <strong>ProTip:</strong>
            Want equal-width list group items when horizontal? Add
            <code className="highlighter-rouge"> .flex-fill </code>
            to each list group item.
          </p>
        </div>

        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-light p-4"
            >
              <ListGroup horizontal as="ul">
                <ListGroup.Item as="li">An item</ListGroup.Item>
                <ListGroup.Item as="li">A second item</ListGroup.Item>
                <ListGroup.Item as="li">A third item</ListGroup.Item>
              </ListGroup>

              <ListGroup horizontal={"sm"} as="ul">
                <ListGroup.Item as="li">An item</ListGroup.Item>
                <ListGroup.Item as="li">A second item</ListGroup.Item>
                <ListGroup.Item as="li">A third item</ListGroup.Item>
              </ListGroup>

              <ListGroup horizontal={"md"} as="ul">
                <ListGroup.Item as="li">An item</ListGroup.Item>
                <ListGroup.Item as="li">A second item</ListGroup.Item>
                <ListGroup.Item as="li">A third item</ListGroup.Item>
              </ListGroup>

              <ListGroup horizontal={"lg"} as="ul">
                <ListGroup.Item as="li">An item</ListGroup.Item>
                <ListGroup.Item as="li">A second item</ListGroup.Item>
                <ListGroup.Item as="li">A third item</ListGroup.Item>
              </ListGroup>

              <ListGroup horizontal={"xl"} as="ul">
                <ListGroup.Item as="li">An item</ListGroup.Item>
                <ListGroup.Item as="li">A second item</ListGroup.Item>
                <ListGroup.Item as="li">A third item</ListGroup.Item>
              </ListGroup>

              <ListGroup horizontal={"xxl"} as="ul">
                <ListGroup.Item as="li">An item</ListGroup.Item>
                <ListGroup.Item as="li">A second item</ListGroup.Item>
                <ListGroup.Item as="li">A third item</ListGroup.Item>
              </ListGroup>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={HorizontalListItemCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default HorizontalListItem;

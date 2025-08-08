// import node module libraries
import { Row, Col, Tab, ListGroup, Form } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { CheckBoxListItemCode } from "data/code/ListGroupCode";

const CheckBoxListItem = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="checkboxes-radios" className="mb-4">
          <h2>Checkboxes and radios</h2>
          <p>
            Place Bootstrap’s checkboxes and radios within list group items and
            customize as needed. You can use them without
            <code> &lt;label&gt; </code>
            s, but please remember to include an
            <code> aria-label </code>
            attribute and value for accessibility.
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
                <ListGroup.Item
                  as="li"
                  className="d-flex align-items-center gap-1"
                >
                  <Form.Check type="checkbox" className="me-1" /> First checkbox
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex align-items-center gap-1"
                >
                  <Form.Check type="checkbox" className="me-1" /> Second
                  checkbox
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex align-items-center gap-1"
                >
                  <Form.Check type="checkbox" className="me-1" /> Third checkbox
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex align-items-center gap-1"
                >
                  <Form.Check type="checkbox" className="me-1" /> Fourth
                  checkbox
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex align-items-center gap-1"
                >
                  <Form.Check type="checkbox" className="me-1" /> Fifth checkbox
                </ListGroup.Item>
              </ListGroup>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={CheckBoxListItemCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default CheckBoxListItem;

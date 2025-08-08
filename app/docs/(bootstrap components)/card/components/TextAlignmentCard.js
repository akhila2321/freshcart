// import node module libraries
import { Row, Col, Card, Tab, Button } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { TextAlignmentCardCode } from "data/code/CardExampleCode";

const TextAlignmentCard = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="text-alignment" className="mb-4">
          <h2>Text alignment</h2>
          <p>
            You can quickly change the text alignment of any card—in its
            entirety or specific parts—with our text align classes.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-light p-4"
            >
              <Card style={{ width: "18rem" }} className="mb-3">
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem" }} className="text-center mb-3">
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem" }} className="text-end mb-3">
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={TextAlignmentCardCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default TextAlignmentCard;

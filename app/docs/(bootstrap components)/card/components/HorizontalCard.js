// import node module libraries
import { Row, Col, Tab, Card, Image } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { HorizontalCardCode } from "data/code/CardExampleCode";

const HorizontalCard = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="horizontal" className="mb-4">
          <h2>Horizontal</h2>
          <p>
            Using a combination of grid and utility classes, cards can be made
            horizontal in a mobile-friendly and responsive way. In the example
            below, we remove the grid gutters with <code> .g-0 </code> and use{" "}
            <code> .col-md-* </code> classes to make the card horizontal at the{" "}
            <code> md </code> breakpoint. Further adjustments may be needed
            depending on your card content.
          </p>
        </div>

        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey="design" className="bg-light p-4">
              <Card className="mb-3" style={{ maxWidth: "540px" }}>
                <Row>
                  <Col md={4}>
                    <Image
                      src="/images/about/team-1.png"
                      alt=""
                      className="img-fluid rounded-start h-100"
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title as="h3">Card title</Card.Title>
                      <Card.Text>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                      <Card.Text>
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey="code">
              <HighlightCode code={HorizontalCardCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default HorizontalCard;

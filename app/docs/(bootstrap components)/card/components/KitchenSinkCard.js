// import node module libraries
import { Row, Col, Card, Tab, ListGroup, Image } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { KitchenSinkCardCode } from "data/code/CardExampleCode";

const KitchenSinkCard = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="kitchen-sink" className="mb-4">
          <h2>Kitchen sink</h2>
          <p>
            Mix and match multiple content types to create the card you need, or
            throw everything in there. Shown below are image styles, blocks,
            text styles, and a list group—all wrapped in a fixed-width card.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-light p-4"
            >
              <Card style={{ width: "265px" }}>
                <Image
                  src="/images/docs/placeholder-4by3.svg"
                  alt=""
                  className="card-img-top"
                />
                <Card.Body>
                  <Card.Title as="h3">Card title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card&apos;s content.
                  </Card.Text>
                </Card.Body>

                <ListGroup as="ul" variant="flush">
                  <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                  <ListGroup.Item as="li">
                    Dapibus ac facilisis in
                  </ListGroup.Item>
                  <ListGroup.Item as="li">Vestibulum at eros</ListGroup.Item>
                </ListGroup>

                <Card.Body>
                  <Card.Link href="">Card link</Card.Link>
                  <Card.Link href="">Another link</Card.Link>
                </Card.Body>
              </Card>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={KitchenSinkCardCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default KitchenSinkCard;

// import node module libraries
import {
  Row,
  Col,
  Tab,
  Placeholder,
  Card,
  Button,
  Image,
} from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { SimplePlaceholderCode } from "data/code/PlaceholderCode";

const SimplePlaceholder = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="example" className="mb-4">
          <h2>Example</h2>
        </div>

        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-light p-4"
              id="pills-example-placeholder-design"
            >
              <div className="d-flex">
                <Card className="w-lg-50 w-xl-50 me-lg-4">
                  <Image
                    src="/images/docs/4by3.jpg"
                    alt=""
                    className="card-img-top"
                  />
                  <Card.Body>
                    <Card.Title as="h3">Card title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>

                <Card className="w-lg-50 w-xl-50">
                  <Image
                    src="/images/docs/4by3.jpg"
                    alt=""
                    className="card-img-top"
                  />
                  <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                      <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                      <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                      <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                      <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder.Button variant="primary" xs={6} />
                  </Card.Body>
                </Card>
              </div>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={SimplePlaceholderCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default SimplePlaceholder;

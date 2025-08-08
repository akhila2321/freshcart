// import node module libraries
import { Row, Col, Card, Tab, Image, Button } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { BasicExampleCode } from "data/code/CardExampleCode";

const BasicExampleCard = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="card" className="mb-4">
          <h2>Basic Example</h2>
          <p className="mb-0">
            Below is an example of a basic card with mixed content and a fixed
            width.
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
                  className="card-img-top"
                  alt=""
                />
                <Card.Body>
                  <Card.Title as="h5" className="h3">
                    Card title
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card&apos;s content.
                  </Card.Text>

                  <Button href="#" variant="primary">
                    Go somewhere
                  </Button>
                </Card.Body>
              </Card>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={BasicExampleCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default BasicExampleCard;

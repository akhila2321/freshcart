// import node module libraries
import { Fragment } from "react";
import { Row, Col, Card, Tab, Button } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import {
  CardHeaderFooterCode,
  CardHeaderFooterCode2,
} from "data/code/CardExampleCode";

const CardHeaderFooter = () => {
  return (
    <Fragment>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="header-footer" className="mb-4">
            <h2>Header and Footer</h2>
            <p>Add an optional header and/or footer within a card.</p>
          </div>
          <div className="mb-6">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane
                title="Design"
                eventKey={"design"}
                className="bg-light p-4"
                id="pills-header-footer-design"
              >
                <Card>
                  <Card.Header>Featured</Card.Header>
                  <Card.Body>
                    <Card.Title as="h3">Special title treatment</Card.Title>
                    <Card.Text>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </Card.Text>
                    <Button variant="primary" href="">
                      Go somewhere
                    </Button>
                  </Card.Body>
                </Card>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={CardHeaderFooterCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane
                title="Design"
                eventKey={"design"}
                className="bg-light p-4"
              >
                <Card className="text-center">
                  <Card.Header>Featured</Card.Header>
                  <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                  <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={CardHeaderFooterCode2} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default CardHeaderFooter;

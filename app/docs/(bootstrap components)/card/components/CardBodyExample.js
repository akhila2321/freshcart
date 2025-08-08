// import node module libraries
import { Row, Col, Card, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { CardBodyExampleCode } from "data/code/CardExampleCode";

const CardBodyExample = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="content-types" className="mb-4">
          <div id="body">
            <h2>Card Body</h2>
            <p>
              The building block of a card is the{" "}
              <code className="highlighter-rouge">.card-body</code>. Use it
              whenever you need a padded section within a card.
            </p>
          </div>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-light p-4"
            >
              <Card>
                <Card.Body>This is some text within a card body.</Card.Body>
              </Card>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={CardBodyExampleCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default CardBodyExample;

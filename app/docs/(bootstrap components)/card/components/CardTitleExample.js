// import node module libraries
import { Row, Col, Card, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { CardTitleExampleCode } from "data/code/CardExampleCode";

const CardTitleExample = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="titles-text-links" className="mb-4">
          <h2>Titles, text, and links</h2>
          <p>
            Card titles are used by adding{" "}
            <code className="highlighter-rouge"> .card-title </code> to a{" "}
            <code className="highlighter-rouge"> &lt;h*&gt; </code> tag. In the
            same way, links are added and placed next to each other by adding
            <code className="highlighter-rouge"> .card-link </code> to an{" "}
            <code className="highlighter-rouge"> &lt;a&gt; </code> tag.
          </p>
          <p>
            Subtitles are used by adding a{" "}
            <code className="highlighter-rouge"> .card-subtitle </code> to a{" "}
            <code className="highlighter-rouge"> &lt;h*&gt; </code> tag. If the{" "}
            <code className="highlighter-rouge"> .card-title </code> and the
            <code className="highlighter-rouge"> .card-subtitle </code> items
            are placed in a
            <code className="highlighter-rouge"> .card-body </code> item, the
            card title and subtitle are aligned nicely.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-light p-4"
            >
              <Card style={{ maxWidth: "20rem" }}>
                <Card.Body>
                  <Card.Title as="h3">Card title</Card.Title>
                  <Card.Subtitle as="h6" className="mb-2 text-muted">
                    Card subtitle
                  </Card.Subtitle>
                  <Card.Text as="p">
                    Some quick example text to build on the card title and make
                    up the bulk of the card&apos;s content.
                  </Card.Text>
                  <Card.Link href="">Card link</Card.Link>
                  <Card.Link href="">Another link</Card.Link>
                </Card.Body>
              </Card>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={CardTitleExampleCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default CardTitleExample;

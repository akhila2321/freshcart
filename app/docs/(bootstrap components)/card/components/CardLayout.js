// import node module libraries
import { Row, Col, Tab, Card, Image } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { CardLayoutCode, CardLayoutCode2 } from "data/code/CardExampleCode";

const CardLayout = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="card-layout" className="mb-4">
          <h2>Card layout</h2>
          <p>
            In addition to styling the content within cards, Bootstrap includes
            a few options for laying out series of cards. For the time being,
            these layout options are not yet responsive.
          </p>
        </div>
        <div id="card-groups" className="mb-4">
          <h3 className="fw-semibold mb-1">Card groups</h3>
          <p>
            Use card groups to render cards as a single, attached element with
            equal width and height columns. Card groups start off stacked and
            use <code> display: flex; </code> to become attached with uniform
            dimensions starting at the <code> sm </code> breakpoint.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-light p-4"
            >
              <div className="card-group">
                <Card>
                  <Image
                    src="/images/docs/placeholder-4by3.svg"
                    alt=""
                    className="card-img-top"
                  />
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
                </Card>
                <Card>
                  <Image
                    src="/images/docs/placeholder-4by3.svg"
                    alt=""
                    className="card-img-top"
                  />
                  <Card.Body>
                    <Card.Title as="h3">Card title</Card.Title>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in
                      to additional content.
                    </Card.Text>
                    <Card.Text>
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Image
                    src="/images/docs/placeholder-4by3.svg"
                    alt=""
                    className="card-img-top"
                  />
                  <Card.Body>
                    <Card.Title as="h3">Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </Card.Text>
                    <Card.Text>
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={CardLayoutCode} />
            </Tab.Pane>
          </CustomTab>
        </div>

        {/* Grid cards */}
        <div id="grid-card" className="mb-4">
          <h3 className="fw-semibold mb-1">Grid cards</h3>
          <p>
            Use the Bootstrap grid system and its<code> .row-cols </code>
            classes to control how many grid columns (wrapped around your cards)
            you show per row. For example, here’s <code> .row-cols-1 </code>
            laying out the cards on one column, and{" "}
            <code> .row-cols-md-2 </code>
            splitting four cards to equal width across multiple rows, from the
            medium breakpoint up.
          </p>
        </div>

        <CustomTab defaultActiveKey={"design"}>
          <Tab.Pane title="Design" eventKey="design" className="bg-light p-4">
            <Row xs={1} md={2} className="g-4">
              <Col>
                <Card>
                  <Image
                    src="/images/docs/placeholder-4by3.svg"
                    alt=""
                    className="card-img-top"
                  />

                  <Card.Body>
                    <Card.Title as="h3">Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card>
                  <Image
                    src="/images/docs/placeholder-4by3.svg"
                    alt=""
                    className="card-img-top"
                  />

                  <Card.Body>
                    <Card.Title as="h3">Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card>
                  <Image
                    src="/images/docs/placeholder-4by3.svg"
                    alt=""
                    className="card-img-top"
                  />

                  <Card.Body>
                    <Card.Title as="h3">Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card>
                  <Image
                    src="/images/docs/placeholder-4by3.svg"
                    alt=""
                    className="card-img-top"
                  />

                  <Card.Body>
                    <Card.Title as="h3">Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Tab.Pane>
          <Tab.Pane title="Code" eventKey="code">
            <HighlightCode code={CardLayoutCode2} />
          </Tab.Pane>
        </CustomTab>
      </Col>
    </Row>
  );
};

export default CardLayout;

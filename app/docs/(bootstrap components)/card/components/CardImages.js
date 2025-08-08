// import node module libraries
import { Fragment } from "react";
import { Row, Col, Tab, Card, Image } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import {
  CardImageCode,
  CardImageCode2,
  CardImageOverlaysCode,
} from "data/code/CardExampleCode";

const CardImages = () => {
  return (
    <Fragment>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="images" className="mb-4">
            <h2>Images</h2>
            <p>
              Cards include a few options for working with images. Choose from
              appending “image caps” at either end of a card, overlaying images
              with card content, or simply embedding the image in a card.
            </p>
          </div>
          <div id="image-on-top">
            <div className="mb-3">
              <h3 className="mb-1 fw-semibold">Image on Top</h3>
              <p className="mb-0">
                <code>.card-img-top</code> places an image to the top of the
                card. With <code>.card-text</code>, text can be added to the
                card. Text within <code>.card-text</code> can also be styled
                with the standard HTML tags.
              </p>
            </div>

            <div className="mb-10">
              <CustomTab defaultActiveKey={"design"}>
                <Tab.Pane
                  title="Design"
                  eventKey={"design"}
                  className="bg-light p-4"
                >
                  <Card>
                    <Image
                      src="/images/blog/blog-img-1.jpg"
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
                </Tab.Pane>
                <Tab.Pane title="Code" eventKey={"code"}>
                  <HighlightCode code={CardImageCode} />
                </Tab.Pane>
              </CustomTab>
            </div>
          </div>

          {/* Image On Bottom */}
          <div id="image-on-bottom">
            <div className="mb-3">
              <h3 className="mb-1 fw-semibold">Image on Bottom</h3>
              <p className="mb-0">
                <code>.card-img-bottom</code> places an image to the bottom of
                the card. With <code>.card-text</code>, text can be added to the
                card. Text within <code>.card-text</code> can also be styled
                with the standard HTML tags.
              </p>
            </div>

            <div className="mb-10">
              <CustomTab defaultActiveKey={"design"}>
                <Tab.Pane
                  title="Design"
                  eventKey={"design"}
                  className="bg-light p-4"
                >
                  <Card>
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
                    <Image
                      src="/images/blog/blog-img-1.jpg"
                      alt=""
                      className="card-img-bottom"
                    />
                  </Card>
                </Tab.Pane>
                <Tab.Pane title="Code" eventKey={"code"}>
                  <HighlightCode code={CardImageCode2} />
                </Tab.Pane>
              </CustomTab>
            </div>
          </div>
        </Col>
      </Row>

      {/* Card Image Overlays */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="image-overlays" className="mb-4">
            <h2>Image overlays</h2>
            <p>
              Turn an image into a card background and overlay your card’s text.
              Depending on the image, you may or may not need additional styles
              or utilities.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane
                title="Design"
                eventKey={"design"}
                className="bg-light p-4"
              >
                <Card className="text-white">
                  <Image
                    src="/images/blog/blog-img-1.jpg"
                    className="rounded"
                    alt=""
                  />
                  <div className="card-img-overlay">
                    <Card.Title as="h3" className="text-white">
                      Card title
                    </Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                  </div>
                </Card>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={CardImageOverlaysCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default CardImages;

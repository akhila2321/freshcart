"use client";
// import node module libraries
import { Container, Row, Col, Nav, Button, Tab, Form } from "react-bootstrap";

// import custom components
import SingleReview from "components/reviews/SingleReview";
import ReviewSummary from "components/reviews/ReviewSummary";
import CreateReview from "components/reviews/CreateReview";

// import helper utility file
import { createMarkup, createTabSlug } from "helper/utils";

const ProductDetailsTab = ({ data }) => {
  const { description, details, reviews } = data;

  const tabList = ["Product Details", "Information", "Reviews", "Seller Info"];

  return (
    <section className="mt-lg-14 mt-8">
      <Container>
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey={createTabSlug(tabList[0])}
        >
          <Row>
            <Col xs={12}>
              <Nav id="myTab" variant="pills" className="nav-lb-tab" as="ul">
                {tabList.map((tab, index) => (
                  <Nav.Item as="li" key={tab}>
                    <Nav.Link
                      eventKey={createTabSlug(tab)}
                      disabled={index + 1 === tabList.length}
                    >
                      {tab}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey={createTabSlug(tabList[0])}>
                  <div dangerouslySetInnerHTML={createMarkup(description)} />
                </Tab.Pane>
                <Tab.Pane eventKey={createTabSlug(tabList[1])}>
                  <div dangerouslySetInnerHTML={createMarkup(details)} />
                </Tab.Pane>
                <Tab.Pane eventKey={createTabSlug(tabList[2])}>
                  <div className="my-8">
                    <Row>
                      <Col md={4}>
                        <ReviewSummary />
                      </Col>
                      <Col md={8}>
                        <div className="mb-10">
                          <div className="d-flex justify-content-between align-items-center mb-8">
                            <div>
                              <h4>Reviews</h4>
                            </div>
                            <div>
                              <Form.Select>
                                <option defaultValue="">Top Reviews</option>
                                <option value="Most Recent">Most Recent</option>
                              </Form.Select>
                            </div>
                          </div>
                          {reviews.map((review, index) => {
                            return (
                              <SingleReview
                                data={review}
                                key={review.id}
                                index={index}
                              />
                            );
                          })}

                          <div>
                            <Button
                              variant="outline-gray-400"
                              className="text-muted"
                            >
                              Read More Reviews
                            </Button>
                          </div>
                        </div>

                        <CreateReview />
                      </Col>
                    </Row>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </section>
  );
};

export default ProductDetailsTab;

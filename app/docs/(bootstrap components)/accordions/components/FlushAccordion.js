"use client";
// import node module libraries
import { Row, Col, Tab, Accordion } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { AccordionFlushCode } from "data/code/AccordionCode";

const FlushAccordion = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="accordion-flush" className="mb-4">
          <h2>Flush</h2>
          <p>
            Add
            <code>.accordion-flush</code> to remove the default{" "}
            <code>background-color</code> , some borders, and some rounded
            corners to render accordions edge-to-edge with their parent
            container.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey="design">
            <Tab.Pane title="Design" eventKey="design">
              <Accordion flush defaultActiveKey="" id="accordionFlushExample">
                <Accordion.Item eventKey="0">
                  <Accordion.Header as="h2" id="flush-headingOne">
                    Accordion Item #1
                  </Accordion.Header>
                  <Accordion.Body>
                    Placeholder content for this accordion, which is intended to
                    demonstrate the
                    <code> .accordion-flush</code> class. This is the first
                    item&apos;s accordion body.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header as="h2" id="flush-headingTwo">
                    Accordion Item #2
                  </Accordion.Header>
                  <Accordion.Body>
                    Placeholder content for this accordion, which is intended to
                    demonstrate the
                    <code> .accordion-flush</code> class. This is the second
                    item&apos;s accordion body. Let&apos;s imagine this being
                    filled with some actual content.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header as="h2" id="flush-headingThree">
                    Accordion Item #3
                  </Accordion.Header>
                  <Accordion.Body>
                    Placeholder content for this accordion, which is intended to
                    demonstrate the
                    <code> .accordion-flush </code>
                    class. This is the third item&apos;s accordion body. Nothing
                    more exciting happening here in terms of content, but just
                    filling up the space to make it look, at least at first
                    glance, a bit more representative of how this would look in
                    a real-world application.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey="code">
              <HighlightCode code={AccordionFlushCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default FlushAccordion;

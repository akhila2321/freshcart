"use client";

// import node module libraries
import { Row, Col, Tab, Accordion } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { AccordionBasicCode } from "data/code/AccordionCode";

const SampleAccordion = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="accordion-example" className="mb-4">
          <h2>Example</h2>
          <p>
            Click the accordions below to expand/collapse the accordion content.
          </p>
        </div>

        <div className="mb-10">
          <CustomTab defaultActiveKey="design">
            <Tab.Pane eventKey="design" title="Design">
              <Accordion defaultActiveKey="0" id="accordionExample">
                <Accordion.Item eventKey="0">
                  <Accordion.Header as="h2" id="headingOne">
                    Accordion Item #1
                  </Accordion.Header>
                  <Accordion.Body>
                    <strong>
                      This is the first item&apos;s accordion body.
                    </strong>
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It&apos;s also worth noting that just about any HTML can go
                    within the
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header as="h2" id="headingTwo">
                    Accordion Item #2
                  </Accordion.Header>
                  <Accordion.Body>
                    <strong>
                      This is the second item&apos;s accordion body.
                    </strong>
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It&apos;s also worth noting that just about any HTML can go
                    within the
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header as="h2" id="headingThree">
                    Accordion Item #3
                  </Accordion.Header>
                  <Accordion.Body>
                    <strong>
                      This is the third item&apos;s accordion body.
                    </strong>
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It&apos;s also worth noting that just about any HTML can go
                    within the
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Tab.Pane>
            <Tab.Pane eventKey="code" title="Code">
              <HighlightCode code={AccordionBasicCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default SampleAccordion;

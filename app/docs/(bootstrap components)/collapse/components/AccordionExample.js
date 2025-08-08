// import node module libraries
import Link from "next/link";
import { ChevronDown } from "react-feather";
import { Row, Col, Accordion, Tab, Card, useAccordionButton } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { AccordionCode } from "data/code/CollapseCode";

const AccordionExample = () => {
  // custom aware toggle
  function ContextAwareToggle({ title, eventKey, callback }) {
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey)
    );

    return (
      <Card.Header>
        <h4 className="mb-0">
          <Link
            href=""
            className="d-flex align-items-center text-inherit text-decoration-none"
            onClick={(e) => {
              e.preventDefault();
              decoratedOnClick();
            }}
          >
            <span className="me-auto">{title}</span>
            <ChevronDown className="fs-4" />
          </Link>
        </h4>
      </Card.Header>
    );
  }

  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="accordion-example" className="mb-4">
          <h2>Accordion example</h2>
          <p>
            Using the
            <Link href=""> card </Link>
            component, you can extend the default collapse behavior to create an
            accordion. To properly achieve the accordion style, be sure to use
            <code className="highlighter-rouge"> .accordion </code>
            as a wrapper.
          </p>
        </div>

        <div>
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              id="pills-accordions-design"
            >
              <Accordion id="accordionExample" defaultActiveKey={"collapseOne"}>
                {/* Accordion One */}
                <Card>
                  <ContextAwareToggle
                    title={"Collapsible Group Item #1"}
                    eventKey={"collapseOne"}
                  />
                  <Accordion.Collapse eventKey="collapseOne">
                    <div id="collapseOne">
                      <Card.Body>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven&apos;t heard of them accusamus labore
                        sustainable VHS.
                      </Card.Body>
                    </div>
                  </Accordion.Collapse>
                </Card>

                {/* Accordion Two */}
                <Card>
                  <ContextAwareToggle
                    title={"Collapsible Group Item #2"}
                    eventKey={"collapseTwo"}
                  />
                  <Accordion.Collapse eventKey="collapseTwo">
                    <div id="collapseTwo">
                      <Card.Body>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven&apos;t heard of them accusamus labore
                        sustainable VHS.
                      </Card.Body>
                    </div>
                  </Accordion.Collapse>
                </Card>
                {/* Accordion Three */}
                <Card>
                  <ContextAwareToggle
                    title={"Collapsible Group Item #3"}
                    eventKey={"collapseThree"}
                  />
                  <Accordion.Collapse eventKey="collapseThree">
                    <div id="collapseThree">
                      <Card.Body>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven&apos;t heard of them accusamus labore
                        sustainable VHS.
                      </Card.Body>
                    </div>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={AccordionCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default AccordionExample;

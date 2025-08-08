// import node module libraries
import { useState } from "react";
import { Row, Col, Collapse, Button, Tab, Card } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { MultiTargetCollapseCode } from "data/code/CollapseCode";

const MultiTargetCollapse = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const multiToggle = () => {
    setIsOpen(!isOpen);
    setIsOpen2(!isOpen2);
  };

  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="multiple-targets" className="mb-4">
          <h2>Multiple targets</h2>
          <p>
            A<code className="highlighter-rouge"> &lt;button&gt; </code>
            or
            <code className="highlighter-rouge"> &lt;a&gt; </code>
            can show and hide multiple elements by referencing them with a
            JQuery selector in its
            <code className="highlighter-rouge"> href </code>
            or
            <code className="highlighter-rouge"> data-bs-target </code>
            attribute. Multiple
            <code className="highlighter-rouge"> &lt;button&gt; </code>
            or
            <code className="highlighter-rouge"> &lt;a&gt; </code>
            can show and hide an element if they each reference it with their
            <code className="highlighter-rouge"> href </code>
            or
            <code className="highlighter-rouge"> data-bs-target </code>
            attribute
          </p>
        </div>

        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              id="pills-multiple-collapse-design"
            >
              <p>
                <Button
                  variant="primary"
                  className="mb-2 mb-md-0"
                  href="#multiCollapseExample1"
                  aria-expanded={isOpen}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(!isOpen);
                  }}
                >
                  Toggle first element
                </Button>{" "}
                <Button
                  variant="primary"
                  className="mb-2 mb-md-0"
                  aria-expanded={isOpen2}
                  onClick={() => {
                    setIsOpen2(!isOpen2);
                  }}
                >
                  Toggle second element
                </Button>{" "}
                <Button variant="primary" onClick={multiToggle}>
                  Toggle both elements
                </Button>
              </p>
              <Row>
                <Col>
                  <Collapse
                    className="multi-collapse"
                    in={isOpen}
                    dimension={"height"}
                  >
                    <div id="multiCollapseExample1">
                      <Card body>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. Nihil anim
                        keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident.
                      </Card>
                    </div>
                  </Collapse>
                </Col>

                <Col>
                  <Collapse
                    className="multi-collapse"
                    dimension={"height"}
                    in={isOpen2}
                  >
                    <div id="multiCollapseExample2">
                      <Card body>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. Nihil anim
                        keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident.
                      </Card>
                    </div>
                  </Collapse>
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={MultiTargetCollapseCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default MultiTargetCollapse;

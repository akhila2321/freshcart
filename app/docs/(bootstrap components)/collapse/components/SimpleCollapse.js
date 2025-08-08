// import node module libraries
import { useState } from "react";
import { Row, Col, Collapse, Tab, Button, Card } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { SimpleCollapseCode } from "data/code/CollapseCode";

const SimpleCollapse = () => {
  const [open, setOpen] = useState(false);
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="collapse" className="mb-4">
          <h2>Example</h2>
          <p>
            Click the buttons below to show and hide another element via class
            changes:
          </p>
          <ul>
            <li>
              <code className="highlighter-rouge"> .collapse </code>
              hides content
            </li>
            <li>
              <code className="highlighter-rouge"> .collapsing </code>
              is applied during transitions
            </li>
            <li>
              <code className="highlighter-rouge"> .collapse.show </code>
              shows content
            </li>
          </ul>
          <p>
            You can use a link with the
            <code className="highlighter-rouge"> href </code>
            attribute, or a button with the
            <code className="highlighter-rouge"> data-bs-target </code>
            attribute. In both cases, the
            <code className="highlighter-rouge">
              data-bs-toggle=`&quot;collapse`&quot;
            </code>
            is required.
          </p>
        </div>

        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              id="pills-collapse-default-design"
            >
              <p>
                <Button
                  variant="primary"
                  href=""
                  className="mb-2 mb-md-0"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(!open);
                  }}
                >
                  Link with href
                </Button>{" "}
                <Button variant="primary" onClick={() => setOpen(!open)}>
                  Button with data-bs-target
                </Button>
              </p>
              <Collapse id="collapseExample" in={open}>
                <Card body>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </Card>
              </Collapse>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={SimpleCollapseCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default SimpleCollapse;

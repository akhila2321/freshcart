// import node module libraries
import { Row, Col, Button, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data files
import { ActiveButtonCode } from "data/code/ButtonCode";

const ActiveButton = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="active-state" className="mb-4">
          <h2>Active state</h2>
          <p>
            Buttons will appear pressed (with a darker background, darker
            border, and inset shadow) when active.
            <strong>
              There’s no need to add a class to
              <code className="highlighter-rouge"> &lt;button&gt; </code>s as
              they use a pseudo-class
            </strong>
            . However, you can still force the same active appearance with
            <code className="highlighter-rouge"> .active </code>
            (and include the
            <code> aria-pressed=&ldquo;true&ldquo; </code>
            attribute) should you need to replicate the state programmatically.
          </p>
        </div>

        <div className="mb-10">
          <CustomTab defaultActiveKey="design">
            <Tab.Pane title="Design" eventKey="design">
              <Button variant="primary" active>
                Primary link
              </Button>{" "}
              <Button variant="secondary" active>
                Link
              </Button>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey="code">
              <HighlightCode code={ActiveButtonCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default ActiveButton;

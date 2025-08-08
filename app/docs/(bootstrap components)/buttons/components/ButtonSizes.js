// import node module libraries
import { Row, Col, Button, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { ButtonSizesCode } from "data/code/ButtonCode";

const ButtonSizes = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="sizes" className="mb-4">
          <h2>Sizes</h2>
          <p>
            Fancy larger or smaller buttons? Add
            <code className="highlighter-rouge">.btn-lg</code>
            or
            <code className="highlighter-rouge">.btn-sm</code>
            for additional sizes.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey="design">
            <Tab.Pane title="Design" eventKey="design">
              <Button size="lg" variant="primary" className="mb-2">
                Large Button
              </Button>{" "}
              <Button variant="primary" className="mb-2">
                Default Button
              </Button>{" "}
              <Button size="sm" variant="primary" className="mb-2">
                Small Button
              </Button>{" "}
              <Button size="xs" variant="primary">
                Xtra Small Button
              </Button>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey="code">
              <HighlightCode code={ButtonSizesCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default ButtonSizes;

// import node module libraries
import { Fragment } from "react";
import { Row, Col, Button, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data files
import {
  BlockButtonCode,
  BlockButtonCode2,
  BlockButtonCode3,
  BlockButtonCode4,
} from "data/code/ButtonCode";

const BlockButton = () => {
  return (
    <Fragment>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="buttonBlock" className="mb-4">
            <h2>Block buttons</h2>
            <p>
              Create responsive stacks of full-width, “block buttons” like those
              in Bootstrap 4 with a mix of our display and gap utilities. By
              using utilities instead of button specific classes, we have much
              greater control over spacing, alignment, and responsive behaviors.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey="design">
              <Tab.Pane title="Design" eventKey="design">
                <div className="d-grid gap-2">
                  <Button variant="primary">Button</Button>
                  <Button variant="primary">Button</Button>
                </div>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey="code">
                <HighlightCode code={BlockButtonCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
      {/* Block Button 2 */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <p className="mb-3">
            Here we create a responsive variation, starting with vertically
            stacked buttons until the
            <code> md </code>
            breakpoint, where
            <code> .d-md-block </code>
            replaces the
            <code> .d-grid </code>
            class, thus nullifying the
            <code> gap-2 </code>
            utility. Resize your browser to see them change.
          </p>

          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <div className="d-grid gap-2 d-md-block">
                  <Button variant="primary">Button</Button>{" "}
                  <Button variant="primary">Button</Button>
                </div>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={BlockButtonCode2} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Block Button 3 */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <p className="mb-3">
            You can adjust the width of your block buttons with grid column
            width classes. For example, for a half-width “block button”, use
            <code> .col-6 </code>. Center it horizontally with
            <code> .mx-auto </code>, too.
          </p>
        </Col>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey={"design"}>
              <div className="d-grid gap-2 col-6 mx-auto">
                <Button variant="primary">Button</Button>{" "}
                <Button variant="primary">Button</Button>
              </div>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={BlockButtonCode3} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Row>

      {/* Block Button 4 */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <p className="mb-3">
            Additional utilities can be used to adjust the alignment of buttons
            when horizontal. Here we’ve taken our previous responsive example
            and added some flex utilities and a margin utility on the button to
            right align the buttons when they’re no longer stacked.
          </p>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <Button variant="primary">Button</Button>{" "}
                  <Button variant="primary">Button</Button>
                </div>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={BlockButtonCode4} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default BlockButton;

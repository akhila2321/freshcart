// import node module libraries
import { Fragment } from "react";
import {
  Row,
  Col,
  Tab,
  OverlayTrigger,
  Popover,
  Button,
} from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import {
  DefaultPopoverCode,
  DirectionalPopoverCode,
  DisabledPopoverCode,
  DismissNextClickCode,
} from "data/code/PopoverCode";

const DefaultPopover = () => {
  return (
    <Fragment>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="default-popover" className="mb-4">
            <h2>Default Popovers</h2>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <OverlayTrigger
                  trigger="click"
                  placement="right"
                  overlay={
                    <Popover id="popover-basic">
                      <Popover.Header as="h3">Popover title</Popover.Header>
                      <Popover.Body>
                        And here&apos;s some amazing content. It&apos;s very
                        engaging. Right?
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Button variant="danger">Click to toggle popover</Button>
                </OverlayTrigger>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={DefaultPopoverCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Direction Popovers  */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="four-direction" className="mb-4">
            <h2>Four directions</h2>
            <p>
              Four options are available: top, right, bottom, and left aligned.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                {["top", "right", "bottom", "left"].map((placement) => (
                  <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                      <Popover id={`popover-positioned-${placement}`}>
                        <Popover.Body>
                          Vivamus sagittis lacus vel augue laoreet rutrum
                          faucibus.
                        </Popover.Body>
                      </Popover>
                    }
                  >
                    <Button variant="secondary" className="me-2 mb-1">
                      Popover on {placement}
                    </Button>
                  </OverlayTrigger>
                ))}
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={DirectionalPopoverCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Dismiss on next click  */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="dismiss-on-next-click" className="mb-4">
            <h2>Dismiss on next click</h2>
            <p>
              Use the
              <code className="highlighter-rouge"> focus </code>
              trigger to dismiss popovers on the user’s next click of a
              different element than the toggle element.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <OverlayTrigger
                  trigger="focus"
                  placement="right"
                  overlay={
                    <Popover id="popover-basic">
                      <Popover.Header as="h3">
                        Dismissible popover
                      </Popover.Header>
                      <Popover.Body>
                        And here&apos;s some amazing content. It&apos;s very
                        engaging. Right?
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Button variant="danger">Dismissible popover</Button>
                </OverlayTrigger>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={DismissNextClickCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
      {/* Disabled elements */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="disabled-element" className="mb-4">
            <h2>Disabled elements</h2>
            <p>
              Elements with the
              <code> disabled </code>
              attribute aren’t interactive, meaning users cannot hover or click
              them to trigger a popover (or tooltip). As a workaround, you’ll
              want to trigger the popover from a wrapper
              <code> &lt;div&gt; </code>
              or
              <code> &lt;span&gt; </code>, ideally made keyboard-focusable using
              <code> tabindex=&quot;0&quot; </code>.
            </p>
            <p>
              For disabled popover triggers, you may also prefer
              <code> data-bs-trigger=&quot;hover focus&quot; </code>
              so that the popover appears as immediate visual feedback to your
              users as they may not expect to
              <em>click</em>
              on a disabled element.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <OverlayTrigger
                  placement="right"
                  overlay={
                    <Popover>
                      <Popover.Body>Disabled popover</Popover.Body>
                    </Popover>
                  }
                >
                  <span className="d-inline-block">
                    <Button
                      variant="primary"
                      disabled
                      style={{ pointerEvents: "none" }}
                    >
                      Disabled button
                    </Button>
                  </span>
                </OverlayTrigger>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={DisabledPopoverCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default DefaultPopover;

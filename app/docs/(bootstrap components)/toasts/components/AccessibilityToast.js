// import node module libraries
import Link from "next/link";
import { useState } from "react";
import { Row, Col, Tab, Toast, Image } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { AccessibilityToastCode } from "data/code/ToastsCode";

const AccessibilityToast = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="accessibility" className="mb-4">
          <h2>Accessibility</h2>
          <p>
            Toasts are intended to be small interruptions to your visitors or
            users, so to help those with screen readers and similar assistive
            technologies, you should wrap your toasts in an
            <Link href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions">
              <code className="highlighter-rouge"> aria-live </code>
              region
            </Link>
            . Changes to live regions (such as injecting/updating a toast
            component) are automatically announced by screen readers without
            needing to move the user’s focus or otherwise interrupt the user.
            Additionally, include
            <code className="highlighter-rouge">
              {" "}
              aria-atomic=&quot;true&quot;{" "}
            </code>
            to ensure that the entire toast is always announced as a single
            (atomic) unit, rather than announcing what was changed (which could
            lead to problems if you only update part of the toast’s content, or
            if displaying the same toast content at a later point in time). If
            the information needed is important for the process, e.g. for a list
            of errors in a form.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-light p-4"
            >
              <Toast show={isOpen} onClose={() => setIsOpen(false)}>
                <Toast.Header>
                  <Image
                    src="/images/docs/blackSquare.svg"
                    alt=""
                    className="rounded me-2"
                  />
                  <strong className="me-auto">Bootstrap</strong>
                  <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
              </Toast>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={AccessibilityToastCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default AccessibilityToast;

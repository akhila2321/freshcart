"use client";

// import node module libraries
import { Row, Col, Tab, Alert } from "react-bootstrap";
import Link from "next/link";
import {
  ExclamationCircleFill,
  CheckCircleFill,
  ExclamationTriangleFill,
} from "react-bootstrap-icons";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data files
import { IconAlertCode } from "data/code/AlertCode";

const IconAlert = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="alert-icons" className="mb-4">
          <h2>Icons</h2>
          <p>
            Similarly, you can use
            <Link href="https://icons.getbootstrap.com/">Bootstrap Icons</Link>
            to create alerts with icons. Depending on your icons and content,
            you may want to add more utilities or custom styles.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey={"design"}>
              {/*Primary Alert  */}
              <Alert variant="primary" className="d-flex align-items-center">
                <ExclamationCircleFill size={24} className="me-2" />
                <div>An example alert with an icon</div>
              </Alert>
              {/* Success Alert */}
              <Alert variant="success" className="d-flex align-items-center">
                <CheckCircleFill size={24} className="me-2" />
                <div>An example success alert with an icon</div>
              </Alert>
              {/* Warning Alert */}
              <Alert variant="warning" className="d-flex align-items-center">
                <ExclamationTriangleFill size={24} className="me-2" />
                <div>An example warning alert with an icon</div>
              </Alert>
              {/* Danger Alert */}
              <Alert variant="danger" className="d-flex align-items-center">
                <ExclamationTriangleFill size={24} className="me-2" />
                <div>An example danger alert with an icon</div>
              </Alert>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={IconAlertCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default IconAlert;

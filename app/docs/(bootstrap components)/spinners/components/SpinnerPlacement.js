// import node module libraries
import { Fragment } from "react";
import Link from "next/link";
import { Row, Col, Tab, Spinner } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data files
import {
  FlexCenterSpinnerCode,
  FlexEndSpinnerCode,
  FloatSpinnerCode,
  SpinnerTextAlignCode,
} from "data/code/SpinnerCode";

const SpinnerPlacement = () => {
  return (
    <Fragment>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="placement" className="mb-4">
            <h2>Placement</h2>
            <p>
              Use
              <Link href="#"> flexbox utilities </Link>,
              <Link href="#"> float utilities </Link>, or
              <Link href="#"> text alignment </Link>
              utilities to place spinners exactly where you need them in any
              situation.
            </p>
            <div className="mt-4" id="flex">
              <h3 className="fw-semibold mb-1">Flex</h3>
              <p>
                Use
                <code> .d-flex and flex property </code>
                to make placement.
              </p>
            </div>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <div className="d-flex justify-content-center">
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={FlexCenterSpinnerCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
      {/* Placement End */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <div className="d-flex  align-items-center">
                  <strong>Loading...</strong>
                  <Spinner animation="border" role="status" className="ms-auto">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={FlexEndSpinnerCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
      {/* Float Spinner */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="floats" className="mb-4">
            <h3 className="fw-semibold mb-1">Floats</h3>
            <p>
              Use
              <Link href="#"> float utilities </Link>
              to make placement.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Spinner
                  animation="border"
                  role="status"
                  className="float-right"
                >
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={FloatSpinnerCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
      {/* Text Aligment */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="text-align" className="mb-4">
            <h3 className="fw-semibold mb-1">Text align</h3>
            <p>
              Use
              <Link href="#"> text alignment utilities </Link>
              to make placement.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <div className="text-center">
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={SpinnerTextAlignCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default SpinnerPlacement;

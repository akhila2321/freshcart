// import node module libraries
import { Fragment } from "react";
import Link from "next/link";
import { Row, Col, Tab, Spinner } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { GrowingSpinnerCode, GrowingSpinnerCode2 } from "data/code/SpinnerCode";

const GrowingSpinner = () => {
  return (
    <Fragment>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="growing-spinner" className="mb-4">
            <h2>Growing spinner</h2>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Spinner animation="grow" />
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={GrowingSpinnerCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-4">
            <p>
              Once again, this spinner is built with
              <code className="highlighter-rouge"> currentColor </code>, so you
              can easily change its appearance with
              <Link href="/docs/4.3/utilities/colors/">
                text color utilities
              </Link>
              . Here it is in blue, along with the supported variants.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Spinner animation="grow" variant="primary" className="me-2" />
                <Spinner
                  animation="grow"
                  variant="secondary"
                  className="me-2"
                />
                <Spinner animation="grow" variant="success" className="me-2" />
                <Spinner animation="grow" variant="danger" className="me-2" />
                <Spinner animation="grow" variant="warning" className="me-2" />
                <Spinner animation="grow" variant="info" className="me-2" />
                <Spinner animation="grow" variant="light" className="me-2" />
                <Spinner animation="grow" variant="dark" />
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={GrowingSpinnerCode2} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default GrowingSpinner;

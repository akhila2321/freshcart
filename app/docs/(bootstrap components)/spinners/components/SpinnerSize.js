// import node module libraries
import { Fragment } from "react";
import { Row, Col, Tab, Spinner } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data files
import { SpinnerCustomSize, SpinnerSmallSizeCode } from "data/code/SpinnerCode";

const SpinnerSize = () => {
  return (
    <Fragment>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="size" className="mb-4">
            <h2>Size</h2>
            <p>
              Add
              <code className="highlighter-rouge"> .spinner-border-sm </code>
              and
              <code className="highlighter-rouge"> .spinner-grow-sm </code>
              to make a smaller spinner that can quickly be used within other
              components.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Spinner animation="border" size="sm" className="me-2" />
                <Spinner animation="grow" size="sm" />
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={SpinnerSmallSizeCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Spinner Large */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Spinner
                  animation="border"
                  style={{ width: "3rem", height: "3rem" }}
                  className="me-2"
                />
                <Spinner
                  animation="grow"
                  style={{ width: "3rem", height: "3rem" }}
                />
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={SpinnerCustomSize} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default SpinnerSize;

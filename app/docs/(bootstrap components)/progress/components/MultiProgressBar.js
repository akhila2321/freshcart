// import node module libraries
import { Fragment } from "react";
import { Row, Col, Tab, ProgressBar } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import {
  AnimatedProgressBarCode,
  MultiColorProgressBarCode,
  StripedProgressBarCode,
} from "data/code/ProgressBarCode";

// import required data file

const MultiProgressBar = () => {
  return (
    <Fragment>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="multiple-bars" className="mb-4">
            <h2>Multiple bars</h2>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <ProgressBar>
                  <ProgressBar
                    variant="primary"
                    now={15}
                    key={1}
                    className="mb-2"
                    style={{ height: "100%" }}
                  />
                  <ProgressBar
                    variant="success"
                    now={30}
                    key={2}
                    className="mb-2"
                    style={{ height: "100%" }}
                  />
                  <ProgressBar
                    variant="info"
                    now={20}
                    key={3}
                    className="mb-2"
                    style={{ height: "100%" }}
                  />
                </ProgressBar>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={MultiColorProgressBarCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
      {/* Striped Progress bar */}

      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="striped" className="mb-4">
            <h2>Striped</h2>
            <p>
              Add
              <code className="highlighter-rouge"> .progress-bar-striped </code>
              to any
              <code className="highlighter-rouge"> .progress-bar </code>
              to apply a stripe via CSS gradient over the progress bar’s
              background color.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <ProgressBar
                  striped
                  variant="primary"
                  now={10}
                  className="mb-2"
                />
                <ProgressBar
                  striped
                  variant="success"
                  now={25}
                  className="mb-2"
                />
                <ProgressBar striped variant="info" now={50} className="mb-2" />
                <ProgressBar
                  striped
                  variant="warning"
                  now={75}
                  className="mb-2"
                />
                <ProgressBar
                  striped
                  variant="danger"
                  now={100}
                  className="mb-2"
                />
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={StripedProgressBarCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Animated stripes */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="animated-stripes" className="mb-4">
            <h2>Animated stripes</h2>
            <p>
              The striped gradient can also be animated. Add
              <code className="highlighter-rouge">
                {" "}
                .progress-bar-animated{" "}
              </code>
              to
              <code className="highlighter-rouge"> .progress-bar </code>
              to animate the stripes right to left via CSS3 animations.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <ProgressBar animated now={75} />
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={AnimatedProgressBarCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default MultiProgressBar;

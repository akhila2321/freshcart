// import node module libraries
import { Fragment } from "react";
import { Row, Col, Tab, ProgressBar } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import {
  DefaultProgressBarCode,
  ProgressBarColorCode,
  ProgressBarHeightCode,
  ProgressBarWithLabelCode,
} from "data/code/ProgressBarCode";

const DefaultProgressBar = () => {
  return (
    <Fragment>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="default-progress" className="mb-4">
            <h2>How it works</h2>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <ProgressBar now={0} className="mb-2" />
                <ProgressBar now={25} className="mb-2" />
                <ProgressBar now={50} className="mb-2" />
                <ProgressBar now={75} className="mb-2" />
                <ProgressBar now={100} className="mb-2" />
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={DefaultProgressBarCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Progress Bar Label */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="labels" className="mb-4">
            <h2>Labels</h2>
            <p>
              Add labels to your progress bars by placing text within the
              <code className="highlighter-rouge"> .progress-bar</code>.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <ProgressBar now={25} label={`${25}%`} />
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={ProgressBarWithLabelCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Progress Bar Height */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="height" className="mb-4">
            <h2>Height</h2>
            <p>
              We only set a<code className="highlighter-rouge"> height </code>
              value on the
              <code className="highlighter-rouge"> .progress </code>, so if you
              change that value the inner
              <code className="highlighter-rouge"> .progress-bar </code>
              will automatically resize accordingly.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <ProgressBar
                  now={25}
                  className="mb-2"
                  style={{ height: "1px" }}
                />
                <ProgressBar
                  now={25}
                  className="mb-2"
                  style={{ height: "20px" }}
                />
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={ProgressBarHeightCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Progress bar background */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="backgrounds" className="mb-4">
            <h2>Backgrounds</h2>
            <p>
              Use background utility classes to change the appearance of
              individual progress bars.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <ProgressBar variant="success" now={25} className="mb-2" />
                <ProgressBar variant="info" now={50} className="mb-2" />
                <ProgressBar variant="warning" now={75} className="mb-2" />
                <ProgressBar variant="danger" now={100} className="mb-2" />
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={ProgressBarColorCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default DefaultProgressBar;

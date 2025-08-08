// import node module libraries
import Link from "next/link";
import { Row, Col, Tab, Spinner } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { SpinnerAlignmentCode } from "data/code/SpinnerCode";

const SpinnerAligment = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="alignment" className="mb-4">
          <h2>Alignment</h2>
          <p>
            Spinners in Bootstrap are built with
            <code className="highlighter-rouge"> rem </code>
            s,
            <code className="highlighter-rouge"> currentColor </code>, and
            <code className="highlighter-rouge"> display: inline-flex </code>.
            This means they can easily be resized, recolored, and quickly
            aligned.
          </p>
          <div className="mt-5" id="margin">
            <h3 className="fw-semibold mb-1">Margin</h3>
            <p>
              Use
              <Link href="#"> margin utilities </Link>
              like
              <code className="highlighter-rouge"> .m-5 </code>
              for easy spacing.
            </p>
          </div>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey={"design"}>
              <Spinner animation="border" role="status" className="m-5">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={SpinnerAlignmentCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default SpinnerAligment;

// import node module libraries
import Link from "next/link";
import { Row, Col, Tab, Spinner } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { SpinnerColorCode } from "data/code/SpinnerCode";

const SpinnerColor = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="colors" className="mb-4">
          <h2>Colors</h2>
          <p>
            The border spinner uses
            <code className="highlighter-rouge"> currentColor </code>
            for its
            <code className="highlighter-rouge"> border-color </code>, meaning
            you can customize the color with
            <Link href="#">text color utilities</Link>. You can use any of our
            text color utilities on the standard spinner.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey={"design"}>
              <Spinner animation="border" variant="primary" className="me-2" />
              <Spinner
                animation="border"
                variant="secondary"
                className="me-2"
              />
              <Spinner animation="border" variant="success" className="me-2" />
              <Spinner animation="border" variant="danger" className="me-2" />
              <Spinner animation="border" variant="warning" className="me-2" />
              <Spinner animation="border" variant="info" className="me-2" />
              <Spinner animation="border" variant="light" className="me-2" />
              <Spinner animation="border" variant="dark" />
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={SpinnerColorCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default SpinnerColor;

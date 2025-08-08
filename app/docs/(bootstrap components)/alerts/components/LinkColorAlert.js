"use client";

// import node module libraries
import { Row, Col, Alert, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data files
import { LinkColorCode } from "data/code/AlertCode";

const LinkColorAlert = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="link-alert" className="mb-4">
          <h2>Link color</h2>
          <p>
            Use the
            <code className="highlighter-rouge"> .alert-link </code>
            utility class to quickly provide matching colored links within any
            alert.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey="design">
            <Tab.Pane title="Design" eventKey={"design"}>
              <Alert variant="primary">
                A simple primary alert with
                <Alert.Link href=""> an example link</Alert.Link>. Give it a
                click if you like.
              </Alert>

              <Alert variant="secondary">
                A simple secondary alert with
                <Alert.Link href=""> an example link</Alert.Link>. Give it a
                click if you like.
              </Alert>
              <Alert variant="success">
                A simple success alert with
                <Alert.Link href=""> an example link</Alert.Link>. Give it a
                click if you like.
              </Alert>

              <Alert variant="danger">
                A simple danger alert with
                <Alert.Link href=""> an example link</Alert.Link>. Give it a
                click if you like.
              </Alert>
              <Alert variant="warning">
                A simple warning alert with
                <Alert.Link href=""> an example link</Alert.Link>. Give it a
                click if you like.
              </Alert>
              <Alert variant="info">
                A simple info alert with
                <Alert.Link href=""> an example link</Alert.Link>. Give it a
                click if you like.
              </Alert>
              <Alert variant="light">
                A simple light alert with
                <Alert.Link href=""> an example link</Alert.Link>. Give it a
                click if you like.
              </Alert>
              <Alert variant="dark">
                A simple dark alert with
                <Alert.Link href=""> an example link</Alert.Link>. Give it a
                click if you like.
              </Alert>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={LinkColorCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default LinkColorAlert;

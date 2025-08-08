// import node module libraries
import { useState } from "react";
import { Row, Col, Tab, Modal, Button } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { ModalSizeCode } from "data/code/ModalCode";

const ModalSize = () => {
  const [xlShow, setXlShow] = useState(false);
  const [lGShow, setLgShow] = useState(false);
  const [smShow, setSmShow] = useState(false);

  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="optional-sizes" className="mb-4">
          <h2>Optional sizes</h2>
          <p>
            Modals have three optional sizes, available via modifier classes to
            be placed on a
            <code className="highlighter-rouge">.modal-dialog</code>. These
            sizes kick in at certain breakpoints to avoid horizontal scrollbars
            on narrower viewports.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey={"design"}>
              <Button onClick={() => setXlShow(true)}>Extra large modal</Button>{" "}
              <Button onClick={() => setLgShow(true)}>Large modal</Button>{" "}
              <Button onClick={() => setSmShow(true)}>Small modal</Button>
              <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-sm">
                    Small modal
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
              </Modal>
              <Modal size="lg" show={lGShow} onHide={() => setLgShow(false)}>
                <Modal.Header closeButton>
                  <Modal.Title id="myLargeModalLabel" as="h4">
                    Large modal
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
              </Modal>
              <Modal show={xlShow} onHide={() => setXlShow(false)} size="xl">
                <Modal.Header closeButton>
                  <Modal.Title id="myExtraLargeModalLabel" as="h4">
                    Extra large modal
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
              </Modal>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={ModalSizeCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default ModalSize;

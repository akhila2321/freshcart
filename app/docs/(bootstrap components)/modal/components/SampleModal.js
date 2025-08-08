// import node module libraries
import { Row, Col, Tab, Modal, Button } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { SampleModalCode } from "data/code/ModalCode";

const SampleModal = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="examples" className="mb-4">
          <div id="modal-components">
            <h2>Modal components</h2>
            <p>
              Below is a<em>static</em>
              modal example (meaning its
              <code className="highlighter-rouge"> position </code>
              and
              <code className="highlighter-rouge"> display </code>
              have been overridden). Included are the modal header, modal body
              (required for
              <code className="highlighter-rouge"> padding </code>
              ), and modal footer (optional). We ask that you include modal
              headers with dismiss actions whenever possible, or provide another
              explicit dismiss action.
            </p>
          </div>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey={"design"}>
              <div
                className="modal show"
                style={{ display: "block", position: "initial" }}
              >
                <Modal.Dialog>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <p>Modal body text goes here.</p>
                  </Modal.Body>

                  <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                  </Modal.Footer>
                </Modal.Dialog>
              </div>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={SampleModalCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default SampleModal;

// import node module libraries
import { Fragment, useState } from "react";
import { Row, Col, Tab, Button, Modal } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { ScrollableModalCode, ScrollableModalCode2 } from "data/code/ModalCode";

const ScrollingModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  return (
    <Fragment>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="scrolling-long-content" className="mb-4">
            <h2>Scrolling long content</h2>
            <p>
              When modals become too long for the user’s viewport or device,
              they scroll independent of the page itself. Try the demo below to
              see what we mean.
            </p>
          </div>
          <div className="mb-4">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Button variant="primary" onClick={() => setIsOpen(true)}>
                  Launch demo modal
                </Button>
                <Modal
                  id="exampleModalLong"
                  show={isOpen}
                  onHide={() => setIsOpen(false)}
                >
                  <Modal.Dialog bsPrefix="modal-content">
                    <Modal.Header closeButton>
                      <Modal.Title id="exampleModalLongTitle">
                        Modal title
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras
                        justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at
                        eros.
                      </p>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur et. Vivamus sagittis lacus vel augue laoreet
                        rutrum faucibus dolor auctor.
                      </p>
                      <p>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent
                        commodo cursus magna, vel scelerisque nisl consectetur
                        et. Donec sed odio dui. Donec ullamcorper nulla non
                        metus auctor fringilla.
                      </p>
                      <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras
                        justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at
                        eros.
                      </p>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur et. Vivamus sagittis lacus vel augue laoreet
                        rutrum faucibus dolor auctor.
                      </p>
                      <p>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent
                        commodo cursus magna, vel scelerisque nisl consectetur
                        et. Donec sed odio dui. Donec ullamcorper nulla non
                        metus auctor fringilla.
                      </p>
                      <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras
                        justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at
                        eros.
                      </p>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur et. Vivamus sagittis lacus vel augue laoreet
                        rutrum faucibus dolor auctor.
                      </p>
                      <p>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent
                        commodo cursus magna, vel scelerisque nisl consectetur
                        et. Donec sed odio dui. Donec ullamcorper nulla non
                        metus auctor fringilla.
                      </p>
                      <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras
                        justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at
                        eros.
                      </p>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur et. Vivamus sagittis lacus vel augue laoreet
                        rutrum faucibus dolor auctor.
                      </p>
                      <p>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent
                        commodo cursus magna, vel scelerisque nisl consectetur
                        et. Donec sed odio dui. Donec ullamcorper nulla non
                        metus auctor fringilla.
                      </p>
                      <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras
                        justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at
                        eros.
                      </p>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur et. Vivamus sagittis lacus vel augue laoreet
                        rutrum faucibus dolor auctor.
                      </p>
                      <p>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent
                        commodo cursus magna, vel scelerisque nisl consectetur
                        et. Donec sed odio dui. Donec ullamcorper nulla non
                        metus auctor fringilla.
                      </p>
                      <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras
                        justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at
                        eros.
                      </p>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur et. Vivamus sagittis lacus vel augue laoreet
                        rutrum faucibus dolor auctor.
                      </p>
                      <p>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent
                        commodo cursus magna, vel scelerisque nisl consectetur
                        et. Donec sed odio dui. Donec ullamcorper nulla non
                        metus auctor fringilla.
                      </p>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="secondary"
                        onClick={() => setIsOpen(false)}
                      >
                        Close
                      </Button>
                      <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                  </Modal.Dialog>
                </Modal>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={ScrollableModalCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Content Scrollable  */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-4 mt-5">
            <p>
              You can also create a scrollable modal that allows scroll the
              modal body by adding
              <code className="highlighter-rouge">
                {" "}
                .modal-dialog-scrollable{" "}
              </code>
              to
              <code className="highlighter-rouge">.modal-dialog </code>.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Button variant="primary" onClick={() => setIsOpen2(true)}>
                  Launch demo modal
                </Button>
                <Modal
                  scrollable
                  show={isOpen2}
                  onHide={() => setIsOpen2(false)}
                >
                  <Modal.Dialog scrollable bsPrefix="modal-content">
                    <Modal.Header closeButton>
                      <Modal.Title id="exampleModalScrollableTitle">
                        Modal title
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ height: "500px" }}>
                      <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras
                        justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at
                        eros.
                      </p>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur et. Vivamus sagittis lacus vel augue laoreet
                        rutrum faucibus dolor auctor.
                      </p>
                      <p>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent
                        commodo cursus magna, vel scelerisque nisl consectetur
                        et. Donec sed odio dui. Donec ullamcorper nulla non
                        metus auctor fringilla.
                      </p>
                      <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras
                        justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at
                        eros.
                      </p>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur et. Vivamus sagittis lacus vel augue laoreet
                        rutrum faucibus dolor auctor.
                      </p>
                      <p>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent
                        commodo cursus magna, vel scelerisque nisl consectetur
                        et. Donec sed odio dui. Donec ullamcorper nulla non
                        metus auctor fringilla.
                      </p>
                      <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras
                        justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at
                        eros.
                      </p>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur et. Vivamus sagittis lacus vel augue laoreet
                        rutrum faucibus dolor auctor.
                      </p>
                      <p>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent
                        commodo cursus magna, vel scelerisque nisl consectetur
                        et. Donec sed odio dui. Donec ullamcorper nulla non
                        metus auctor fringilla.
                      </p>
                      <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras
                        justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at
                        eros.
                      </p>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur et. Vivamus sagittis lacus vel augue laoreet
                        rutrum faucibus dolor auctor.
                      </p>
                      <p>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent
                        commodo cursus magna, vel scelerisque nisl consectetur
                        et. Donec sed odio dui. Donec ullamcorper nulla non
                        metus auctor fringilla.
                      </p>
                      <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras
                        justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at
                        eros.
                      </p>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur et. Vivamus sagittis lacus vel augue laoreet
                        rutrum faucibus dolor auctor.
                      </p>
                      <p>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent
                        commodo cursus magna, vel scelerisque nisl consectetur
                        et. Donec sed odio dui. Donec ullamcorper nulla non
                        metus auctor fringilla.
                      </p>
                      <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras
                        justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at
                        eros.
                      </p>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur et. Vivamus sagittis lacus vel augue laoreet
                        rutrum faucibus dolor auctor.
                      </p>
                      <p>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent
                        commodo cursus magna, vel scelerisque nisl consectetur
                        et. Donec sed odio dui. Donec ullamcorper nulla non
                        metus auctor fringilla.
                      </p>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="secondary"
                        onClick={() => setIsOpen2(false)}
                      >
                        Close
                      </Button>
                      <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                  </Modal.Dialog>
                </Modal>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={ScrollableModalCode2} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ScrollingModal;

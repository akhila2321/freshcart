// import node module libraries
import { useState } from "react";
import Link from "next/link";
import {
  Row,
  Col,
  Tab,
  Modal,
  Button,
  OverlayTrigger,
  Tooltip,
  Popover,
} from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { TooltipPopoverModalCode } from "data/code/ModalCode";

const TooltipPopOverModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="tooltips-and-popovers" className="mb-4">
          <h2>Tooltips and popovers</h2>
          <p>
            <Link href="#">Tooltips</Link>
            and
            <Link href="#">popovers</Link>
            can be placed within modals as needed. When modals are closed, any
            tooltips and popovers within are also automatically dismissed.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey={"design"}>
              <Button variant="primary" onClick={() => setIsOpen(true)}>
                Launch demo modal
              </Button>
              <Modal
                show={isOpen}
                onHide={() => setIsOpen(false)}
                id="exampleModalPopovers"
              >
                <Modal.Header closeButton>
                  <Modal.Title as={"h5"}>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h5>Popover in a modal</h5>
                  <p>
                    This
                    {
                      <OverlayTrigger
                        placement="right"
                        overlay={
                          <Popover placement="right">
                            <Popover.Header as="h3">
                              Popover title
                            </Popover.Header>
                          </Popover>
                        }
                        trigger="click"
                      >
                        <Button variant="secondary">button</Button>
                      </OverlayTrigger>
                    }
                    triggers a popover on click.
                  </p>
                  <hr />
                  <h5>Tooltips in a modal</h5>
                  <p>
                    <OverlayTrigger
                      placement="top"
                      trigger={"hover"}
                      overlay={<Tooltip>Tooltips</Tooltip>}
                    >
                      <Link href="">This link </Link>
                    </OverlayTrigger>
                    and
                    <OverlayTrigger
                      placement="top"
                      trigger={"hover"}
                      overlay={<Tooltip>Tooltips</Tooltip>}
                    >
                      <Link href=""> That link </Link>
                    </OverlayTrigger>
                    have tooltips on hover.
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={() => setIsOpen(false)}>
                    Close
                  </Button>
                  <Button variant="primary">Save changes</Button>
                </Modal.Footer>
              </Modal>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={TooltipPopoverModalCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default TooltipPopOverModal;

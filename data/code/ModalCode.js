export const SampleModalCode = `
const Modals = () => {   
    
    return (
        <div className="modal show" style={{ display: "block", position: "initial" }} >
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
    );
}
`.trim();

export const LiveDemoModalCode = `
// import node module libraries
import {useState} from "react";

const Modals = () => {   
  const [isOpen, setIsOpen] = useState(false);    
    return (
      <Fragment>
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          Launch demo modal
        </Button>
        <Modal
          id="exampleModal-2"
          show={isOpen}
          onHide={() => setIsOpen(false)}
        >
          <Modal.Dialog bsPrefix="modal-content">
            <Modal.Header closeButton>
              <Modal.Title id="exampleModalLabel">Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>...</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Close
              </Button>
              <Button variant="primary">Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </Fragment>
    );
}
`.trim();

export const ScrollableModalCode = `
// import node module libraries
import {useState} from "react";

const Modals = () => {
    const [isOpen, setIsOpen] = useState(false);       
    
    return (
      <Fragment>
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
              <Modal.Title id="exampleModalLongTitle">Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Close
              </Button>
              <Button variant="primary">Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </Fragment>
    );
}
`.trim();

export const ScrollableModalCode2 = `
// import node module libraries
import {useState} from "react";

const Modals = () => {
    const [isOpen2, setIsOpen2] = useState(false);   
    
    return (
      <Fragment>
        <Button variant="primary" onClick={() => setIsOpen2(true)}>
        Launch demo modal
        </Button>
    <Modal scrollable show={isOpen2} onHide={() => setIsOpen2(false)}>
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
    </Fragment>
    );
}
`.trim();

export const VerticalCenterModalCode = `
// import node module libraries
import {useState} from "react";

const Modals = () => {
    const [isOpen, setIsOpen] = useState(false);     
    
    return (
        <Fragment>
        <Button variant="primary" onClick={() => setIsOpen(true)}>Launch demo modal</Button>
        
        <Modal show={isOpen}  onHide={() => setIsOpen(false)} id="exampleModalCenter" centered>
        <Modal.Header closeButton>
            <Modal.Title id="exampleModalCenterTitle">
            Modal title
            </Modal.Title>
        </Modal.Header>

        <Modal.Body>...</Modal.Body>
        
        <Modal.Footer>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>Close</Button>
            <Button variant="primary">Save changes</Button>
        </Modal.Footer>
        
        </Modal>
        </Fragment>
    );
}
`.trim();

export const TooltipPopoverModalCode = `
// import node module libraries
import {useState} from "react";

const Modals = () => {
    const [isOpen, setIsOpen] = useState(false);   
    
    return (
      <Fragment>
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          Launch demo modal
        </Button>
        <Modal show={isOpen} onHide={() => setIsOpen(false)} id="exampleModalPopovers">
          <Modal.Header closeButton>
            <Modal.Title as={"h5"}>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Popover in a modal</h5>
            <p>This
              {
                <OverlayTrigger
                  placement="right"
                  overlay={
                    <Popover placement="right">
                      <Popover.Header as="h3">Popover title</Popover.Header>
                    </Popover>}
                  trigger="click">
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
      </Fragment>
    );
}
`.trim();

export const VaryingModalCode = `
// import node module libraries
import { useState } from "react";

const Modals = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <Button
        variant="primary"
        className="mb-1 me-1"
        onClick={() => setIsOpen(true)}
      >
        Open modal for @mdo
      </Button>
      <Button
        variant="primary"
        className="mb-1 me-1"
        onClick={() => setIsOpen(true)}
      >
        Open modal for @fat
      </Button>
      <Button
        variant="primary"
        className="mb-1"
        onClick={() => setIsOpen(true)}
      >
        Open modal for @getbootstrap
      </Button>

      {/* Modal One */}
      <Modal id="exampleModal" show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title as="h5" id="exampleModalLabelOne">
            New message
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="needs-validation" validated={isValidate}>
            <div className="mb-3">
              <Form.Label htmlFor="recipient-name">Recipient:</Form.Label>
              <Form.Control type="text" id="recipient-name" required />
              <div className="invalid-feedback">
                Please provide a valid city.
              </div>
            </div>
            <div className="mb-3">
              <Form.Label htmlFor="message-text">Message:</Form.Label>
              <Form.Control
                type="text"
                id="message-text"
                as="textarea"
                rows={"4"}
                required
              />
              <div className="invalid-feedback">
                Please enter a message in the textarea.
              </div>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setIsValidate(true)}>
            Send message
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

`.trim();

export const ToggleModalCode = `
// import node module libraries
import {useState} from "react";

const Modals = () => {
  const [isOpen2, setIsOpen2] = useState(false)

  const switchModalOne = () => {
    setIsOpen2(false);
    setIsOpen(true);
  };

  const switchModalTwo = () => {
    setIsOpen(false);
    setIsOpen2(true);
  };

  return (
    <Modal
      show={isOpen}
      onHide={() => setIsOpen(false)}
      id="exampleModalToggle"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title as="h5">Modal 1</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Show a second modal and hide this one with the button below.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={switchModalTwo}>
          Open second modal
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

`.trim();

export const ModalSizeCode = `
// import node module libraries
import { useState } from "react";
const Modals = () => {
  const [xlShow, setXlShow] = useState(false);
  const [lGShow, setLgShow] = useState(false);
  const [smShow, setSmShow] = useState(false);

  return (
    <Fragment>
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
    </Fragment>
  );
};
`.trim();

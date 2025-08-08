export const OffcanvasSampleCode = `// import node module libraries
import { Offcanvas } from "react-bootstrap";

const Offcanvas = () => {
  return (
    <div
      className="offcanvas border show"
      id="offcanvas"
      aria-labelledby="offcanvasLabel"
      style={{
        height: "200px",
        display: "block",
        position: "static",
      }}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title as="h2" id="offcanvasLabel">
          Offcanvas
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        Content for the offcanvas goes here. You can place just about any
        Bootstrap component or custom elements here.
      </Offcanvas.Body>
    </div>
  );
};

`.trim();
export const OffcanvasTopPlacementCode = `
// import node module libraries
import { Offcanvas } from "react-bootstrap";

const Offcanvas = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Toggle top offcanvas
      </Button>
      <Offcanvas
        show={isOpen}
        onHide={() => setIsOpen(false)}
        placement="top"
        id="offcanvasTop"
      >
        <Offcanvas.Header closeButton>
          <h5 id="offcanvasTopLabel">Offcanvas top</h5>
        </Offcanvas.Header>
        <Offcanvas.Body>...</Offcanvas.Body>
      </Offcanvas>
    </Fragment>
  );
};
`.trim();

export const OffcanvasRightPlacementCode = `
// import node module libraries
import { Offcanvas } from "react-bootstrap";

const Offcanvas = () => {
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <Fragment>
      <Button variant="primary" onClick={() => setIsOpen2(true)}>
        Toggle right offcanvas
      </Button>

      <Offcanvas
        placement="end"
        show={isOpen2}
        onHide={() => setIsOpen2(false)}
        id="offcanvasRight"
      >
        <Offcanvas.Header closeButton>
          <h5 id="offcanvasRightLabel">Offcanvas right</h5>
        </Offcanvas.Header>
        <Offcanvas.Body>...</Offcanvas.Body>
      </Offcanvas>
    </Fragment>
  );
};

`.trim();

export const OffcanvasBottomPlacementCode = `
// import node module libraries
import { Offcanvas } from "react-bootstrap";

const Offcanvas = () => {
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <Fragment>
      <Button variant="primary" onClick={() => setIsOpen3(true)}>
        Toggle bottom offcanvas
      </Button>

      <Offcanvas
        show={isOpen3}
        onHide={() => setIsOpen3(false)}
        placement="bottom"
        id="offcanvasBottom"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas bottom</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="small">...</Offcanvas.Body>
      </Offcanvas>
    </Fragment>
  );
};

`.trim();

export const BackdropOffcanvasCode = `
// import node module libraries
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";

const Offcanvas = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  return (
    <Fragment>
      <Button
        variant="primary"
        className="mb-1 me-1"
        onClick={() => setIsOpen(true)}
      >
        Enable body scrolling
      </Button>
      <Button
        variant="primary"
        onClick={() => setIsOpen2(true)}
        className="mb-1 me-1"
      >
        Enable backdrop (default)
      </Button>
      <Button
        variant="primary"
        onClick={() => setIsOpen3(true)}
        className="mb-1"
      >
        Enable both scrolling & backdrop
      </Button>

      {/* Enable Body Scrolling */}
      <Offcanvas
        show={isOpen}
        onHide={() => setIsOpen(false)}
        backdrop={false}
        scroll
        placement="start"
        id="offcanvasScrolling"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasScrollingLabel">
            Colored with scrolling
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>
            Try scrolling the rest of the page to see this option in action.
          </p>
        </Offcanvas.Body>
      </Offcanvas>
      {/* Enable Backdrop */}
      <Offcanvas
        show={isOpen2}
        onHide={() => setIsOpen2(false)}
        backdrop
        placement="start"
        id="offcanvasScrolling"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasWithBothOptionsLabel">
            Backdroped with scrolling
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>...</Offcanvas.Body>
      </Offcanvas>
      {/* Offcanvas with backdrop */}
      <Offcanvas
        show={isOpen3}
        onHide={() => setIsOpen3(false)}
        backdrop
        scroll
        placement="start"
        id="offcanvasScrolling"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasWithBackdropLabel">
            Offcanvas with backdrop
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>
            Try scrolling the rest of the page to see this option in action.
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </Fragment>
  );
};


`.trim();

export const OffcanvasLiveDemoCode = `
import { Offcanvas, Button } from "react-bootstrap";

const Offcanvas = () => {
  return (
    <Fragment>
      <Button
        href=""
        variant="primary"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(true);
        }}
      >
        Link with href
      </Button>{" "}
      <Button
        variant="primary"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Button with data-bs-target
      </Button>
      <Offcanvas
        placement="start"
        id="offcanvasExample"
        show={isOpen}
        onHide={() => setIsOpen(false)}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasExampleLabel">
            Offcanvas
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </div>

          <Dropdown className="mt-3">
            <Dropdown.Toggle variant="secondary">
              Dropdown button
            </Dropdown.Toggle>
            <Dropdown.Menu as="ul">
              <Dropdown.Item as="li">Action</Dropdown.Item>
              <Dropdown.Item as="li">Another action</Dropdown.Item>
              <Dropdown.Item as="li">Something else here</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Offcanvas.Body>
      </Offcanvas>
    </Fragment>
  );
};

`.trim();

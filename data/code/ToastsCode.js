export const BasicToastCode = `
// import node module libraries
import { useState } from "react";
import Toast from "react-bootstrap/Toast";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Toast show={isOpen} onClose={() => setIsOpen(false)}>
      <Toast.Header>
        <Image
          src="/images/docs/blackSquare.svg"
          className="rounded me-2"
          alt=""
        />
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
    </Toast>
  );
};

export default Page;

`.trim();

export const StackingToastsCode = `
// import node module libraries
import { useState } from "react";
import Toast from "react-bootstrap/Toast";

const Page = () => {
  const [toastOne, setToastOne] = useState(false);
  const [toastTwo, setToastTwo] = useState(false);

  return (
    <Fragment>
      <Toast show={toastOne} onClose={() => setToastOne(false)}>
        <Toast.Header>
          <Image
            src="/images/docs/blackSquare.svg"
            className="rounded me-2"
            alt=""
          />
          <strong className="me-auto">Bootstrap</strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>See? Just like this.</Toast.Body>
      </Toast>

      <Toast
        show={toastTwo}
        onClose={() => setToastTwo(false)}
        className="mt-2"
      >
        <Toast.Header>
          <Image
            src="/images/docs/blackSquare.svg"
            className="rounded me-2"
            alt=""
          />
          <strong className="me-auto">Bootstrap</strong>
          <small>2 seconds ago</small>
        </Toast.Header>
        <Toast.Body>See? Just like this.</Toast.Body>
      </Toast>
    </Fragment>
  );
};

export default Page;

`.trim();

export const CustomContentToastCode = `
// import node module libraries
import { useState } from "react";
import Toast from "react-bootstrap/Toast";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Toast show={isOpen}>
      <div className="d-flex">
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        <Button
          variant="close"
          onClick={() => setIsOpen(false)}
          className="me-2 m-auto"
        ></Button>
      </div>
    </Toast>
  );
};

export default Page;

`.trim();

export const CustomContentToastCode2 = `
// import node module libraries
import { useState } from "react";
import Toast from "react-bootstrap/Toast";
const Page = () => {
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <Toast show={isOpen2}>
      <Toast.Body>
        Hello, world! This is a toast message.
        <div className="mt-2 pt-2 border-top">
          <Button variant="primary" size="sm">
            Take action
          </Button>{" "}
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setIsOpen2(false)}
          >
            Close
          </Button>
        </div>
      </Toast.Body>
    </Toast>
  );
};

export default Page;

`.trim();

export const ColorToastCode = `
// import node module libraries
import { useState } from "react";
import Toast from "react-bootstrap/Toast";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Toast
      bg="primary"
      className="align-items-center text-white border-0"
      show={isOpen}
    >
      <div className="d-flex">
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        <Button
          variant="close"
          className="btn-close-white me-2 m-auto"
          onClick={() => setIsOpen(false)}
        ></Button>
      </div>
    </Toast>
  );
};

export default Page;

`.trim();

export const TopRightPlacementCode = `
// import node module libraries
import { useState } from "react";
import Toast from "react-bootstrap/Toast";

const Page = () => {
  return (
    <div style={{ minHeight: "200px" }} className="position-relative">
      <Toast className="position-absolute top-0 end-0 ">
        <Toast.Header>
          <Image
            src="/images/avatar/avatar-1.jpg"
            alt=""
            className="rounded me-2 avatar-xs"
          />
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
      </Toast>
    </div>
  );
};

export default Page;

`.trim();

export const TopRightPlacementCode2 = `
// import node module libraries
import { useState } from "react";
import Toast from "react-bootstrap/Toast";

const Page = () => {
  return (
    <div className="position-relative" style={{ minHeight: "200px" }}>
      <div className="position-absolute top-0 end-0">
        <Toast show={isOpen2} onClose={() => setIsOpen2(false)}>
          <Toast.Header>
            {" "}
            <Image
              src="/images/docs/blackSquare.svg"
              alt=""
              className="rounded me-2"
            />
            <strong className="me-auto">Bootstrap</strong>
            <small className="text-muted">just now</small>
          </Toast.Header>
          <Toast.Body>See? Just like this.</Toast.Body>
        </Toast>
      </div>
    </div>
  );
};

export default Page;

`.trim();

export const ToastCenterCode = `
// import node module libraries
import { useState } from "react";
import Toast from "react-bootstrap/Toast";

const Page = () => {
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "200px" }}
    >
      <Toast show={isOpen3} onClose={() => setIsOpen3(false)}>
        <Toast.Header>
          <Image src="/images/docs/blackSquare.svg" className="rounded me-2" />
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
      </Toast>
    </div>
  );
};

export default Page;

`.trim();

export const AccessibilityToastCode = `
// import node module libraries
import { useState } from "react";
import Toast from "react-bootstrap/Toast";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Toast show={isOpen} onClose={() => setIsOpen(false)}>
      <Toast.Header>
        <Image
          src="/images/docs/blackSquare.svg"
          alt=""
          className="rounded me-2"
        />
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
    </Toast>
  );
};

export default Page;

`.trim();

export const TranslucentToastCode = `
// import node module libraries
import { useState } from "react";
import Toast from "react-bootstrap/Toast";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Toast show={isOpen} onClose={() => setIsOpen(false)}>
      <Toast.Header>
        <Image
          src="/images/docs/blackSquare.svg"
          className="rounded me-2"
          alt=""
        />
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
    </Toast>
  );
};

export default Page;

`.trim();

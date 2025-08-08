// import node module libraries
import { useContext } from "react";
import { Nav, AccordionContext, useAccordionButton } from "react-bootstrap";

export const CustomToggle = ({ children, eventKey, callback }) => {
  const { activeEventKey } = useContext(AccordionContext);
  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;
  return (
    <Nav.Item as="li">
      <Nav.Link
        href="#"
        onClick={decoratedOnClick}
        data-bs-toggle="collapse"
        data-bs-target="#navOrders"
        active={false}
      >
        {children}
      </Nav.Link>
    </Nav.Item>
  );
};

export const CustomToggleLevel2 = ({ children, eventKey }) => {
  const { activeEventKey } = useContext(AccordionContext);
  const decoratedOnClick = useAccordionButton(eventKey, () => { });
  const isCurrentEventKey = activeEventKey === eventKey;
  return (
    <Nav.Item as="li">
      <Nav.Link
        href="#"
        onClick={decoratedOnClick}
        data-bs-toggle="collapse"
        data-bs-target="#navMenuLevelThreeTwo"
        active={false}
      >
        {children}
      </Nav.Link>
    </Nav.Item>
  );
};

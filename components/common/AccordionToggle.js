// import node module libraries
import { useContext } from "react";
import {
  Accordion,
  useAccordionButton,
  AccordionContext,
} from "react-bootstrap";

export default function AccordionToggle({
  children,
  eventKey,
  callback,
  className,
}) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <Accordion.Item onClick={decoratedOnClick} className={className}>
      {children}
    </Accordion.Item>
  );
}

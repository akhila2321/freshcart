// import node module libraries
import React, { Fragment } from "react";
import {
  Accordion,
  AccordionContext,
  useAccordionButton,
  Nav,
  Image,
} from "react-bootstrap";
import { ChevronRight } from "react-bootstrap-icons";

// import require hooks
import { useContext } from "react";

//Custom Toggle
const CustomToggle = ({
  children,
  eventKey,
  callback,
  className,
  icon,
  showIcon = false,
}) => {
  const { activeEventKey } = useContext(AccordionContext);
  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;
  return (
    <Nav.Item className={className}>
      <Nav.Link
        href="#"
        onClick={decoratedOnClick}
        aria-expanded={isCurrentEventKey ? true : false}
      >
        <span className="d-flex align-items-center">
          {showIcon && <Image src={icon} alt="" className="icon-xs" />}
          <span className="ms-2">{children}</span>
        </span>

        <ChevronRight size={10} />
      </Nav.Link>
    </Nav.Item>
  );
};

const FreshAccordion = ({ data, NavClass, toggleClass, showIcon }) => {
  return (
    <Accordion bsPrefix="nav nav-category" id="categoryCollapseMenu" as="ul">
      {data.map((item, index) => (
        <Fragment key={item.id}>
          <CustomToggle
            eventKey={index}
            className={toggleClass}
            icon={item.icon}
            showIcon={showIcon}
          >
            {item.title}
          </CustomToggle>
          <Accordion.Collapse
            as="li"
            id={`categoryFlush${index}`}
            eventKey={index}
          >
            {!item.children || (
              <Nav
                as="ul"
                className={`flex-column ${NavClass ? NavClass : "ms-3"}`}
              >
                {item.children.map((subItem) => (
                  <Nav.Item key={subItem.id} as="li">
                    <Nav.Link href={subItem.link}>{subItem.title}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            )}
          </Accordion.Collapse>
        </Fragment>
      ))}
    </Accordion>
  );
};

export default FreshAccordion;

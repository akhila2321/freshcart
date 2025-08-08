// import node module libraries
import Link from "next/link";
import React from "react";
import { Dropdown } from "react-bootstrap";

const ActionMenuToggle = ({ drop, align, toggle, className, children }) => {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Link
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      href="#"
      className={className ? className : "text-reset"}
    >
      {children}
    </Link>
  ));

  CustomToggle.displayName = "CustomToggle";

  return (
    <Dropdown drop={drop}>
      <Dropdown.Toggle as={CustomToggle}>{toggle}</Dropdown.Toggle>
      <Dropdown.Menu align={align}>{children}</Dropdown.Menu>
    </Dropdown>
  );
};

export default ActionMenuToggle;

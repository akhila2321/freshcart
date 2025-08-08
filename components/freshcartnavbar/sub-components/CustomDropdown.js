// import node module libraries
import { useState } from "react";
import { NavDropdown } from "react-bootstrap";

const CustomDropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseOver = () => {
    setIsOpen(true);
  };

  const handleMouseOut = () => {
    setIsOpen(false);
  };

  return (
    <NavDropdown
      show={isOpen}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onToggle={() => setIsOpen(!isOpen)}
      title={props.title}
      drop={props.drop}
      {...props}
    >
      {props.children}
    </NavDropdown>
  );
};

export default CustomDropdown;

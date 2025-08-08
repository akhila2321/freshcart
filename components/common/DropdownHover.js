// import node module libraries
import { useState } from "react";
import { Dropdown } from "react-bootstrap";

const DropdownHover = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseOver = () => {
    setIsOpen(true);
  };

  const handleMouseOut = () => {
    setIsOpen(false);
  };

  const onToggle = () => {
    // You can keep this if you want to toggle the dropdown by clicking the toggle button
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Dropdown
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onToggle={onToggle}
      {...props.dropdownProps}
    >
      <Dropdown.Toggle {...props.toggleProps}>{props.title}</Dropdown.Toggle>
      <Dropdown.Menu show={isOpen} {...props.menuProps}>
        {props.children}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownHover;

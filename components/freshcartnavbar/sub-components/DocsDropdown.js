// import node module libraries
import React, { useState } from "react";
import { Dropdown, Nav } from "react-bootstrap";
import Link from "next/link";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <Nav.Link href="#" id="navbarDropdownDocs">
    {children}
  </Nav.Link>
));

CustomToggle.displayName = "Custom Toggle";

const DocsDropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseOver = () => {
    setIsOpen(true);
  };

  const handleMouseOut = () => {
    setIsOpen(false);
  };
  return (
    <Dropdown
      show={isOpen}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className="w-100 w-lg-auto dropdown-flyout"
    >
      <Dropdown.Toggle as={CustomToggle}>Docs</Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu-lg">
        {items.map((item) => {
          return (
            <Dropdown.Item
              key={item.id}
              className="align-items-start"
              as={Link}
              href={item.link}
            >
              <div>{item.icon}</div>
              <div className="ms-3 lh-1">
                <h6 className="mb-1">
                  {item.name}
                  {item.version ? <span>{item.version}</span> : ""}
                </h6>
                <p className="mb-0 small">{item.desc}</p>
              </div>
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DocsDropdown;

// import node module libraries
import React from "react";
import { Dropdown, Button } from "react-bootstrap";
import { Grid } from "react-feather";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <Button
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    variant="primary"
    className="px-6"
    id="dropdownMenuButton1"
  >
    <Grid size={16} className="me-1" strokeWidth={1.25} /> {children}
  </Button>
));

CustomToggle.displayName = "Custom Toggle";

const CategoryDropdown = ({ title, items, className }) => {
  return (
    <Dropdown className={className ? className : "me-3 d-none d-lg-block"}>
      <Dropdown.Toggle as={CustomToggle}>{title}</Dropdown.Toggle>
      <Dropdown.Menu show>
        {items.map((item) =>
          item.children.map((menu) => (
            <Dropdown.Item href="" key={menu.id}>
              {menu.name}
            </Dropdown.Item>
          ))
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CategoryDropdown;

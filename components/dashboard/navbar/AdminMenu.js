// import node module libraries
import React from "react";
import { Dropdown, ListGroup, Image } from "react-bootstrap";
import Link from "next/link";

const AdminMenu = () => {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Link
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </Link>
  ));

  CustomToggle.displayName = "CustomToggle";

  return (
    <ListGroup.Item className="dropdown ms-4">
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle}>
          <Image
            src="/images/avatar/avatar-1.jpg"
            alt=""
            className="avatar avatar-md rounded-circle"
          />
        </Dropdown.Toggle>
        <Dropdown.Menu align={"end"} className="p-0">
          <div className="lh-1 px-5 py-4 border-bottom">
            <h5 className="mb-1 h6">FreshCart Admin</h5>
            <small>admindemo@email.com</small>
          </div>
          <ListGroup bsPrefix="list-unstyled" className="px-2 py-3" as="ul">
            <Dropdown.Item as="li">Home</Dropdown.Item>
            <Dropdown.Item as="li">Profile</Dropdown.Item>
            <Dropdown.Item as="li">Settings</Dropdown.Item>
          </ListGroup>
          <div className="border-top px-5 py-3">
            <Link href="#">Log Out</Link>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </ListGroup.Item>
  );
};

export default AdminMenu;

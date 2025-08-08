// import node module libraries
import React from "react";
import { Navbar, Container, Form, ListGroup } from "react-bootstrap";
import { TextIndentRight } from "react-bootstrap-icons";

// import sub components
import DashboardNotification from "./DashboardNotification";
import AdminMenu from "./AdminMenu";

const DashboardTopbar = ({ openMenu }) => {
  return (
    <Navbar expand="lg" className="navbar-glass">
      <Container fluid>
        <div className="d-flex justify-content-between align-items-center w-100">
          <div className="d-flex align-items-center">
            <TextIndentRight
              size={32}
              className="text-inherit d-block d-xl-none me-4"
              onClick={() => openMenu()}
            />
            <Form.Control type="search" placeholder="Search" />
          </div>

          <ListGroup
            bsPrefix="list-unstyled"
            className="d-flex align-items-center mb-0 ms-5 ms-lg-0"
            as="ul"
          >
            <DashboardNotification />
            <AdminMenu />
          </ListGroup>
        </div>
      </Container>
    </Navbar>
  );
};

export default DashboardTopbar;

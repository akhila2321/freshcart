// import node module libraries
import React from "react";
import { ListGroup, Button, Dropdown, Image } from "react-bootstrap";
import SimpleBar from "simplebar-react";
import Link from "next/link";
import { Check2All, Clock, Bell } from "react-bootstrap-icons";

// import custom components
import FreshBadge from "components/common/FreshBadge";

const DashboardNotification = () => {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Button
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      variant="ghost-secondary"
      className="position-relative btn-icon rounded-circle"
    >
      <Bell className="fs-5" />
      {children}
    </Button>
  ));

  CustomToggle.displayName = "CustomToggle";

  return (
    <ListGroup.Item className="dropdown-center" as="li">
      <Dropdown align={"end"}>
        <Dropdown.Toggle as={CustomToggle}>
          <FreshBadge
            content={2}
            bg="danger"
            className="position-absolute top-0 start-100 translate-middle rounded-pill mt-2 ms-n2"
          />
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu-lg p-0 border-0">
          <div className="border-bottom p-5 d-flex justify-content-between align-items-center">
            <div>
              <h5 className="mb-1">Notifications</h5>
              <p className="mb-0 small">You have 2 unread messages</p>
            </div>
            <Link href="#!" className="text-muted">
              <Button
                variant="ghost-secondary"
                className="btn-icon rounded-circle"
              >
                <Check2All className="text-success" />
              </Button>
            </Link>
          </div>
          <SimpleBar style={{ maxHeight: "250px" }}>
            <ListGroup
              variant="flush"
              as="ul"
              className="notification-list-scroll fs-6"
            >
              <ListGroup.Item
                as="li"
                className="px-5 py-4 active list-group-item-action"
              >
                <Link href="" className="text-muted">
                  <div className="d-flex">
                    <Image
                      src="/images/avatar/avatar-1.jpg"
                      alt=""
                      className="avatar avatar-md rounded-circle"
                    />
                    <div className="ms-4">
                      <p className="mb-1">
                        <span className="text-dark">Your order is placed</span>
                        waiting for shipping
                      </p>
                      <span>
                        <Clock className="text-muted" size={12} />
                        <small className="ms-2">1 minute ago</small>
                      </span>
                    </div>
                  </div>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="px-5 py-4 list-group-item-action"
              >
                <Link href="" className="text-muted">
                  <div className="d-flex">
                    <Image
                      src="/images/avatar/avatar-5.jpg"
                      alt=""
                      className="avatar avatar-md rounded-circle"
                    />
                    <div className="ms-4">
                      <p className="mb-1">
                        <span className="text-dark">Jitu Chauhan</span>
                        answered to your pending order list with notes
                      </p>
                      <span>
                        <Clock size={12} className="text-muted" />
                        <small className="ms-2">2 days ago</small>
                      </span>
                    </div>
                  </div>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="px-5 py-4 list-group-item-action"
              >
                <Link href="" className="text-muted">
                  <div className="d-flex">
                    <Image
                      src="/images/avatar/avatar-2.jpg"
                      alt=""
                      className="avatar avatar-md rounded-circle"
                    />
                    <div className="ms-4">
                      <p className="mb-1">
                        <span className="text-dark">You have new messages</span>
                        2 unread messages
                      </p>
                      <span>
                        <Clock size={12} className="text-muted" />
                        <small className="ms-2">3 days ago</small>
                      </span>
                    </div>
                  </div>
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </SimpleBar>
        </Dropdown.Menu>
      </Dropdown>
    </ListGroup.Item>
  );
};

export default DashboardNotification;

// import node module libraries
import { Fragment } from "react";
import Link from "next/link";
import { Col, Button, Nav } from "react-bootstrap";
import { TextIndentLeft } from "react-bootstrap-icons";
import { LogOut } from "react-feather";

// import required hooks
import { usePathname } from "next/navigation";
import useToggle from "hooks/useToggle";

// import custom components
import UserOffcanvasMenu from "./UserOffcanvasMenu";

// import required data file
import { userMenu } from "data/user/UserMenu";

const UserSidebar = () => {
  const location = usePathname();
  const { isToggled, toggle, handleClose } = useToggle();

  return (
    <Fragment>
      {/* Offcanvas Toggle For Mobile Device  */}
      <Col xs={12}>
        <div className="d-flex justify-content-between align-items-center d-md-none py-4">
          <h3 className="fs-5 mb-0">Account Setting</h3>

          <Button
            variant="outline-gray-400"
            className="text-muted d-md-none btn-icon btn-sm ms-3"
            type="button"
          >
            <TextIndentLeft className="fs-3" onClick={toggle} />
          </Button>
        </div>
      </Col>

      <Col lg={3} md={4} xs={12} className="border-end d-none d-md-block">
        <div className="pt-10 pe-lg-10">
          <Nav as="ul" variant="pills" className="flex-column nav-pills-dark">
            {userMenu.map((item) => (
              <Nav.Item as="li" key={item.id}>
                <Nav.Link
                  href={item.link}
                  as={Link}
                  active={location === item.link}
                  className="d-flex align-items-center gap-1"
                >
                  {item.icon} {item.title}
                </Nav.Link>
              </Nav.Item>
            ))}
            <Nav.Item as="li">
              <hr />
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/" className="d-flex align-items-center gap-1">
                <LogOut className="me-2" size={14} />
                Log out
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </Col>

      <UserOffcanvasMenu isMenuOpen={isToggled} closeMenu={handleClose} />
    </Fragment>
  );
};

export default UserSidebar;

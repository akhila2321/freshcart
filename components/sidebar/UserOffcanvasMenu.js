// import node module libraries
import Link from "next/link";
import { Offcanvas, Nav } from "react-bootstrap";
import { LogOut } from "react-feather";

// import required hooks
import { usePathname } from "next/navigation";

// import requred data file
import { userMenu } from "data/user/UserMenu";

const UserOffcanvasMenu = ({ isMenuOpen, closeMenu }) => {
  const location = usePathname();
  return (
    <Offcanvas
      placement="start"
      id="offcanvasAccount"
      show={isMenuOpen}
      onHide={closeMenu}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title as="h5" id="offcanvasAccountLabel">
          Offcanvas
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav as="ul" className="flex-column nav-pills-dark" variant="pills">
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

          <hr className="my-6" />
          <Nav.Item as="li">
            <Nav.Link href="/" className="d-flex align-items-center gap-1">
              <LogOut className="me-2" size={14} />
              Log out
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default UserOffcanvasMenu;

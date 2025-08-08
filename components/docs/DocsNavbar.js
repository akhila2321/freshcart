// import node module libraries
import { Navbar, Container, Nav, Image, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import Link from "next/link";
import { List } from "react-bootstrap-icons";
import { Monitor, ShoppingCart } from "react-feather";

// import required hooks
import { useMediaQuery } from "react-responsive";
import { useMounted } from "hooks/useMounted";

// import custom components
import { deviceSize } from "components/common/DeviceSize";

const DocsNavbar = ({ navToggle }) => {
  const logo = useSelector((state) => state.app.logo)
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const hasMounted = useMounted();

  return (
    <div className="docs-header">
      <Navbar expand="lg" className="bg-white border-bottom">
        <Container fluid>
          <Navbar.Brand href="/" as={Link}>
            <Image src={logo} alt="" />
          </Navbar.Brand>
          <Nav className="ms-auto flex-row align-items-center" as="ul">
            <Nav.Item className="d-none d-md-block">
              <Nav.Link className="me-4 border-bottom-0" href="/">
                <Monitor className="me-2" size={18} /> Live Preview
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="d-md-none me-2">
              <Navbar.Toggle type="button" onClick={() => navToggle()}>
                <List size={32} className="text-primary" />
              </Navbar.Toggle>
            </Nav.Item>
            <Nav.Item className="docs-header-btn">
              <Link
                href="https://bit.ly/3ZXO47D"
                target="_blank"
                variant="primary"
                className="btn btn-primary"
                size={hasMounted && isMobile ? "sm" : ""}
              >
                <ShoppingCart
                  size={16}
                  className="me-2 d-none d-md-inline-block"
                />
                Buy now
              </Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default DocsNavbar;

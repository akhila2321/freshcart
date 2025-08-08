// import node module libraries
import { Fragment } from "react";
import { Nav, Navbar } from "react-bootstrap";
import SimpleBar from "simplebar-react";
import Link from "next/link";

// import required routes files
import { docsNavigation } from "routes/DocsNavigation";

// import required hooks
import { usePathname } from "next/navigation";

const DocsSidebar = ({ openNav }) => {
  const location = usePathname();

  return (
    <div className="docs-nav-sidebar">
      <SimpleBar className="docs-nav">
        <Navbar expand="md">
          <Navbar.Collapse id="navbarNav" in={openNav} >
            <Nav className="flex-column" id="sidebarnav">
              {docsNavigation.map((menuItem, index) => {
                if (menuItem.children) {
                  if (menuItem.title.includes("Freshcart")) {
                    return (
                      <Fragment key={menuItem.id}>
                        <Nav.Item
                          as="li"
                          bsPrefix="navbar-header"
                          className={index != 0 ? "mt-0" : ""}
                        >
                          <h5 className="heading">
                            Components
                            <small className="text-primary"> (Freshcart)</small>
                          </h5>
                        </Nav.Item>
                        {menuItem.children.map((item) => {
                          return (
                            <Nav.Item as="li" key={item.id}>
                              <Nav.Link
                                as={Link}
                                href={item.link}
                                active={location === item.link}
                              >
                                {item.name}
                              </Nav.Link>
                            </Nav.Item>
                          );
                        })}
                        <Nav.Item as="li" bsPrefix="navbar-border"></Nav.Item>
                      </Fragment>
                    );
                  } else {
                    return (
                      <Fragment key={menuItem.id}>
                        <Nav.Item
                          as="li"
                          bsPrefix="navbar-header"
                          className={index != 0 ? "mt-0" : ""}
                        >
                          <h5 className="heading"> {menuItem.title}</h5>
                        </Nav.Item>
                        {menuItem.children.map((item) => {
                          return (
                            <Nav.Item as="li" key={item.id}>
                              <Nav.Link
                                as={Link}
                                href={item.link}
                                active={location === item.link}
                              >
                                {item.name}
                              </Nav.Link>
                            </Nav.Item>
                          );
                        })}
                        <Nav.Item as="li" bsPrefix="navbar-border"></Nav.Item>
                      </Fragment>
                    );
                  }
                }
              })}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </SimpleBar>
      <div className="nav-footer">
        <p className="mb-0">
          Developed by
          <Link href="https://codescandy.com" target="_blank">
            {" "}
            Codescandy
          </Link>
        </p>
      </div>
    </div>
  );
};

export default DocsSidebar;

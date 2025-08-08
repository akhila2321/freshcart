// import node module libraries
import { Nav, NavDropdown, Row, Col, Card, Image } from "react-bootstrap";
import Link from "next/link";

// import required routes files
import { MainNavigation } from "routes/MainNavigation";

// import custom components
import CustomDropdown from "./CustomDropdown";
import DocsDropdown from "./DocsDropdown";

const MainMenu = ({ className }) => {
  return (
    <div>
      <Nav className={`align-items-center ${className}`}>
        {MainNavigation.map((item) =>
          item.title === "Home" ? (
            <Nav.Link 
              as={Link} 
              href={item.link} 
              key={item.id} 
              className="nav-link"
              target={item.target || "_self"}
              rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
            >
              <i className="fe fe-home me-1"></i> {item.title}
            </Nav.Link>
          ) : item.title === "Docs" ? (
            <DocsDropdown key={item.id} items={item.children} />
          ) : item.children ? (
            <CustomDropdown
              key={item.id}
              title={`${item.title}`}
              className={`w-100 w-lg-auto`}
            >
              {item.children.map((menuLevel1Item) =>
                menuLevel1Item.children ? (
                  <CustomDropdown
                    title={`${menuLevel1Item.name}`}
                    drop="end"
                    className="dropdown-submenu p-0 w-100 w-lg-auto"
                    bsPrefix="dropdown-item dropdown-list-group-item w-100 w-lg-auto justify-content-between"
                    key={menuLevel1Item.id}
                  >
                    {menuLevel1Item.children.map((menuLevel2Item) => (
                      // Second Level Menu Item

                      <NavDropdown.Item
                        as={Link}
                        href={menuLevel2Item.link}
                        key={menuLevel2Item.id}
                      >
                        {menuLevel2Item.name}
                      </NavDropdown.Item>
                    ))}
                  </CustomDropdown>
                ) : (
                  // Submenu Menu Item
                  <NavDropdown.Item
                    key={menuLevel1Item.id}
                    href={menuLevel1Item.link}
                    className="w-100 w-lg-auto"
                    as={Link}
                  >
                    {menuLevel1Item.name}
                  </NavDropdown.Item>
                )
              )}
            </CustomDropdown>
          ) : item.megaMenu ? (
            // Render something for items with megaMenu
            <CustomDropdown
              key={item.id}
              title={item.title}
              className=" w-100 w-lg-auto dropdown-fullwidth"
            >
              <Row className="p-2 p-lg-4">
                {item.megaMenu.map((megaItem) => (
                  <Col
                    lg={3}
                    xs={12}
                    key={megaItem.id}
                    className="mb-4 mb-lg-0"
                  >
                    <h6 className="text-primary ps-3">{megaItem.title}</h6>
                    {megaItem.children[0].map((megaMenuItem) => (
                      <NavDropdown.Item
                        href={megaMenuItem.link}
                        key={megaMenuItem.id}
                        as={Link}
                      >
                        {megaMenuItem.name}
                      </NavDropdown.Item>
                    ))}
                  </Col>
                ))}
                <Col className="mb-4 mb-lg-0">
                  <Card className="border-0">
                    <Image
                      src="/images/banner/menu-banner.jpg"
                      alt="eCommerce HTML Template"
                      className="img-fluid"
                    />
                    <div className="position-absolute ps-6 mt-8">
                      <h5 className="mb-0">
                        Dont miss this
                        <br />
                        offer today.
                      </h5>
                      <Link href="#" className="btn btn-primary btn-sm mt-3">
                        Shop Now
                      </Link>
                    </div>
                  </Card>
                </Col>
              </Row>
            </CustomDropdown>
          ) : (
            <Nav.Item className="w-100 w-lg-auto" key={item.id}>
              <Nav.Link href={item.link} as={Link}>
                {item.title}
              </Nav.Link>
            </Nav.Item>
          )
        )}
      </Nav>
    </div>
  );
};

export default MainMenu;

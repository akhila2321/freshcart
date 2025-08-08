// import node module libraries
import React from "react";
import Link from "next/link";
import SimpleBar from "simplebar-react";
import { Nav, NavDropdown } from "react-bootstrap";

// import required routes files
import { MainNavigation } from "routes/MainNavigation";

const Navigation = () => {
  return (
    <SimpleBar style={{ maxHeight: "90vh" }}>
      <Nav className="navbar-nav-offcanvac" as="ul">
        {MainNavigation.map((item) =>
          item.title === "Docs" ? (
            <NavDropdown
              title={item.title}
              className="dropdown-flyout"
              key={item.id}
            >
              {item.children.map((docMenu) => (
                <NavDropdown.Item
                  href={docMenu.link}
                  as={Link}
                  className="align-items-start"
                  key={docMenu.id}
                >
                  <div>{docMenu.icon}</div>
                  <div className="ms-3 lh-1">
                    <h6 className="mb-1">
                      {docMenu.name}
                      {docMenu.version ? (
                        <span className="text-primary ms-1">
                          {docMenu.version}
                        </span>
                      ) : (
                        ""
                      )}
                    </h6>
                    <p className="mb-0 small">{docMenu.desc}</p>
                  </div>
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          ) : item.children ? (
            <NavDropdown
              key={item.id}
              title={`${item.title}`}
              as="li"
              drop="down"
              className="w-100"
            >
              {item.children.map((menuLevel1Item) =>
                menuLevel1Item.children ? (
                  <NavDropdown
                    title={`${menuLevel1Item.name}`}
                    className="dropdown-submenu"
                    drop="end"
                    bsPrefix="dropdown-item dropdown-list-group-item w-100 justify-content-between"
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
                  </NavDropdown>
                ) : (
                  // Submenu Menu Item
                  <NavDropdown.Item
                    key={menuLevel1Item.id}
                    as={Link}
                    href={menuLevel1Item.link}
                  >
                    {menuLevel1Item.name}
                  </NavDropdown.Item>
                )
              )}
            </NavDropdown>
          ) : item.megaMenu ? (
            // Rending Mega Menu
            <NavDropdown key={item.id} title={item.title} drop="down" as="li">
              {item.megaMenu.map((megaMenuItem) =>
                megaMenuItem.children ? (
                  <NavDropdown
                    title={megaMenuItem.title}
                    className="dropdown-submenu"
                    bsPrefix="dropdown-item dropdown-list-group-item dropdown-toggle justify-content-between"
                    drop="end"
                    key={megaMenuItem.id}
                  >
                    {megaMenuItem.children[0].map((menuItem) => (
                      <NavDropdown.Item
                        bsPrefix="dropdown-item"
                        key={menuItem.id}
                        as={Link}
                        href={menuItem.link}
                      >
                        {menuItem.name}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                ) : (
                  <NavDropdown.Item
                    bsPrefix="dropdown-item"
                    as={Link}
                    href={megaMenuItem.link}
                    key={megaMenuItem.id}
                  >
                    {megaMenuItem.title}
                  </NavDropdown.Item>
                )
              )}
            </NavDropdown>
          ) : (
            <Nav.Item className="w-100 w-lg-auto" key={item.id} as="li">
              <Nav.Link as={Link} href={item.link}>
                {item.title}
              </Nav.Link>
            </Nav.Item>
          )
        )}
      </Nav>
    </SimpleBar>
  );
};

export default Navigation;

// import node module libraries
import Link from "next/link";
import React, { Fragment } from "react";
import { Accordion, ListGroup, Nav, Button } from "react-bootstrap";
import SimpleBar from "simplebar-react";

// import required routes files
import { DashboardMenu } from "routes/DashboardRoutes";

// import required hooks
import { usePathname } from "next/navigation";

// import custom components
import FreshcartBrand from "components/freshcartnavbar/sub-components/FreshcartBrand";
import FreshBadge from "components/common/FreshBadge";
import { CustomToggle, CustomToggleLevel2 } from "./CustomToggle";

const DashboardNavigation = ({ isOpen, handleClose }) => {
  const location = usePathname();

  //Generate Link
  const generateLink = (item) => {
    return (
      <Nav.Item as="li" key={item.id}>
        <Nav.Link
          href={`${item.link}`}
          active={item.link === location}
          className="text-nowrap"
          as={Link}
          onClick={() => {
            if (isOpen) {
              handleClose();
            }
          }}
        >
          {item.title}
        </Nav.Link>
      </Nav.Item>
    );
  };

  return (
    <div className="navbar-vertical">
      <div className="px-4 py-5 d-flex justify-content-between align-items-center">
        <FreshcartBrand />
        {isOpen && (
          <Button
            bsPrefix="btn-close"
            onClick={() => {
              if (isOpen) {
                handleClose();
              }
            }}
          />
        )}
      </div>

      <div className="navbar-vertical-content flex-grow-1">
        <SimpleBar style={{ maxHeight: "90vh" }}>
          <Accordion
            defaultActiveKey="0"
            as="ul"
            bsPrefix="navbar-nav flex-column"
            id="sideNavbar"
          >
            {DashboardMenu.map(function (menu, index) {
              //Rendering group title
              if (menu.grouptitle) {
                return (
                  <Nav.Item className="mt-6 mb-3" key={menu.id} as="li">
                    <span className="nav-label">{menu.title}</span>
                    {menu.badge && (
                      <FreshBadge
                        content={menu.badge}
                        bg="light-info"
                        text="dark-info"
                        pill={false}
                      />
                    )}
                  </Nav.Item>
                );
              } else {
                if (menu.children) {
                  //Top level menu with children
                  return (
                    <Fragment key={index}>
                      {/* Rendering parent dropdown menu */}
                      <CustomToggle eventKey={menu.id}>
                        <div className="d-flex align-items-center">
                          <span className="nav-link-icon">{menu.icon}</span>
                          <span className="nav-link-text">{menu.title}</span>
                          {menu.badge && <FreshBadge
                        content={menu.badge}
                        bg="light-success"
                        text="dark-success"
                        pill={false}
                        className={"ms-2"}
                      />}
                        </div>
                      </CustomToggle>
                      <Accordion.Collapse
                        eventKey={menu.id}
                        as="li"
                        bsPrefix="nav-item"
                      >
                        <ListGroup as="ul" bsPrefix="nav flex-column">
                          {menu.children.map(function (
                            menuLevel1Item,
                            menuLevel1Index
                          ) {
                            if (menuLevel1Item.children) {
                              return (
                                <ListGroup.Item
                                  as="li"
                                  bsPrefix="nav-item"
                                  key={menuLevel1Index}
                                >
                                  {/* first level menu started  */}
                                  <Accordion
                                    bsPrefix="navbar-nav flex-column"
                                    as="ul"
                                  >
                                    <CustomToggleLevel2
                                      eventKey={menuLevel1Item.id}
                                      href={"#link"}
                                    >
                                      {menuLevel1Item.title}
                                    </CustomToggleLevel2>
                                    <Accordion.Collapse
                                      eventKey={menuLevel1Item.id}
                                      bsPrefix="nav-item"
                                      as="li"
                                    >
                                      <ListGroup
                                        as="ul"
                                        bsPrefix="nav flex-column"
                                      >
                                        {/* second level menu started  */}
                                        {menuLevel1Item.children.map(function (
                                          menuLevel2Item
                                        ) {
                                          if (menuLevel2Item.children) {
                                            return (
                                              <ListGroup.Item
                                                as="li"
                                                bsPrefix="nav-item"
                                                key={menuLevel2Item.id}
                                              >
                                                {/* second level accordion menu started  */}
                                                <Accordion
                                                  bsPrefix="navbar-nav flex-column"
                                                  className="px-0"
                                                  as="ul"
                                                >
                                                  <CustomToggleLevel2
                                                    eventKey={menuLevel2Item.id}
                                                  >
                                                    {menuLevel2Item.title}
                                                  </CustomToggleLevel2>
                                                  <Accordion.Collapse
                                                    eventKey={menuLevel2Item.id}
                                                    bsPrefix="nav-item"
                                                  >
                                                    <ListGroup
                                                      as="ul"
                                                      bsPrefix="nav flex-column"
                                                    >
                                                      {/* third level menu started  */}
                                                      {menuLevel2Item.children.map(
                                                        (menuLevel3Item) => {
                                                          return generateLink(
                                                            menuLevel3Item
                                                          );
                                                        }
                                                      )}
                                                      {/* end of third level menu  */}
                                                    </ListGroup>
                                                  </Accordion.Collapse>
                                                </Accordion>
                                                {/* end of second level accordion */}
                                              </ListGroup.Item>
                                            );
                                          } else {
                                            return generateLink(menuLevel2Item);
                                          }
                                        })}
                                        {/* end of second level menu  */}
                                      </ListGroup>
                                    </Accordion.Collapse>
                                  </Accordion>
                                </ListGroup.Item>
                              );
                            } else {
                              // Top level menu without child
                              return generateLink(menuLevel1Item);
                            }
                          })}
                        </ListGroup>
                      </Accordion.Collapse>
                    </Fragment>
                  );
                } else {
                  return (
                    <Nav.Item as="li" key={menu.id}>
                      <Nav.Link
                        className={menu.isActive ? "" : "disabled"}
                        href={menu.link}
                        as={Link}
                        active={location === menu.link}
                        onClick={() => {
                          if (isOpen) {
                            handleClose();
                          }
                        }}
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-icon">{menu.icon}</span>
                          <span className="nav-link-text">{menu.title}</span>
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  );
                }
              }
            })}
          </Accordion>
        </SimpleBar>
      </div>
    </div>
  );
};

export default DashboardNavigation;

// import node module libraries
import Link from "next/link";
import { Fragment, useState } from "react";
import { Col, ListGroup } from "react-bootstrap";

const SidebarContent = ({ data }) => {
  const [currentPath, setCurrentPath] = useState("#intro");

  const handleItemClick = (link) => {
    setCurrentPath(link);
  };

  const generateLinks = (items) => {
    return items?.map((item) => (
      <ListGroup.Item as="li" key={item.id}>
        {item.children ? (
          <Fragment>
            <Link
              href={item.link}
              className={currentPath === item.link ? "active" : ""}
              onClick={() => handleItemClick(item.link)}
            >
              {item.title}
            </Link>
            <ListGroup bsPrefix="list-unstyled" as="ul">
              {generateLinks(item.children)}
            </ListGroup>
          </Fragment>
        ) : (
          <Link
            href={item.link}
            className={currentPath === item.link ? "active" : ""}
            onClick={() => handleItemClick(item.link)}
          >
            {item.title}
          </Link>
        )}
      </ListGroup.Item>
    ));
  };

  return (
    <Col
      xl={2}
      lg={2}
      md={6}
      sm={12}
      xs={12}
      className="d-none d-xl-block position-fixed end-0"
    >
      <div className="sidebar-nav-fixed">
        <span className="px-4 mb-2 d-block text-uppercase ls-md fw-semibold fs-6">
          Contents
        </span>
        <ListGroup bsPrefix="list-unstyled" as="ul">
          {generateLinks(data)}
        </ListGroup>
      </div>
    </Col>
  );
};

export default SidebarContent;

// import node module libraries
import Link from "next/link";
import { Fragment } from "react";
import { ListGroup } from "react-bootstrap";
import { Instagram, Facebook, Twitter } from "react-bootstrap-icons";

const socialLinks = [
  { id: 1, icon: <Facebook size={16} /> },
  { id: 2, icon: <Twitter size={16} /> },
  { id: 3, icon: <Instagram size={16} /> },
];

const SocialShareOne = ({ hideText = false }) => {
  return (
    <ListGroup
      bsPrefix="list-inline text-md-end mb-0 small mt-3 mt-md-0"
      as="ul"
    >
      {hideText || (
        <ListGroup.Item bsPrefix="list-inline-item text-muted" as="li">
          Follow us on
        </ListGroup.Item>
      )}

      {socialLinks.map((item, index) => (
        <ListGroup.Item
          bsPrefix="list-inline-item"
          className={`${index != item.length - 1 ? "me-2" : ""}`}
          as="li"
          key={item.id}
        >
          <Link href="#!" className="btn btn-xs btn-social btn-icon">
            {item.icon}
          </Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

const SocialShareTwo = () => {
  return (
    <ListGroup
      as="ul"
      bsPrefix="list-inline"
      className="text-md-end mb-0 small d-flex justify-content-end "
    >
      {socialLinks.map((item, index) => (
        <ListGroup.Item
          as="li"
          className={`${index != item.length - 1 ? "me-2" : ""}`}
          key={index}
        >
          <Link href="" className="social-links">
            {item.icon}
          </Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export const SocialFollow = ({ variant = "0", hideText }) => {
  return (
    <Fragment>
      {variant == 0 ? (
        <SocialShareOne hideText={hideText} />
      ) : variant == 1 ? (
        <SocialShareTwo />
      ) : (
        ""
      )}
    </Fragment>
  );
};

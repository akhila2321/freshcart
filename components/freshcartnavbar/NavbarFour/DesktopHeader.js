// import node module libraries
import { ListGroup, Button } from "react-bootstrap";
import Link from "next/link";
import { MapPin } from "react-feather";

// import sub components
import CartDropdown from "./CartDropdown";

const DesktopHeader = ({ openAddLocation, openRegister }) => {
  return (
    <ListGroup bsPrefix="list-inline" className="ms-auto d-lg-block d-none">
      <ListGroup.Item
        bsPrefix="list-inline-item"
        className="me-3"
        role="button"
      >
        <Link
          href=""
          className="text-reset d-none d-lg-block"
          onClick={(e) => {
            e.preventDefault();
            openAddLocation();
          }}
        >
          <MapPin size={14} className="me-2" />
          Set A Location
        </Link>
      </ListGroup.Item>
      <ListGroup.Item
        bsPrefix="list-inline-item"
        className="me-3"
        role="button"
      >
        <Link
          href=""
          className="text-reset"
          onClick={(e) => {
            e.preventDefault();
            openRegister();
          }}
        >
          Register
        </Link>
      </ListGroup.Item>
      <ListGroup.Item
        bsPrefix="list-inline-item"
        className="me-3"
        role="button"
      >
        <CartDropdown toggleIcon className="d-none d-xl-block" />
      </ListGroup.Item>
      <ListGroup.Item
        bsPrefix="list-inline-item"
        className="me-3"
        role="button"
      >
        <Button
          href="/signin"
          variant="dark"
          as={Link}
          className="d-none d-xl-block"
        >
          Sign In
        </Button>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default DesktopHeader;

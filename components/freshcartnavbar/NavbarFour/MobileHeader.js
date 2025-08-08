// import node module libraries
import Link from "next/link";
import { ListGroup, Navbar } from "react-bootstrap";
import { MapPin } from "react-feather";
import { TextIndentLeft } from "react-bootstrap-icons";

// import sub components
import FreshcartBrand from "../sub-components/FreshcartBrand";
import CartDropdown from "./CartDropdown";

const MobileHeader = ({ menuToggle, openAddLocation }) => {
  return (
    <div className="d-flex justify-content-between align-items-center w-100 d-lg-none">
      <FreshcartBrand className="mb-0" />

      <div className="d-flex align-items-center lh-1">
        <ListGroup bsPrefix="list-inline" className="me-4" role="button">
          <ListGroup.Item bsPrefix="list-inline-item">
            <Link
              href=""
              className="text-reset d-none d-md-block"
              onClick={(e) => {
                e.preventDefault();
                openAddLocation();
              }}
            >
              <MapPin className="me-2" size={14} />
              Set A Location
            </Link>
          </ListGroup.Item>
          <ListGroup.Item bsPrefix="list-inline-item" role="button">
            <CartDropdown />
          </ListGroup.Item>
          <ListGroup.Item bsPrefix="list-inline-item"></ListGroup.Item>
        </ListGroup>
        <Navbar.Toggle>
          <TextIndentLeft
            size={32}
            className="text-primary"
            onClick={menuToggle}
          />
        </Navbar.Toggle>
      </div>
    </div>
  );
};

export default MobileHeader;

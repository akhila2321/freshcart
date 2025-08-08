// import node module libraries
import { ListGroup, Navbar } from "react-bootstrap";
import { TextIndentLeft } from "react-bootstrap-icons";
import { ShoppingBag, User } from "react-feather";
import Link from "next/link";

// import custom components
import FreshBadge from "components/common/FreshBadge";

// import sub components
import FreshcartBrand from "../sub-components/FreshcartBrand";

// import required hook
import useCartOperations from "hooks/useCartOperations";

const MobileHeader = ({ cartToggle, openSignUp, menuOpenToggle }) => {
  const { cartItems } = useCartOperations();

  return (
    <div className="d-flex justify-content-between w-100 d-lg-none">
      <FreshcartBrand />
      <div className="d-flex align-items-center lh-1">
        <ListGroup bsPrefix="list-inline me-4">
          <ListGroup.Item bsPrefix="list-inline-item me-3" role="button">
            <Link
              href=""
              className="text-muted"
              onClick={(e) => {
                e.preventDefault();
                openSignUp();
              }}
            >
              <User size={20} />
            </Link>
          </ListGroup.Item>
          <ListGroup.Item bsPrefix="list-inline-item" role="button">
            <Link
              href=""
              onClick={(e) => {
                e.preventDefault();
                cartToggle();
              }}
              className="text-muted position-relative"
            >
              <ShoppingBag size={20} />
              <FreshBadge
                content={cartItems.length}
                className="position-absolute top-0 start-100 translate-middle"
                bg="success"
                pill
              />
            </Link>
          </ListGroup.Item>
        </ListGroup>
        <Navbar.Toggle>
          <TextIndentLeft
            className="text-primary"
            size={32}
            onClick={() => menuOpenToggle()}
          />
        </Navbar.Toggle>
      </div>
    </div>
  );
};

export default MobileHeader;

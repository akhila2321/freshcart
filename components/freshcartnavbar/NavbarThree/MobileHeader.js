// import node module libraries
import Link from "next/link";
import { ListGroup } from "react-bootstrap";
import { TextIndentLeft } from "react-bootstrap-icons";
import { ShoppingBag, User } from "react-feather";

// import custom components
import FreshBadge from "components/common/FreshBadge";

// import sub components
import FreshcartBrand from "../sub-components/FreshcartBrand";

// import required hook
import useCartOperations from "hooks/useCartOperations";

const MobileHeader = ({ openMenu, openSignUp, openCart }) => {
  const { cartItems } = useCartOperations();

  return (
    <div className="d-flex justify-content-between w-100 d-lg-none align-items-center">
      <TextIndentLeft onClick={openMenu} size={24} className="text-primary" />
      <FreshcartBrand />
      <div className="d-flex align-items-center lh-1">
        <ListGroup bsPrefix="list-inline" className="me-2">
          <ListGroup.Item bsPrefix="list-inline-item">
            <Link
              href=""
              className="text-muted me-1"
              onClick={(e) => {
                e.preventDefault();
                openSignUp();
              }}
            >
              <User size={20} />
            </Link>
          </ListGroup.Item>
          <ListGroup.Item bsPrefix="list-inline-item">
            <Link
              href=""
              onClick={(e) => {
                e.preventDefault();
                openCart();
              }}
              className="text-muted position-relative"
            >
              <ShoppingBag size={20} />
              <FreshBadge
                content={cartItems?.length}
                className="position-absolute top-0 start-100 translate-middle"
                bg="success"
              />
            </Link>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};

export default MobileHeader;

// import node module libraries
import Link from "next/link";
import { ListGroup } from "react-bootstrap";
import { Heart, User, ShoppingBag } from "react-feather";

// import custom components
import FreshBadge from "components/common/FreshBadge";

// import required hook
import { useWishlist } from "hooks/useWishlist";
import useCartOperations from "hooks/useCartOperations";

const MenuIconList = ({ cartToggle, openSignUp }) => {
  const { wishListItems } = useWishlist();
  const { CartItems } = useCartOperations();

  return (
    <ListGroup bsPrefix="list-inline ms-auto d-lg-block d-none">
      <ListGroup.Item bsPrefix="list-inline-item me-6">
        <Link
          href="/shop/shop-wishlist"
          className="text-reset position-relative"
        >
          <Heart size={20} />
          <FreshBadge
            content={wishListItems?.length}
            bg="success"
            pill
            className="position-absolute top-0 start-100 translate-middle"
          />
        </Link>
      </ListGroup.Item>
      <ListGroup.Item
        bsPrefix="list-inline-item me-6"
        className="text-reset"
        href=""
      >
        <Link
          className="text-reset"
          href=""
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
          className="text-reset position-relative"
          onClick={(e) => {
            e.preventDefault();
            cartToggle();
          }}
        >
          <ShoppingBag size={20} />
          <FreshBadge
            content={CartItems?.length}
            bg="success"
            pill
            className="position-absolute top-0 start-100 translate-middle"
          />
        </Link>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default MenuIconList;

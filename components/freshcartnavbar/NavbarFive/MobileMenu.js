// import node module libraries
import React from "react";
import Link from "next/link";
import { Dropdown, Navbar } from "react-bootstrap";
import {
  Archive,
  Bell,
  Cart2,
  Funnel,
  PersonCircle,
  TextIndentLeft,
} from "react-bootstrap-icons";

// import custom components
import FreshBadge from "components/common/FreshBadge";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <Link
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    className="text-inherit"
  >
    {children}
  </Link>
));

CustomToggle.displayName = "Custom Toggle";

const MobileMenu = ({ menuToggle, signUpToggle, cartToggle, openFilter }) => {
  const menuList = [
    { icon: <PersonCircle size={22} onClick={signUpToggle} />, href: "" },
    { icon: <Archive size={22} />, href: "/user/account-orders" },
    { icon: <Cart2 size={22} onClick={cartToggle} />, href: "" },
    { icon: <Funnel size={24} onClick={openFilter} />, href: "" },
  ];

  return (
    <div className="bg-white position-fixed bottom-0 w-100 z-1 shadow-lg d-block d-lg-none text-center">
      <div className="d-flex align-items-center">
        <div className="w-25 icon-hover py-4">
          <Navbar.Toggle className="d-lg-none" onClick={() => menuToggle()}>
            <TextIndentLeft className="text-primary" size={22} />
          </Navbar.Toggle>
        </div>
        <Dropdown className="w-25 ms-2 py-4 icon-hover">
          <Dropdown.Toggle as={CustomToggle}>
            <div className="text-center">
              <div className="position-relative d-inline-block">
                <Bell size={22} />
                <FreshBadge
                  content="1"
                  className="position-absolute top-0 start-100 translate-middle"
                  bg="danger"
                />
              </div>
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu-lg p-0">
            <div>
              <h6 className="px-4 border-bottom py-3 mb-0">Notification</h6>
              <p className="mb-0 px-4 py-3">
                <Link href="/signin">Sign in </Link>
                or
                <Link href="/signup"> Register </Link>
                in or so you don t have to enter your details every time
              </p>
            </div>
          </Dropdown.Menu>
        </Dropdown>

        {menuList.map((item, index) => (
          <div className="w-25 ms-2 py-4 icon-hover" key={index}>
            <Link href={item.href} className="text-inherit">
              <div className="text-center">{item.icon}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;

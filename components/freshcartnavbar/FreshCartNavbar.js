// import node module libraries
import { Fragment } from "react";
import dynamic from "next/dynamic";

const NavbarOne = dynamic(() => import("./NavbarOne/NavbarOne"));
const NavbarTwo = dynamic(() => import("./NavbarTwo/NavbarTwo"));
const NavbarThree = dynamic(() => import("./NavbarThree/NavbarThree"));
const NavbarFour = dynamic(() => import("./NavbarFour/NavbarFour"));
const NavbarFive = dynamic(() => import("./NavbarFive/NavbarFive"));

const Index = ({
  variant,
  isMenuOpen,
  openMenu,
  closeMenu,
  isCartOpen,
  openCart,
  closeCart,
}) => {
  const renderNavbar = () => {
    switch (variant) {
      case "two":
        return <NavbarTwo />;
      case "three":
        return <NavbarThree />;
      case "four":
        return <NavbarFour />;
      case "five":
        return <NavbarFive />;
      default:
        return (
          <NavbarOne
            isMenuOpen={isMenuOpen}
            openMenu={openMenu}
            closeMenu={closeMenu}
          />
        );
    }
  };

  const NavbarComponent = renderNavbar();

  return <Fragment>{NavbarComponent}</Fragment>;
};

export default Index;

// import node module libraries
import { Fragment } from "react";

// import sub components
import Header from "./Header";
import NavigationMenu from "./NavigationMenu";
import MobileMenu from "./MobileMenu";

// import custom components
import { SignUpModal } from "components/modal/SignUpModal";
import OffcanvasCart from "components/cart/OffcanvasCart";

// import required hooks
import useToggle from "hooks/useToggle";
import { useNavigation } from "context/NavigationContext";

const NavbarFive = ({ onViewChange, activeView }) => {
  //Sign Up
  const {
    isToggled: isSignUpOpen,
    toggle: signUpToggle,
    handleClose: signUpClose,
  } = useToggle();

  //Shopping Cart
  const {
    isToggled: isCartOpen,
    toggle: cartToggle,
    handleClose: cartClose,
  } = useToggle();

  //Menu Toggle
  const {
    isToggled: isMenuOpen,
    toggle: menuToggle,
    handleClose: menuClose,
  } = useToggle();

  const handleNavigation = (view) => {
    onViewChange?.(view);
    menuClose();
  };

  return (
    <Fragment>
      <Header 
        signUpToggle={signUpToggle} 
        cartToggle={cartToggle} 
        menuToggle={menuToggle} 
        activeView={activeView}
        onNavigate={handleNavigation}
      />
      <NavigationMenu 
        isMenuOpen={isMenuOpen} 
        menuClose={menuClose} 
        activeView={activeView}
        onNavigate={handleNavigation}
      />
      <MobileMenu
        menuToggle={menuToggle}
        signUpToggle={signUpToggle}
        cartToggle={cartToggle}
        activeView={activeView}
        onNavigate={handleNavigation}
      />
      <SignUpModal isSignUpOpen={isSignUpOpen} signUpClose={signUpClose} />
      <OffcanvasCart show={isCartOpen} handleClose={cartClose} />
    </Fragment>
  );
};

export default NavbarFive;

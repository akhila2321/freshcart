// import node module libraries
import { Fragment } from "react";

// import sub components
import Header from "./Header";
import NavigationMenu from "./NavigationMenu";

// import required hooks
import useToggle from "hooks/useToggle";

const NavbarTwo = () => {
  //Menu Toggle
  const {
    isToggled: isMenuOpen,
    toggle: openMenu,
    handleClose: closeMenu,
  } = useToggle();

  //Location Toggle
  const {
    isToggled: isLocationOpen,
    toggle: openLocation,
    handleClose: closeLocation,
  } = useToggle();

  return (
    <Fragment>
      <Header
        menuOpenToggle={openMenu}
        isLocationOpen={isLocationOpen}
        openLocation={openLocation}
        closeLocation={closeLocation}
      />
      <NavigationMenu
        isMenuOpen={isMenuOpen}
        menuClose={closeMenu}
        openLocation={openLocation}
      />
    </Fragment>
  );
};

export default NavbarTwo;

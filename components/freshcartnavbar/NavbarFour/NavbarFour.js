// import node module libraries
import { Fragment } from "react";

// import sub components
import Header from "./Header";
import NavigationMenu from "./NavigationMenu";

// import required hooks
import useToggle from "hooks/useToggle";

const NavbarFour = () => {
  //Menu Toggle
  const { isToggled, toggle: menuToggle, handleClose } = useToggle();

  return (
    <Fragment>
      <Header menuToggle={menuToggle} />
      <NavigationMenu isMenuOpen={isToggled} menuClose={handleClose} />
    </Fragment>
  );
};

export default NavbarFour;

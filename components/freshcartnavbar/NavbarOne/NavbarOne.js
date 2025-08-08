// import sub components
import Topbar from "./Topbar";
import Header from "./Header";
import NavigationMenu from "./NavigationMenu";

// import required hook
import useToggle from "hooks/useToggle";

const NavbarOne = () => {
  const { isToggled, toggle, handleClose } = useToggle();

  return (
    <div className="border-bottom">
      <Topbar />
      <Header menuToggle={toggle} />
      <NavigationMenu show={isToggled} handleClose={handleClose} />
    </div>
  );
};

export default NavbarOne;

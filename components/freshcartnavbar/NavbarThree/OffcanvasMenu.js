// import node module libraries
import Link from "next/link";
import { Fragment } from "react";
import { Offcanvas, Image, Button } from "react-bootstrap";
import { MapPin } from "react-feather";
import { useSelector } from "react-redux";

// import sub components
import SearchInputForm from "../sub-components/SearchInputForm";
import CategoryCollapse from "../sub-components/CategoryCollapse";
import Navigation from "./Navigation";

// import required hooks
import useToggle from "hooks/useToggle";

// import custom components
import { LocationModal } from "components/modal/LocationModal";

const OffcanvasMenu = ({ isMenuOpen, menuClose }) => {
  const { isToggled, toggle, handleClose } = useToggle();
  const logo = useSelector((state) => state.app.logo)
  return (
    <Fragment>
      <Offcanvas
        show={isMenuOpen}
        onHide={menuClose}
        placement="start"
        className="p-4 w-xxl-20 w-lg-30"
        id="navbar-default2"
      >
        <div className="d-flex justify-content-between align-items-center mb-2">
          <Link href="/">
            <Image src={logo} alt="" />
          </Link>
          <Button variant="close" onClick={() => menuClose()} />
        </div>

        <div className="my-4">
          <SearchInputForm />

          <div className="mt-2">
            <Button
              variant="outline-gray-400"
              className="text-muted w-100"
              onClick={() => toggle()}
            >
              <MapPin className="me-2" size={14} />
              Pick Location
            </Button>
          </div>
        </div>

        <CategoryCollapse className={"mb-4"} />

        <Navigation />
      </Offcanvas>
      <LocationModal isLocationOpen={isToggled} locationClose={handleClose} />
    </Fragment>
  );
};

export default OffcanvasMenu;

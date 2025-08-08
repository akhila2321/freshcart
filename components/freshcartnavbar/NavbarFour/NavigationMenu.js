// import node modudle libraries
import { Fragment } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { Navbar, Container, Offcanvas, Image, Button } from "react-bootstrap";

// import sub components
import SearchInputForm from "../sub-components/SearchInputForm";
import PickLocationButton from "../sub-components/PickLocationButton";
import MainMenu from "../sub-components/MainMenu";
import CategoryDropdownWithIcon from "../sub-components/CategoryDropdownWithIcon";

// import custom components
import { LocationModal } from "components/modal/LocationModal";

// import required hook
import useToggle from "hooks/useToggle";

const NavigationMenu = ({ isMenuOpen, menuClose, pickLocationToggle }) => {
  const logo = useSelector((state) => state.app.logo)
  //Location Toggle
  const {
    isToggled: isLocationOpen,
    toggle: openLocation,
    handleClose: closeLocation,
  } = useToggle();

  return (
    <Fragment>
      <Navbar
        expand="lg"
        variant="light"
        className="navbar-default py-0 py-lg-2 border-top navbar-offcanvas-color"
      >
        <Container>
          <Offcanvas
            show={isMenuOpen}
            placement="start"
            responsive="lg"
            id="navbar-default"
          >
            <Offcanvas.Header className="pb-1">
              <Link href="">
                <Image src={logo} alt="" />
              </Link>
              <Button variant="close" onClick={() => menuClose()} />
            </Offcanvas.Header>

            <Offcanvas.Body>
              <div className="d-block d-lg-none mb-4">
                <SearchInputForm />

                <div className="mt-2">
                  <PickLocationButton
                    btnLabel="Pick Location"
                    className="text-muted w-100"
                    onClick={openLocation}
                  />
                </div>
              </div>

              {/* Navigation Menu */}
              <CategoryDropdownWithIcon />
              <MainMenu />
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>

      {/* Location Modal */}
      <LocationModal
        isLocationOpen={isLocationOpen}
        locationClose={closeLocation}
      />
    </Fragment>
  );
};

export default NavigationMenu;

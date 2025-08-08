// import node module libraries
import Link from "next/link";
import { useSelector } from "react-redux";
import { Navbar, Container, Offcanvas, Image, Button } from "react-bootstrap";

// import sub components
import CategoryCollapse from "../sub-components/CategoryCollapse";
import CategoryDropdown from "../sub-components/CategoryDropdown";
import MainMenu from "../sub-components/MainMenu";
import SearchInputForm from "../sub-components/SearchInputForm";
import PickLocationButton from "../sub-components/PickLocationButton";

// import required routes files
import { AllDepartment } from "routes/MainNavigation";

const NavigationMenu = ({ isMenuOpen, menuClose, openLocation }) => {
  const logo = useSelector((state) => state.app.logo)
  return (
    <Navbar
      expand="lg"
      variant="dark"
      bg="primary"
      className="py-0 py-lg-2 navbar-default"
    >
      <Container fluid>
        <Offcanvas
          show={isMenuOpen}
          onHide={menuClose}
          placement="start"
          responsive="lg"
          id="navbar-default"
        >
          <Offcanvas.Header className="pb-1">
            <Link href="/">
              <Image src={logo} alt="" />
            </Link>
            <Button variant="close" onClick={menuClose} />
          </Offcanvas.Header>

          <Offcanvas.Body>
            <div className="d-block d-lg-none mb-4">
              <SearchInputForm />

              <PickLocationButton
                btnLabel="Pick Location"
                onClick={openLocation}
                className="text-muted w-100 mt-2"
              />
            </div>

            {/* Mobile Category*/}
            <CategoryCollapse />

            {/* Desktop Category */}
            <CategoryDropdown items={AllDepartment} title="All Departments" />

            {/* Main Navigation */}
            <MainMenu className="navbar-offcanvas-color" />
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavigationMenu;

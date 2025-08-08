// import node module libraries
import Link from "next/link";
import { useSelector } from "react-redux";
import { Navbar, Container, Offcanvas, Image, Button } from "react-bootstrap";

// import sub components
import CategoryCollapse from "../sub-components/CategoryCollapse";
import CategoryDropdown from "../sub-components/CategoryDropdown";
import MainMenu from "../sub-components/MainMenu";
import SearchInputForm from "../sub-components/SearchInputForm";

// import required routes files
import { AllDepartment } from "routes/MainNavigation";

const NavigationMenu = ({ show, handleClose }) => {
  const logo = useSelector((state) => state.app.logo)
  return (
    <Navbar expand="lg" variant="light" className="py-0 pb-lg-4 navbar-default">
      <Container>
        <Offcanvas
          show={show}
          placement="start"
          responsive="lg"
          id="navbar-default"
        >
          <Offcanvas.Header className="pb-1">
            <Link href="/">
              <Image src={logo} alt="" />
            </Link>
            <Button variant="close" onClick={() => handleClose()} />
          </Offcanvas.Header>

          <Offcanvas.Body>
            <div className="d-block d-lg-none mb-4">
              <SearchInputForm />
            </div>
            <CategoryCollapse />
            <CategoryDropdown items={AllDepartment} title="All Departments" />
            <MainMenu />
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavigationMenu;

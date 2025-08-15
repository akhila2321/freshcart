// import node module libraries
import { useSelector } from "react-redux";
import { Navbar, Container, Offcanvas, Image, Button, Nav } from "react-bootstrap";
import { PersonCircle, X } from "react-bootstrap-icons";

// import custom components
import CategoryDropdownWithIcon from "../sub-components/CategoryDropdownWithIcon";

const NavigationMenu = ({ isMenuOpen, menuClose, activeView, onNavigate }) => {
  const logo = useSelector((state) => state.app.logo);
  
  const handleNavClick = (view) => {
    onNavigate?.(view);
    menuClose?.();
  };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'departments', label: 'Departments' },
    { id: 'fruits-vegetables', label: 'Fruits & Vegetables' },
    { id: 'bakery', label: 'Bakery' },
    { id: 'beverages', label: 'Beverages' },
    { id: 'dairy', label: 'Dairy & Eggs' },
  ];

  return (
    <Navbar
      expand="lg"
      variant="light"
      className="navbar-default p-0"
    >
      <Container className="px-0">
        <Offcanvas
          show={isMenuOpen}
          placement="start"
          id="main-navigation"
          className="border-0"
          style={{ width: '300px' }}
        >
          <Offcanvas.Header className="border-bottom p-3">
            <div className="d-flex align-items-center w-100 justify-content-between">
              <Image 
                src={logo} 
                alt="FreshCart" 
                style={{ height: '30px' }} 
                className="me-2" 
              />
              <Button 
                variant="link" 
                onClick={menuClose}
                className="p-0"
                aria-label="Close menu"
              >
                <X size={24} />
              </Button>
            </div>
          </Offcanvas.Header>
          <Offcanvas.Body className="p-0 d-flex flex-column">
            <Nav className="flex-column">
              {menuItems.map((item) => (
                <Nav.Item key={item.id} className="border-bottom">
                  <button
                    className={`w-100 text-start p-3 btn btn-link text-decoration-none ${activeView === item.id ? 'text-primary fw-bold' : 'text-dark'}`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.label}
                  </button>
                </Nav.Item>
              ))}
            </Nav>
            
            <div className="p-3 mt-auto border-top">
              <Button 
                variant="outline-secondary" 
                className="w-100 d-flex align-items-center justify-content-center"
                onClick={() => {
                  // Handle login/signup
                  menuClose?.();
                }}
              >
                <PersonCircle className="me-2" />
                Login / Sign Up
              </Button>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavigationMenu;

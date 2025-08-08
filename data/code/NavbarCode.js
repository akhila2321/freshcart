export const DefaultNavbarCode = `
<Navbar expand="lg" variant="light">
  <Navbar.Brand href="#home">
    <Image src="/images/logo/freshcart-logo.svg" alt="" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="navbarSupportedContent">
    <Nav className="me-auto" as="ul">
      <Nav.Item as="li"><Nav.Link href="#home" active>Home</Nav.Link></Nav.Item>
      <Nav.Item as="li"><Nav.Link href="#link">Link</Nav.Link></Nav.Item>
      <NavDropdown title="Dropdown" id="navbarDropdown">
        <NavDropdown.Item href="#">Action</NavDropdown.Item>
        <NavDropdown.Item href="#">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Item as="li"><Nav.Link href="#" disabled>Disabled</Nav.Link></Nav.Item>
    </Nav>
  </Navbar.Collapse>
</Navbar>
`.trim();

export const NavbarBrandCode = `
<Navbar variant="light">
  <Navbar.Brand>
    <Image src="/images/logo/freshcart-logo.svg" alt="" />
  </Navbar.Brand>
</Navbar>
`.trim();

export const OffcanvasCode = `
<div className="position-relative">
  <Navbar variant="light" className="bg-light" expand={false}>
    <Container fluid>
      <Navbar.Brand className="fs-3" href="">
        Offcanvas navbar
      </Navbar.Brand>
      <Navbar.Toggle as="span" className="navbar-toggler-icon" onClick={()=>
        toggle()} />
        <Offcanvas show={isToggled} onHide={handleClose} placement="end" id="offcanvasNavbar">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title as="h5" id="offcanvasNavbarLabel">
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav as="ul" className="justify-content-end flex-grow-1 pe-3 mb-2">
              <Nav.Item as="ul">
                <Nav.Link as="li" href="">
                  Home
                </Nav.Link>
                <Nav.Link as="li" href="">
                  Pages
                </Nav.Link>
                <Nav.Link as="li" href="">
                  Dashboard
                </Nav.Link>
                <Nav.Link as="li" href="">
                  Docs
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Form className="d-flex">
              <Form.Control className="me-2" type="search" placeholder="Search" />
              <Button variant="outline-success">
                Search
              </Button>
            </Form>
          </Offcanvas.Body>
        </Offcanvas>
    </Container>
  </Navbar>
</div>
`.trim();

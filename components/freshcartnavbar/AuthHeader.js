// import node module libraries
import Link from "next/link";
import { Navbar, Container } from "react-bootstrap";
import FreshcartBrand from "./sub-components/FreshcartBrand";

const AuthHeader = () => {
  return (
    <div className="border-bottom shadow-sm">
      <Navbar expand={false} variant="light" className="py-2">
        <Container className="justify-content-center justify-content-lg-between">
          <FreshcartBrand className="d-inline-block align-text-top" />
          <Navbar.Text>
            Already have an account?
            <Link href="/signin"> Sign in</Link>
          </Navbar.Text>
        </Container>
      </Navbar>
    </div>
  );
};

export default AuthHeader;

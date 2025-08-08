// import node module libraries
import Link from "next/link";
import { Navbar, Image } from "react-bootstrap";
import { useSelector } from "react-redux";

const FreshcartBrand = ({ className }) => {
  const logo = useSelector((state) => state.app.logo)
  return (
    <Navbar.Brand href="/" as={Link} className={className}>
      <Image src={logo} alt="Fresh Cart" />
    </Navbar.Brand>
  );
};

export default FreshcartBrand;

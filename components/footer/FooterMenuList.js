// import node module libraries
import { Nav } from "react-bootstrap";

export const FooterMenuList = ({ menuList }) => {
  return (
    <Nav className="flex-column">
      {menuList.map((category) => (
        <Nav.Item className="mb-2" key={category.id}>
          <Nav.Link href={category.link}>{category.title}</Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

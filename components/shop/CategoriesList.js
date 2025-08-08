// import node module libraries
import { Card, Nav } from "react-bootstrap";

const CategoriesList = ({ title = "Categories", data }) => {
  return (
    <Card className="mb-4 mb-lg-0">
      <Card.Body className="p-6">
        <h5 className="mb-3">{title}</h5>
        <Nav className="nav-category" as="nav">
          {data?.map((item) => (
            <Nav.Item as="li" className="border-bottom w-100" key={item.id}>
              <Nav.Link href={item.link}>{item.title}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Card.Body>
    </Card>
  );
};

export default CategoriesList;

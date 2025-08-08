// import  node module libraries
import { Nav } from "react-bootstrap";

// import required data files
import { storeCategoryData } from "data/StoreData";

const StoreCategoryNavigation = () => {
  return (
    <div>
      <Nav as="ul" className="flex-column nav-links">
        {storeCategoryData.map((item) => (
          <Nav.Item as="li" key={item.id}>
            <Nav.Link href={item.link}>{item.title}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
};

export default StoreCategoryNavigation;

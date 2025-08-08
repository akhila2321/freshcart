// import node module libraries
import { Nav } from "react-bootstrap";

// import required data files
import { storeNavigationData } from "data/StoreData";

const StoreNavigation = () => {
  return (
    <Nav className="flex-column nav-pills-dark" variant="pills" as="ul">
      {storeNavigationData.map((item, index) => (
        <Nav.Item key={item.id}>
          <Nav.Link
            active={index === 0 ? true : false}
            href={item.link}
            className="d-flex align-items-center "
          >
            {item.icon}
            {item.title}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default StoreNavigation;

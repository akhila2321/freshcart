// import node module libraries
import { useState } from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";

// import required data files
import { tabList } from "data/NewProductTabLists";
import { products } from "data/products/AllProductsData";

// import sub components
import NewProductsList from "./NewProductsList";

// import helper utility file
import { getProductsByCategoryNames, createTabSlug } from "helper/utils";

const NewProducts = () => {
  const [activeTab, setActiveTab] = useState(createTabSlug(tabList[0]));

  const handleTabSelect = (eventKey) => {
    setActiveTab(eventKey);
  };

  return (
    <section className="mb-lg-14 mb-8">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="mb-6 d-xl-flex justify-content-between align-items-center">
              {/* Heading */}
              <div className="mb-5 mb-xl-0">
                <h3 className="mb-0">New Products</h3>
                <p className="mb-0">New products with updated stocks</p>
              </div>
              <div>
                <Nav
                  className="border-bottom-0 gap-1"
                  id="nav-tab"
                  defaultActiveKey={activeTab}
                  variant="pills"
                  onSelect={handleTabSelect}
                >
                  {tabList.map((item) => (
                    <Nav.Item key={item}>
                      <Nav.Link eventKey={createTabSlug(item)}>{item}</Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Tab.Content id="nav-tabContent" onSelect={handleTabSelect}>
              {tabList.map((tab) => (
                <Tab.Pane
                  eventKey={createTabSlug(tab)}
                  key={tab}
                  active={activeTab === createTabSlug(tab)}
                >
                  <NewProductsList
                    products={getProductsByCategoryNames(tab, products)}
                  />
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewProducts;

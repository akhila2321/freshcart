// import node module libraries
import { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

// import sub components
import ShopSidebar from "./ShopSidebar";

// import custom components
import ShopHeading from "components/shop/ShopHeading";
import ProductFilters from "components/shop/ProductFilters";
import FreshBreadcrumb from "components/common/FreshBreadcrumb";

// import require hooks
import useToggle from "hooks/useToggle";

const ShopSidebarLayout = ({ children, title, productCount }) => {
  const {
    isToggled: isSidebarOpen,
    toggle: sidebarToggle,
    handleClose: sidebarClose,
  } = useToggle();

  return (
    <Fragment>
      <FreshBreadcrumb />
      <div className="mt-8 mb-lg-14 mb-8">
        <Container>
          <Row className="gx-10">
            {/* Shop Sidebar */}
            <Col lg={3} md={4} className="mb-6 mb-md-0" as="aside">
              <ShopSidebar
                isSidebarOpen={isSidebarOpen}
                sidebarClose={sidebarClose}
              />
            </Col>

            <Col lg={9} md={12} as={"section"}>
              {/* Shop Heading */}
              <ShopHeading title={title} />

              {/* Product Filteration */}
              <ProductFilters
                sidebarToggle={sidebarToggle}
                productCount={productCount}
              />

              {children}
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default ShopSidebarLayout;

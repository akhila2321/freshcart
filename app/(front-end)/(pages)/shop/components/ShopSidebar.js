// import node module libraries
import { Offcanvas } from "react-bootstrap";

// import custom components
import ShopBanner from "components/shop/ShopBanner";
import PriceRange from "components/common/PriceRange";
import StoreFilterList from "components/shop/StoreFilterList";
import CategoriesCollapse from "components/shop/CategoriesCollapse";
import ProductRatingFilter from "components/shop/ProductRatingFilter";

const ShopSidebar = ({ isSidebarOpen, sidebarClose }) => {
  return (
    <Offcanvas
      placement="start"
      className="offcanvas-collapse w-md-50"
      id="offcanvasCategory"
      show={isSidebarOpen}
      onHide={sidebarClose}
      responsive="lg"
    >
      <Offcanvas.Header className="d-lg-none" closeButton>
        <Offcanvas.Title id="offcanvasCategoryLabel">Filter</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="ps-lg-2 pt-lg-0 d-flex flex-column">

        {/* Category List */}
        <CategoriesCollapse />

        {/* Store Filter */}
        <StoreFilterList />

        {/* Price Range */}
        <PriceRange />

        {/* Rating */}
        <ProductRatingFilter />

        {/* Shop Banner */}
        <ShopBanner />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShopSidebar;

// import node module libraries
import { Button, Offcanvas } from "react-bootstrap";

// import sub components
import CategoryList from "./CategoryList";
import Testimonials from "./Testimonials";
import FeaturesWithLeftIcon from "components/features/FeaturesWithLeftIcon";

// import required data file
import { companyFeaturedData2 } from "data/CompanyFeaturedData";

const HomeSidebar = () => {
  return (
    <div id="sidebar">
      <div className="sidebar__inner">
        <Offcanvas placement="start" id="offcanvasCategory" responsive="lg">
          <Offcanvas.Header className="d-lg-none">
            <Offcanvas.Title as={"h5"} id="offcanvasCategoryLabel">
              Filter
            </Offcanvas.Title>
            <Button variant="close" />
          </Offcanvas.Header>
          <Offcanvas.Body className="p-lg-0 flex-column ">
            <CategoryList />

            <FeaturesWithLeftIcon data={companyFeaturedData2} />
            <Testimonials />
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
};

export default HomeSidebar;

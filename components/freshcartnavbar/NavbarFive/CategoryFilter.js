// import node module libraries
import { Button, Offcanvas, Card } from "react-bootstrap";

// import sub components
import FeaturesWithLeftIcon from "components/features/FeaturesWithLeftIcon";
import FreshAccordion from "components/common/FreshAccordion";
import TestimonialsCard from "components/cards/TestimonialsCard";

// import required routes files
import { category2Data } from "routes/CategoryNavigation";

// import required data file
import { companyFeaturedData2 } from "data/CompanyFeaturedData";
import { testimonialsData } from "data/TestimonialsData";

const CategoryFilter = ({ isOpen, close }) => {
  return (
    <div id="sidebar">
      <div className="sidebar__inner">
        <Offcanvas placement="start" show={isOpen} onHide={close}>
          <Offcanvas.Header className="d-lg-none">
            <Offcanvas.Title as={"h5"} id="offcanvasCategoryLabel">
              Filter
            </Offcanvas.Title>
            <Button variant="close" onClick={close} />
          </Offcanvas.Header>
          <Offcanvas.Body className="p-lg-0 flex-column ">
            <div className="mb-4">
              <h3 className="mb-4 h5">Categories</h3>
              <Card>
                <FreshAccordion
                  data={category2Data}
                  toggleClass="border-bottom w-100 collapsed px-4 py-1"
                  NavClass={"ms-8"}
                  showIcon
                />
              </Card>
            </div>

            <FeaturesWithLeftIcon data={companyFeaturedData2} />
            <TestimonialsCard data={testimonialsData} />
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
};

export default CategoryFilter;

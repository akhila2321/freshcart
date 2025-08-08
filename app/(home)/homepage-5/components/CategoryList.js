// import node module libraries
import { Card } from "react-bootstrap";

// import custom components
import FreshAccordion from "components/common/FreshAccordion";

// import required routes files
import { category2Data } from "routes/CategoryNavigation";

const CategoryList = () => {
  return (
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
  );
};

export default CategoryList;

// import helper utility file
import { createMarkup } from "helper/utils";

const CompanyFeaturedCard2 = ({ item, className }) => {
  const { icon, title, desc } = item;

  return (
    <div className={`mb-6 p-md-4 px-xl-12 text-center ${className}`}>
      <div>
        <div className="mb-8">{icon}</div>
        <h3 className="fs-5 mb-3">{title}</h3>
        <p className="mb-0" dangerouslySetInnerHTML={createMarkup(desc)}></p>
      </div>
    </div>
  );
};

export default CompanyFeaturedCard2;

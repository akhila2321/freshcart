// import custom components
import FreshcartBrand from "../sub-components/FreshcartBrand";
import SearchInputFormTwo from "../sub-components/SearchInputFormTwo";

const DeskTopHeader = () => {
  return (
    <div className="d-flex align-items-center">
      <FreshcartBrand className="d-none d-lg-block" />
      <div className="w-100 ms-4 d-none d-lg-block">
        <SearchInputFormTwo />
      </div>
    </div>
  );
};

export default DeskTopHeader;

// import node module libraries
import { Form, FormCheck } from "react-bootstrap";

// import required hook
import { useMounted } from "hooks/useMounted";

const StoreFilterList = ({ data, ...props }) => {
  const hasMounted = useMounted();
  return (
    <div className="mb-8" {...props}>
      <h5 className="mb-3">Stores</h5>
      <div className="my-4">
        <Form.Control type="search" placeholder="Search by store" />
      </div>

      {/* Store List with checkbox */}
      {hasMounted && data?.map((item, index) => (
        <FormCheck
          type="checkbox"
          label={item?.store_name}
          defaultChecked={index === 0}
          id={"store-" + item?.id}
          className="mb-2"
          key={item?.id}
        />
      ))}
    </div>
  );
};

export default StoreFilterList;

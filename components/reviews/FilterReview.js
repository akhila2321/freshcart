// import node module libraries
import { Form } from "react-bootstrap";

const FilterReview = () => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-8">
      <div>
        <h4>Reviews</h4>
      </div>
      <div>
        <Form.Select className="form-select">
          <option defaultValue={""}>Top Reviews</option>
          <option value="Most Recent">Most Recent</option>
        </Form.Select>
      </div>
    </div>
  );
};

export default FilterReview;

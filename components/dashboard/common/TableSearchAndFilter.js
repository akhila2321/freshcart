// import node module libraries
import { capitalizedWord } from "helper/utils";
import { Row, Col, Form } from "react-bootstrap";

const TableSearchAndFilter = ({ filterData, isFilter = true, onFilter }) => {
  const filterHandleChange = (e) => {
    const params = e.target.value;
    onFilter(params);
  };

  return (
    <div className="px-6 py-6">
      <Row className="justify-content-between">
        <Col lg={4} md={6} xs={12} className="mb-2 mb-lg-0">
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search Products" />
          </Form>
        </Col>
        {isFilter && (
          <Col lg={2} md={4} xs={12}>
            <Form.Select onChange={filterHandleChange}>
              <option defaultValue={"status"}>Status</option>
              {filterData?.map((item) => (
                <option value={item} key={item}>
                  {capitalizedWord(item)}
                </option>
              ))}
            </Form.Select>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default TableSearchAndFilter;

// import node module libraries
import { Row, Col, FormControl, FormLabel, FormSelect } from "react-bootstrap";

const GlobalFilter = ({ filtering, setFiltering, placeholder, table }) => {
  return (
    <Row className="justify-content-between align-items-center py-3 mb-2">
      <Col md={6} sm={12}>
        <FormLabel className="d-flex align-items-center fw-normal gap-2 ">
          Show{" "}
          <FormSelect
            size="sm"
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
            style={{ maxWidth: "fit-content", fontSize: "0.875rem" }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </FormSelect>
          entries
        </FormLabel>
      </Col>
      <Col md={6} sm={12} style={{ maxWidth: "fit-content" }}>
        <FormLabel className="d-flex align-content-center fw-normal gap-2">
          Search:
          <FormControl
            type="search"
            value={filtering || ""}
            placeholder={placeholder}
            onChange={(e) => setFiltering(e.target.value)}
            size="sm"
          />
        </FormLabel>
      </Col>
    </Row>
  );
};

export default GlobalFilter;

"use client";
// import custom components
import { useState } from "react";
import TanstackTable from "components/table/TanstackTable";
import { Card, Row, Col, Form } from "react-bootstrap";

// import helper utility file
import {
  getUniqueParam,
  capitalizedWord,
  searchWithFilter,
} from "helper/utils";

const DashboardDataTable = ({
  columns,
  data,
  pagination,
  isFilter,
  filterList,
  searchParams,
  filterItem = "status",
  placeholder,
  dropListName = "Status",
}) => {
  // Search Query
  const [searchQuery, setSearchQuery] = useState("");
  const [filterQuery, setFilterQuery] = useState("");

  if (!data) return null;

  //Get Filteration List
  const getFilterList = () => {
    if (filterList) {
      return filterList;
    } else {
      const filterData = getUniqueParam(data, "status");
      return filterData;
    }
  };

  const tableData = searchWithFilter(
    data,
    searchParams,
    searchQuery,
    filterItem,
    filterQuery
  );

  return (
    <Row>
      <Col xl={12} xs={12} className="mb-5">
        <Card className="h-100 card-lg">
          <div className="px-6 py-6">
            <Row className="justify-content-between">
              <Col lg={4} md={6} xs={12} className="mb-2 mb-lg-0">
                <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
                  <Form.Control
                    type="search"
                    placeholder={placeholder}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </Form>
              </Col>
              {isFilter && (
                <Col lg={2} md={4} xs={12}>
                  <Form.Select onChange={(e) => setFilterQuery(e.target.value)}>
                    <option value={""}>{dropListName}</option>
                    {getFilterList().map((item) => (
                      <option value={item} key={item}>
                        {capitalizedWord(item)}
                      </option>
                    ))}
                  </Form.Select>
                </Col>
              )}
            </Row>
          </div>
          <Card.Body className="p-0">
            <TanstackTable
              data={tableData}
              columns={columns}
              className="table-responsive"
              tableClass={"table-centered text-nowrap mb-0 table-with-checkbox"}
              tdClass="align-middle border-top-0"
              hover={true}
              borderless={true}
              pagination={pagination}
            />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default DashboardDataTable;

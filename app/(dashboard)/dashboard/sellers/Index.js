"use client";
// import node module libraries
import { Fragment, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { Grid, ListTask } from "react-bootstrap-icons";

// import custom components
import DashboardBreadcrumb from "components/dashboard/common/DashboardBreadcrumb";

// import sub components
import SellersGrid from "../components/SellersGrid";
import SellersTable from "../components/SellersTable";

const Index = () => {
  const [isGrid, setIsGrid] = useState(true);

  return (
    <Fragment>
      <Row className="mb-8">
        <Col md={12}>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h2>Vendors</h2>
              <DashboardBreadcrumb />
            </div>
            <div>
              <Button
                variant={isGrid ? "primary" : "light"}
                className="btn-icon me-1"
                onClick={() => {
                  setIsGrid(true);
                }}
              >
                <Grid size={18} />
              </Button>
              <Button
                variant={!isGrid ? "primary" : "light"}
                className="btn-icon"
                onClick={() => {
                  setIsGrid(false);
                }}
              >
                <ListTask size={18} />
              </Button>
            </div>
          </div>
        </Col>
      </Row>

      {isGrid ? <SellersGrid /> : <SellersTable />}
    </Fragment>
  );
};

export default Index;

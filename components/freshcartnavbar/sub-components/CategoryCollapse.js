// import node module libraries
import { useState } from "react";
import { Button, Collapse, Card, ListGroup } from "react-bootstrap";
import { Grid } from "react-feather";

// import required routes files
import { AllDepartment } from "routes/MainNavigation";

const CategoryCollapse = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className={className ? className : "d-block d-lg-none mb-4"}>
      <Button
        variant="primary"
        className="w-100 d-flex justify-content-center align-items-center"
        href=""
        onClick={(e) => {
          e.preventDefault();
          setIsCollapsed((prev) => !prev);
        }}
      >
        <span className="me-2">
          <Grid size={16} strokeWidth={1.25} />
        </span>
        All Departments
      </Button>

      {/* Department Collapse List */}
      <Collapse
        className="mt-2"
        id="collapseExample"
        in={isCollapsed}
        dimension="height"
      >
        <div id="collapseExample">
          <Card body>
            <ListGroup as="ul" bsPrefix="mb-0 list-unstyled">
              {AllDepartment.map((item) =>
                item.children.map((menu) => (
                  <ListGroup.Item
                    bsPrefix="dropdown-item"
                    as="li"
                    key={menu.id}
                  >
                    {menu.name}
                  </ListGroup.Item>
                ))
              )}
            </ListGroup>
          </Card>
        </div>
      </Collapse>
    </div>
  );
};

export default CategoryCollapse;

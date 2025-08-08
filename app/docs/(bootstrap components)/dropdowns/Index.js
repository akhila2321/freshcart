"use client";

// import node module libraries
import { Row, Col } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import sub components
import BasicDropdown from "./components/BasicDropdown";
import DropdownOptions from "./components/DropdownOptions";
import DropdownSize from "./components/DropdownSize";
import DropdownDirection from "./components/DropdownDirection";
import DropdownAlignment from "./components/DropdownAlignment";
import DropdownMenuContent from "./components/DropdownMenuContent";
import DropdownFilter from "./components/DropdownFilter";

// import required data file
import { dropdownLinks } from "data/SidebarContentLinks";

const Index = () => {
  return (
    <DocsInnerLayout links={dropdownLinks}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-2 display-3 fw-bold">Dropdowns</h1>
            <p className="mb-0 lead text-muted">
              Toggle contextual overlays for displaying lists of links and more
              with the Bootstrap dropdown plugin.
            </p>
          </div>
        </Col>
      </Row>
      <BasicDropdown />
      <DropdownOptions />
      <DropdownSize />
      <DropdownDirection />
      <DropdownAlignment />
      <DropdownMenuContent />
      <DropdownFilter />
    </DocsInnerLayout>
  );
};

export default Index;

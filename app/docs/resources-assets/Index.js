"use client";
// import node module libraries
import Link from "next/link";
import { Row, Col } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import sub components
import ResourcesTable from "./components/ResourcesTable";

// import required data file
import { resourcesLinks } from "data/SidebarContentLinks";
import {
  pluginResources,
  iconResources,
  imageResources,
} from "data/ResourcesData";

const Index = () => {
  return (
    <DocsInnerLayout links={resourcesLinks}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-0 fw-bold">Resources & assets</h1>
            <p className="mb-6 lead text-muted">
              First, let us take this opportunity to thank all the creative
              minds for their great products and plugins.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12} xs={12}>
          <div className="mb-8" id="plugins">
            <h2 className="fw-semibold">Plugins (libraries / packages)</h2>
            <p className="mb-3">
              The following dependencies are used with FreshCart Next.js theme, which are required to run the template.
            </p>
            <ResourcesTable data={pluginResources} />
          </div>
        </Col>
        <Col md={12} xs={12}>
          <div className="mb-8" id="icons">
            <h2 className="fw-semibold">Icons</h2>
            <p className="mb-3">All of the icons we use in FreshCart Next.js</p>
            <ResourcesTable data={iconResources} />
          </div>
        </Col>
        <Col md={12} xs={12}>
          <div className="mb-8" id="images">
            <h2 className="fw-semibold">Images</h2>
            <p className="mb-3">
              Images in FreshCart Next.js come almost exclusively from below website
              links.
            </p>
            <ResourcesTable data={imageResources} />
          </div>
        </Col>
        <Col md={12} xs={12}>
          <div className="mb-8" id="figma-files">
            <h2 className="fw-semibold">Figma Files</h2>
            <p className="mb-3">To get the Figma file send you request here <Link href="https://codescandy.com/contact-us/" target="_blank">Contact Us</Link></p>
          </div>
        </Col>
      </Row>
    </DocsInnerLayout>
  );
};

export default Index;

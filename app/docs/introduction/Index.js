"use client";
// import node module libraries
import { Row, Col } from "react-bootstrap";
import Link from "next/link";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import required data files
import { introductionLinks } from "data/SidebarContentLinks";

const Index = () => {
  return (
    <DocsInnerLayout links={introductionLinks}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-0 fw-bold">Introduction</h1>
            <p className="lead">
              A professional FreshCart Next.js Kit that comes with plenty of
              ready-to-use components that will help you to build more
              beautiful application (web app) and frontend pages.{' '}
            </p>

            <p >
              FreshCart Next.js theme is built with the most popular front-end framework{' '}
              <a
                href="https://react-bootstrap.github.io/"
                target="_blank"
                rel="noreferrer"
              >
                ReactJS Bootstrap
              </a>{' '}
              with react-scripts.
            </p>
            <p >
              This doc will guide you to understand how FreshCart-Next.js theme is
              organized, basics of how to customize, how to run, how to build, update, and integrate API!.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <div className="mb-8" id="setting-up">
            <h2 className="fw-semibold">Setting up local development</h2>
            <p className="mb-0">
              FreshCart Next.js is built using modern development toolset. For setting up
              local development you need core tool i.e. Node JS. <Link href="/docs/environment-setup">Read More</Link>
            </p>
          </div>
          <div className="mb-8" id="customize-theme">
            <div className="mb-4">
              <h2 className="fw-semibold">Customize your theme</h2>
              <p className="mb-0">
                Now that you’ve got your theme running and understand the
                compiling process, let’s discuss the proper ways to edit and
                customize your theme. <Link href="/docs/customize-theme">Read More</Link>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </DocsInnerLayout>
  );
};

export default Index;

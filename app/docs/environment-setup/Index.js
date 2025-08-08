"use client";

// import node module libraries
import Link from "next/link";
import { Row, Col, Image } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import required data files
import { environmentLinks } from "data/SidebarContentLinks";

const Index = () => {
  return (
    <DocsInnerLayout links={environmentLinks}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-0 fw-bold">Environment Setup</h1>
            <p className="mb-0 lead text-muted">
              To get started with FreshCart Next.js Theme, the only requirement is a
              Node JS other required packages like SASS, Next.js, React Bootstrap everything will be managed by theme itself.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12} xs={12}>
          <div className="mb-8">
            <h2 className="fw-semibold">Modern development toolset.</h2>
            <p className="mb-0">
              Below are the core tools which we use for building a FreshCart Next.js theme.
              For more detail of the toolset, go to their official websites.
            </p>
          </div>
          <div className="mb-8">
            <Row>
              <Col lg={6} xs={12}>
                <div className="mb-6">
                  <div className="mb-4">
                    <Image
                      src="/images/docs/nodejs.jpeg"
                      alt=""
                      className="avatar-md"
                    />
                  </div>
                  <h3 className="fw-semibold">Node Js</h3>
                  <p>
                    <Link href="https://nodejs.org/en/" target="_blank">
                      Node.js{" "}
                    </Link>
                    is an open-source, cross-platform, back-end JavaScript
                    runtime environment that runs on the V8 engine and executes
                    JavaScript code outside a web browser.
                  </p>
                </div>
              </Col>
              <Col lg={6} xs={12}>
                <div className="mb-6">
                  <div className="mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="40"><mask height="180" id=":r8:mask0_408_134" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: 'alpha' }}><circle cx="90" cy="90" fill="black" r="90"></circle></mask><g mask="url(#:r8:mask0_408_134)"><circle cx="90" cy="90" data-circle="true" fill="black" r="90"></circle><path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#:r8:paint0_linear_408_134)"></path><rect fill="url(#:r8:paint1_linear_408_134)" height="72" width="12" x="115" y="54"></rect></g><defs><linearGradient gradientUnits="userSpaceOnUse" id=":r8:paint0_linear_408_134" x1="109" x2="144.5" y1="116.5" y2="160.5"><stop stopColor="white"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id=":r8:paint1_linear_408_134" x1="121" x2="120.799" y1="54" y2="106.875"><stop stopColor="white"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></linearGradient></defs></svg>
                  </div>
                  <h3 className="fw-semibold">Next.js</h3>
                  <p>
                    <Link href="https://nextjs.org/" target="_blank">
                      Next.js {" "}
                    </Link> is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.
                  </p>
                </div>
              </Col>
              <Col lg={6} xs={12}>
                <div className="mb-6">
                  <div className="mb-4">
                    <Image
                      src="/images/docs/sass.jpeg"
                      alt=""
                      className="avatar-md"
                    />
                  </div>
                  <h3 className="fw-semibold">SASS</h3>
                  <p>
                    <Link href="https://sass-lang.com/" target="_blank">
                      Sass{" "}
                    </Link>
                    (short for syntactically awesome style sheets) is a
                    preprocessor scripting language that is interpreted or
                    compiled into Cascading Style Sheets (CSS).
                  </p>
                </div>
              </Col>
              <Col lg={6} xs={12}>
                <div className="mb-6">
                  <div className="mb-4">
                    <Image
                      src="/images/docs/react-bootstrap.svg"
                      alt=""
                      className="avatar-md"
                    />
                  </div>
                  <h3 className="fw-semibold">React Bootstrap</h3>
                  <p>
                    <Link href="https://react-bootstrap.netlify.app/" target="_blank">
                      React Bootstrap{" "}
                    </Link> replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </DocsInnerLayout>
  );
};

export default Index;

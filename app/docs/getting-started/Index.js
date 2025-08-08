"use client";

// import node module libraries
import { Row, Col } from "react-bootstrap";
import Link from "next/link";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import required data files
import { introductionLinks } from "data/SidebarContentLinks";
import { HighlightCode } from "components/common/HighlightCode";

const Index = () => {
  return (
    <DocsInnerLayout links={introductionLinks}>

      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-0 fw-bold">Getting Started</h1>

            <p className="lead">
              A professional FreshCart Next.js kit that comes with plenty of
              ready-to-use components that will help you to build more
              beautiful application (web app) and frontend pages.{' '}
            </p>

            <p>
              FreshCart Next.js UI kit is built with the most popular front-end framework{' '}
              <a
                href="https://react-bootstrap.github.io/"
                target="_blank"
                rel="noreferrer"
              >
                ReactJS Bootstrap
              </a>{' '}
              with react-scripts.
            </p>
            <p>
              This doc will guide you to understand how FreshCart Next.js theme is
              organized, basics of how to customize, and how to compile from
              the source code if you want.
            </p>

          </div>
        </Col>
      </Row>


      <Row>
        <Col md={12} xs={12}>
          <hr className="mb-5 mt-5" />

          <h2 className="mb-0 fw-bold" id="setting-up-locally">Running in Local environment</h2>
          <p>This project is scaffolded using <code>npx create-next-app@latest</code>.</p>

          <ol>
            <li>
              <h4 className="mb-0 fw-bold">Requirements Node.js</h4>
              <p>
                Before proceeding you&apos;ll need to have the latest <b>(&gt;=18.20.2)</b> stable (LTS){' '}
                <Link
                  href="https://nodejs.org/en/download/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  nodejs.
                </Link>{' '}
                Install <code>Node.js</code> or already have it installed on
                your machine move to next step.
              </p>
            </li>
            <li>
              {' '}
              <h4 className="mb-0 fw-bold">Install FreshCart Next.js</h4>
              <p>
                Open the <span>freshcart-next-js </span>directory with your cmd
                or terminal. Open the project folder and install its
                dependencies.{' '}
              </p>

              <HighlightCode className="p-5 bg-dark" code={'cd freshcart-next-js'} />

              <HighlightCode className="p-5 bg-dark" code={'npm install'} />

              <p>
                This command will download all the necessary dependencies
                for freshcart next.js theme in the node_modules directory.
              </p>
            </li>
            <li>
              <h4 className="mb-0 fw-bold">Start</h4>
              <p>
                Run <code>npm run dev</code> or <code>yarn dev</code> or <code>pnpm dev</code> to start the development server on http://localhost:3000
              </p>
              <p>
                Visit <code><Link
                  href="http://localhost:3000"
                  target="_blank"
                  rel="noreferrer"
                >
                  http://localhost:3000{' '}
                </Link></code> to view your application
              </p>
              <HighlightCode className="p-5 bg-dark" code={'npm run dev'} />

            </li>
          </ol>
          <hr className="mb-5 mt-5" />
          <h2 className="mb-0 fw-bold" id="production-build">Creating a Production Build.</h2>
          <p>Production build of your app.</p>
          <ol>
            <li>
              <div className="mb-4">
                <p>
                  Run <code>npm run build</code> command in your project
                  directory to make the Production build app.
                </p>
                <HighlightCode className="p-5 bg-dark" code={'npm run build'} />

              </div>
            </li>
            <li>
              <div className="">
                <p> This output is generated inside the <code>.next</code> folder:</p>
                <HighlightCode className="p-5 bg-dark" code={'npm run start'} />

                <p>
                  Once you execute above command, the production build run
                  locally at <code>http://localhost:3000</code>.
                </p>
              </div>
            </li>
          </ol>
        </Col>
      </Row>
    </DocsInnerLayout>
  );
};

export default Index;

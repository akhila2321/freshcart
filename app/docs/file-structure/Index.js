"use client";
// import node module libraries
import Link from "next/link";
import { Row, Col } from "react-bootstrap";

// import sub components
import File from "./components/File";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import required data files
import { fileStructureLinks } from "data/SidebarContentLinks";
import { fileStructureData } from "data/FileStructureData";

const Index = () => {
  return (
    <DocsInnerLayout links={fileStructureLinks}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="fw-bold display-3">File Structure</h1>
            <p className="mb-6 lead text-muted">
              This section will show you how to keep your files organized. Our
              theme file structure that looks like this.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12} xs={12}>
          <div className="mb-8">
            <h2 className="fw-semibold">Theme folder and file structure</h2>
            <p>
              Inside the zip-file you&apos;ll find the following directories and
              files. The application is created using <code>npx create-next-app@latest</code> by seleting following options at the time of setup.

            </p>
            <pre>
              What is your project named? <b>freshcart-next-js</b><br />
              Would you like to use TypeScript? <b>No</b><br />
              Would you like to use ESLint? <b>Yes</b><br />
              Would you like to use Tailwind CSS? <b>No</b><br />
              Would you like to use `src/` directory? <b>No</b><br />
              Would you like to use App Router? (recommended) <b>Yes</b><br />
              Would you like to customize the default import alias (@/*)? <b>Yes</b><br />
              What import alias would you like configured? ./*
            </pre>

            <p>For more detailed Next.js application directories and files structure, visit <Link href="https://nextjs.org/docs/getting-started/project-structure" target="_blank">Next.js</Link> site.</p>
          </div>
          <div>
            <h4 className="mb-3">
              For instance, here is how the FreshCart Theme organizes its file
              structure:
            </h4>
            {fileStructureData.map((file, index) => (
              <File key={file.id} file={file} index={index} />
            ))}
          </div>
        </Col>
      </Row>

    </DocsInnerLayout>
  );
};

export default Index;

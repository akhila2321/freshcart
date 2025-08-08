"use client";
// import node module libraries
import { Row, Col } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import required data files
import { changelogLinks } from "data/SidebarContentLinks";
import { HighlightCode } from "components/common/HighlightCode";

const Index = () => {

  const newStyleVariables = `// Theme Colors
$primary: #ef1e65 !default;
$secondary: #424e68 !default;
$success: #6786b7 !default;
$info: #c8c6c4 !default;
$warning: #b4c9e1 !default;
$danger: #dd4040 !default;
$light: #f2f2f2 !default;
$dark: #000101 !default;

// Light Colors
$light-primary: #ffeef7 !default;
$light-secondary: #707785 !default;
$light-success: #aeb6c5 !default;
$light-info: #dfddda !default;
$light-warning: #eaecf0 !default;
$light-danger: #f27474 !default;
$light-dark: #151717 !default;

// Dark Colors
$dark-primary: #cb0547 !default;
$dark-secondary: #2b3957 !default;
$dark-success: #476ba5 !default;
$dark-danger: #d32424 !default;
$dark-warning: #85aad3 !default;
$dark-info: #b09377 !default;`;

  const changeLogo = `app: {
  ...
  logo: "/images/logo/freshcart-logo.svg",
  logoWhite: "/images/logo/freshcart-white-logo.svg",
  ...
}`;
  return (
    <DocsInnerLayout links={changelogLinks}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-7" id="intro">
            <h1 className="mb-0 fw-bold">Customize FreshCart Theme</h1>
            <p className="mb-6 lead text-muted">
              Customize your application&apos;s default colors codes easily in real time.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12} xs={12}>
          <Row className="docs-example mt-7">
            <Col md={12} xs={12}>
              <div id="colors">
                <h3 className="mb-0">How to change color variables ?</h3><br />

                <p>Here, we will go over how you can customize the theme/colors in our template.<br /><br />
                  Theme&apos;s colors variables are defined in <code>/styles/theme/_variables.scss</code> file, but it&apos;s not preferable to modify this core style sheet file.
                  If you want to override values of these variables, you can use below file i.e. <code>_user-variables.scss</code>.
                  To update primary colors to something else navigate to below mentioned theme file and update value to desired colors in themes you like.</p>

                File: <code>/styles/_user-variables.scss</code>

                <p>In order to demonstrate this, here is a code example you can paste into <code>/styles/_user-variables.scss</code>, save the file and check the result of customized colors.</p>
                <HighlightCode className="p-5 bg-dark mt-4" code={newStyleVariables} />

              </div>
            </Col>
            <Col md={12} xs={12}>
              <div id="logo">
                <h3 className="mb-0">How to change logo?</h3><br />

                <p>Here, we will go over how you can change or replace current/default branding by replacing the light and dark versions of logo.</p>

                File: <code>app.config.js</code>

                <p>Open the above mentioned file, located on sourcecode root and modify urls for logo and logoWhite to change logo.</p>
                <HighlightCode className="p-5 bg-dark mt-4" code={changeLogo} />

              </div>
            </Col>

            <Col md={12} xs={12}>
              <div id="favicon">
                <h3 className="mb-0">How to change Favicon?</h3><br />

                <p>To change the favicon of the theme, you just need to replace favicon.ico file located at below path.</p>

                File: <code>/app/favicon.ico</code>

              </div>
            </Col>

          </Row>
        </Col>
      </Row>
    </DocsInnerLayout>
  );
};

export default Index;

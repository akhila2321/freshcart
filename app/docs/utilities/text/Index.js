"use client";

// import node module libraries
import Link from "next/link";
import { Row, Col, Tab, Badge } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import {
  FontSizeCode,
  FontWeightCode,
  LineHeightCode,
  MonospaceCode,
  ResetCode,
  TextAligmentCode,
  TextBreakCode,
  TextDecorationCode,
  TextTransformCode,
  TextWrappingCode,
  TextWrappingTwoCode,
} from "data/code/utilitiesCode/TextCode";
import { TextLinks } from "data/SidebarContentLinks";

const Index = () => {
  return (
    <DocsInnerLayout links={TextLinks}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-0 fw-bold">Text</h1>
            <p className="mb-0 lead text-muted">
              Documentation and examples for common text utilities to control
              alignment, wrapping, weight, and more.
            </p>
          </div>
        </Col>
      </Row>
      {/* Text Alignment */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-4" id="text-alignment">
            <h2>Text alignment</h2>

            <p>
              Easily realign text to components with text alignment classes. For
              start, end, and center alignment, responsive classes are available
              that use the same viewport width breakpoints as the grid system.
            </p>
          </div>

          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <p className="text-start">
                  Start aligned text on all viewport sizes.
                </p>
                <p className="text-center">
                  Center aligned text on all viewport sizes.
                </p>
                <p className="text-end">
                  End aligned text on all viewport sizes.
                </p>

                <p className="text-sm-start">
                  Start aligned text on viewports sized SM (small) or wider.
                </p>
                <p className="text-md-start">
                  Start aligned text on viewports sized MD (medium) or wider.
                </p>
                <p className="text-lg-start">
                  Start aligned text on viewports sized LG (large) or wider.
                </p>
                <p className="text-xl-start">
                  Start aligned text on viewports sized XL (extra-large) or
                  wider.
                </p>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={TextAligmentCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Text Wrapping */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-4" id="text-wrapping-and-overflow">
            <h2>Text wrapping and overflow</h2>
            <p>
              Wrap text with a<code>.text-wrap </code>
              class.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Badge
                  bg={"primary"}
                  className="text-wrap"
                  style={{ width: "6rem" }}
                >
                  This text should wrap.
                </Badge>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={TextWrappingCode} />
              </Tab.Pane>
            </CustomTab>
          </div>

          <div className="mb-10">
            <p>
              Prevent text from wrapping with a<code> .text-nowrap </code>
              class.
            </p>
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <div
                  className="text-nowrap bg-light border"
                  style={{ width: "8rem" }}
                >
                  This text should overflow the parent.
                </div>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={TextWrappingTwoCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Word Break */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-4" id="word-break">
            <h2>Word break</h2>
            <p>
              Prevent long strings of text from breaking your components&apos;
              layout by using
              <code> .text-break </code>
              to set
              <code> word-wrap: break-word </code>
              and
              <code> word-break: break-word </code>. We use
              <code> word-wrap </code>
              instead of the more common
              <code> overflow-wrap </code>
              for wider browser support, and add the deprecated
              <code> word-break: break-word </code>
              to avoid issues with flex containers.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <p className="text-break">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={TextBreakCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Text Transform */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-4" id="text-transform">
            <h2>Text transform</h2>
            <p>
              Transform text in components with text capitalization classes.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <p className="text-lowercase">Lowercased text.</p>
                <p className="text-uppercase">Uppercased text.</p>
                <p className="text-capitalize">CapiTaliZed text.</p>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={TextTransformCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Font Size */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-4" id="font-size">
            <h2>Font size</h2>
            <p>
              Quickly change the
              <code> font-size </code>
              of text. While our heading classes (e.g.,
              <code> .h1 </code>–<code> .h6 </code>) apply
              <code> font-size </code>,<code> font-weight </code>, and
              <code> line-height </code>, these utilities
              <em>only</em>
              apply
              <code> font-size </code>. Sizing for these utilities matches
              HTML’s heading elements, so as the number increases, their size
              decreases.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <p className="fs-1">.fs-1 text</p>
                <p className="fs-2">.fs-2 text</p>
                <p className="fs-3">.fs-3 text</p>
                <p className="fs-4">.fs-4 text</p>
                <p className="fs-5">.fs-5 text</p>
                <p className="fs-6">.fs-6 text</p>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={FontSizeCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Font Weight */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-4" id="font-weight-and-italics">
            <h2>Font weight and italics</h2>
            <p>
              Quickly change the
              <code> font-weight </code>
              or
              <code> font-style </code>
              of text with these utilities.
              <code> font-style </code>
              utilities are abbreviated as
              <code> .fst-* </code>
              and
              <code> font-weight </code>
              utilities are abbreviated as
              <code> .fw-* </code>.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <p className="fw-bold">Bold text.</p>
                <p className="fw-bolder">
                  Bolder weight text (relative to the parent element).
                </p>
                <p className="fw-normal">Normal weight text.</p>
                <p className="fw-light">Light weight text.</p>
                <p className="fw-lighter">
                  Lighter weight text (relative to the parent element).
                </p>
                <p className="fst-italic">Italic text.</p>
                <p className="fst-normal">Text with normal font style</p>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={FontWeightCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Line Height */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-4" id="line-height">
            <h2>Line height</h2>
            <p>
              Change the line height with
              <code>.lh-*</code>
              utilities.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <p className="lh-1">
                  This is a long paragraph written to show how the line-height
                  of an element is affected by our utilities. Classes are
                  applied to the element itself or sometimes the parent element.
                  These classes can be customized as needed with our utility
                  API.
                </p>
                <p className="lh-sm">
                  This is a long paragraph written to show how the line-height
                  of an element is affected by our utilities. Classes are
                  applied to the element itself or sometimes the parent element.
                  These classes can be customized as needed with our utility
                  API.
                </p>
                <p className="lh-base">
                  This is a long paragraph written to show how the line-height
                  of an element is affected by our utilities. Classes are
                  applied to the element itself or sometimes the parent element.
                  These classes can be customized as needed with our utility
                  API.
                </p>
                <p className="lh-lg">
                  This is a long paragraph written to show how the line-height
                  of an element is affected by our utilities. Classes are
                  applied to the element itself or sometimes the parent element.
                  These classes can be customized as needed with our utility
                  API.
                </p>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={LineHeightCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Monospace */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-4" id="monospace">
            <h2>Monospace</h2>
            <p>
              Change a selection to our monospace font stack with
              <code> .font-monospace </code>.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <p className="font-monospace">This is in monospace</p>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={MonospaceCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Reset Color */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-4" id="reset-color">
            <h2>Reset color</h2>
            <p>
              Reset a text or link’s color with
              <code>.text-reset</code>, so that it inherits the color from its
              parent.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <p className="text-muted">
                  Muted text with a
                  <Link href="#" className="text-reset">
                    reset link
                  </Link>
                  .
                </p>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={ResetCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Text Decoration */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-4" id="text-decoration">
            <h2>Text decoration</h2>
            <p>Decorate text in components with text decoration classes.</p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <p className="text-decoration-underline">
                  This text has a line underneath it.
                </p>
                <p className="text-decoration-line-through">
                  This text has a line going through it.
                </p>
                <Link href="#" className="text-decoration-none">
                  This link has its text decoration removed
                </Link>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={TextDecorationCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </DocsInnerLayout>
  );
};

export default Index;

"use client";

// import node module libraries
import Link from "next/link";
import { Table, Row, Col, Tab, ListGroup } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { TypographyLinks } from "data/SidebarContentLinks";
import {
  BlockquotesAlignmentCode,
  BlockquotesAlignmentRightCode,
  BlockquotesCode,
  BlockquotesNamingCode,
  DescriptionListCode,
  LetterSpacingCode,
  TypographyBodyTextCode,
  TypographyDisplayCode,
  TypographyFancyHeadingCode,
  TypographyHeadingCode,
  TypographyInlineListCode,
  TypographyInlineTextCode,
  TypographyLeadCode,
  TypographyListCode,
} from "data/code/foundationCode/TypographyCode";

const Index = () => {
  return (
    <DocsInnerLayout links={TypographyLinks}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-2 display-3 fw-bold">Typography</h1>
            <p className="mb-0 lead text-muted">
              Documentation and examples for Bootstrap typography, including
              global settings, headings, body text, lists, and more.
            </p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="headings" className="mb-4">
            <h2>Headings</h2>
            <p>
              All HTML headings,
              <code className="highlighter-rouge">&lt;h1&gt; </code>
              through
              <code className="highlighter-rouge"> &lt;h6&gt;</code>, are
              available.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Table className="table">
                  <thead className="table-light">
                    <tr>
                      <th>Heading</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <p>
                          <code className="highlighter-rouge">
                            &lt;h1&gt;&lt;/h1&gt;
                          </code>
                        </p>
                      </td>
                      <td>
                        <span className="h1">h1. Bootstrap heading</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <code className="highlighter-rouge">
                            &lt;h2&gt;&lt;/h2&gt;
                          </code>
                        </p>
                      </td>
                      <td>
                        <span className="h2">h2. Bootstrap heading</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <code className="highlighter-rouge">
                            &lt;h3&gt;&lt;/h3&gt;
                          </code>
                        </p>
                      </td>
                      <td>
                        <span className="h3">h3. Bootstrap heading</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <code className="highlighter-rouge">
                            &lt;h4&gt;&lt;/h4&gt;
                          </code>
                        </p>
                      </td>
                      <td>
                        <span className="h4">h4. Bootstrap heading</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <code className="highlighter-rouge">
                            &lt;h5&gt;&lt;/h5&gt;
                          </code>
                        </p>
                      </td>
                      <td>
                        <span className="h5">h5. Bootstrap heading</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <code className="highlighter-rouge">
                            &lt;h6&gt;&lt;/h6&gt;
                          </code>
                        </p>
                      </td>
                      <td>
                        <span className="h6">h6. Bootstrap heading</span>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={TypographyHeadingCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
          <div>
            <div className="mb-4">
              <h2>Customizing headings</h2>
              <p>
                Use the included utility classes to recreate the small secondary
                heading text from Bootstrap 3.
              </p>
            </div>
            <div className="mb-10">
              <CustomTab defaultActiveKey={"design"}>
                <Tab.Pane title="Design" eventKey={"design"}>
                  <h3>
                    Fancy display heading
                    <small className="text-muted">
                      With faded secondary text
                    </small>
                  </h3>
                </Tab.Pane>
                <Tab.Pane title="Code" eventKey={"code"}>
                  <HighlightCode code={TypographyFancyHeadingCode} />
                </Tab.Pane>
              </CustomTab>
            </div>
          </div>
        </Col>
      </Row>

      {/* Opacity */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="display-headings" className="mb-4">
            <h2>Display headings</h2>
            <p>
              Traditional heading elements are designed to work best in the meat
              of your page content. When you need a heading to stand out,
              consider using a <strong>display heading</strong>
              —a larger, slightly more opinionated heading style. Keep in mind
              these headings are not responsive by default, but it’s possible to
              enable
              <Link href="#">responsive font sizes</Link>.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Table>
                  <tbody>
                    <tr>
                      <td className="border-top-0 ps-0">
                        <span className="display-1">Display 1</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="ps-0">
                        <span className="display-2">Display 2</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="ps-0">
                        <span className="display-3">Display 3</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="ps-0">
                        <span className="display-4">Display 4</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="ps-0">
                        <span className="display-5">Display 5</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="ps-0 border-bottom-0">
                        <span className="display-6">Display 6</span>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={TypographyDisplayCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Body Text */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="body" className="mb-4">
            <h2>Body text</h2>
            <p>
              The body text or body copy is the text forming the main content.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <p>
                  In ultricies fermentum aliquet. Pellentesque dui magna,
                  condimentum non ullamcorper at, cursus in sem. Nunc
                  condimentum, purus ac sagittis ultricies, metus leo pharetra
                  mi, non vehicula felis elit et nisi. Etiam venenatis commodo
                  libero, vel ullamcorper nibh lobortis vel. Aliquam auctor
                  porta tortor, nec consequat nibh finibus a. Sed ultrices risus
                  eget iaculis luctus. Mauris vel gravida magna.
                </p>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={TypographyBodyTextCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Lead text */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="lead" className="mb-4">
            <h2>Lead text</h2>
            <p>
              Make a paragraph stand out by adding
              <code className="highlighter-rouge">.lead</code>.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <p className="lead">
                  This is a lead paragraph. It stands out from regular
                  paragraphs.
                </p>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={TypographyLeadCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Inline text elements */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="inline-text-elements" className="mb-4">
            <h2>Inline text elements</h2>
            <p>Styling for common inline HTML5 elements.</p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <p>
                  You can use the mark tag to
                  <mark>highlight</mark>
                  text.
                </p>
                <p>
                  <del>
                    This line of text is meant to be treated as deleted text.
                  </del>
                </p>
                <p>
                  <s>
                    This line of text is meant to be treated as no longer
                    accurate.
                  </s>
                </p>
                <p>
                  <ins>
                    This line of text is meant to be treated as an addition to
                    the document.
                  </ins>
                </p>
                <p>
                  <u>This line of text will render as underlined</u>
                </p>
                <p>
                  <small>
                    This line of text is meant to be treated as fine print.
                  </small>
                </p>
                <p>
                  <strong>This line rendered as bold text.</strong>
                </p>
                <p>
                  <em>This line rendered as italicized text.</em>
                </p>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={TypographyInlineTextCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Blockquotes */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="blockquotes" className="mb-4">
            <h2>Blockquotes</h2>
            <p>
              For quoting blocks of content from another source within your
              document. Wrap
              <code className="highlighter-rouge">
                {" "}
                &lt;blockquote className=&quot;blockquote&quot;&gt;{" "}
              </code>
              around any
              <abbr title="HyperText Markup Language">HTML</abbr>
              as the quote.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={BlockquotesCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Naming a source */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="naming-a-source" className="mb-4">
            <h3 className="fw-semibold mb-1">Naming a source</h3>
            <p>
              Add a
              <code className="highlighter-rouge">
                {" "}
                &lt;footer className=&quot;blockquote-footer&quot;&gt;{" "}
              </code>
              for identifying the source. Wrap the name of the source work in
              <code className="highlighter-rouge"> &lt;cite&gt; </code>.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <figure>
                  <blockquote className="blockquote">
                    <p>
                      A well-known quote, contained in a blockquote element.
                    </p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    Someone famous in
                    <cite title="Source Title">Source Title</cite>
                  </figcaption>
                </figure>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={BlockquotesNamingCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
      {/* Aligment */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="alignment" className="mb-4">
            <h3 className="fw-semibold mb-1">Alignment</h3>
            <p>
              Use text utilities as needed to change the alignment of your
              blockquote.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <figure className="text-center">
                  <blockquote className="blockquote">
                    <p>
                      A well-known quote, contained in a blockquote element.
                    </p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    Someone famous in
                    <cite title="Source Title">Source Title</cite>
                  </figcaption>
                </figure>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={BlockquotesAlignmentCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <figure className="text-end">
                  <blockquote className="blockquote">
                    <p>
                      A well-known quote, contained in a blockquote element.
                    </p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    Someone famous in
                    <cite title="Source Title">Source Title</cite>
                  </figcaption>
                </figure>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={BlockquotesAlignmentRightCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Lists */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="lists" className="mb-4">
            <h2>Lists</h2>
            <div className="mt-4" id="unstyled">
              <h3 className="fw-semibold">Unstyled</h3>
              <p>
                Remove the default
                <code className="highlighter-rouge"> list-style </code>
                and left margin on list items (immediate children only).
                <strong>
                  This only applies to immediate children list items
                </strong>
                , meaning you will need to add the class for any nested lists as
                well.
              </p>
            </div>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <ListGroup bsPrefix="list-unstyled" as="ul">
                  <ListGroup.Item as="li">
                    Lorem ipsum dolor sit amet
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    Consectetur adipiscing eListGroup.Itemt
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    Integer molestie lorem at massa
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    Facilisis in pretium nisl aliquet
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    Nulla volutpat aliquam velit
                    <ul>
                      <li>Phasellus iaculis neque</li>
                      <li>Purus sodales ultricies</li>
                      <li>Vestibulum laoreet porttitor sem</li>
                      <li>Ac tristique libero volutpat at</li>
                    </ul>
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    Faucibus porta lacus fringilla vel
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    Aenean sit amet erat nunc
                  </ListGroup.Item>
                  <ListGroup.Item as="li">Eget porttitor lorem</ListGroup.Item>
                </ListGroup>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={TypographyListCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Inline */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="inline" className="mb-4">
            <h2>Inline</h2>
            <p>
              Remove a list’s bullets and apply some light
              <code className="highlighter-rouge"> margin </code>
              with a combination of two classes,
              <code className="highlighter-rouge"> .list-inline </code>
              and
              <code className="highlighter-rouge"> .list-inline-item </code>.
            </p>
          </div>
          <div id="inline" className="mb-4">
            <h2>Inline</h2>
            <p>
              Remove a list’s bullets and apply some light
              <code className="highlighter-rouge"> margin </code>
              with a combination of two classes,
              <code className="highlighter-rouge"> .list-inline </code>
              and
              <code className="highlighter-rouge"> .list-inline-item </code>.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <ListGroup bsPrefix="list-inline">
                  <ListGroup.Item bsPrefix="list-inline-item">
                    Lorem ipsum
                  </ListGroup.Item>
                  <ListGroup.Item bsPrefix="list-inline-item">
                    Phasellus iaculis
                  </ListGroup.Item>
                  <ListGroup.Item bsPrefix="list-inline-item">
                    Nulla volutpat
                  </ListGroup.Item>
                </ListGroup>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={TypographyInlineListCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Description list alignment */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="description-list-alignment" className="mb-4">
            <h2>Description list alignment</h2>
            <p>
              Align terms and descriptions horizontally by using our grid
              system’s predefined classes (or semantic mixins). For longer
              terms, you can optionally add a
              <code className="highlighter-rouge"> .text-truncate </code>
              class to truncate the text with an ellipsis.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Row as="dl">
                  <Col as="dt" sm={3}>
                    Description lists
                  </Col>
                  <Col as="dd" sm={9}>
                    A description list is perfect for defining terms.
                  </Col>
                  <Col as="dt" sm={3}>
                    Euismod
                  </Col>
                  <Col as="dd" sm={9}>
                    <p>
                      Vestibulum id ligula porta felis euismod semper eget
                      lacinia odio sem nec elit.
                    </p>
                    <p>Donec id elit non mi porta gravida at eget metus.</p>
                  </Col>
                  <Col sm={3} as="dt">
                    Malesuada porta
                  </Col>
                  <Col sm={9} as="dd">
                    Etiam porta sem malesuada magna mollis euismod.
                  </Col>
                  <Col sm={3} as="dt" className="text-truncate">
                    Truncated term is truncated
                  </Col>
                  <Col sm={9} as="dd">
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris
                    condimentum nibh, ut fermentum massa justo sit amet risus.
                  </Col>
                  <Col sm={3} as="dt">
                    Nesting
                  </Col>
                  <Col sm={9} as="dd">
                    <Row as="dl">
                      <Col sm={4} as="dt">
                        Nested definition list
                      </Col>
                      <Col sm={8} as="dd">
                        Aenean posuere, tortor sed cursus feugiat, nunc augue
                        blandit nunc.
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={DescriptionListCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Letter Spacing */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="letterspace" className="mb-4">
            <h2>Letter Spacing</h2>
            <p>
              Change the letter spacing with
              <code>.ls-*</code>
              utilities.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <div>
                  <h3 className="ls-xs mb-3">Heading Title of Letter space</h3>
                  <h3 className="ls-sm mb-3">Heading Title of Letter space</h3>
                  <h3 className="ls-base mb-3">
                    Heading Title of Letter space
                  </h3>
                  <h3 className="ls-md mb-3">Heading Title of Letter space</h3>
                  <h3 className="ls-lg mb-3">Heading Title of Letter space</h3>
                  <h3 className="ls-xl mb-3">Heading Title of Letter space</h3>
                  <h3 className="ls-xxl mb-3">Heading Title of Letter space</h3>
                </div>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={LetterSpacingCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </DocsInnerLayout>
  );
};

export default Index;

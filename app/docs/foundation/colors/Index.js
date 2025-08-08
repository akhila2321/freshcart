"use client";

// import node module libraries
import { Row, Col } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import required data files
import {
  darkColors,
  grayColors,
  lightColors,
  themeColors,
} from "data/code/foundationCode/ColorsCode";

const Index = () => {
  return (
    <DocsInnerLayout isOpen={false}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-0 fw-bold">Colors</h1>
            <p className="mb-0 lead text-muted">
              FreshCart color design system can help you create a color theme
              that reflects your brand or style.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-4" id="color">
            <h2 className="mb-0 fw-semibold">Theme Colors</h2>
          </div>
        </Col>
        <Row className="color-swatches">
          {themeColors.map((color, index) => (
            <Col xl={3} lg={4} md={4} sm={6} xs={6} key={index}>
              <div className="color-swatch">
                <div className={`color-swatch-header bg-${color.name}`}></div>
                <div className="color-swatch-body">
                  <h5 className="color-swatch-body-label">{color.title}</h5>
                  <p className="color-swatch-body-value">{color.hexCode}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <div className="mt-10 mb-4">
          <h2 className="mb-0 fw-semibold">Gray</h2>
        </div>

        <Row className="color-swatches">
          {grayColors.map((color, index) => (
            <Col xl={3} lg={4} md={4} sm={6} xs={6} key={index}>
              <div className="color-swatch">
                <div className={`color-swatch-header bg-${color.title}`}></div>
                <div className="color-swatch-body">
                  <h5 className="color-swatch-body-label">{color.title}</h5>
                  <p className="color-swatch-body-value">{color.hexCode}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <div className="mt-10 mb-4">
          <h2 className="mb-0 fw-semibold">Light</h2>
        </div>

        <Row className="color-swatches">
          {lightColors.map((color, index) => (
            <Col xl={3} lg={4} md={4} sm={6} xs={6} key={index}>
              <div className="color-swatch">
                <div
                  className={`color-swatch-header bg-light-${color.name}`}
                ></div>
                <div className="color-swatch-body">
                  <h5 className="color-swatch-body-label">{color.title}</h5>
                  <p className="color-swatch-body-value">{color.hexCode}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <div className="mt-10 mb-4">
          <h2 className="mb-0 fw-semibold">Dark</h2>
        </div>
        <Row className="color-swatches">
          {darkColors.map((color, index) => (
            <Col xl={3} lg={4} md={4} sm={6} xs={6} key={index}>
              <div className="color-swatch">
                <div
                  className={`color-swatch-header bg-dark-${color.name}`}
                ></div>
                <div className="color-swatch-body">
                  <h5 className="color-swatch-body-label">{color.title}</h5>
                  <p className="color-swatch-body-value">{color.hexCode}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Row>
    </DocsInnerLayout>
  );
};

export default Index;

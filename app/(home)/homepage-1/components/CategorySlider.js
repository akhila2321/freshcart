"use client";
// import node module libraries
import React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";

// import custom components
import CategoryCard from "components/cards/CategoryCard";

// import require data files
import { categoryData } from "data/CategoryData";
import { categorySliderOneSettings } from "data/SliderSettings";

const CategorySlider = () => {
  return (
    <section className="mb-lg-10 mt-lg-14 my-8">
      <Container>
        <Row>
          <Col xs={12} className="mb-6">
            <h3 className="mb-0">Featured Categories</h3>
          </Col>
        </Row>
        <Slider {...categorySliderOneSettings} className="category-slider">
          {categoryData.map((category) => (
            <CategoryCard category={category} key={category.id} />
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default CategorySlider;

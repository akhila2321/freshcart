"use client";
// import node module libraries
import React, { useMemo } from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";

// import custom components
import CategoryCard from "components/cards/CategoryCard";

// import require data files and utilities
import { categoryData } from "data/CategoryData";
import { categorySliderOneSettings } from "data/SliderSettings";
import { getUniqueCategories, sortCategoriesAlphabetically } from "@/utils/categoryUtils";

const CategorySlider = () => {
  // Process categories to remove duplicates and sort them
  const processedCategories = useMemo(() => {
    const uniqueCategories = getUniqueCategories(categoryData);
    return sortCategoriesAlphabetically(uniqueCategories);
  }, []);

  return (
    <section className="my-6">
      <Container className="px-0 px-md-3">
        <Row className="mx-0">
          <Col xs={12} className="mb-4 px-3 px-md-0">
            <h3 className="mb-0 fw-bold">Shop by Category</h3>
          </Col>
        </Row>
        <div className="px-2">
          {processedCategories.length > 0 ? (
            <Slider 
              {...categorySliderOneSettings} 
              className="category-slider"
            >
              {processedCategories.map((category) => (
                <div key={category.id} className="px-2">
                  <CategoryCard 
                    category={{
                      ...category,
                      type: category.type || 'image'
                    }} 
                  />
                </div>
              ))}
            </Slider>
          ) : (
            <div className="text-center py-4">
              <p className="text-muted">No categories available at the moment.</p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default CategorySlider;

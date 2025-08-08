// import node module libraries
import { Container, Row, Col, Button } from "react-bootstrap";
import { Journal } from "react-bootstrap-icons";

// import required data files
import { blogPostData } from "data/BlogPostData";

// import custom components
import BlogCard from "components/cards/BlogCard";

const PopularRecipes = () => {
  return (
    <section className="my-lg-14 my-8">
      <Container>
        <Row className="align-items-center mb-8">
          <Col md={8} xs={12}>
            <div className="d-flex">
              <div className="mt-1">
                <Journal className="text-primary" size={24} />
              </div>
              <div className="ms-3">
                <h3 className="mb-0">Our most popular recipes</h3>
                <p className="mb-0">
                  Check out most popular recipes of all time.
                </p>
              </div>
            </div>
          </Col>
          <Col md={4} className="text-end d-none d-md-block">
            <Button href="" variant="primary">
              View all recipes
            </Button>
          </Col>
        </Row>

        <Row>
          {blogPostData.slice(0, 4).map((item) => (
            <Col xs={12} md={6} lg={3} className="mb-8" key={item.id}>
              <BlogCard blog={item} showIcon={true} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PopularRecipes;

"use client";
// import node module libraries
import { Container } from "react-bootstrap";

// import sub components
import FeaturedBlog from "./FeaturedBlog";

// import custom components
import BlogGrid from "components/blog/BlogGrid";

const BlogListWithFeature = ({ data, itemPerPage }) => {
  return (
    <section className="mt-6 mb-lg-14 mb-8">
      <Container>
        <FeaturedBlog data={data.slice(0, 1)} />
        <BlogGrid data={data} itemPerPage={itemPerPage} />
      </Container>
    </section>
  );
};

export default BlogListWithFeature;

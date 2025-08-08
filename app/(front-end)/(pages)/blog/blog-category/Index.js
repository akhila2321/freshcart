"use client";
// import node module libraries
import { Container } from "react-bootstrap";
import { Fragment } from "react";

// import custom components
import FreshBreadcrumb from "components/common/FreshBreadcrumb";
import BlogGrid from "components/blog/BlogGrid";

// import sub components
import BlogHeading from "../components/BlogHeading";

// import required data files
import { blogPostData } from "data/BlogPostData";

const Index = () => {
  return (
    <Fragment>
      <FreshBreadcrumb />
      <BlogHeading heading={"Recipes"} className="mb-4" />
      <section className="mb-lg-14 mb-8">
        <Container>
          <BlogGrid data={blogPostData} itemPerPage={9} />
        </Container>
      </section>
    </Fragment>
  );
};

export default Index;

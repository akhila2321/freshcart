"use client";
// import node module libraries
import { Fragment } from "react";

// import custom components
import FreshBreadcrumb from "components/common/FreshBreadcrumb";

// import sub components
import BlogListWithFeature from "./components/BlogListWithFeature";

import BlogHeading from "./components/BlogHeading";

// import required data files
import { blogPostData } from "data/BlogPostData";

const Index = () => {
  return (
    <Fragment>
      <FreshBreadcrumb />
      <BlogHeading heading={"FreshCart Blog"} />
      <BlogListWithFeature data={blogPostData} itemPerPage={9} />
    </Fragment>
  );
};

export default Index;

"use client";

// import node module libraries
import { Fragment } from "react";

// import custom components
import FreshBreadcrumb from "components/common/FreshBreadcrumb";
import BlogDetails from "components/blog/BlogDetails";

// import required hooks
import { useParams } from "next/navigation";

// import required data files
import { blogWithSlug } from "data/BlogPostData";

const Index = () => {
  const params = useParams();

  //Create a hashmap of blog using slug as key
  const blogMap = blogWithSlug.reduce((map, blog) => {
    map[blog.slug] = blog;
    return map;
  }, {});

  const blogData = blogMap[params.slug];

  return (
    <Fragment>
      <FreshBreadcrumb />
      <BlogDetails post={blogData} />
    </Fragment>
  );
};

export default Index;

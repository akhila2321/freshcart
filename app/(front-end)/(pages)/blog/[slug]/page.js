// import sub components
import Index from "./Index";

// import required data file
import { blogPostData } from "data/BlogPostData";

export async function generateMetadata({ params }) {
  //Create a hashmap of blog using slug as key
  const blogMap = blogPostData.reduce((map, blog) => {
    map[blog.slug] = blog;
    return map;
  }, {});

  const blogData = blogMap[params.slug];

  return {
    title: blogData?.title,
  };
}
const BlogSingle = () => {
  return <Index />;
};

export default BlogSingle;

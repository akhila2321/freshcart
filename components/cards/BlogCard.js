// import node module libraries
import { Fragment } from "react";
import { Image } from "react-bootstrap";
import { Clock } from "react-bootstrap-icons";
import Link from "next/link";

// import required hooks
import { useParse } from "hooks/useParse";

const BlogCard = ({ blog, showDate, showIcon }) => {
  const { title, image, desc, postAt, category, date, slug } = blog;

  const { truncatedContent } = useParse(desc, 120);

  return (
    <Fragment>
      <div className="mb-4">
        <Link href={`/blog/${slug}`}>
          <div className="img-zoom">
            <Image src={image} alt="" className="img-fluid rounded w-100" />
          </div>
        </Link>
      </div>
      {category && (
        <div className="mb-3">
          <Link href="#!">{category}</Link>
        </div>
      )}
      <div>
        <h4 className="h5">
          <Link href={`/blog/${slug}`} className="text-inherit">
            {title}
          </Link>
        </h4>
        {truncatedContent}
        <div className="d-flex align-items-center lh-1 justify-content-between text-muted mt-4">
          {showDate && (
            <span>
              <small>{date}</small>
            </span>
          )}
          <div>
            <small className="ms-1">
              {showIcon ? <Clock size={12} /> : "Read Time:"}
              <span className="text-dark fw-bold"> {postAt} </span>
              min
            </small>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogCard;

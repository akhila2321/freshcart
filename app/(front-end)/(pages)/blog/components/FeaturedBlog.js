// import node module libraries
import { Row, Col, Image } from "react-bootstrap";
import Link from "next/link";

const FeaturedBlog = ({ data }) => {
  const { title, shortDesc, image, date, postAt, slug } = data[0];

  return (
    <Row className="d-flex align-items-center mb-8">
      <Col xs={12} md={12} lg={8}>
        <Link href={`/blog/${slug}`}>
          <div className="img-zoom">
            <Image src={image} alt="" className="img-fluid w-100" />
          </div>
        </Link>
      </Col>
      <Col xs={12} md={12} lg={4}>
        <div className="ps-lg-8 mt-8 mt-lg-0">
          <h2 className="mb-3">
            <Link href={`/blog/${slug}`} className="text-inherit">
              {title}
            </Link>
          </h2>
          <p>{shortDesc}</p>
          <div className="d-flex justify-content-between text-muted">
            <span>
              <small>{date}</small>
            </span>
            <span>
              <small>
                Read time:
                <span className="text-dark fw-bold">{postAt}min</span>
              </small>
            </span>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default FeaturedBlog;

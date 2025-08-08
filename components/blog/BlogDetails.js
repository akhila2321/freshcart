// import node module libraries
import { Container, Row, Col, Image } from "react-bootstrap";
import Link from "next/link";

// import custom components
import BlogFooter from "components/blog/BlogFooter";

// import required hooks
import { useParse } from "hooks/useParse";

const BlogDetails = ({ post }) => {
  const {
    title,
    category,
    image,
    desc,
    author,
    avatar,
    position,
    postAt,
    date,
  } = post;

  const { textContent } = useParse(desc);

  return (
    <section className="my-lg-14 my-8">
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <div className="mb-5">
              <div className="mb-3 text-center">
                <Link href="#!">{category}</Link>
              </div>
              <h1 className="fw-bold text-center">{title}</h1>
              <div className="d-flex justify-content-center text-muted mt-4">
                <span className="me-2">
                  <small>{date}</small>
                </span>
                <span>
                  <small>
                    Read time:
                    <span className="text-dark fw-bold"> {`${postAt}min`}</span>
                  </small>
                </span>
              </div>
            </div>

            {/* Cover Image */}
            <div className="mb-8">
              <Image src={image} alt="" className="img-fluid rounded" />
            </div>

            {/* Blog Description */}
            {textContent}

            <hr className="mt-8 mb-5" />
            <BlogFooter author={author} avatar={avatar} position={position} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogDetails;

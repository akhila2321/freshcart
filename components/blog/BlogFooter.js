// import node module libraries
import Link from "next/link";
import { Image } from "react-bootstrap";
import { Facebook, Twitter, Linkedin } from "react-bootstrap-icons";

const BlogFooter = ({ author, avatar, position }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-5">
      <div className="d-flex align-items-center">
        <Image src={avatar} alt="" className="rounded-circle avatar-md" />
        <div className="ms-2 lh-1">
          <h5 className="mb-0">{author}</h5>
          <span className="text-primary small">{position}</span>
        </div>
      </div>
      <div>
        <span className="ms-2 text-muted">Share</span>
        <Link href="#" className="ms-2 text-muted">
          <Facebook className="fs-6" />
        </Link>
        <Link href="#" className="ms-2 text-muted">
          <Twitter className="fs-6" />
        </Link>
        <Link href="#" className="ms-2 text-muted">
          <Linkedin className="fs-6" />
        </Link>
      </div>
    </div>
  );
};

export default BlogFooter;

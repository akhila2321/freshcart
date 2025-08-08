// import node module libraries
import { Row, Col, Button } from "react-bootstrap";
import { ChevronRight } from "react-feather";
import Link from "next/link";

const PageHeading = ({
  title,
  desc,
  icon,
  actionType = ["text", "button"],
  actionLabel,
  actionLink,
  variant = "primary",
}) => {
  return (
    <Row className="align-items-center mb-8">
      <Col md={8} xs={12}>
        <div className="d-flex">
          <div className="mt-1">{icon}</div>
          <div className="ms-3">
            <h3 className="mb-0">{title}</h3>
            <p className="mb-0">{desc}</p>
          </div>
        </div>
      </Col>
      <Col md={4} className="text-end d-none d-md-block">
        {actionType === "text" ? (
          <Link href={actionLink ? actionLink : ""}>
            {actionLabel}
            <ChevronRight size={18} />
          </Link>
        ) : actionType === "button" ? (
          <Button href={actionLink ? actionLink : ""} variant={variant}>
            {actionLabel}
          </Button>
        ) : (
          ""
        )}
      </Col>
    </Row>
  );
};

export default PageHeading;

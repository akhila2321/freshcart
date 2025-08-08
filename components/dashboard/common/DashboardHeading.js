// import node module libraries
import Link from "next/link";
import { Button, Row, Col } from "react-bootstrap";

// import custom components
import DashboardBreadcrumb from "./DashboardBreadcrumb";

const DashboardHeading = ({
  heading = "Heading",
  btnLabel,
  btnLink,
  variant = "primary",
  onClick,
  disabledLink,
}) => {
  return (
    <Row className="mb-5">
      <Col md={12}>
        <div className="d-md-flex justify-content-between align-items-center">
          <div>
            <h2>{heading}</h2>
            <DashboardBreadcrumb disabledLink={disabledLink} />
          </div>

          {btnLabel && (
            <div>
              <Button
                variant={variant}
                as={Link}
                href={btnLink ? btnLink : "#"}
                onClick={onClick}
              >
                {btnLabel}
              </Button>
            </div>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default DashboardHeading;

// import node module libraries
import Link from "next/link";
import { Card, Image, Row, Col } from "react-bootstrap";

const StoreEarningCard = ({ data, ...props }) => {
  const { sellerId, storeName, logo, email, grossSale, netEarning } = data;

  return (
    <Card className="border-0 text-center card-lg" {...props}>
      <Card.Body className="p-6">
        <div>
          <Image
            src={logo}
            alt=""
            className="rounded-circle icon-shape icon-xxl mb-6"
          />
          <h2 className="mb-2 h5">
            <Link href="#!" className="text-inherit">
              {storeName}
            </Link>
          </h2>
          <div className="mb-2">Seller ID: {sellerId}</div>
          <div>{email}</div>
        </div>
        <Row className="justify-content-center mt-8">
          <Col>
            <div>Gross Sale</div>
            <h5 className="mb-0 mt-1">${grossSale.toFixed(2)}</h5>
          </Col>
          <Col>
            <div>Earning</div>
            <h5 className="mb-0 mt-1">${netEarning.toFixed(2)}</h5>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default StoreEarningCard;

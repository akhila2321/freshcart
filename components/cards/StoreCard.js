// import node module libraries
import { Col, Card, Image, ListGroup } from "react-bootstrap";
import Link from "next/link";
import FreshBadge from "components/common/FreshBadge";

const StoreCard = ({ storeDetails }) => {
  const { storeName, storeLogo, category, service, features } = storeDetails;
  return (
    <Col>
      <Card className="p-6 card-product">
        <div>
          <Image
            src={storeLogo}
            alt=""
            className="rounded-circle icon-shape icon-xl"
          />
        </div>
        <div className="mt-4">
          <h2 className="mb-1 h5">
            <Link href="#!" className="text-inherit">
              {storeName}
            </Link>
          </h2>
          <div className="small text-muted">
            {category.map((item) => (
              <span className="me-2" key={item.id}>
                {item.name}
              </span>
            ))}
          </div>
          <div className="py-3">
            <ListGroup bsPrefix="list-unstyled" as="ul" className=" mb-0 small">
              {service.map((item, index) => {
                if (item.deliveryTime) {
                  return (
                    <ListGroup.Item as="li" key={item.id}>
                      <span className="text-primary">
                        {item.name} by {item.deliveryTime}
                      </span>
                    </ListGroup.Item>
                  );
                } else {
                  return (
                    <ListGroup.Item as="li" key={item.id}>
                      {item.name}
                    </ListGroup.Item>
                  );
                }
              })}
            </ListGroup>
          </div>
          <div className="d-flex gap-1 ">
            {features.map((item) => (
              <FreshBadge
                content={item.name}
                key={item.id}
                bg="light"
                className={"text-dark border"}
                pill={false}
              />
            ))}
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default StoreCard;

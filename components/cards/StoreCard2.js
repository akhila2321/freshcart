// import node module libraries
import { Fragment } from "react";
import { Col, Card, Image, ListGroup } from "react-bootstrap";
import Link from "next/link";
import { CircleFill } from "react-bootstrap-icons";

// import custom components
import FreshBadge from "components/common/FreshBadge";

const StoreCard2 = ({ storeDetails }) => {
  const { storeName, storeLogo, category, service, features } = storeDetails;

  return (
    <Col>
      <Card className="card flex-row p-8 card-product">
        <div>
          <Image
            src={storeLogo}
            alt=""
            className="rounded-circle icon-shape icon-xl"
          />
        </div>

        <div className="ms-6">
          <h5 className="mb-1">
            <Link href="#!" className="text-inherit">
              {storeName}
            </Link>
          </h5>
          <div className="small text-muted">
            {category.map((item, index) => (
              <Fragment key={item.id}>
                <span>{item.name}</span>
                {index !== category.length - 1 ? (
                  <span className="mx-1">
                    <CircleFill
                      size={4}
                      className="align-middle"
                      fill="#C1C7C6"
                    />
                  </span>
                ) : (
                  ""
                )}
              </Fragment>
            ))}
          </div>
          <div className="py-3">
            <ListGroup bsPrefix="list-unstyled" as="ul" className="mb-0 small">
              {service.map((item) => {
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
          <div>
            {features.map((item) => (
              <FreshBadge
                content={item.name}
                key={item.id}
                bg="light"
                className={"text-dark border me-1"}
                pill={false}
              />
            ))}
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default StoreCard2;

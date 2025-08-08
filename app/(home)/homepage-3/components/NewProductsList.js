// import node module libraries
import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";

// import custom components
import ProductCardThree from "components/cards/ProductCardThree";

const NewProductsList = ({ products }) => {
  return (
    <Row xs={2} xl={5} md={3} className="g-4">
      {products.length > 0 ? (
        <Fragment>
          {products?.map((item) => (
            <Col key={item.id}>
              <ProductCardThree
                product={item}
                badgeBg="warning"
                badgeText="dark"
              />
            </Col>
          ))}
        </Fragment>
      ) : (
        <h4 className="text-center w-100">Not Available</h4>
      )}
    </Row>
  );
};

export default NewProductsList;

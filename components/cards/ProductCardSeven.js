// import node module libraries
import Link from "next/link";
import { Card, Row, Col, ProgressBar, Button, Image } from "react-bootstrap";
import { Plus } from "react-feather";

// import custom components
import StarRatings from "components/reviews/StarRating";
import CountdownTimer from "components/common/CountdownTimer";

// import required hook
import useCartOperations from "hooks/useCartOperations";

// import helper utility file
import { calculateSalePrice } from "helper/utils";
import { calculateAvgRating } from "helper/utils";

const ProductCardSeven = ({ product }) => {
  const {
    id,
    product_title,
    product_category,
    slug,
    featuredImage,
    price,
    discount,
    reviews,
    unit,
    stocks,
  } = product;

  const { addItemToCart } = useCartOperations();

  const salePrice = calculateSalePrice(price, discount);
  const { avgRating } = calculateAvgRating(reviews);

  const addItemToCartHandler = () => {
    const cartItems = {
      id,
      product_title,
      product_category,
      price,
      salePrice,
      unit,
      featuredImage,
    };
    addItemToCart(cartItems);
  };

  return (
    <Card className="card border border-danger p-6">
      <Row>
        <Col lg={5} className="text-center">
          <Link href={`/shop/${slug}`}>
            <Image
              src={featuredImage}
              alt="Grocery Ecommerce Template"
              className="img-fluid"
            />
          </Link>
        </Col>
        <Col lg={7} className="text-center text-lg-start">
          <div className="mb-3 d-flex align-items-center gap-1 ">
            <small className="text-warning">
              <StarRatings rating={avgRating} size={12} />
            </small>
            <span>
              <small>{avgRating}</small>
            </span>
          </div>
          <h2 className="fs-4">
            <Link href="" className="text-inherit text-decoration-none">
              {product_title}
            </Link>
          </h2>

          <div className="d-flex justify-content-center align-items-center justify-content-lg-between mt-3">
            <div>
              <span className="text-dark fs-5 fw-bold">${salePrice} </span>
              <span className="text-decoration-line-through text-muted fs-5">
                ${price}
              </span>
            </div>
          </div>
          <div className="mt-2">
            <Button variant="primary" onClick={addItemToCartHandler}>
              <Plus size={16} /> Add to cart
            </Button>
          </div>
          <div className="mt-6 mb-6">
            <div className="d-flex justify-content-between mb-2">
              <span>
                Already Sold:
                <span className="text-dark fs-6 fw-bold">45</span>
              </span>
              <span>
                Available:
                <span className="text-dark fs-6 fw-bold">{stocks}</span>
              </span>
            </div>

            <ProgressBar
              now="85"
              min="0"
              max="100"
              variant="danger"
              className="bg-light-danger"
              style={{ height: "5px" }}
            />
          </div>
          <p className="fw-bold text-dark mb-0">Hurry up offer ends soon</p>

          <div className="d-flex justify-content-center justify-content-lg-start  mt-1">
            <CountdownTimer endDate={"2028/10/10 00:00:00"} />
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductCardSeven;

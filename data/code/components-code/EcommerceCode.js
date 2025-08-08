export const ecommerceExampleOneCode = `
"use client";
// import node module libraries
import { v4 as uuid } from "uuid";
// import sub components
import { QuickViewExample } from "./QuickViewExample";

// import required data file
import { products } from "data/products/AllProductsData";

const Page = () => {
   return  <QuickViewExample product={products.slice(0, 1)[0]} />
};

export default Page;


`.trim();

export const OrderDetailsCode = `
"use client";
// import node module libraries
import { v4 as uuid } from "uuid";
// import custom component
import OrderDetails from "components/common/checkout/OrderDetails";

const Page = () => {
 

  return <OrderDetails  />;
};

export default Page;

`.trim();

export const CheckoutExampleCode = `

// import node module libraries
import {Row, Col, Alert, ListGroup} from "react-bootstrap"

// import custom components
import CartItem from "components/cart/CartItem";
import OrderSummary from "components/shop/OrderSummary";

// import required hook
import useCartOperations from "hooks/useCartOperations";

export default Page = ()=> {

   const { cartItems } = useCartOperations();

  return (
      <Row>
        <Col lg={8} md={7}>
          <div className="py-3">
            <Alert variant="danger" className="p-2">
              You’ve got FREE delivery. Start{" "}
              <Alert.Link href="">checkout now!</Alert.Link>
            </Alert>

            <ListGroup variant="flush" as="ul">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.id} className="py-3 py-lg-0 px-0 border-top" as="li">
                  <CartItem product={item} className={"px-2 py-3"} />
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </Col>
        <Col lg={4} md={5} xs={12}><OrderSummary /></Col>
      </Row>
  )
}

`.trim();

export const ecommerceExampleThreeCode = `
// import node module libraries
import {Row, Col} from "react-bootstrap"

// import custom components
import CategoriesCollapse from "components/shop/CategoriesCollapse";
import StoreFilterList from "components/shop/StoreFilterList";
import ProductRatingFilter from "components/shop/ProductRatingFilter";
import EcommerCTA from "components/cta/EcommerCTA";
import PriceRange from "components/common/PriceRange";

export const Page = ()=> {
  return(
  <Row>
    <Col lg={{ offset: 1, span: 3 }} xs={12}>
      <CategoriesCollapse />
      <StoreFilterList data={storeListData} />
      <PriceRange />
      <ProductRatingFilter className={"mt-8"} />
      <EcommerCTA />
    </Col>
  </Row>
  )
}
`.trim();

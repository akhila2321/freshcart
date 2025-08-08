export const ListOneCode = `
// import custom component
import PaymentMethod from "components/common/PaymentMethod";

const Page = () => {
  return <PaymentMethod />;
};

export default Page;

`.trim();

export const ListTwoCode = `
// import custom components
import CartItem from "components/cart/CartItem";

// import required hooks
import useCartOperations from "hooks/useCartOperations";


const Page = ()=> {

  const { cartItems } = useCartOperations();

  return (
  <Row>
    <Col xs={12}>
    <div className="py-3">
    <Alert variant="danger" className="p-2">
    You’ve got FREE delivery. Start{" "}
    <Link href="#!" className="alert-link">
    checkout now!
    </Link>
    </Alert>

    <ListGroup variant="flush" as="ul">
    {cartItems.map((item) => (
    <ListGroup.Item className="py-3 ps-0 border-bottom" as="li" key={item.id}>
    <CartItem product={item} />
    </ListGroup.Item>
    ))}
    </ListGroup>
    <div className="d-flex justify-content-between mt-4">
      <Button variant="primary">Continue Shopping</Button>
      <Button variant="dark">Update Cart</Button>
    </div>
    </div>
    </Col>
  </Row>
  )
}

`.trim();

export const ListThreeCode = `
// import node module libraries
import { BagCheck, ClockHistory, Phone, Reply } from "react-bootstrap-icons";
import {v4 as uuid} from "uuid;

// import custom component
import FeaturesWithLeftIcon from "components/features/FeaturesWithLeftIcon";

const Page = () => {
  const companyFeaturedData2 = [
    {
      id: uuid(),
      title: "Download the FreshCart App to your Phone.",
      icon: <Phone size={20} fill="#0aad0a" />,
    },
    {
      id: uuid(),
      title:
        "Return Policy customers can return a product and ask for a refund.",
      icon: <Reply size={20} fill="#0aad0a" />,
    },
    {
      id: uuid(),
      title: "Order now so you don t miss the opportunities.",
      icon: <BagCheck size={20} fill="#0aad0a" />,
    },
    {
      id: uuid(),
      title: "Your order will arrive at your door in 15 minutes.",
      icon: <ClockHistory size={20} fill="#0aad0a" />,
    },
  ];

  return <FeaturesWithLeftIcon data={companyFeaturedData2} />;
};

export default Page;

`.trim();

// import node module libraries
import { ListGroup, Image } from "react-bootstrap";
import Link from "next/link";

export const PaymentPartners = ({ titleCls = "text-dark", className }) => {
  return (
    <ListGroup bsPrefix="list-inline" className={`mb-0 ${className}`} as="ul">
      <ListGroup.Item bsPrefix="list-inline-item " className={titleCls} as="li">
        Payment Partners
      </ListGroup.Item>

      <ListGroup.Item bsPrefix="list-inline-item " as="li">
        <Link href="">
          <Image src="/images/payment/amazonpay.svg" alt="" />
        </Link>
      </ListGroup.Item>
      <ListGroup.Item bsPrefix="list-inline-item " as="li">
        <Link href="">
          <Image src="/images/payment/american-express.svg" alt="" />
        </Link>
      </ListGroup.Item>
      <ListGroup.Item bsPrefix="list-inline-item " as="li">
        <Link href="">
          <Image src="/images/payment//mastercard.svg" alt="" />
        </Link>
      </ListGroup.Item>
      <ListGroup.Item bsPrefix="list-inline-item " as="li">
        <Link href="">
          <Image src="/images/payment/paypal.svg" alt="" />
        </Link>
      </ListGroup.Item>
      <ListGroup.Item bsPrefix="list-inline-item" as="li">
        <Link href="">
          <Image src="/images/payment/visa.svg" alt="" />
        </Link>
      </ListGroup.Item>
    </ListGroup>
  );
};

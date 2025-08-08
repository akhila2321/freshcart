// import node module libraries
import Link from "next/link";
import { ListGroup, Image } from "react-bootstrap";

export const AppStore = () => {
  return (
    <ListGroup bsPrefix="list-inline mb-0 text-lg-end text-center">
      <ListGroup.Item bsPrefix="list-inline-item mb-2 mb-md-0 text-dark">
        Get deliveries with FreshCart
      </ListGroup.Item>
      <ListGroup.Item bsPrefix="list-inline-item ms-5 me-3">
        <Link href="#!">
          <Image
            src="/images/appbutton/appstore-btn.svg"
            alt=""
            style={{ width: "140px" }}
          />
        </Link>
      </ListGroup.Item>
      <ListGroup.Item bsPrefix="list-inline-item">
        <Link href="#!">
          <Image
            src="/images/appbutton/googleplay-btn.svg"
            alt=""
            style={{ width: "140px" }}
          />
        </Link>
      </ListGroup.Item>
    </ListGroup>
  );
};

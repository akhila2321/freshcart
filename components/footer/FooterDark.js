// import node module libraries
import Link from "next/link";
import { useSelector } from "react-redux";
import { Container, Row, Col, Image } from "react-bootstrap";

// import required routes files
import {
  CompanyMenu,
  ConsumerMenu,
  FooterCategories,
  ProgramMenu,
  ShopperMenu,
} from "routes/FooterNavigation";

// import custom components
import { FooterMenuList } from "./FooterMenuList";
import { PaymentPartners } from "./PaymentPartners";
import { SocialFollow } from "./SocialFollow";

// import sub components
import BuyNow from "./BuyNow";

const FooterDark = () => {
  const logoWhite = useSelector((state) => state.app.logoWhite)
  return (
    <footer className="footer bg-dark pb-6 pt-4 pt-md-12">
      <Container>
        <Row className="align-items-center">
          <Col xs={8} md={12} lg={4}>
            <Link href="/">
              <Image src={logoWhite} alt="" />
            </Link>
          </Col>
          <Col xs={4} md={12} lg={8} className="text-end">
            <SocialFollow variant="1" />
          </Col>
        </Row>
        <hr className="my-lg-8 opacity-25" />
        <Row className="g-4">
          <Col xs={12} md={12} lg={4}>
            <h6 className="mb-4 text-white">Categories</h6>
            <Row>
              <Col xs={6}>
                <FooterMenuList menuList={FooterCategories.slice(0, 9)} />
              </Col>
              <Col xs={6}>
                <FooterMenuList menuList={FooterCategories.slice(9)} />
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={12} lg={8}>
            <Row className="g-4">
              {/* Get to know us */}
              <Col xs={6} sm={6} md={3}>
                <h6 className="mb-4 text-white">Get to know us</h6>
                <FooterMenuList menuList={CompanyMenu} />
              </Col>

              {/* For Consumers */}
              <Col xs={6} sm={6} md={3}>
                <h6 className="mb-4 text-white">For Consumers</h6>
                <FooterMenuList menuList={ConsumerMenu} />
              </Col>

              {/* Become a shopper */}
              <Col xs={6} sm={6} md={3}>
                <h6 className="mb-4 text-white">Become a Shopper</h6>
                <FooterMenuList menuList={ShopperMenu} />
              </Col>

              {/* Freshcart programs */}
              <Col xs={6} sm={6} md={3}>
                <h6 className="mb-4 text-white">Freshcart programs</h6>
                <FooterMenuList menuList={ProgramMenu} />
              </Col>
            </Row>
          </Col>
        </Row>
        <hr className="mt-8 opacity-25" />
        <div>
          <Row className="gy-4 align-items-center justify-content-between w-100">
            <Col md={6}>
              <span className="small text-muted">
                © 2022 <span id="copyright">- {new Date().getFullYear()}</span>{" "}
                FreshCart eCommerce HTML Template. All rights reserved. Powered
                by
                <Link href="https://codescandy.com/" target="_blank">
                  {" "}
                  Codescandy
                </Link>
                .
              </span>
            </Col>
            <Col lg={6} className="mb-2 mb-lg-0 text-end">
              <PaymentPartners titleCls="text-light" />
            </Col>
          </Row>
        </div>
        <BuyNow />
      </Container>
    </footer>
  );
};

export default FooterDark;

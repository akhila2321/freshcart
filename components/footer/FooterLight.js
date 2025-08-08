// import node module libraries
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

// import required routes files
import {
  CompanyMenu,
  ConsumerMenu,
  FooterCategories,
  ProgramMenu,
  ShopperMenu,
} from "routes/FooterNavigation";

// import sub components
import { FooterMenuList } from "./FooterMenuList";
import { PaymentPartners } from "./PaymentPartners";
import { AppStore } from "./AppStore";
import { SocialFollow } from "./SocialFollow";
import BuyNow from "./BuyNow";

const FooterLight = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="g-4 py-4">
          <Col xs={12} md={12} lg={4}>
            <h6 className="mb-4">Categories</h6>
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
                <h6 className="mb-4">Get to know us</h6>
                <FooterMenuList menuList={CompanyMenu} />
              </Col>

              {/* For Consumers */}
              <Col xs={6} sm={6} md={3}>
                <h6 className="mb-4">For Consumers</h6>
                <FooterMenuList menuList={ConsumerMenu} />
              </Col>

              {/* Become a shopper */}
              <Col xs={6} sm={6} md={3}>
                <h6 className="mb-4">Become a Shopper</h6>
                <FooterMenuList menuList={ShopperMenu} />
              </Col>

              {/* Freshcart programs */}
              <Col xs={6} sm={6} md={3}>
                <h6 className="mb-4">Freshcart programs</h6>
                <FooterMenuList menuList={ProgramMenu} />
              </Col>
            </Row>
          </Col>
        </Row>

        <div className="border-top py-4">
          <Row className="align-items-center">
            {/* Payment Partners */}
            <Col lg={5} className="text-lg-start text-center mb-2 mb-lg-0">
              <PaymentPartners />
            </Col>

            {/* App Store Download Banner */}
            <Col lg={7} className="mt-4 mt-md-0">
              <AppStore />
            </Col>
          </Row>
        </div>

        <div className="border-top py-4">
          <Row className="align-items-center">
            {/* Copyright */}
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

            {/* Social Follow */}
            <Col md={6}>
              <SocialFollow />
            </Col>
          </Row>
        </div>

        <BuyNow />

      </Container>
    </footer>
  );
};

export default FooterLight;

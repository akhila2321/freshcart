export const CTAOneCode = `
import VerticalCTA from "components/cta/VerticalCTA";

const Page = () => {
  const verticalCTAData = {
    title: "100% Organic Coffee Beans.",
    desc: "Get the best deal before close.",
    image: "/images/banner/banner-deal.jpg",
    link: "",
  };

  return <VerticalCTA data={verticalCTAData} />;
};

export default Page;

`.trim();

export const CTATwoCode = `
import OffersCTA from "components/cta/OffersCTA";

const Page = () => {
  const CTATwoData = {
    title: 10% cashback on <br /> personal care,
    desc: <p class="mb-0">Max cashback: $12</p><span>Code: <span class="fw-bold text-dark">CARE12</span></span>,
    image: "/images/banner/ad-banner-1.jpg",
    link: "",
  };

  return (
    <div style={{ maxWidth: "390px" }}>
      <OffersCTA data={CTATwoData} />;
    </div>
  );
};

export default Page;
`.trim();

export const CTAThreeCode = `
// import node module libraries
import { Row, Col, Image, ListGroup, Form, Button } from "react-bootstrap";
import Link from "next/link";

const Page = () => {
  return (
    <Row className="align-items-center">
      <Col lg={{ span: 4, offset: 2 }} md={6}>
        <div className="text-center">
          <Image src="/images/png/iphone-2.png" alt="" className="img-fluid" />
        </div>
      </Col>

      <Col lg={6} md={6}>
        <div className="mb-6">
          <div className="mb-7">
            <h2>Get the FreshCart app</h2>
            <p className="mb-0">
              We will send you a link, open it on your phone to download the
              app.
            </p>
          </div>
          <div className="mb-5">
            <Form.Check inline>
              <Form.Check.Input
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <Form.Check.Label htmlFor="flexRadioDefault1">
                Email
              </Form.Check.Label>
            </Form.Check>

            <Form.Check inline>
              <Form.Check.Input
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked
              />
              <Form.Check.Label htmlFor="flexRadioDefault2">
                Phone
              </Form.Check.Label>
            </Form.Check>

            <Row className="g-3 mt-1">
              <Col lg={6} xs={7}>
                <Form.Control type="text" placeholder="Phone" />
              </Col>

              <Col xs={"auto"}>
                <Button type="submit" variant="primary" className="mb-3">
                  Share app link
                </Button>
              </Col>
            </Row>
          </div>
          <div>
            <small>Download app from</small>
            <ListGroup bsPrefix="list-inline mb-0 mt-3" as="ul">
              <ListGroup.Item bsPrefix="list-inline-item" as="li">
                <Link href="#!">
                  <Image
                    src="/images/appbutton/appstore-btn.svg"
                    alt=""
                    style={{ width: "140px" }}
                  />
                </Link>
              </ListGroup.Item>
              <ListGroup.Item bsPrefix="list-inline-item" as="li">
                <Link href="#!">
                  <Image
                    src="/images/appbutton/googleplay-btn.svg"
                    alt=""
                    style={{ width: "140px" }}
                  />
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Page;

`.trim();

export const CTAFourCode = `
import DiscountOnShareCTA from "components/cta/DiscountOnShareCTA";

const Page = () => {

  const discountOnShareData = {
    id: 1,
    title: "One Stop Grocery Shop",
    desc: '<p className="mb-0 lead">' +
          'Shopping for your furry friend? Find food,' +
          '<br />' +
          'treats, and more in one easy spot.' +
          '</p>',
    image: "/images/svg-graphics/store-graphics.svg",
    actionLabel: "Get Discount on Share",
    actionLink: "",
  };
  return <DiscountOnShareCTA data={discountOnShareData} />;
};

export default Page;
`.trim();

export const CTAFiveCode = `
import NewsLetterCTA from "components/cta/NewsLetterCTA";

const Page = () => {
  const newsLetterData = {
    title: "Get top deals, latest trends, and more.",
    desc: "Join our email subscription now to get updates on promotions and coupons.",
    discount: 30,
    discText: "discount for your first order",
    image: "/images/png/girl-email.png",
  };

  return <NewsLetterCTA data={newsLetterData} />;
};

export default Page;

`.trim();

export const CTASixCode = `
"use client";
// import node module libraries
import { Container, Row, Col } from "react-bootstrap";

// import custom components
import ZoomableCTA from "components/cta/ZoomableCTA";

const Page = () => {
  const ctaBannerData = [
    {
      id: 1,
      title: "Offer",
      image: "/images/banner/ad-banner-4.jpg",
      link: "",
      variant: "dark-info",
    },
    {
      id: 2,
      title: "Fresh Food & Bakery",
      image: "/images/banner/ad-banner-5.jpg",
      link: "",
      variant: "dark-warning",
    },
    {
      id: 3,
      title: "Mixed and Assorted fruits",
      image: "/images/banner/ad-banner-6.jpg",
      link: "",
      variant: "dark-danger",
    },
  ];

  return (
    <div className="my-lg-14 my-8">
      <Container>
        <div className="table-responsive-xxl">
          <Row className="flex-nowrap">
            {ctaBannerData.map((item) => (
              <Col key={item.id}>
                <ZoomableCTA data={item} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Page;

`.trim();

export const CTASevenCode = `
// import custom components
import WelcomeCTA from "components/cta/WelcomeCTA";

 const welcomeCTAData = {
    id: 1,
    title: "Welcome to FreshCart",
    desc: '<span>Download the app get free food & <span className="text-primary"> $30 </span> off on your first order.</span>',
    image: "/images/about/about-icons-1.svg",
    actionLabel: "Download FreshCart App",
    actionLink: "",
  };

  return <WelcomeCTA data={welcomeCTAData} />;
};

export default Page;
`.trim();

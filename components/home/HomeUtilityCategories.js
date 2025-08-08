import React from 'react';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import SectionHeadingCenter from 'components/marketplace/index/SectionHeadingCenter';

export const homeUtilityCategories = [
  {
    id: 'home-utility',
    title: 'Home Utility',
    icon: '/images/icons/home-utility.svg',
    link: '/category/home-utility'
  },
  {
    id: 'bath-laundry',
    title: 'Bath & Laundry',
    icon: '/images/icons/laundry.svg',
    link: '/category/bath-laundry'
  },
  {
    id: 'pooja-festive',
    title: 'Pooja & Festive',
    icon: '/images/icons/pooja.svg',
    link: '/category/pooja-festive'
  },
  {
    id: 'party-needs',
    title: 'Party Needs',
    icon: '/images/icons/party.svg',
    link: '/category/party-needs'
  },
  {
    id: 'cleaning-aids',
    title: 'Cleaning Aids & Tissues',
    icon: '/images/icons/cleaning.svg',
    link: '/category/cleaning-aids'
  },
  {
    id: 'automotive-needs',
    title: 'Automotive Needs',
    icon: '/images/icons/automotive.svg',
    link: '/category/automotive-needs'
  }
];

const HomeUtilityCategories = () => {
  return (
    <section className="py-lg-8 py-6">
      <Container>
        <SectionHeadingCenter
          title="Home Essentials"
          description="Everything you need for your home in one place"
        />
        <Row className="g-4">
          {homeUtilityCategories.map((item, index) => (
            <Col lg={2} md={4} xs={6} key={item.id}>
              <Link href={item.link} className="text-decoration-none">
                <div className="text-center p-3 rounded-3 bg-white h-100 d-flex flex-column align-items-center justify-content-center">
                  <div className="mb-2">
                    <img src={item.icon} alt={item.title} className="img-fluid" style={{ height: '48px' }} />
                  </div>
                  <div className="text-dark text-center">
                    <p className="mb-0 fw-semi-bold">{item.title}</p>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default HomeUtilityCategories;

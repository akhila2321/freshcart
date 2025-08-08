'use client';

import { Fragment } from 'react';
import NavbarFive from '../freshcartnavbar/NavbarFive/NavbarFive';
import Footer from '../footer/FooterLight';

const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <header className="fixed-top bg-white shadow-sm" style={{ zIndex: 1040 }}>
        <NavbarFive />
      </header>
      <main style={{ paddingTop: '120px', minHeight: '100vh' }}>
        {children}
      </main>
      <Footer />
    </Fragment>
  );
};

export default MainLayout;

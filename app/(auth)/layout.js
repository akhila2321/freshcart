"use client";
// import node module libraries
import { Fragment } from "react";

// import custom components
import Footer from "components/footer/FooterLight";
import AuthHeader from "components/freshcartnavbar/AuthHeader";

const AuthLayout = ({ children }) => {
  return (
    <Fragment>
      <AuthHeader />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default AuthLayout;

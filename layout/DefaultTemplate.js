// import node module libraries
import { Fragment } from "react";

// import custom components
import FreshCartNavbar from "components/freshcartnavbar/FreshCartNavbar";
import FooterLight from "components/footer/FooterLight";

export const DefaultTemplates = ({ children }) => {
  return (
    <Fragment>
      <FreshCartNavbar />
      <main>{children}</main>
      <FooterLight />
    </Fragment>
  );
};

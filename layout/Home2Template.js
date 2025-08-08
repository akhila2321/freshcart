// import node module libraries
import { Fragment } from "react";

// import custom components
import FooterLight from "components/footer/FooterLight";
import FreshCartNavbar from "components/freshcartnavbar/FreshCartNavbar";

export const Home2Template = ({ children }) => {
  return (
    <Fragment>
      <FreshCartNavbar variant={"two"} />
      <main>{children}</main>
      <FooterLight />
    </Fragment>
  );
};

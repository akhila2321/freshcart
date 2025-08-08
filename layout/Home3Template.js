// import node module libraries
import { Fragment } from "react";

// import custom components
import FreshCartNavbar from "components/freshcartnavbar/FreshCartNavbar";
import FooterLight from "components/footer/FooterLight";

export const Home3Template = ({ children }) => {
  return (
    <Fragment>
      <FreshCartNavbar variant={"three"} />
      <main>{children}</main>
      <FooterLight />
    </Fragment>
  );
};

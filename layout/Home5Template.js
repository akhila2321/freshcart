// import node module libraries
import { Fragment } from "react";

// import custom components
import FreshCartNavbar from "components/freshcartnavbar/FreshCartNavbar";
import FooterDark from "components/footer/FooterDark";

export const Home5Template = ({ children }) => {
  return (
    <Fragment>
      <FreshCartNavbar variant={"five"} />
      <main>{children}</main>
      <FooterDark />
    </Fragment>
  );
};

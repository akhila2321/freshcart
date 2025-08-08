// import node module libraries
import { Fragment } from "react";

// import custom components
import FreshCartNavbar from "components/freshcartnavbar/FreshCartNavbar";
import FooterDark from "components/footer/FooterDark";

export const Home4Template = ({ children }) => {
  return (
    <Fragment>
      <FreshCartNavbar variant={"four"} />
      <main>{children}</main>
      <FooterDark />
    </Fragment>
  );
};

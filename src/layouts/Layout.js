import niceSelect from "niceselectwithsabuj";
import { Fragment, useEffect } from "react";
import BackToTop from "../components/BackToTop";
import ImageView from "../components/ImageView";
import { animation, stickyNav } from "../utils";
import Footer1 from "./footers/Footer1";
import Header1 from "./headers/Header1";

const Layout = ({ children, noHeader, noFooter }) => {
  useEffect(() => {
    niceSelect();
    animation();

    window.addEventListener("scroll", stickyNav);
    if (window.location.href.includes("dark-e-wallet")) {
      document.querySelector("body").classList.add("dark-e-wallet");
    } else {
      document.querySelector("body").classList.remove("dark-e-wallet");
    }
  }, []);

  return (
    <Fragment>
      <ImageView />
      {!noHeader && <Header1 />}
      {children}
      {!noFooter && (
        <Fragment>
          <Footer1 />
        </Fragment>
      )}
      <BackToTop />
    </Fragment>
  );
};
export default Layout;
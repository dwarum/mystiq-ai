import Link from "next/link";
import { Fragment, useState, useEffect } from "react";
import { useRouter } from "next/router";
import MobileHeader from "../MobileHeader";
import MainMenu from "./MainMenu";
import EmployeeLoginModal from "../../components/EmployeeLoginModal";

const Header1 = () => {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const isEmployeePage = router.pathname === "/employee-info";

  useEffect(() => {
    // Check if user is logged in
    const loggedIn = sessionStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedIn === "true");
  }, []);

  const handlePortalClick = (e) => {
    e.preventDefault();
    router.push("/employee-info");
  };

  return (
    <Fragment>
      <header className="theme-header d-xl-block d-none">
        {/* header top */}
        <div className="header-top-bar header-top-bar-one">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="top-left">
                </div>
              </div>
              <div className="col-lg-6">
                <div className="top-right d-flex align-items-center">
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* header Navigation */}
        <div className="header-navigation">
          <div className="container-fluid">
            <div className="primary-menu">
              <div className="site-branding">
                <Link href="/">
                  <a className="brand-logo">
                    <img src="assets/images/logo/mystiq-labs-logo-web-bold.png" alt="Site Logo" />
                  </a>
                </Link>
              </div>
              <div className="nav-menu">
                {/* Navbar Close */}
                <div className="navbar-close">
                  <i className="far fa-times" />
                </div>
                {/* Nav Search */}
                <div className="nav-search">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Search Here"
                        name="email"
                        required=""
                      />
                      <button className="search-btn">
                        <i className="fas fa-search" />
                      </button>
                    </div>
                  </form>
                </div>
                {/* Main Menu */}
                <MainMenu
                  show={showSearchModal}
                  setShow={() => setShowSearchModal(true)}
                />
              </div>
              <div className="header-right-nav">
                <ul>
                  {/* Only show button if NOT on employee-info page */}
                  {!isEmployeePage && (
                    <li className="nav-button">
                      {isLoggedIn ? (
                        <a className="main-btn" onClick={handlePortalClick}>
                          Portal
                        </a>
                      ) : (
                        <a className="main-btn" onClick={(e) => {
                          e.preventDefault();
                          setShowLoginModal(true);
                        }}>
                          Login
                        </a>
                      )}
                    </li>
                  )}
                  
                  <li className="navbar-toggle-btn">
                    <div className="navbar-toggler">
                      <span />
                      <span />
                      <span />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileHeader logo={1} />
      <EmployeeLoginModal
        show={showLoginModal}
        onClose={()=>{setShowLoginModal(false)}}>   
      </EmployeeLoginModal>
    </Fragment>
  );
};
export default Header1;

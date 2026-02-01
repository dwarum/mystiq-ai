import Link from "next/link";
import React from "react";
import { Nav, Tab } from "react-bootstrap";
import Counter from "../src/components/Counter";
import Newsletter from "../src/components/Newsletter";
import Footer1 from "../src/layouts/footers/Footer1";
import Header1 from "../src/layouts/headers/Header1";
import Layout from "../src/layouts/Layout";

const Index = () => {
  return (
    <Layout noHeader noFooter>
      <Header1 />
      {/*====== Start Hero Section ======*/}
      <section className="hero-area">
        <div className="hero-wrapper-one">
          <div
            className="single-slider banner-slide-2 bg_cover"
            style={{
              backgroundImage: "url(assets/images/hero/hero-slider-1_2.jpg)",
              minHeight: "600px",
              display: "flex",
              alignItems: "center"
            }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="hero-content text-center">
                    <span className="sub-title">
                      Beyond Consulting. True Partnership.
                    </span>
                    <h1>
                      Your Dedicated Technology Partner for AI, Blockchain & Cloud Transformation
                    </h1>
                    {/* <ul className="button">
                      <li>
                        <Link href="/about">
                          <a className="main-btn btn-red-dark">
                            get started now
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/service-details">
                          <a className="main-btn btn-white">explore more</a>
                        </Link>
                      </li>
                    </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Hero Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="fancy-features">
        <div className="continer-fluid p-0">
          <div className="features-style-one pt-70 pb-30">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="section-title text-center mb-45 wow fadeInUp">
                    {/* <span className="sub-title red-dark text-underline">
                      great journey for it solutions
                    </span> */}
                    <h2 className="text-uppercase">
                      specializes in building Services
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="block-style-one animate-icon d-flex mb-40 wow fadeInUp">
                    <div className="icon">
                      <i className="flaticon-project-management" />
                    </div>
                    <div className="text">
                      <h3 className="title text-underline">
                        Professional Service
                      </h3>
                      <p>
                        Sedut perspicias unde omnis natus error sit voluptatem
                        accusanti remqu laudantium totam rem aperiam
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="block-style-one animate-icon d-flex mb-40 wow fadeInUp">
                    <div className="icon">
                      <i className="flaticon-social-care" />
                    </div>
                    <div className="text">
                      <h3 className="title text-underline">Experience Team</h3>
                      <p>
                        Sedut perspicias unde omnis natus error sit voluptatem
                        accusanti remqu laudantium totam rem aperiam
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="block-style-one animate-icon d-flex mb-40 wow fadeInUp">
                    <div className="icon">
                      <i className="flaticon-compliant" />
                    </div>
                    <div className="text">
                      <h3 className="title text-underline">
                        Best IT Solutions
                      </h3>
                      <p>
                        Sedut perspicias unde omnis natus error sit voluptatem
                        accusanti remqu laudantium totam rem aperiam
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start About Section ======*/}
      <section className="fancy-about fancy-about-one pt-130 position-relative pb-45">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="about-img-box mb-50 wow fadeInLeft">
                <img src="assets/images/about/about-1.jpg" alt="About image" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="text-wrapper mb-50 wow fadeInRight">
                <div className="section-title mb-20">
                  <span className="sub-title red-dark text-underline">
                    About Mystiq Labs
                  </span>
                  <h2 className="text-transform">
                    Strategic Consulting & Business Solutions
                  </h2>
                </div>
                <p>
                  Mystiq Labs delivers strategic consulting and innovative business solutions that transform organizational challenges into competitive advantages. With deep expertise across technology, operations, and strategic planning, we partner with enterprises to architect scalable solutions that drive measurable results. Our approach combines analytical rigor with creative problem-solving to unlock sustainable growth and operational excellence.
                </p>
                <Link href="/about">
                  <a className="main-btn">learn more us</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start Services Section ======*/}
      <section className="fancy-service light-gray-bg pt-120 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-50 wow fadeInUp">
                <span className="sub-title red-dark text-underline">
                  Our popular services
                </span>
                <h2>Best Professional IT Solutions</h2>
                <p>
                  Sed perspiciatis unde omniste natus voluptate accusantiuy
                  doloremque laudantium totam aperm eaque quae ainvtore
                  veritatis architecto
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-item-four text-center mb-30 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-database" />
                </div>
                <div className="text">
                  <h4 className="title">
                    <Link href="/service-details">
                      <a>Infrastructure</a>
                    </Link>
                  </h4>
                  <p>
                    But I must explain to you how all this mistaken ideofe
                    denouncing pleasure
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-item-four text-center mb-30 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-system" />
                </div>
                <div className="text">
                  <h4 className="title">
                    <Link href="/service-details">
                      <a>IT Engineering</a>
                    </Link>
                  </h4>
                  <p>
                    But I must explain to you how all this mistaken ideofe
                    denouncing pleasure
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-item-four text-center mb-30 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-secure-shield" />
                </div>
                <div className="text">
                  <h4 className="title">
                    <Link href="/service-details">
                      <a>cyber security</a>
                    </Link>
                  </h4>
                  <p>
                    But I must explain to you how all this mistaken ideofe
                    denouncing pleasure
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-item-four text-center mb-30 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-app-development" />
                </div>
                <div className="text">
                  <h4 className="title">
                    <Link href="/service-details">
                      <a>Apps Development</a>
                    </Link>
                  </h4>
                  <p>
                    But I must explain to you how all this mistaken ideofe
                    denouncing pleasure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Services Section ======*/}
      {/*====== Start Counter Section ======*/}
      <section className="fancy-counter-two pt-100 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="counter-item-two mb-50 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-teamwork" />
                </div>
                <div className="text">
                  <h2 className="number">
                    <Counter end={2563} />+
                  </h2>
                  <p>Happy Customer</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="counter-item-two mb-50 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-verification" />
                </div>
                <div className="text">
                  <h2 className="number">
                    <Counter end={8965} />+
                  </h2>
                  <p>Star Work Reviews</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="counter-item-two mb-50 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-trophy-1" />
                </div>
                <div className="text">
                  <h2 className="number">
                    <Counter end={9856} />+
                  </h2>
                  <p>Project Complate</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="counter-item-two mb-50 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-medal" />
                </div>
                <div className="text">
                  <h2 className="number">
                    <Counter end={7856} />+
                  </h2>
                  <p>Win Of Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Counter Section ======*/}
      {/*====== Start Projects Section ======*/}
      <section className="portfolio-section pt-115 pb-85">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-50 wow fadeInUp">
                <span className="sub-title red-dark text-underline">
                  latest Case Studies
                </span>
                <h2>
                  over 15 years, customers have Come to IT solutions.
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="row portfolio-grid-three">
                <div className="col-lg-4 col-md-6 col-sm-12 cat-1">
                  <div className="portfolio-block-one wow fadeInUp">
                    <div className="portfolio-img">
                      <img
                        src="assets/images/projects/project-2.jpg"
                        alt="project image"
                      />
                      <div className="hover-overlay">
                        <div className="icon">
                          <Link href="/project-details">
                            <a>
                              <i className="far fa-arrow-right" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span className="cat">
                        <Link href="/project-1">
                          <a>product design</a>
                        </Link>
                      </span>
                      <h4 className="title">
                        <Link href="/project-details">
                          <a>
                            Deploying Experts from OtherS Projects to Fill Skill
                            Gaps
                          </a>
                        </Link>
                      </h4>
                      <p>
                        Quis autem veleum sure reprehenderit quiine voluptate
                        velit esse quam molestiae
                      </p>
                      <Link href="/project-details">
                        <a className="portfolio-link">
                          continue reading <i className="far fa-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 cat-2">
                  <div className="portfolio-block-one wow fadeInUp">
                    <div className="portfolio-img">
                      <img
                        src="assets/images/projects/project-3.jpg"
                        alt="project image"
                      />
                      <div className="hover-overlay">
                        <div className="icon">
                          <Link href="/project-details">
                            <a>
                              <i className="far fa-arrow-right" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span className="cat">
                        <Link href="/project-1">
                          <a>product design</a>
                        </Link>
                      </span>
                      <h4 className="title">
                        <Link href="/project-details">
                          <a>
                            Providing Expertise to Keep Critical Systems
                            Operational
                          </a>
                        </Link>
                      </h4>
                      <p>
                        Quis autem veleum sure reprehenderit quiine voluptate
                        velit esse quam molestiae
                      </p>
                      <Link href="/project-details">
                        <a className="portfolio-link">
                          continue reading <i className="far fa-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 cat-3">
                  <div className="portfolio-block-one wow fadeInUp">
                    <div className="portfolio-img">
                      <img
                        src="assets/images/projects/project-1.jpg"
                        alt="project image"
                      />
                      <div className="hover-overlay">
                        <div className="icon">
                          <Link href="/project-details">
                            <a>
                              <i className="far fa-arrow-right" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span className="cat">
                        <Link href="/project-1">
                          <a>product design</a>
                        </Link>
                      </span>
                      <h4 className="title">
                        <Link href="/project-details">
                          <a>
                            STP Geospatial Engineers Helped Secure the 
                            Borders
                          </a>
                        </Link>
                      </h4>
                      <p>
                        Quis autem veleum sure reprehenderit quiine voluptate
                        velit esse quam molestiae
                      </p>
                      <Link href="/project-details">
                        <a className="portfolio-link">
                          continue reading <i className="far fa-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Projects Section ======*/}
      {/*====== Start Contact Section ======*/}
      <section className="fancy-contact-section">
        <div className="container">
          <div className="contact-inner-two bg_cover">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-8">
                <div className="text text-center mb-30 wow fadeInUp">
                  <h2>Stay Connected With Cutting Edge IT</h2>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="button text-center text-lg-right mb-30 wow fadeInUp">
                  <Link href="/contact">
                    <a className="main-btn btn-red-dark">get A Quote</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Contact Section ======*/}
      <Footer1 />
    </Layout>
  );
};
export default Index;

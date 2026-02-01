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
                    <span className="sub-title text-underline">
                      Beyond Consulting. Dedicated Teams.
                    </span>
                    <h1>
                      Your Dedicated Technology Partner for AI, Blockchain & Cloud Transformation
                    </h1>
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
                    <h2 className="text-uppercase">
                      The Mystiq Advantage
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
                        End-to-End Ownership
                      </h3>
                      <p>
                        We don't just provide consultants—we deliver complete solutions. From initial architecture to final deployment, our cross-functional teams own every phase of your project's success.
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
                      <h3 className="title text-underline">Expert Team Assembly</h3>
                      <p>
                        Purpose-built teams with deep expertise in AI/ML, blockchain, cloud modernization, and cybersecurity. We match the right specialists to your specific challenge, not generic contractors.
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
                        Proven Implementation
                      </h3>
                      <p>
                        We bridge the gap between strategy and execution. Our teams stay with you through deployment and beyond, ensuring your solution delivers measurable business value.
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
                    Solutions, Not Just Resources
                  </h2>
                </div>
                <p>
                  Mystiq Labs was founded on a simple insight: businesses don't need more individual consultants—they need dedicated teams that take full ownership of implementation. We specialize in AI/ML solutions, agentic AI systems, blockchain innovation, cloud modernization, and cybersecurity for forward-thinking organizations in finance, AI startups, and DeFi.
                </p>
                <p>
                  Our approach is different. Instead of staffing your team with contractors, we provide integrated, cross-functional squads that architect, develop, and deploy complete solutions. From day one to deployment and beyond, we're partners in your success—not just advisors on the sideline.
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
                  Core Services
                </span>
                <h2>Enterprise Solutions That Drive Results</h2>
                <p>
                  We deliver specialized expertise across the technologies shaping the future of finance, AI, and blockchain industries.
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
                      <a>AI & Machine Learning</a>
                    </Link>
                  </h4>
                  <p>
                    From intelligent automation to agentic AI systems, we architect and deploy ML solutions that transform data into competitive advantage.
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
                      <a>Blockchain & DeFi</a>
                    </Link>
                  </h4>
                  <p>
                    Build secure, scalable blockchain solutions and decentralized finance platforms with our specialized cross-functional teams.
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
                      <a>Cloud Modernization</a>
                    </Link>
                  </h4>
                  <p>
                    Migrate, optimize, and secure your infrastructure with end-to-end cloud transformation strategies tailored to your business.
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
                      <a>Cybersecurity</a>
                    </Link>
                  </h4>
                  <p>
                    Protect your digital assets with comprehensive security solutions—from architecture design to threat monitoring and compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Services Section ======*/}
      <Footer1 />
    </Layout>
  );
};
export default Index;
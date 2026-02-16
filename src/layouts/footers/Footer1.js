import Link from "next/link";

const Footer1 = ({ bg, className, logo }) => {
  return (
    <footer
      className={`${
        className ? className : "footer-area footer-default black-bg"
      }`}
    >
      <div className="container">
        <div className="footer-widget pt-100 pb-35">
          <div className="row">
            {/* Column 1: Company */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="widget footer-nav-widget mb-40 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <h4 className="widget-title text-underline">Company</h4>
                <ul className="footer-nav">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <a>Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/career">
                      <a>Careers</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 2: Services */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="widget footer-nav-widget mb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <h4 className="widget-title text-underline">Our Services</h4>
                <ul className="footer-nav">
                  <li>
                    <Link href="/service#ai-ml">
                      <a>AI & Machine Learning</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service#blockchain">
                      <a>Blockchain & DeFi</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service#cloud">
                      <a>Cloud Modernization</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service#cybersecurity">
                      <a>Cybersecurity</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 3: Industries */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="widget footer-nav-widget mb-40 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <h4 className="widget-title text-underline">Industries We Serve</h4>
                <ul className="footer-nav">
                  <li>
                    <span>Financial Services</span>
                  </li>
                  <li>
                    <span>AI Startups</span>
                  </li>
                  <li>
                    <span>Blockchain & DeFi</span>
                  </li>
                  <li>
                    <span>Enterprise Technology</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Column 4: Contact */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="widget footer-nav-widget mb-40 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <h4 className="widget-title text-underline">Contact Us</h4>
                <ul className="footer-nav">
                  <li>
                    <i className="far fa-envelope" />
                    <a href="mailto:info@mystiq.ai">contact-us@mystiq.ai</a>
                  </li>
                  <li style={{ marginTop: '10px' }}>
                    5600 S Quebec St Ste <br/>
                    Greenwood Village, CO 80111
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="footer-copyright">
          <div className="row">
            <div className="col-md-6">
              <div className="text">
                <p style={{fontSize:'14px'}}>
                  Copyright © 2025 Mystiq Labs. Established 2019. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
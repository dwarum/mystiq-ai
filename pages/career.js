import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";

const Career = () => {
  return (
    <Layout>
      <PageBanner pageName={"Careers"} pageTitle={"Careers at Mystiq Labs"} />
      
      {/*====== Start Why Work Section ======*/}
      <section className="about-section pt-130 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-50 wow fadeInUp">
                <span className="sub-title red-dark text-underline">
                  Join Our Team
                </span>
                <h2>Why Work at Mystiq Labs</h2>
              </div>
              <div className="content-wrapper wow fadeInUp">
                <p className="mb-20">
                  At Mystiq Labs, we're building the future of enterprise technology through dedicated teams that own outcomes, not just deliverables. We seek professionals who thrive on complex challenges, value end-to-end ownership, and want to work on projects that matter—from AI/ML implementations to blockchain infrastructure, cloud modernization to cybersecurity architecture.
                </p>
                <p className="mb-20">
                  Our team members are experts in their domains who understand that transformative technology requires both deep technical skill and collaborative execution. You'll work alongside specialists across disciplines, contributing to solutions that drive real business impact for organizations at the forefront of finance, AI, and decentralized technology.
                </p>
                <p>
                  If you're looking for a place where your expertise is valued, your growth is prioritized, and your work creates lasting value, Mystiq Labs offers the environment and opportunities to build a meaningful career.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Why Work Section ======*/}

      {/*====== Start Benefits Section ======*/}
      <section className="features-area light-gray-bg pt-120 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-50 wow fadeInUp">
                <span className="sub-title red-dark text-underline">
                  Benefits & Perks
                </span>
                <h2>What We Offer</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="block-style-one d-flex mb-40 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-computer" />
                </div>
                <div className="text">
                  <h3 className="title text-underline">
                    Remote-First Culture
                  </h3>
                  <p>
                    We operate as a fully remote organization, giving you the flexibility to work from anywhere while maintaining strong collaboration and communication. Our distributed model attracts top talent regardless of location and enables you to design a work environment that maximizes your productivity and work-life balance.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="block-style-one d-flex mb-40 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-shield" />
                </div>
                <div className="text">
                  <h3 className="title text-underline">
                    Comprehensive Health Coverage
                  </h3>
                  <p>
                    Your health and well-being are priorities. We provide comprehensive health insurance coverage to ensure you and your family have access to quality medical care without financial stress.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="block-style-one d-flex mb-40 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-verification" />
                </div>
                <div className="text">
                  <h3 className="title text-underline">
                    Professional Development
                  </h3>
                  <p>
                    Technology evolves rapidly, and we invest in keeping your skills current. Our learning and development budget supports certifications, courses, conferences, and other educational resources that advance your expertise and career trajectory.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="block-style-one d-flex mb-40 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-compliant" />
                </div>
                <div className="text">
                  <h3 className="title text-underline">
                    Home Office Setup
                  </h3>
                  <p>
                    We provide support for creating a productive home workspace. Whether it's equipment, ergonomic furniture, or technology upgrades, we ensure you have the tools needed to do your best work from your chosen location.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Benefits Section ======*/}

      {/*====== Start How We Hire Section ======*/}
      <section className="features-area pt-120 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-50 wow fadeInUp">
                <span className="sub-title red-dark text-underline">
                  Our Process
                </span>
                <h2>How We Hire</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div
                className="block-style-twentyTwo animate-icon d-flex align-items-start mb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <i className="fal fa-briefcase" />
                </div>
                <div className="text">
                  <h3>Apply</h3>
                  <p>
                    Submit your resume and relevant portfolio or work samples to careers@mystiq.ai. We review all applications carefully, looking for technical depth, problem-solving ability, and alignment with our values.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div
                className="block-style-twentyTwo animate-icon d-flex align-items-start mb-40 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="icon">
                  <i className="fal fa-comments" />
                </div>
                <div className="text">
                  <h3>Initial Interview</h3>
                  <p>
                    Selected candidates participate in an initial conversation with our team to discuss your experience, technical background, and career objectives. This is an opportunity for both parties to assess mutual fit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div
                className="block-style-twentyTwo animate-icon d-flex align-items-start mb-40 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="icon">
                  <i className="fal fa-code" />
                </div>
                <div className="text">
                  <h3>Technical Assessment</h3>
                  <p>
                    Depending on the role, you'll complete a technical assessment or case study that reflects real challenges our teams solve. We value practical problem-solving over theoretical knowledge.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div
                className="block-style-twentyTwo animate-icon d-flex align-items-start mb-40 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="icon">
                  <i className="fal fa-handshake" />
                </div>
                <div className="text">
                  <h3>Final Discussion & Offer</h3>
                  <p>
                    Final candidates meet with leadership to discuss team dynamics, project opportunities, and compensation. If there's strong alignment, we extend an offer and welcome you to Mystiq Labs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End How We Hire Section ======*/}

      {/*====== Start Join Team Section ======*/}
      <section className="cta-section light-gray-bg pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="cta-content-box text-center wow fadeInUp">
                <div className="section-title mb-40">
                  <span className="sub-title red-dark text-underline">
                    Get In Touch
                  </span>
                  <h2>Ready to Join Our Team?</h2>
                </div>
                <p className="mb-30">
                  We're always interested in connecting with talented professionals who share our commitment to excellence and ownership. While we may not have specific openings listed at this time, we encourage you to reach out if you believe your expertise aligns with our mission.
                </p>
                <div className="contact-info">
                  <p className="mb-20">
                    <strong>Send your resume and a brief introduction to:</strong>
                  </p>
                  <h4>
                    <a href="mailto:careers@mystiq.ai" style={{ color: '#1a1a1a' }}>
                      careers@mystiq.ai
                    </a>
                  </h4>
                  <p className="mt-20">
                    We review all inquiries and will contact you if there's a potential fit for current or upcoming opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Join Team Section ======*/}
    </Layout>
  );
};
export default Career;
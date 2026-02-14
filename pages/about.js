import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";

const About = () => {
  return (
    <Layout>
      <PageBanner pageName={"About Mystiq Labs"} pageTitle={"About Us"} />
      
      {/*====== Start Who We Are Section ======*/}
      <section className="fancy-about fancy-about-one pt-130 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="about-content-box text-center mb-50 wow fadeInUp">
                <div className="section-title mb-30">
                  <span className="sub-title red-dark text-underline">
                  Our Story
                </span>
                  <h2>Who We Are</h2>
                </div>
                <p className="mb-20">
                  Mystiq Labs is a technology solutions firm that delivers what others only promise: complete ownership from strategy to deployment. We don't staff your projects with individual consultants—we provide dedicated, cross-functional teams that architect, build, and deploy enterprise solutions in AI/ML, blockchain, cloud modernization, and cybersecurity.
                </p>
                <p>
                  Founded on the belief that transformative technology requires more than advisory services, we partner with forward-thinking organizations in finance, AI startups, and DeFi to turn complex challenges into competitive advantages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Who We Are Section ======*/}

      {/*====== Start Our Story Section ======*/}
      <section className="fancy-about light-gray-bg pt-120 pb-120">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className="section-title text-center mb-50 wow fadeInUp">
          <span className="sub-title red-dark text-underline">
            Our Story
          </span>
          <h2>Building on a Foundation of Excellence</h2>
        </div>
        <div className="story-content wow fadeInUp">
          <p className="mb-25">
            Mystiq Labs is the successor operating company to Dwarum Inc., a U.S. corporation established in 2019. From 2019 through 2024, client engagements and consulting operations were conducted under Dwarum Inc.
          </p>
          <p className="mb-25">
            In 2024, recognizing the transformative impact of AI on business operations,the organization evolved its focus toward advanced AI-driven solutions. Mystiq Labs was formally established in 2025 as the primary legal and operating entity, continuing the client relationships, expertise that have defined our work since 2019.
          </p>
          <p className="mb-25">
            This evolution wasn't just a rebrand—it represented a fundamental shift in how we serve clients. The consulting industry has a persistent problem: businesses hire experts for advice, then struggle to execute that advice with fragmented teams and contractors who lack context, commitment, or accountability.
          </p>
          <p>
            Today, Mystiq Labs combines proven business expertise with cutting-edge AI capabilities. We don't provide strategy decks and staffing recommendations—we deliver integrated teams that own the entire journey from initial architecture through deployment and optimization. We built Mystiq Labs to be the firm we wished existed: one that treats implementation as seriously as ideation, and measures success by deployed solutions, not billable hours.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
      {/*====== End Our Story Section ======*/}

      {/*====== Start Our Approach Section ======*/}
      <section className="fancy-features pt-120 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-50 wow fadeInUp">
                <span className="sub-title red-dark text-underline">
                  Our Approach
                </span>
                <h2>How We Work Differently</h2>
                <p className="mt-20">
                  Traditional consulting firms sell advice. Staff augmentation firms rent you developers. Mystiq Labs does neither.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="block-style-one d-flex mb-40 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-social-care" />
                </div>
                <div className="text">
                  <h3 className="title text-underline">
                    We Build Teams, Not Timesheets
                  </h3>
                  <p>
                    Every engagement begins with understanding your specific challenge, then assembling a purpose-built team with the exact expertise required. These aren't freelancers or bench resources—they're specialists chosen for your project who work as a cohesive unit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="block-style-one d-flex mb-40 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-project-management" />
                </div>
                <div className="text">
                  <h3 className="title text-underline">
                    We Own Outcomes, Not Tasks
                  </h3>
                  <p>
                    Our teams don't hand off work at project boundaries. From architecture to deployment, we maintain continuity and accountability. If it doesn't work in production, it's our problem to solve.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="block-style-one d-flex mb-40 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-target" />
                </div>
                <div className="text">
                  <h3 className="title text-underline">
                    We Partner for the Long Term
                  </h3>
                  <p>
                    Technology doesn't end at launch. Our teams stay engaged through deployment, optimization, and evolution. We measure success by your business outcomes, not our delivery milestones.
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
                    We Integrate, Not Isolate
                  </h3>
                  <p>
                    Our cross-functional approach breaks down silos between strategy, development, security, and operations. Your solution is built by people who understand the full picture, not specialists optimizing their individual domains.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Our Approach Section ======*/}

      {/*====== Start Our Values Section ======*/}
      <section className="fancy-service light-gray-bg pt-120 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-50 wow fadeInUp">
                <span className="sub-title red-dark text-underline">
                  Our Values
                </span>
                <h2>What Drives Us</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-item-four text-center mb-30 wow fadeInUp">
                <div className="text">
                  <h4 className="title">Ownership</h4>
                  <p>
                    We own outcomes, not just tasks. From architecture to deployment, we're accountable for results. If it doesn't deliver value, we haven't succeeded.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-item-four text-center mb-30 wow fadeInUp">
                <div className="text">
                  <h4 className="title">Innovation</h4>
                  <p>
                    We stay ahead of the curve in AI, blockchain, and emerging technologies. Our teams bring cutting-edge solutions, not recycled playbooks from last decade's projects.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-item-four text-center mb-30 wow fadeInUp">
                <div className="text">
                  <h4 className="title">Integration</h4>
                  <p>
                    We believe in seamless, cross-functional collaboration that breaks down silos and accelerates delivery. Your solution benefits from unified expertise, not fragmented specialists.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-item-four text-center mb-30 wow fadeInUp">
                <div className="text">
                  <h4 className="title">Excellence</h4>
                  <p>
                    We don't staff positions; we build expert teams purpose-built for your specific challenge. Every engagement gets the right people, not available people.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-item-four text-center mb-30 wow fadeInUp">
                <div className="text">
                  <h4 className="title">Partnership</h4>
                  <p>
                    Your success is our success. We're invested in long-term relationships built on trust, transparency, and shared objectives—not short-term contracts optimized for billable hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Our Values Section ======*/}
    </Layout>
  );
};

export default About;
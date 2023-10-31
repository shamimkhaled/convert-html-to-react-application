import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ServicesBackupPage = () => {
  return (
    <>
      <div>
        {/* Header */}
        <Header />
          {/* Header */}

        {/* Breadcrumbs */}
        <section className="bg-gray-7">
          <div className="breadcrumbs-custom box-transform-wrap context-dark">
            <div className="container">
              <h3 className="breadcrumbs-custom-title">Services</h3>
              <div className="breadcrumbs-custom-decor" />
            </div>
            <div
              className="box-transform"
              style={{ backgroundImage: "url(assets/images/bg-services.jpg)" }}
            />
          </div>
          <div className="container">
            <ul className="breadcrumbs-custom-path">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="active">Services</li>
            </ul>
          </div>
        </section>
        {/* Services 2*/}
        <section className="section section-xl bg-default text-center">
          <div className="container">
            <div className="title-group">
              <h3 className="oh">
                <span
                  className="d-inline-block wow slideInUp"
                  data-wow-delay="0s"
                >
                  Our services
                </span>
              </h3>
              <p className="text-width-small wow fadeInUp" data-wow-delay=".1s">
                Our company provides first-class solutions &amp; services for
                organizations worldwide.
              </p>
            </div>
            <div className="row row-lg row-40 justify-content-center">
              <div className="col-md-6 col-lg-5 col-xl-4">
                <div className="oh">
                  {/* Services Classic*/}
                  <article
                    className="services-classic wow slideInLeft"
                    data-wow-delay="0s"
                    data-wow-duration="1s"
                  >
                    <Link
                      className="services-classic-figure"
                      to="/service-project-management-solutions"
                    >
                      <img
                        src="assets/images/services-1-370x274.jpg"
                        alt=''
                        width={370}
                        height={274}
                      />
                    </Link>
                    <div className="services-classic-caption">
                      <div className="unit align-items-lg-center">
                        <div className="unit-left">
                          <span className="services-classic-icon linearicons-trailer" />
                        </div>
                        <div className="unit-body">
                          <h5 className="services-classic-title">
                            <Link to="/service-project-management-solutions">
                              Turnkey Project Management Solutions &amp;
                              Advisory
                            </Link>
                          </h5>
                          {/* <p class="services-classic-text">View Machines Available</p> */}
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 col-xl-4">
                <div className="oh">
                  {/* Services Classic*/}
                  <article
                    className="services-classic wow slideInLeft"
                    data-wow-delay=".15s"
                    data-wow-duration="1s"
                  >
                    <Link
                      className="services-classic-figure"
                      to="/service-cost-engineering-feasability"
                    >
                      <img
                        src="assets/images/services-2-370x274.jpg"
                        alt=''
                        width={370}
                        height={274}
                      />
                    </Link>
                    <div className="services-classic-caption">
                      <div className="unit align-items-lg-center">
                        <div className="unit-left">
                          <span className="services-classic-icon linearicons-cable2" />
                        </div>
                        <div className="unit-body">
                          <h5 className="services-classic-title">
                            <Link to="/service-cost-engineering-feasability">
                              Cost Engineering and Feasability Studies
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 col-xl-4">
                <div className="oh">
                  {/* Services Classic*/}
                  <article
                    className="services-classic wow slideInRight"
                    data-wow-delay="0s"
                    data-wow-duration="1s"
                  >
                    <Link
                      className="services-classic-figure"
                      href="/service-engineering"
                    >
                      <img
                        src="assets/images/services-16-370x274.jpg"
                        alt=''
                        width={370}
                        height={274}
                      />
                    </Link>
                    <div className="services-classic-caption">
                      <div className="unit align-items-lg-center">
                        <div className="unit-left">
                          <span className="services-classic-icon linearicons-picture" />
                        </div>
                        <div className="unit-body">
                          <h5 className="services-classic-title">
                            <Link to="service-engineering">Engineering</Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 col-xl-4">
                <div className="oh">
                  {/* Services Classic*/}
                  <article
                    className="services-classic wow slideInRight"
                    data-wow-delay=".15s"
                    data-wow-duration="1s"
                  >
                    <Link
                      className="services-classic-figure"
                      to="/service-fabrication"
                    >
                      <img
                        src="assets/images/services-4-370x274.jpg"
                        alt=''
                        width={370}
                        height={274}
                      />
                    </Link>
                    <div className="services-classic-caption">
                      <div className="unit align-items-lg-center">
                        <div className="unit-left">
                          <span className="services-classic-icon linearicons-time-lapse" />
                        </div>
                        <div className="unit-body">
                          <h5 className="services-classic-title">
                            <Link to="/service-fabrication">Fabrication</Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 col-xl-4">
                <div className="oh">
                  {/* Services Classic*/}
                  <article
                    className="services-classic wow slideInRight"
                    data-wow-delay=".3s"
                    data-wow-duration="1s"
                  >
                    <Link
                      className="services-classic-figure"
                      to="/service-quality-assurance-control"
                    >
                      <img
                        src="assets/images/services-5-370x274.jpg"
                        alt=''
                        width={370}
                        height={274}
                      />
                    </Link>
                    <div className="services-classic-caption">
                      <div className="unit align-items-lg-center">
                        <div className="unit-left">
                          <span className="services-classic-icon linearicons-shutter2" />
                        </div>
                        <div className="unit-body">
                          <h5 className="services-classic-title">
                            <Link to="/service-quality-assurance-control">
                              Quality Assurance &amp; Control
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 col-xl-4">
                <div className="oh">
                  {/* Services Classic*/}
                  <article
                    className="services-classic wow slideInRight"
                    data-wow-delay=".3s"
                    data-wow-duration="1s"
                  >
                    <Link
                      className="services-classic-figure"
                      to="/service-safety-management"
                    >
                      <img
                        src="assets/images/services-118-370x274.jpg"
                        alt=''
                        width={370}
                        height={274}
                      />
                    </Link>
                    <div className="services-classic-caption">
                      <div className="unit align-items-lg-center">
                        <div className="unit-left">
                          <span className="services-classic-icon linearicons-oil-pressure" />
                        </div>
                        <div className="unit-body">
                          <h5 className="services-classic-title">
                            <Link to="/service-safety-management">
                              Safety Management
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 col-xl-4">
                <div className="oh">
                  {/* Services Classic*/}
                  <article
                    className="services-classic wow slideInRight"
                    data-wow-delay=".3s"
                    data-wow-duration="1s"
                  >
                    <Link
                      className="services-classic-figure"
                      to="/service-detailed-design"
                    >
                      <img
                        src="assets/images/services-128-370x274.jpg"
                        alt=''
                        width={370}
                        height={274}
                      />
                    </Link>
                    <div className="services-classic-caption">
                      <div className="unit align-items-lg-center">
                        <div className="unit-left">
                          <span className="services-classic-icon linearicons-car-battery" />
                        </div>
                        <div className="unit-body">
                          <h5 className="services-classic-title">
                            <Link to="/service-detailed-design">
                              Detailed Design &amp; Engineering
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 col-xl-4">
                <div className="oh">
                  {/* Services Classic*/}
                  <article
                    className="services-classic wow slideInRight"
                    data-wow-delay=".3s"
                    data-wow-duration="1s"
                  >
                    <Link
                      className="services-classic-figure"
                      to="/service-standby-power-systems"
                    >
                      <img
                        src="assets/images/services-138-370x274.jpg"
                        alt=''
                        width={370}
                        height={274}
                      />
                    </Link>
                    <div className="services-classic-caption">
                      <div className="unit align-items-lg-center">
                        <div className="unit-left">
                          <span className="services-classic-icon linearicons-sun" />
                        </div>
                        <div className="unit-body">
                          <h5 className="services-classic-title">
                            <Link to="/service-standby-power-systems">
                              Standby Power Systems
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 col-xl-4">
                <div className="oh">
                  {/* Services Classic*/}
                  <article
                    className="services-classic wow slideInLeft"
                    data-wow-delay=".3s"
                    data-wow-duration="1s"
                  >
                    <Link
                      className="services-classic-figure"
                      to="/service-plant-equipment"
                    >
                      <img
                        src="assets/images/services-15-370x274.jpg"
                        alt=''
                        width={370}
                        height={274}
                      />
                    </Link>
                    <div className="services-classic-caption">
                      <div className="unit align-items-lg-center">
                        <div className="unit-left">
                          <span className="services-classic-icon linearicons-factory2" />
                        </div>
                        <div className="unit-body">
                          <h5 className="services-classic-title">
                            <Link to="/service-plant-equipment">
                              Plant &amp; Equipment
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About our plant*/}
        <section className="section section-md section-inset-2 bg-gray-100 text-left section-relative">
          <div className="container">
            <div className="row row-60 justify-content-center justify-content-xxl-between">
              <div className="col-md-9 col-lg-6 position-static index-1">
                <div className="bg-image-left-lg bg-image-left-1">
                  <img
                    src="assets/images/steelworks/video-1-1110x800.jpg"
                    alt=''
                    width={1110}
                    height={800}
                  />
                  <div
                    className="box-transform"
                    style={{
                      backgroundImage:
                        "url(assets/images/steelworks/video-1-1110x800.jpg)",
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-6 position-static">
                <div className="inset-left-lg-15 inset-left-xl-70">
                  <h3 className="text-spacing-50 font-weight-light oh-desktop">
                    <span className="d-inline-block wow slideInDown">
                      <span className="font-weight-bold">COMPANY</span> SERVICES
                    </span>
                  </h3>
                  <div
                    className="card-group-custom card-group-corporate"
                    id="accordion4"
                    role="tablist"
                    aria-multiselectable="false"
                  >
                    {/*Bootstrap card*/}
                    <article className="card card-custom card-corporate card-corporate-2 wow fadeInLeft">
                      <div className="card-header" role="tab">
                        <div className="card-title">
                          <a
                            className="collapsed"
                            id="accordion4-card-head-asfcgukd"
                            data-toggle="collapse"
                            data-parent="#accordion4"
                            href="#accordion4-card-body-iqapneci"
                            aria-controls="accordion4-card-body-iqapneci"
                            aria-expanded="false"
                            role="button"
                          >
                            CAPABILITIES &amp; EXPERTISE
                            <div className="card-arrow" />
                          </a>
                        </div>
                      </div>
                      <div
                        className="collapse"
                        id="accordion4-card-body-iqapneci"
                        aria-labelledby="accordion4-card-head-asfcgukd"
                        data-parent="#accordion4"
                        role="tabpanel"
                      >
                        <div className="card-body">
                          <p>
                            We offer a collective skill set which ranges from
                            technical expertise within the Construction &amp;
                            Engineering fields to the very niche industry of
                            Dragline &amp; Shovel maintenance projects. Our
                            dedicated team specialize in the practical
                            application of sound Project Management principles
                            within our Client’s respective projects. Our
                            consultants are affiliated &amp; qualified through
                            internationally renowned &amp; recognized
                            institutions providing expert leadership.
                            Substantial experience on numerous projects provides
                            crucial vision &amp; knowledge to set up projects
                            for success. Our expertise attributes are uniquely
                            diverse, dynamic and display competence through
                            achieving predictable results throughout the project
                            life cycle. Most importantly, our firm remains
                            attentive and committed towards the safety of our
                            client’s employees.
                          </p>
                        </div>
                      </div>
                    </article>
                    {/*Bootstrap card*/}
                    <article className="card card-custom card-corporate card-corporate-2 wow fadeInLeft">
                      <div className="card-header" role="tab">
                        <div className="card-title">
                          <a
                            className="collapsed"
                            id="accordion4-card-head-naiidcyj"
                            data-toggle="collapse"
                            data-parent="#accordion4"
                            href="#accordion4-card-body-kcwdpxiu"
                            aria-controls="accordion4-card-body-kcwdpxiu"
                            aria-expanded="false"
                            role="button"
                          >
                            PROJECT PLANNING &amp; CONTROLS
                            <div className="card-arrow" />
                          </a>
                        </div>
                      </div>
                      <div
                        className="collapse"
                        id="accordion4-card-body-kcwdpxiu"
                        aria-labelledby="accordion4-card-head-naiidcyj"
                        data-parent="#accordion4"
                        role="tabpanel"
                      >
                        <div className="card-body">
                          <p>
                            As a key foundation to our Consulting Services, we
                            specialize in the interpretation &amp; development
                            of Project WBS’s, Execution Plans, Schedules,
                            Controls &amp; Earned Value Management, Project
                            progress reporting &amp; controls are managed &amp;
                            driven in accordance with the aligned scheduled
                            milestones &amp; deliverables. Our clients are
                            always kept in an informed position to make key
                            decisions. Project Progress Reporting &amp;
                            Dashboards are customized to suit each of our
                            Client’s requirements, policies &amp; procedures.
                            During the close-out phase of a Project, we
                            recommend a full Project Spesific ‘postmortem’
                            Project Execution &amp; Lessons Learned Report, to
                            create this opportunity for the continuous
                            improvement to the Project Management Culture within
                            the corporation.
                          </p>
                        </div>
                      </div>
                    </article>
                    {/*Bootstrap card*/}
                    <article className="card card-custom card-corporate card-corporate-2 wow fadeInLeft">
                      <div className="card-header" role="tab">
                        <div className="card-title">
                          <a
                            className="collapsed"
                            id="accordion4-card-head-wdokteik"
                            data-toggle="collapse"
                            data-parent="#accordion4"
                            href="#accordion4-card-body-xsoyfkil"
                            aria-controls="accordion4-card-body-xsoyfkil"
                            aria-expanded="false"
                            role="button"
                          >
                            ENGINEERING
                            <div className="card-arrow" />
                          </a>
                        </div>
                      </div>
                      <div
                        className="collapse"
                        id="accordion4-card-body-xsoyfkil"
                        aria-labelledby="accordion4-card-head-wdokteik"
                        data-parent="#accordion4"
                        role="tabpanel"
                      >
                        <div className="card-body">
                          <p>
                            Hlela ’s Engineering Services strives to implement
                            technology-driven, effective solutions to the
                            mining, power, construction and industrial sectors.
                            Our primary focus is to deliver customer-driven and
                            value- adding services to our growing client base.
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="bg-image-right bg-image-right-3" />
              </div>
            </div>
          </div>
        </section>
        {/* Section CTA*/}
        <section
          className="section parallax-container"
          data-parallax-img="assets/images/bg-index-8.jpg"
        >
          <div className="parallax-content section-sm section-inset-1 context-dark text-md-left">
            <div className="container">
              <div className="row row-30 justify-content-center align-items-center">
                <div className="col-sm-10 col-md-8 col-lg-6 col-xl-9">
                  <h5 className="text-xl-nowrap font-weight-normal text-transform-none wow fadeInDown">
                    Delivering Reliable Products &amp; Services Worldwide
                  </h5>
                </div>
                <div className="col-md-4 col-xl-3 text-md-right oh-desktop">
                  <Link
                    className="button button-width-auto button-outline button-default-outline-2 button-winona wow slideInRight"
                    to="contacts"
                  >
                    Get in touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

         {/* Footer */}
         <Footer />
          {/* Footer */}
      </div>
    </>
  );
};

export default ServicesBackupPage;

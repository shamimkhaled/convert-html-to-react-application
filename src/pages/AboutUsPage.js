import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header"; 
import Footer from "../components/Footer";


const AboutUsPage = () => {
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
              <h3 className="breadcrumbs-custom-title">About Us</h3>
              <div className="breadcrumbs-custom-decor" ></div>
            </div>
            <div
              className="box-transform"
              style={{ backgroundImage: "url(assets/images/bg-services.jpg)" }}
            />
          </div>
          <div className="container">
            <ul className="breadcrumbs-custom-path">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="active">About Us</li>
            </ul>
          </div>
        </section>
        {/* About*/}
        <section className="section section-lg bg-default">
          <div className="container">
            <div
              className="tabs-custom row row-50 justify-content-center flex-lg-row-reverse text-center text-md-left"
              id="tabs-4"
            >
              <div className="col-lg-12 col-xl-9">
                {/* Tab panes*/}
                <div className="tab-content tab-content-1">
                  <div className="tab-pane fade show active" id="tabs-4-1">
                    <h4>A few words about us</h4>
                    <p>
                      Hlela Mining and Projects – Africa is a diverse Mining,
                      Management &amp; Engineering Consultancy Company based
                      within Mpumalanga, South Africa. Our foremost purpose is
                      to provide our clients with innovative, sustainable, and
                      cost-effective solutions to meet their Mining, Engineering
                      and Management requirements. Through our experienced
                      personnel and academic affiliations, Hlela’s clients are
                      assured a superior and tailor-made solution. We aim to
                      ensure that a unique deliverable-orientated &amp;
                      supportive relationship is created with each client.
                    </p>
                    <img
                      src="assets/images/about-1-835x418.jpg"
                      alt=''
                      width={835}
                      height={418}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Team*/}
        <section className="section section-lg section-bottom-md-70 bg-default">
          <div className="container">
            <h3 className="oh">
              <span
                className="d-inline-block wow slideInUp"
                data-wow-delay="0s"
              >
                Our team
              </span>
            </h3>
            <div className="row row-lg row-40 justify-content-center">
              <div
                className="col-sm-6 col-lg-3 wow fadeInLeft"
                data-wow-delay=".2s"
                data-wow-duration="1s"
              >
                {/* Team Modern*/}
                <article className="team-modern">
                  <Link className="team-modern-figure" to="#">
                    <img
                      src="assets/images/team-1-270x236.jpg"
                      alt=''
                      width={270}
                      height={236}
                    />
                  </Link>
                  <div className="team-modern-caption">
                    <h6 className="team-modern-name">
                      <Link to="#">Tyrell Viljoen</Link>
                    </h6>
                    <div className="team-modern-status">
                      Head - Project Delivery
                    </div>
                    <ul className="list-inline team-modern-social-list">
                      <li>
                        <Link className="icon mdi mdi-linkedin" to="#" > </Link>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <div
                className="col-sm-6 col-lg-3 wow fadeInLeft"
                data-wow-delay="0s"
                data-wow-duration="1s"
              >
                {/* Team Modern*/}
                <article className="team-modern">
                  <Link className="team-modern-figure" to="#">
                    <img
                      src="assets/images/team-1-270x236.jpg"
                      alt=''
                      width={270}
                      height={236}
                    />
                  </Link>
                  <div className="team-modern-caption">
                    <h6 className="team-modern-name">
                      <Link to="#">Christo Smith</Link>
                    </h6>
                    <div className="team-modern-status">Head - Engineering</div>
                    <ul className="list-inline team-modern-social-list">
                      <li>
                        <Link className="icon mdi mdi-linkedin" to="#" ></Link>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <div
                className="col-sm-6 col-lg-3 wow fadeInRight"
                data-wow-delay=".1s"
                data-wow-duration="1s"
              >
                {/* Team Modern*/}
                <article className="team-modern">
                  <Link className="team-modern-figure" to="#">
                    <img
                      src="assets/images/team-1-270x236.jpg"
                      alt=''
                      width={270}
                      height={236}
                    />
                  </Link>
                  <div className="team-modern-caption">
                    <h6 className="team-modern-name">
                      <Link to="#">Andries Smith</Link>
                    </h6>
                    <div className="team-modern-status">
                      Head - Field Support
                    </div>
                    <ul className="list-inline team-modern-social-list">
                      <li>
                        <Link className="icon mdi mdi-linkedin" to="#" ></Link>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <div
                className="col-sm-6 col-lg-3 wow fadeInRight"
                data-wow-delay=".1s"
                data-wow-duration="1s"
              >
                {/* Team Modern*/}
                <article className="team-modern">
                  <Link className="team-modern-figure" to="#">
                    <img
                      src="assets/images/team-1-270x236.jpg"
                      alt=''
                      width={270}
                      height={236}
                    />
                  </Link>
                  <div className="team-modern-caption">
                    <h6 className="team-modern-name">
                      <Link to="#">Shaun Scheepers</Link>
                    </h6>
                    <div className="team-modern-status">Field Support</div>
                    <ul className="list-inline team-modern-social-list">
                      <li>
                        <Link className="icon mdi mdi-linkedin" to="#" ></Link>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <div
                className="col-sm-6 col-lg-3 wow fadeInRight"
                data-wow-delay=".1s"
                data-wow-duration="1s"
              >
                {/* Team Modern*/}
                <article className="team-modern">
                  <Link className="team-modern-figure" to="#">
                    <img
                      src="assets/images/team-1-270x236.jpg"
                      alt=''
                      width={270}
                      height={236}
                    />
                  </Link>
                  <div className="team-modern-caption">
                    <h6 className="team-modern-name">
                      <Link to="#">Jhuan Roets</Link>
                    </h6>
                    <div className="team-modern-status">Field Support</div>
                    <ul className="list-inline team-modern-social-list">
                      <li>
                        <Link className="icon mdi mdi-linkedin" to="#" ></Link>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        {/* Icon Classic*/}
        <section className="section section-lg bg-gray-100">
          <div className="container">
            <div className="row row-md row-50">
              <div
                className="col-sm-6 col-xl-4 wow fadeInUp"
                data-wow-delay="0s"
              >
                <article className="box-icon-classic">
                  <div className="unit unit-spacing-lg flex-column text-center flex-md-row text-md-left">
                    <div className="unit-left">
                      <div className="box-icon-classic-icon linearicons-hammer-wrench" />
                    </div>
                    <div className="unit-body">
                      <h5 className="box-icon-classic-title">
                        <Link to="/single-service">Modern Equipment</Link>
                      </h5>
                    </div>
                  </div>
                </article>
              </div>
              <div
                className="col-sm-6 col-xl-4 wow fadeInUp"
                data-wow-delay=".1s"
              >
                <article className="box-icon-classic">
                  <div className="unit unit-spacing-lg flex-column text-center flex-md-row text-md-left">
                    <div className="unit-left">
                      <div className="box-icon-classic-icon linearicons-map-marker-check" />
                    </div>
                    <div className="unit-body">
                      <h5 className="box-icon-classic-title">
                        <Link to="/single-service">
                          Quality Service Guarranteed
                        </Link>
                      </h5>
                    </div>
                  </div>
                </article>
              </div>
              <div
                className="col-sm-6 col-xl-4 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <article className="box-icon-classic">
                  <div className="unit unit-spacing-lg flex-column text-center flex-md-row text-md-left">
                    <div className="unit-left">
                      <div className="box-icon-classic-icon linearicons-leaf" />
                    </div>
                    <div className="unit-body">
                      <h5 className="box-icon-classic-title">
                        <Link to="/single-service">Eco Solutions</Link>
                      </h5>
                    </div>
                  </div>
                </article>
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

export default AboutUsPage;

import React from "react";
import { Link } from "react-router-dom";
//import   '../styles/assets/css/style-6.css'
import   '../styles/assets/css/style-6.css'

import Header from "../components/Header";
import Footer from "../components/Footer";


const IndexPage = () => {




  return (
    <>

      <div >
          {/* Header */}
          <Header />
         {/* Header */}
        
        {/* Swiper*/}
        <section
          className="section swiper-container swiper-slider swiper-slider-1"
          data-loop="true"
          data-autoplay={5000}
          data-simulate-touch="false"
          data-slide-effect="fade"  
        > 
          <div className="swiper-wrapper text-center">
           
            <div
              className="swiper-slide context-dark"
              data-slide-bg="assets/images/slide-1-1920x724.jpg" 
              
            >
               {/* <img  src="assets/images/slide-1-1920x724.jpg" alt='' /> */}

              <div className="swiper-slide-caption section-md">
                <div className="container">
                  <div className="row justify-content-lg-center">
                    <div className="col-lg-9">
                      <h6
                        className="font-weight-normal text-spacing-180"
                        data-caption-animate="fadeInRight"
                        data-caption-delay={400}
                      >
                        100% Guarranteed
                      </h6>
                      <h4 className="oh font-weight-ubold text-spacing-500">
                        <span
                          data-caption-animate="slideInUp"
                          data-caption-delay={100}
                        >
                          Professional Projects &amp; Services
                        </span>
                      </h4>
                      <h6
                        className="font-weight-light text-spacing-180"
                        data-caption-animate="fadeInLeft"
                        data-caption-delay={400}
                      >
                        Unbeatable Quality
                      </h6>
                      {/* <a className="button button-lg button-secondary button-winona button-shadow-2" to="#" data-caption-animate="fadeInUp" data-caption-delay="400">View more</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide context-dark"
              data-slide-bg="assets/images/slide-2-1920x724.jpg"
            >
              <div className="swiper-slide-caption section-md">
                <div className="container">
                  <div className="row justify-content-lg-center">
                    <div className="col-lg-9">
                      <h6
                        className="font-weight-normal text-spacing-180"
                        data-caption-animate="fadeInRight"
                        data-caption-delay={400}
                      >
                        Trusted Production
                      </h6>
                      <h4 className="oh font-weight-ubold text-spacing-500">
                        <span
                          data-caption-animate="slideInUp"
                          data-caption-delay={100}
                        >
                          Nation-Wide Customer Support
                        </span>
                      </h4>
                      <h6
                        className="font-weight-light text-spacing-180"
                        data-caption-animate="fadeInLeft"
                        data-caption-delay={400}
                      >
                        Unbeatable Prices
                      </h6>
                      {/* <a className="button button-lg button-secondary button-winona button-shadow-2" to="#" data-caption-animate="fadeInUp" data-caption-delay="400">View more</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Swiper Pagination*/}
          <div className="swiper-pagination" data-bullet-custom="true" />
          {/* Swiper Navigation*/}
          <div className="swiper-button-prev">
            <svg width="100%" height="100%" viewBox="0 0 78 78">
              <circle className="swiper-button-line" cx={39} cy={39} r={36} />
              <circle className="swiper-button-line-2" cx={39} cy={39} r={36} />
            </svg>
          </div>
          <div className="swiper-button-next">
            <svg width="100%" height="100%" viewBox="0 0 78 78">
              <circle className="swiper-button-line" cx={39} cy={39} r={36} />
              <circle className="swiper-button-line-2" cx={39} cy={39} r={36} />
            </svg>
          </div>
        </section>
        {/* who are we? */}
        <section
          className="section section-md section-lg-0 bg-gray-100 text-md-left section-relative"
          id="about"
        >
          <div className="tabs-custom container" id="tabs-8">
            <div className="row row-40 flex-lg-row-reverse">
              <div className="col-lg-4">
                <div className="nav-tabs-2-button">
                  <h5 className="nav-tabs-2-title">Who Are We?</h5>
                  <span
                    className="icon mdi mdi-arrow-down"
                    data-custom-scroll-to="about"
                  />
                </div>
                <ul className="nav nav-tabs-2">
                  <li
                    className="nav-item-2 wow fadeInRight"
                    role="presentation"
                  >
                    <Link className="active" to="#tabs-8-1" data-toggle="tab">
                      Our values
                    </Link>
                  </li>
                  <li
                    className="nav-item-2 wow fadeInRight"
                    role="presentation"
                  >
                    <Link to="#tabs-8-2" data-toggle="tab">
                      Our Mission
                    </Link>
                  </li>
                  <li
                    className="nav-item-2 wow fadeInRight"
                    role="presentation"
                  >
                    <Link to="#tabs-8-3" data-toggle="tab">
                      Our Vision
                    </Link>
                  </li>
                  <li
                    className="nav-item-2 wow fadeInRight"
                    role="presentation"
                  >
                    <Link to="#tabs-8-4" data-toggle="tab">
                      Our Strategy
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-8 tab-content-2 wow fadeInLeft">
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tabs-8-1">
                    <div className="row row-40 row-lg-50 row-xl-60">
                      <div className="col-sm-6">
                        <article className="box-icon-classic">
                          <div className="unit unit-spacing-lg flex-column text-center flex-md-row text-md-left">
                            <div className="unit-left">
                              <div className="box-icon-classic-icon linearicons-hammer-wrench" />
                            </div>
                            <div className="unit-body">
                              <h5 className="box-icon-classic-title">
                                <Link to="/single-service">Integrity</Link>
                              </h5>
                              <p className="box-icon-classic-text">
                                We have an uncompromising commitment to ethics
                                and zero harm. We care about everyone.
                              </p>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="col-sm-6">
                        <article className="box-icon-classic">
                          <div className="unit unit-spacing-lg flex-column text-center flex-md-row text-md-left">
                            <div className="unit-left">
                              <div className="box-icon-classic-icon linearicons-map-marker-check" />
                            </div>
                            <div className="unit-body">
                              <h5 className="box-icon-classic-title">
                                <Link to="single-service">Respect</Link>
                              </h5>
                              <p className="box-icon-classic-text">
                                We hold each other, our customers, and the
                                industries we serve in the highest regard.
                              </p>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="col-sm-6">
                        <article className="box-icon-classic">
                          <div className="unit unit-spacing-lg flex-column text-center flex-md-row text-md-left">
                            <div className="unit-left">
                              <div className="box-icon-classic-icon linearicons-users2" />
                            </div>
                            <div className="unit-body">
                              <h5 className="box-icon-classic-title">
                                <Link to="single-service">Teamwork</Link>
                              </h5>
                              <p className="box-icon-classic-text">
                                We work together to achieve results and to solve
                                your toughest challenges.
                              </p>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="col-sm-6">
                        <article className="box-icon-classic">
                          <div className="unit unit-spacing-lg flex-column text-center flex-md-row text-md-left">
                            <div className="unit-left">
                              <div className="box-icon-classic-icon linearicons-leaf" />
                            </div>
                            <div className="unit-body">
                              <h5 className="box-icon-classic-title">
                                <Link to="/single-service">Diversity</Link>
                              </h5>
                              <p className="box-icon-classic-text">
                                We appreciate our differences and embrace a
                                broad range of perspectives and cultures.
                              </p>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tabs-8-2">
                    <div className="box-info">
                      <div className="unit flex-column flex-md-row align-items-center">
                        <div className="unit-left">
                          <div className="box-info-figure">
                            <img
                              src="assets/images/mining/about-1-326x390.jpg"
                              alt=""
                              width={326}
                              height={390}
                            />
                          </div>
                        </div>
                        <div className="unit-body">
                          <div className="box-info-content">
                            <h5 className="box-info-title">Our Mission</h5>
                            <p className="box-info-text">
                              We are committed to empowering, utilizing,
                              expanding and developing the necessary skillsets
                              within the areas that we operate in.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tabs-8-3">
                    <div className="box-info">
                      <div className="unit flex-column flex-md-row align-items-center">
                        <div className="unit-left">
                          <div className="box-info-figure">
                            <img
                              src="assets/images/mining/about-2-326x390.jpg"
                              alt=""
                              width={326}
                              height={390}
                            />
                          </div>
                        </div>
                        <div className="unit-body">
                          <div className="box-info-content">
                            <h5 className="box-info-title">Our Vision</h5>
                            <p className="box-info-text">
                              Our vision is to create sustainable &amp;
                              meaningful relationships within the mining &amp;
                              mining project sector.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tabs-8-4">
                    <div className="box-info">
                      <div className="unit flex-column flex-md-row align-items-center">
                        <div className="unit-left">
                          <div className="box-info-figure">
                            <img
                              src="assets/images/mining/about-3-326x390.jpg"
                              alt=""
                              width={326}
                              height={390}
                            />
                          </div>
                        </div>
                        <div className="unit-body">
                          <div className="box-info-content">
                            <h5 className="box-info-title">Our Strategy</h5>
                            <p className="box-info-text">
                              Forming strategic &amp; collaborative partnerships
                              to practically exhibit our companys capabilities
                              &amp; expertise.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our services*/}
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
                      alt=""
                      width={835}
                      height={418}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Our Company*/}
        <section className="section section-xl bg-default text-md-left">
          <div className="container">
            <div
              className="tabs-custom row row-50 align-items-center flex-xl-row-reverse text-center text-md-left"
              id="tabs-6"
            >
              <div className="col-xl-3">
                <h5 className="text-spacing-200">What we can offer</h5>
                <ul className="nav list-category list-category-down-lg-inline-block">
                  <li
                    className="list-category-item wow fadeInRight"
                    role="presentation"
                    data-wow-delay="0s"
                  >
                    <Link className="active" to="#tabs-6-1" data-toggle="tab">
                      Repair Services
                    </Link>
                  </li>
                  <li
                    className="list-category-item wow fadeInRight"
                    role="presentation"
                    data-wow-delay=".1s"
                  >
                    <Link to="#tabs-6-2" data-toggle="tab">
                      Fabrication
                    </Link>
                  </li>
                  <li
                    className="list-category-item wow fadeInRight"
                    role="presentation"
                    data-wow-delay=".2s"
                  >
                    <Link to="#tabs-6-3" data-toggle="tab">
                      Industrial Development
                    </Link>
                  </li>
                  <li
                    className="list-category-item wow fadeInRight"
                    role="presentation"
                    data-wow-delay=".3s"
                  >
                    <Link to="#tabs-6-4" data-toggle="tab">
                      Engineering
                    </Link>
                  </li>
                </ul>
                <div className="link-classic">
                  <Link to="/services">See all services</Link>
                </div>
              </div>
              <div className="col-xl-9">
                {/* Tab panes*/}
                <div
                  className="tab-content tab-content-1 wow fadeInLeft"
                  data-wow-delay="0s"
                >
                  <div className="tab-pane fade show active" id="tabs-6-1">
                    <div className="row row-40 align-items-center justify-content-center justify-content-md-start">
                      <div className="col-sm-11 col-md-6 col-lg-5">
                        <h3>About our company</h3>
                        <div className="title-decor-left">
                          Working since 2010
                        </div>
                        <p>
                          Heavy Engineering Shop Crane Capability - 11 Cranes,
                          Max lifting capacity of 60 tons Workshop 6 000 sqm
                          Bucket Repairs, Booms and Sticks - Largest to date:
                          RH400 Bowl Repairs - Largest to date: Komatsu 960 Boom
                          and Stick repairs is also a large part of our scope.
                        </p>
                        <Link
                          className="button button-lg button-width-auto button-outline button-default-outline-2 button-winona"
                          to="/about-us"
                        >
                          Read more
                        </Link>
                      </div>
                      <div className="col-sm-9 col-md-6 col-xl-7">
                        {/* Owl Carousel*/}
                        <div className="owl-style-1">
                          <div
                            className="owl-carousel"
                            data-items={1}
                            data-dots="true"
                            data-pagination=".dots-custom"
                            data-numbering="#owl-numbering-1"
                            data-animation-in="fadeIn"
                            data-animation-out="fadeOut"
                            data-margin={1}
                          >
                            <img
                              src="assets/images/index-1-370x436.jpg"
                              alt=""
                              width={370}
                              height={436}
                            />
                            <img
                              src="assets/images/index-2-370x436.jpg"
                              alt=""
                              width={370}
                              height={436}
                            />
                            <img
                              src="assets/images/index-3-370x436.jpg"
                              alt=""
                              width={370}
                              height={436}
                            />
                            <img
                              src="assets/images/index-4-370x436.jpg"
                              alt=""
                              width={370}
                              height={436}
                            />
                          </div>
                          <div className="dots-custom-wrap">
                            <div className="dots-custom" />
                            <div className="owl-numbering" id="owl-numbering-1">
                              <div className="numbering-current" />
                              <div className="numbering-separator">\</div>
                              <div className="numbering-count" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tabs-6-2">
                    <div className="row row-40 align-items-center justify-content-center justify-content-md-start">
                      <div className="col-sm-11 col-md-6 col-lg-5">
                        <h3>About our company</h3>
                        <div className="title-decor-left">
                          Professional &amp; Versatile
                        </div>
                        <p>
                          Floor Bore with the capability of doing a RG 400 Track
                          Frame. Manufacturing Bushes from steel and Aluminum.
                          Bronzes Track Frames (From D6 to D11 size dozers).
                          Excavator Track Frames and Car Body - Largest to date:
                          RH 340 Rim Manufacturing - Max size - 400mm diameter
                          and 2,5 meter long
                        </p>
                        <Link
                          className="button button-lg button-width-auto button-outline button-default-outline-2 button-winona"
                          to="/about-us"
                        >
                          Read more
                        </Link>
                      </div>
                      <div className="col-sm-9 col-md-6 col-xl-7">
                        {/* Owl Carousel*/}
                        <div className="owl-style-1">
                          <div
                            className="owl-carousel"
                            data-items={1}
                            data-dots="true"
                            data-pagination=".dots-custom-2"
                            data-numbering="#owl-numbering-2"
                            data-animation-in="fadeIn"
                            data-animation-out="fadeOut"
                            data-margin={1}
                          >
                            <img
                              src="assets/images/index-2-370x436.jpg"
                              alt=""
                              width={370}
                              height={436}
                            />
                            <img
                              src="assets/images/index-3-370x436.jpg"
                              alt=""
                              width={370}
                              height={436}
                            />
                            <img
                              src="assets/images/index-4-370x436.jpg"
                              alt=""
                              width={370}
                              height={436}
                            />
                            <img
                              src="assets/images/index-1-370x436.jpg"
                              alt=""
                              width={370}
                              height={436}
                            />
                          </div>
                          <div className="dots-custom-wrap">
                            <div className="dots-custom-2" />
                            <div className="owl-numbering" id="owl-numbering-2">
                              <div className="numbering-current" />
                              <div className="numbering-separator">\</div>
                              <div className="numbering-count" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tabs-6-3">
                    <div className="row row-40 align-items-center justify-content-center justify-content-md-start">
                      <div className="col-sm-11 col-md-6 col-lg-5">
                        <h3>About our company</h3>
                        <div className="title-decor-left">
                          We Promise Top Quality
                        </div>
                        <p>
                          Hlelas Engineering Services strives to implement
                          technology-driven, effective solutions to the mining,
                          power, construction and industrial sectors. Our
                          primary focus is to deliver customer-driven and value-
                          adding services to our growing client base.
                        </p>
                        <Link
                          className="button button-lg button-width-auto button-outline button-default-outline-2 button-winona"
                          to="/about-us"
                        >
                          Read more
                        </Link>
                      </div>
                      <div className="col-sm-9 col-md-6 col-xl-7">
                        {/* Owl Carousel*/}
                        <div className="owl-style-1">
                          <div
                            className="owl-carousel"
                            data-items={1}
                            data-dots="true"
                            data-pagination=".dots-custom-3"
                            data-numbering="#owl-numbering-3"
                            data-animation-in="fadeIn"
                            data-animation-out="fadeOut"
                            data-margin={1}
                          >
                            <img
                              src="assets/images/index-3-370x436.jpg"
                              alt=""
                              width={370}
                              height={436}
                            />
                            <img
                              src="assets/images/index-4-370x436.jpg"
                              alt=""
                              width={370}
                              height={436}
                            />
                            <img
                              src="assets/images/index-1-370x436.jpg"
                              alt=""
                              width={370}
                              height={436}
                            />
                            <img
                              src="assets/images/index-2-370x436.jpg"
                              alt=""
                              width={370}
                              height={436}
                            />
                          </div>
                          <div className="dots-custom-wrap">
                            <div className="dots-custom-3" />
                            <div className="owl-numbering" id="owl-numbering-3">
                              <div className="numbering-current" />
                              <div className="numbering-separator">\</div>
                              <div className="numbering-count" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tabs-6-4">
                    <div className="row row-40 align-items-center justify-content-center justify-content-md-start">
                      <div className="col-sm-11 col-md-6 col-lg-5">
                        <h3>About our company</h3>
                        <div className="title-decor-left">
                          Some Engineering Services:
                        </div>
                        <p>
                          LV, MV &amp; HV Services. Standby Power Systems.
                          Lighting &amp; Surge Protection.
                          Electric/Instrumentatio.n Transformer Installation.
                          Maintenance Repair. Hydraulic System Installations.
                          Auto Lubrication Design. Drawings &amp; Modeling.
                          Refurbish Mechanical Systems/Machines.
                        </p>
                        <Link
                          className="button button-lg button-width-auto button-outline button-default-outline-2 button-winona"
                          to="about-us"
                        >
                          Read more
                        </Link>
                      </div>
                      <div className="col-sm-9 col-md-6 col-xl-7">
                        {/* Owl Carousel*/}
                        <div className="owl-style-1">
                          <div
                            className="owl-carousel"
                            data-items={1}
                            data-dots="true"
                            data-pagination=".dots-custom-4"
                            data-numbering="#owl-numbering-4"
                            data-animation-in="fadeIn"
                            data-animation-out="fadeOut"
                            data-margin={1}
                          >
                            <img
                              src="assets/images/index-4-370x436.jpg"
                              alt=""
                              width={370}
                              height={436}
                            />
                            <img
                              src="assets/images/index-1-370x436.jpg"
                              alt=""
                              width={370}
                              height={436}
                            />
                            <img
                              src="assets/images/index-2-370x436.jpg"
                              alt=""
                              width={370}
                              height={436}
                            />
                            <img
                              src="assets/images/index-3-370x436.jpg"
                              alt=""
                              width={370}
                              height={436}
                            />
                          </div>
                          <div className="dots-custom-wrap">
                            <div className="dots-custom-4" />
                            <div className="owl-numbering" id="owl-numbering-4">
                              <div className="numbering-current" />
                              <div className="numbering-separator">\</div>
                              <div className="numbering-count" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Partners*/}
        <section className="section section-sm section-inset-3 text-center">
          <div className="container">
            <div
              className="owl-carousel owl-style-9 owl-loaded"
              data-items={1}
              data-sm-items={2}
              data-md-items={3}
              data-lg-items={4}
              data-xl-items={5}
              data-margin={30}
              data-dots="true"
              data-mouse-drag="false"
              style={{}}
            >
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transform: "translate3d(-1200px, 0px, 0px)",
                    transition: "all 0s ease 0s",
                    width: 3600,
                  }}
                >
                  <div
                    className="owl-item cloned"
                    style={{ width: 210, marginRight: 30 }}
                  >
                    <Link className="clients-jean" to="#">
                      <img
                        src="assets/images/clients-18-200x90.png"
                        alt=""
                        width={200}
                        height={90}
                      />
                    </Link>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 210, marginRight: 30 }}
                  >
                    <Link className="clients-jean" to="#">
                      <img
                        src="assets/images/clients-6-200x90.png"
                        alt=""
                        width={200}
                        height={90}
                      />
                    </Link>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 210, marginRight: 30 }}
                  >
                    <Link className="clients-jean" to="#">
                      <img
                        src="assets/images/clients-2-200x90.png"
                        alt=""
                        width={200}
                        height={90}
                      />
                    </Link>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 210, marginRight: 30 }}
                  >
                    <Link className="clients-jean" to="#">
                      <img
                        src="assets/images/clients-3-200x90.png"
                        alt=""
                        width={200}
                        height={90}
                      />
                    </Link>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 210, marginRight: 30 }}
                  >
                    <Link className="clients-jean" to="#">
                      <img
                        src="assets/images/clients-4-200x90.png"
                        alt=""
                        width={200}
                        height={90}
                      />
                    </Link>
                  </div>
                  <div
                    className="owl-item active"
                    style={{ width: 210, marginRight: 30 }}
                  >
                    <Link className="clients-jean" to="#">
                      <img
                        src="assets/images/clients-18-200x90.png"
                        alt=""
                        width={200}
                        height={90}
                      />
                    </Link>
                  </div>
                  <div
                    className="owl-item active"
                    style={{ width: 210, marginRight: 30 }}
                  >
                    <Link className="clients-jean" to="#">
                      <img
                        src="assets/images/clients-6-200x90.png"
                        alt=""
                        width={200}
                        height={90}
                      />
                    </Link>
                  </div>
                  <div
                    className="owl-item active"
                    style={{ width: 210, marginRight: 30 }}
                  >
                    <Link className="clients-jean" to="#">
                      <img
                        src="assets/images/clients-2-200x90.png"
                        alt=""
                        width={200}
                        height={90}
                      />
                    </Link>
                  </div>
                  <div
                    className="owl-item active"
                    style={{ width: 210, marginRight: 30 }}
                  >
                    <Link className="clients-jean" to="#">
                      <img
                        src="assets/images/clients-3-200x90.png"
                        alt=""
                        width={200}
                        height={90}
                      />
                    </Link>
                  </div>
                  <div
                    className="owl-item active"
                    style={{ width: 210, marginRight: 30 }}
                  >
                    <Link className="clients-jean" to="#">
                      <img
                        src="assets/images/clients-4-200x90.png"
                        alt=""
                        width={200}
                        height={90}
                      />
                    </Link>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 210, marginRight: 30 }}
                  >
                    <Link className="clients-jean" to="#">
                      <img
                        src="assets/images/clients-18-200x90.png"
                        alt=""
                        width={200}
                        height={90}
                      />
                    </Link>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 210, marginRight: 30 }}
                  >
                    <Link className="clients-jean" to="#">
                      <img
                        src="assets/images/clients-6-200x90.png"
                        alt=""
                        width={200}
                        height={90}
                      />
                    </Link>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 210, marginRight: 30 }}
                  >
                    <Link className="clients-jean" to="#">
                      <img
                        src="assets/images/clients-2-200x90.png"
                        alt=""
                        width={200}
                        height={90}
                      />
                    </Link>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 210, marginRight: 30 }}
                  >
                    <Link className="clients-jean" to="#">
                      <img
                        src="assets/images/clients-3-200x90.png"
                        alt=""
                        width={200}
                        height={90}
                      />
                    </Link>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 210, marginRight: 30 }}
                  >
                    <Link className="clients-jean" to="#">
                      <img
                        src="assets/images/clients-4-200x90.png"
                        alt=""
                        width={200}
                        height={90}
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="owl-nav disabled">
                <button
                  type="button"
                  role="presentation"
                  className="owl-prev"
                />
                <button
                  type="button"
                  role="presentation"
                  className="owl-next"
                />
              </div>
              <div className="owl-dots disabled">
                <button className="owl-dot active">
                  <span> </span>
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Section Clients*/}
        <section className="section section-xl bg-gray-100 text-md-left">
          <div className="container">
            <div className="row row-60 justify-content-center flex-lg-row-reverse">
              <div className="col-md-8 col-lg-6 col-xl-5">
                <div className="offset-left-xl-70">
                  <h3 className="oh-desktop">
                    <span className="d-inline-block wow slideInLeft">
                      ACADEMIC AFFILIATIONS
                    </span>
                  </h3>
                  <div className="slick-quote">
                    {/* Slick Carousel*/}
                    <div
                      className="slick-slider carousel-parent"
                      data-autoplay="true"
                      data-swipe="true"
                      data-items={1}
                      data-child="#child-carousel-2"
                      data-for="#child-carousel-2"
                      data-slide-effect="true"
                    >
                      <div className="item">
                        {/* Quote Modern*/}
                        <article className="quote-modern">
                          <h5 className="quote-modern-text">
                            <span className="q">
                              Through our experienced personnel and academic
                              affiliations, Hlelas clients are assured a
                              superior and tailor-made solution.
                            </span>
                          </h5>
                          <p className="quote-modern-status">
                            ACADEMIC &amp; INSTITUTE AFFILIATIONS
                          </p>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-7">
                {/* Clients Classic*/}
                <div className="clients-classic-wrap">
                  <div className="row no-gutters">
                    <div className="col-sm-6 wow fadeInLeft">
                      <div className="clients-classic">
                        <Link className="clients-classic-figure" to="#">
                          <img
                            src="assets/images/clients-1-200x90.png"
                            alt=""
                            width={200}
                            height={90}
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-sm-6 wow fadeInRight">
                      <div className="clients-classic">
                        <Link className="clients-classic-figure" to="#">
                          <img
                            src="assets/images/clients-2-200x90.png"
                            alt=""
                            width={200}
                            height={90}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="row no-gutters">
                    <div className="col-sm-6 wow fadeInLeft">
                      <div className="clients-classic">
                        <Link className="clients-classic-figure" to="#">
                          <img
                            src="assets/images/clients-3-200x90.png"
                            alt=""
                            width={200}
                            height={90}
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-sm-6 wow fadeInRight">
                      <div className="clients-classic">
                        <Link className="clients-classic-figure" to="#">
                          <img
                            src="assets/images/clients-4-200x90.png"
                            alt=""
                            width={200}
                            height={90}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* We are focused on results*/}
        <section
          className="section parallax-container"
          data-parallax-img="assets/images/bg-icon-1.jpg"
        >
          <div className="parallax-content section-lg context-dark text-md-left">
            <div className="container">
              <h4 className="font-weight-light">
                We are focused on results and service delivery
              </h4>
              <p className="big text-spacing-75 text-white-06">
                Our company view on quality control is of the highest degree.
              </p>
              <div className="row row-lg row-30">
                <div
                  className="col-sm-6 col-md-5 col-lg-3 wow fadeInRight"
                  data-wow-delay="0s"
                >
                  <article className="box-icon-creative">
                    <div className="box-icon-creative-body">
                      <div className="box-icon-creative-icon linearicons-trophy2" />
                      <p className="box-icon-creative-title">
                        <Link to="#">
                          Bowl Repairs - Largest to date: Komatsu 960
                        </Link>
                      </p>
                    </div>
                  </article>
                </div>
                <div
                  className="col-sm-6 col-md-5 col-lg-3 wow fadeInRight"
                  data-wow-delay=".1s"
                >
                  <article className="box-icon-creative">
                    <div className="box-icon-creative-body">
                      <div className="box-icon-creative-icon linearicons-flag" />
                      <p className="box-icon-creative-title">
                        <Link to="#">
                          Bucket Repairs, Booms and Sticks - Largest to date:
                          RH400
                        </Link>
                      </p>
                    </div>
                  </article>
                </div>
                <div
                  className="col-sm-6 col-md-5 col-lg-3 wow fadeInRight"
                  data-wow-delay=".2s"
                >
                  <article className="box-icon-creative">
                    <div className="box-icon-creative-body">
                      <div className="box-icon-creative-icon linearicons-gas" />
                      <p className="box-icon-creative-title">
                        <Link to="#">
                          Excavator Track Frames and Car Body - Largest to date:
                          RH 340
                        </Link>
                      </p>
                    </div>
                  </article>
                </div>
                <div
                  className="col-sm-6 col-md-5 col-lg-3 wow fadeInRight"
                  data-wow-delay=".3s"
                >
                  <article className="box-icon-creative">
                    <div className="box-icon-creative-body">
                      <div className="box-icon-creative-icon linearicons-medal-empty icon-big" />
                      <p className="box-icon-creative-title">
                        <Link to="#">Workshop 6000 sqm</Link>
                      </p>
                    </div>
                  </article>
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

export default IndexPage;

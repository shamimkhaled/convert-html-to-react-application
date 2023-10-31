import React from 'react'
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ServiceFabricationPage = () => {
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
            <h3 className="breadcrumbs-custom-title">
              Service:  Fabrication
            </h3>
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li className="active"> Fabrication</li>
          </ul>
        </div>
      </section>
      {/* Services*/}
      <section className="section section-sm section-first bg-default text-left">
        <div className="container">
          <div className="row row-60">
            <div className="col-md-12 col-xl-12">
              <div className="single-service">
                <img
                  src="assets/images/single-service-1-770x426.jpg"
                  alt=''
                  width="100%"
                  height={390}
                />
                <h4> Fabrication</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley
                </p>
                <p>
                  of type and scrambled it to make a type specimen book. It
                  has survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It
                  was popularised
                </p>
                <p>
                  in the 1960s with the release of Letraset sheets containing
                  Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions
                  of Lorem Ipsum.
                </p>
                <div className="row row-50 flex-xl-row-reverse">
                  <div className="col-xl-4">
                    <article className="team-classic">
                      <Link className="team-classic-figure" to="#">
                        <img
                          src="assets/images/post-15-106x104.jpg"
                          alt=''
                          width={270}
                          height={182}
                        />
                      </Link>
                      <div className="team-classic-title">
                        Feel free to contact us, we are ready to help you!
                      </div>
                      <div className="team-classic-name">
                        <Link to="#">Alice Parker</Link>, <span>Manager</span>
                      </div>
                    </article>
                  </div>
                  <div className="col-xl-8">
                    {/* Bootstrap collapse*/}
                    <div
                      className="card-group-custom card-group-corporate"
                      id="accordion3"
                      role="tablist"
                      aria-multiselectable="false"
                    >
                      {/*Bootstrap card*/}
                      <article className="card card-custom card-corporate">
                        <div className="card-header" role="tab">
                          <div className="card-title">
                            <a
                              id="accordion3-card-head-hfrorgok"
                              data-toggle="collapse"
                              data-parent="#accordion3"
                              href="#accordion3-card-body-vujsdnha"
                              aria-controls="accordion3-card-body-vujsdnha"
                              aria-expanded="true"
                              role="button"
                            >
                              High Quality Guarantee
                              <div className="card-arrow" />
                            </a>
                          </div>
                        </div>
                        <div
                          className="collapse show"
                          id="accordion3-card-body-vujsdnha"
                          aria-labelledby="accordion3-card-head-hfrorgok"
                          data-parent="#accordion3"
                          role="tabpanel"
                        >
                          <div className="card-body">
                            <p>
                              Ecce. Vae, grandis bromium! Armarium de alt=''us
                              ionicis tormento, locus urbs! Cum nix
                              congregabo, omnes abactores experientia peritus,
                              camerarius
                            </p>
                          </div>
                        </div>
                      </article>
                      {/*Bootstrap card*/}
                      <article className="card card-custom card-corporate">
                        <div className="card-header" role="tab">
                          <div className="card-title">
                            <a
                              className="collapsed"
                              id="accordion3-card-head-gvdrlxpa"
                              data-toggle="collapse"
                              data-parent="#accordion3"
                              href="#accordion3-card-body-eqdfblmu"
                              aria-controls="accordion3-card-body-eqdfblmu"
                              aria-expanded="false"
                              role="button"
                            >
                              Qualified Team
                              <div className="card-arrow" />
                            </a>
                          </div>
                        </div>
                        <div
                          className="collapse"
                          id="accordion3-card-body-eqdfblmu"
                          aria-labelledby="accordion3-card-head-gvdrlxpa"
                          data-parent="#accordion3"
                          role="tabpanel"
                        >
                          <div className="card-body">
                            <p>
                              Nomen de fortis medicina, contactus index! Ubi
                              est nobilis tabes? Cum verpa mori, omnes tataes
                              amor audax, grandis ionicis tormentoes.
                            </p>
                          </div>
                        </div>
                      </article>
                      {/*Bootstrap card*/}
                      <article className="card card-custom card-corporate">
                        <div className="card-header" role="tab">
                          <div className="card-title">
                            <a
                              className="collapsed"
                              id="accordion3-card-head-crgqbsqb"
                              data-toggle="collapse"
                              data-parent="#accordion3"
                              href="#accordion3-card-body-spclorqw"
                              aria-controls="accordion3-card-body-spclorqw"
                              aria-expanded="false"
                              role="button"
                            >
                              24/7 Support
                              <div className="card-arrow" />
                            </a>
                          </div>
                        </div>
                        <div
                          className="collapse"
                          id="accordion3-card-body-spclorqw"
                          aria-labelledby="accordion3-card-head-crgqbsqb"
                          data-parent="#accordion3"
                          role="tabpanel"
                        >
                          <div className="card-body">
                            <p>
                              Clabulare audax fiscina est. Studere absolute
                              ducunt ad barbatus guttus. Fidelis, pius nixuss
                              tandem experientia de peritus, dexter mortem.
                            </p>
                          </div>
                        </div>
                      </article>
                      {/*Bootstrap card*/}
                      <article className="card card-custom card-corporate">
                        <div className="card-header" role="tab">
                          <div className="card-title">
                            <a
                              className="collapsed"
                              id="accordion3-card-head-ubxplcmh"
                              data-toggle="collapse"
                              data-parent="#accordion3"
                              href="#accordion3-card-body-vynlngtr"
                              aria-controls="accordion3-card-body-vynlngtr"
                              aria-expanded="false"
                              role="button"
                            >
                              Latest Equipment
                              <div className="card-arrow" />
                            </a>
                          </div>
                        </div>
                        <div
                          className="collapse"
                          id="accordion3-card-body-vynlngtr"
                          aria-labelledby="accordion3-card-head-ubxplcmh"
                          data-parent="#accordion3"
                          role="tabpanel"
                        >
                          <div className="card-body">
                            <p>
                              Indictio peritus urbs est. Barbatus amor
                              diligenter prensionems clabulare est. Cum castor
                              messis, omnes voxes contactus lotus, mirabilis
                              guttuses.
                            </p>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
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
  )
}

export default ServiceFabricationPage
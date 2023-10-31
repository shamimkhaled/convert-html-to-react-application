import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
      {/* Page Footer*/}
      <footer className="section footer-classic context-dark">
            <div className="footer-classic-content">
              <div className="container">
                <div className="row row-50 row-lg-0 no-gutters">
                  <div
                    className="col-sm-6 col-lg-4 wow fadeInRight"
                    data-wow-delay="0s"
                  >
                    <div className="footer-classic-header">
                      <h6 className="footer-classic-title">Quick links</h6>
                    </div>
                    <div className="footer-classic-body">
                      <ul className="footer-classic-list d-inline-block d-sm-block">
                        <li>
                          <Link to="#">Back to Top</Link>
                        </li>
                        <li>
                          <Link to="/about-us">About Us</Link>
                        </li>
                        <li>
                          <Link to="/services">Our Services</Link>
                        </li>
                        <li>
                          <Link to="/flagship-projects">Flagship Projects</Link>
                        </li>
                        <li>
                          <Link to="/contact">Hear From Us</Link>
                        </li>
                      </ul>
                      <ul className="list-inline footer-social-list">
                        <li>
                          <Link className="icon mdi mdi-facebook" to="#" />
                        </li>
                        <li>
                          <Link className="icon mdi mdi-twitter" to="#" />
                        </li>
                        <li>
                          <Link className="icon mdi mdi-instagram" to="#" />
                        </li>
                        <li>
                          <Link className="icon mdi mdi-google-plus" to="#" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="col-sm-6 col-lg-4 wow fadeInRight"
                    data-wow-delay=".1s"
                  >
                    <div className="footer-classic-header">
                      <div className="box-width-230">
                        <h6 className="footer-classic-title">Get in touch</h6>
                      </div>
                    </div>
                    <div className="footer-classic-body">
                      <div className="box-width-230">
                        <div className="footer-classic-contacts">
                          <div className="footer-classic-contacts-item">
                            <div className="unit unit-spacing-sm align-items-center">
                              <div className="unit-left">
                                <span className="icon icon-24 mdi mdi-phone" />
                              </div>
                              <div className="unit-body">
                                <Link className="phone" to="tel:#">
                                  +27 13 110 3308
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="footer-classic-contacts-item">
                            <div className="unit unit-spacing-sm align-items-center">
                              <div className="unit-left">
                                <span className="icon mdi mdi-email" />
                              </div>
                              <div className="unit-body">
                                <Link className="mail" to="mailto:#">
                                  info@hlelaprojects.africa
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Link
                          className="button button-sm button-primary button-winona"
                          to="/contacts"
                        >
                          Request a quote
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 position-static">
                    <iframe title="map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.635454335267!2d29.45842791554929!3d-25.782601953228223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eea605e4f7b4e37%3A0xf53a4bb3aeeccb9b!2s7a%20Samora%20Machel%20St%2C%20Middelburg%2C%201055!5e0!3m2!1sen!2sza!4v1635523608160!5m2!1sen!2sza"
                      width={800}
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-classic-panel">
              <div className="container">
                {/* Rights*/}
                <p className="rights">
                  <span>©&nbsp;</span>
                  <span className="copyright-year" />
                  <span>&nbsp;</span>
                  <span>Beyond Creations</span>
                  <span>.&nbsp;</span>
                  <Link to="/privacy-policy" >Privacy policy</Link>
                </p>
              </div>
            </div>
          </footer>
        
        {/* Global Mailform Output*/}
        <div className="snackbars" id="form-output-global" ></div>
    </>
  );
};

export default Footer;

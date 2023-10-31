import React from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
//import   '../styles/assets/css/style-6.css'
//import styles from './../styles/assets/css/style6.module.css'



const Header = () => {
  return (
    <>
      <Loader />
      {/*Header Navigation*/}
         {/* Page Header*/}
         <header className="section page-header">
            {/* RD Navbar*/}
            <div className="rd-navbar-wrap">
              <nav
                className="rd-navbar rd-navbar-classic"
                data-layout="rd-navbar-fixed"
                data-sm-layout="rd-navbar-fixed"
                data-md-layout="rd-navbar-fixed"
                data-md-device-layout="rd-navbar-fixed"
                data-lg-layout="rd-navbar-fixed"
                data-lg-device-layout="rd-navbar-fixed"
                data-xl-layout="rd-navbar-static"
                data-xl-device-layout="rd-navbar-static"
                data-xxl-layout="rd-navbar-static"
                data-xxl-device-layout="rd-navbar-static"
                data-xl-stick-up-offset="150px"
                data-xxl-stick-up-offset="150px"
                data-xl-stick-up="true"
                data-xxl-stick-up="true"
              >
                <div
                  className="rd-navbar-collapse-toggle rd-navbar-fixed-element-1"
                  data-rd-navbar-toggle=".rd-navbar-collapse"
                >
                  <span />
                </div>
                {/* RD Navbar Panel*/}
                <div className="rd-navbar-panel">
                  {/* RD Navbar Toggle*/}
                  <button
                    className="rd-navbar-toggle"
                    data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                  >
                    <span />
                  </button>
                  {/* RD Navbar Brand*/}
                  <div className="rd-navbar-brand">
                    <Link className="brand" to="/">
                      <img
                        className="brand-logo-dark"
                        src="assets/images/logo-default-446x120.png"
                        alt='logo'
                        width={223}
                        height={60}
                      />
                    </Link>
                  </div>
                </div>
                <div className="rd-navbar-right">
                  <div className="rd-navbar-main rd-navbar-nav-wrap">
                    <div className="rd-navbar-main-right">
                      <ul className="rd-navbar-contacts">
                        <li>
                          <div className="unit unit-spacing-xs">
                            <div className="unit-left">
                              <span className="icon mdi mdi-phone" />
                            </div>
                            <div className="unit-body">
                              <Link className="phone" to="tel:#">
                                +27 13 110 3308
                              </Link>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="unit unit-spacing-xs">
                            <div className="unit-left">
                              <span className="icon mdi mdi-map-marker" />
                            </div>
                            <div className="unit-body">
                              <Link className="address" to="#">
                                7a Samora Machel, Middelburg, 1050, Mpumalanga
                              </Link>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="rd-navbar-main-left">
                      {/* RD Navbar Nav*/}
                      <ul className="rd-navbar-nav">
                        <li className="rd-nav-item active">
                          <Link className="rd-nav-link" to="/">
                            Home
                          </Link>
                        </li>
                        <li className="rd-nav-item">
                          <Link className="rd-nav-link" to="/services">
                            Services
                          </Link>
                        </li>
                        <li className="rd-nav-item">
                          <Link className="rd-nav-link" to="/products">
                            Products
                          </Link>
                        </li>
                        <li className="rd-nav-item">
                          <Link className="rd-nav-link" to="/about-us">
                            About Us
                          </Link>
                        </li>
                        <li className="rd-nav-item">
                          <Link className="rd-nav-link" to="/flagship-projects">
                            Flagship Projects
                          </Link>
                        </li>
                        <li className="rd-nav-item">
                          <Link className="rd-nav-link" to="/contacts">
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="rd-navbar-aside rd-navbar-collapse">
                    <div className="rd-navbar-info">
                      <article className="box-icon-minimal">
                        <div className="unit align-items-center unit-spacing-sm">
                          <div className="unit-left">
                            <div className="icon linearicons-trophy2" />
                          </div>
                          <div className="unit-body">
                            <div className="box-icon-minimal-title">
                              Leading Provider
                            </div>
                            <p className="box-icon-minimal-text">
                              Of Mining Solutions
                            </p>
                          </div>
                        </div>
                      </article>
                      <article className="box-icon-minimal">
                        <div className="unit align-items-center unit-spacing-xxs">
                          <div className="unit-left">
                            <div className="icon linearicons-medal-empty" ></div>
                          </div>
                          <div className="unit-body">
                            <div className="box-icon-minimal-title">
                              Professional
                            </div>
                            <p className="box-icon-minimal-text">
                              Projects Services
                            </p>
                          </div>
                        </div>
                      </article>
                      <article className="box-icon-minimal">
                        <div className="unit align-items-center unit-spacing-xs">
                          <div className="unit-left">
                            <div className="icon linearicons-license2" ></div>
                          </div>
                          <div className="unit-body">
                            <div className="box-icon-minimal-title">
                              Verified Solutions
                            </div>
                            <p className="box-icon-minimal-text">
                              Quality Guarranteed
                            </p>
                          </div>
                        </div>
                      </article>
                    </div>
                    <Link
                      className="button button-icon button-icon-left button-white button-winona"
                      to="http://hlelaprojects.africa/download/profile.pdf"
                      download="download"
                    >
                      <span className="icon mdi mdi-download" />
                      <span>Download Profile</span>
                    </Link>
                    <Link
                      className="button button-icon button-icon-left button-white button-winona"
                      to="/contacts"
                    >
                      <span className="icon mdi mdi-email-outline" ></span>
                      <span>Get a quote</span>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </header>
          {/* Swiper*/}
    
    </>
  );
};

export default Header;

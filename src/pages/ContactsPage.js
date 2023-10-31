import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactsPage = () => {
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
              <h3 className="breadcrumbs-custom-title">Contacts</h3>
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
              <li className="active">Contacts</li>
            </ul>
          </div>
        </section>
        {/* Contacts*/}
        <section className="section section-lg bg-default text-md-left">
          <div className="container">
            <div className="row row-60 justify-content-center">
              <div className="col-lg-8">
                <h4 className="text-spacing-25 text-transform-none">
                  Get in Touch
                </h4>
                <form
                  className="rd-form rd-mailform"
                  action="assets/bat/rd-mailform.php.back"
                  method="post"
                >
                  <div className="row row-20 gutters-20">
                    <div className="col-md-6">
                      <div className="form-wrap">
                        <input
                          className="form-input"
                          id="contact-your-name-5"
                          type="text"
                          name="name"
                          data-constraints="@Required"
                          required
                        />
                        <label
                          className="form-label"
                          htmlFor="contact-your-name-5"
                        >
                          Your Name*
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-wrap">
                        <input
                          className="form-input"
                          id="contact-email-5"
                          type="email"
                          name="myemail"
                          data-constraints="@Email @Required"
                          required
                        />
                        <label className="form-label" htmlFor="contact-email-5">
                          Your E-mail*
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-wrap">
                        <label
                          className="form-label"
                          htmlFor="contact-message-5"
                        >
                          Message
                        </label>
                        <textarea
                          className="form-input textarea-lg"
                          id="contact-message-5"
                          name="message"
                          data-constraints="@Required"
                          defaultValue={""}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    className="button button-secondary button-winona"
                    type="submit"
                    name="emailsend"
                  >
                    Contact us
                  </button>
                </form>
              </div>
              <div className="col-lg-4">
                <div className="aside-contacts">
                  <div className="row row-30">
                    <div className="col-sm-6 col-lg-12 aside-contacts-item">
                      <p className="aside-contacts-title">Get social</p>
                      <ul className="list-inline contacts-social-list list-inline-sm">
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
                    <div className="col-sm-6 col-lg-12 aside-contacts-item">
                      <p className="aside-contacts-title">Phone</p>
                      <div className="unit unit-spacing-xs justify-content-center justify-content-md-start">
                        <div className="unit-left">
                          <span className="icon mdi mdi-phone" />
                        </div>
                        <div className="unit-body">
                          <Link className="phone" to="tel:#">
                            +27 13 110 3308
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-12 aside-contacts-item">
                      <p className="aside-contacts-title">E-mail</p>
                      <div className="unit unit-spacing-xs justify-content-center justify-content-md-start">
                        <div className="unit-left">
                          <span className="icon mdi mdi-email-outline" />
                        </div>
                        <div className="unit-body">
                          <Link className="mail" to="mailto:#">
                            info@hlelaprojects.africa
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-12 aside-contacts-item">
                      <p className="aside-contacts-title">Address</p>
                      <div className="unit unit-spacing-xs justify-content-center justify-content-md-start">
                        <div className="unit-left">
                          <span className="icon mdi mdi-map-marker" />
                        </div>
                        <div className="unit-body">
                          <Link className="address" to="#">
                            7a Samora Machel, <br className="d-md-none" />
                            Middelburg, 1050, Mpumalanga
                          </Link>
                        </div>
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
  );
};

export default ContactsPage;

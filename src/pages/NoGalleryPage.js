import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NoGalleryPage = () => {
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
              <h3 className="breadcrumbs-custom-title">Gallery</h3>
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
              <li className="active">Gallery</li>
            </ul>
          </div>
        </section>
        {/* Grid Gallery*/}
        <section className="section section-lg bg-default isotope-wrap">
          <div className="container">
            <div className="isotope-filters isotope-filters-horizontal">
              <button
                className="isotope-filters-toggle button button-sm button-icon button-icon-right button-gray-3"
                data-custom-toggle=".gallery-filters-list"
                data-custom-toggle-disable-on-blur="true"
                data-custom-toggle-hide-on-blur="true"
              >
                <span className="icon mdi mdi-chevron-down" />
                Filter
              </button>
              <ul className="isotope-filters-list gallery-filters-list">
                <li>
                  <Link className="active" to="#" data-isotope-filter="*">
                    All
                  </Link>
                </li>
                <li>
                  <Link to="#" data-isotope-filter="Type 1">
                    Reconstruction
                  </Link>
                </li>
                <li>
                  <Link to="#" data-isotope-filter="Type 2">
                    Architectural Design
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="container-fluid container-inset-0">
            <div
              className="row row-30 row-desktop-8 gutters-8 isotope hoverdir"
              data-lightgallery="group"
            >
              <div
                className="col-sm-6 col-lg-4 col-xxl-3 isotope-item"
                data-filter="Type 2"
              >
                {/* Thumbnail Modern*/}
                <article
                  className="thumbnail thumbnail-modern block-1 hoverdir-item"
                  data-hoverdir-target=".thumbnail-modern-caption"
                >
                  <Link
                    className="thumbnail-modern-figure"
                    to="assets/images/grid-gallery-1-1200x800-original.jpg"
                    data-lightgallery="item"
                  >
                    <img
                      src="assets/images/grid-gallery-1-474x355.jpg"
                      alt=''
                      width={474}
                      height={355}
                    />
                  </Link>
                  <div className="thumbnail-modern-caption">
                    <h5 className="thumbnail-modern-title">
                      <Link>Project #1</Link>
                    </h5>
                    <div className="thumbnail-modern-badge">
                      Construction management
                    </div>
                  </div>
                </article>
              </div>
              <div
                className="col-sm-6 col-lg-4 col-xxl-3 isotope-item"
                data-filter="Type 1"
              >
                {/* Thumbnail Modern*/}
                <article
                  className="thumbnail thumbnail-modern block-1 hoverdir-item"
                  data-hoverdir-target=".thumbnail-modern-caption"
                >
                  <Link
                    className="thumbnail-modern-figure"
                    to="assets/images/grid-gallery-2-1200x800-original.jpg"
                    data-lightgallery="item"
                  >
                    <img
                      src="assets/images/grid-gallery-2-474x355.jpg"
                      alt=''
                      width={474}
                      height={355}
                    />
                  </Link>
                  <div className="thumbnail-modern-caption">
                    <h5 className="thumbnail-modern-title">
                      <Link>Project #2</Link>
                    </h5>
                    <div className="thumbnail-modern-badge">Consulting</div>
                  </div>
                </article>
              </div>
              <div
                className="col-sm-6 col-lg-4 col-xxl-3 isotope-item"
                data-filter="Type 2"
              >
                {/* Thumbnail Modern*/}
                <article
                  className="thumbnail thumbnail-modern block-1 hoverdir-item"
                  data-hoverdir-target=".thumbnail-modern-caption"
                >
                  <Link
                    className="thumbnail-modern-figure"
                    to="assets/images/grid-gallery-3-1200x800-original.jpg"
                    data-lightgallery="item"
                  >
                    <img
                      src="assets/images/grid-gallery-3-474x355.jpg"
                      alt=''
                      width={474}
                      height={355}
                    />
                  </Link>
                  <div className="thumbnail-modern-caption">
                    <h5 className="thumbnail-modern-title">
                      <Link>Project #3</Link>
                    </h5>
                    <div className="thumbnail-modern-badge">
                      Green construction
                    </div>
                  </div>
                </article>
              </div>
              <div
                className="col-sm-6 col-lg-4 col-xxl-3 isotope-item"
                data-filter="Type 1"
              >
                {/* Thumbnail Modern*/}
                <article
                  className="thumbnail thumbnail-modern block-1 hoverdir-item"
                  data-hoverdir-target=".thumbnail-modern-caption"
                >
                  <Link
                    className="thumbnail-modern-figure"
                    to="assets/images/grid-gallery-4-1200x800-original.jpg"
                    data-lightgallery="item"
                  >
                    <img
                      src="assets/images/grid-gallery-4-474x355.jpg"
                      alt=''
                      width={474}
                      height={355}
                    />
                  </Link>
                  <div className="thumbnail-modern-caption">
                    <h5 className="thumbnail-modern-title">
                      <Link>Project #4</Link>
                    </h5>
                    <div className="thumbnail-modern-badge">
                      General contracting
                    </div>
                  </div>
                </article>
              </div>
              <div
                className="col-sm-6 col-lg-4 col-xxl-3 isotope-item"
                data-filter="Type 2"
              >
                {/* Thumbnail Modern*/}
                <article
                  className="thumbnail thumbnail-modern block-1 hoverdir-item"
                  data-hoverdir-target=".thumbnail-modern-caption"
                >
                  <Link
                    className="thumbnail-modern-figure"
                    to="assets/images/grid-gallery-5-1200x800-original.jpg"
                    data-lightgallery="item"
                  >
                    <img
                      src="assets/images/grid-gallery-5-474x355.jpg"
                      alt=''
                      width={474}
                      height={355}
                    />
                  </Link>
                  <div className="thumbnail-modern-caption">
                    <h5 className="thumbnail-modern-title">
                      <Link>Project #5</Link>
                    </h5>
                    <div className="thumbnail-modern-badge">
                      Construction planning
                    </div>
                  </div>
                </article>
              </div>
              <div
                className="col-sm-6 col-lg-4 col-xxl-3 isotope-item"
                data-filter="Type 1"
              >
                {/* Thumbnail Modern*/}
                <article
                  className="thumbnail thumbnail-modern block-1 hoverdir-item"
                  data-hoverdir-target=".thumbnail-modern-caption"
                >
                  <Link
                    className="thumbnail-modern-figure"
                    to="assets/images/grid-gallery-6-1200x800-original.jpg"
                    data-lightgallery="item"
                  >
                    <img
                      src="assets/images/grid-gallery-6-474x355.jpg"
                      alt=''
                      width={474}
                      height={355}
                    />
                  </Link>
                  <div className="thumbnail-modern-caption">
                    <h5 className="thumbnail-modern-title">
                      <Link>Project #6</Link>
                    </h5>
                    <div className="thumbnail-modern-badge">Construction</div>
                  </div>
                </article>
              </div>
              <div
                className="col-sm-6 col-lg-4 col-xxl-3 isotope-item"
                data-filter="Type 2"
              >
                {/* Thumbnail Modern*/}
                <article
                  className="thumbnail thumbnail-modern block-1 hoverdir-item"
                  data-hoverdir-target=".thumbnail-modern-caption"
                >
                  <Link
                    className="thumbnail-modern-figure"
                    to="assets/images/grid-gallery-7-1200x800-original.jpg"
                    data-lightgallery="item"
                  >
                    <img
                      src="assets/images/grid-gallery-7-474x355.jpg"
                      alt=''
                      width={474}
                      height={355}
                    />
                  </Link>
                  <div className="thumbnail-modern-caption">
                    <h5 className="thumbnail-modern-title">
                      <Link>Project #7</Link>
                    </h5>
                    <div className="thumbnail-modern-badge">Reconstruction</div>
                  </div>
                </article>
              </div>
              <div
                className="col-sm-6 col-lg-4 col-xxl-3 isotope-item"
                data-filter="Type 1"
              >
                {/* Thumbnail Modern*/}
                <article
                  className="thumbnail thumbnail-modern block-1 hoverdir-item"
                  data-hoverdir-target=".thumbnail-modern-caption"
                >
                  <Link
                    className="thumbnail-modern-figure"
                    to="assets/images/grid-gallery-8-1200x800-original.jpg"
                    data-lightgallery="item"
                  >
                    <img
                      src="assets/images/grid-gallery-8-474x355.jpg"
                      alt=''
                      width={474}
                      height={355}
                    />
                  </Link>
                  <div className="thumbnail-modern-caption">
                    <h5 className="thumbnail-modern-title">
                      <Link>Project #8</Link>
                    </h5>
                    <div className="thumbnail-modern-badge">
                      Architectural design
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        {/* Subscribe to Our Newsletter*/}
        <section className="section section-md bg-gray-8 context-dark text-md-left">
          <div className="container">
            <div className="row row-30 justify-content-center align-items-center">
              <div
                className="col-lg-4 col-xl-3 wow fadeInLeft"
                data-wow-delay="0s"
              >
                <h5>Newsletter</h5>
                <p className="text-white-05">
                  Sign up for our newsletter and follow us on social media
                </p>
              </div>
              <div className="col-lg-8 col-xl-9">
                <div className="oh">
                  {/* RD Mailform*/}
                  <form
                    className="rd-form rd-mailform rd-form-inline oh-desktop rd-form-inline-lg wow slideInUp"
                    data-form-output="form-output-global"
                    data-form-type="subscribe"
                    method="post"
                    action="assets/bat/rd-mailform.php"
                    data-wow-delay=".1s"
                  >
                    <div className="form-wrap wow slideInUp">
                      <input
                        className="form-input"
                        id="subscribe-form-0-email"
                        type="email"
                        name="email"
                        data-constraints="@Email @Required"
                        required
                      />
                      <label
                        className="form-label"
                        htmlFor="subscribe-form-0-email"
                      >
                        Your E-mail*
                      </label>
                    </div>
                    <div className="form-button wow slideInRight">
                      <button
                        className="button button-winona button-lg button-secondary"
                        type="submit"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
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

export default NoGalleryPage;

import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProductsInstrumentAutomationPage = () => {
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
                Instrumentation/Automation Equipment
              </h3>
              <div className="breadcrumbs-custom-decor" />
            </div>
            <div
              className="box-transform"
              style={{
                backgroundImage:
                  "url(assets/images/products/instrumentation-automation-equipment/banner.png)",
              }}
            />
          </div>
          <div className="container">
            <ul className="breadcrumbs-custom-path">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li className="active">Instrumentation/Automation Equipment</li>
            </ul>
          </div>
        </section>
        {/* Single Product*/}
        <section className="section section-sm section-first bg-default">
          <div className="container">
            <div className="row row-30">
              <div className="col-lg-6">
                <div className="slick-vertical slick-product">
                  {/* Slick Carousel*/}
                  <div
                    className="slick-slider carousel-parent"
                    data-swipe="true"
                    data-items={1}
                    data-child="#child-carousel-6"
                    data-for="#child-carousel-6"
                  >
                    <div className="item">
                      <div className="slick-product-figure">
                        <img
                          src="assets/images/products/instrumentation-automation-equipment/2.png"
                          alt=''
                          width={530}
                          height={480}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="slick-product-figure">
                        <img
                          src="assets/images/products/instrumentation-automation-equipment/3.png"
                          alt=''
                          width={530}
                          height={480}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="slick-product-figure">
                        <img
                          src="assets/images/products/instrumentation-automation-equipment/4.png"
                          alt=''
                          width={530}
                          height={480}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="slick-product-figure">
                        <img
                          src="assets/images/products/instrumentation-automation-equipment/5.png"
                          alt=''
                          width={530}
                          height={480}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slider child-carousel"
                    id="child-carousel-6"
                    data-for=".carousel-parent"
                    data-arrows="true"
                    data-items={3}
                    data-sm-items={3}
                    data-md-items={3}
                    data-lg-items={3}
                    data-xl-items={3}
                    data-slide-to-scroll={1}
                    data-md-vertical="true"
                  >
                    <div className="item">
                      <div className="slick-product-figure">
                        <img
                          src="assets/images/products/instrumentation-automation-equipment/2.png"
                          alt=''
                          width={530}
                          height={480}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="slick-product-figure">
                        <img
                          src="assets/images/products/instrumentation-automation-equipment/3.png"
                          alt=''
                          width={530}
                          height={480}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="slick-product-figure">
                        <img
                          src="assets/images/products/instrumentation-automation-equipment/4.png"
                          alt=''
                          width={530}
                          height={480}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="slick-product-figure">
                        <img
                          src="assets/images/products/instrumentation-automation-equipment/5.png"
                          alt=''
                          width={530}
                          height={480}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="single-product">
                  <h4 className="text-transform-none text-spacing-50">
                    Instrumentation/Automation Equipment
                  </h4>
                  <p>
                    Hlela Mining &amp; Projects supplies
                    Automation/Instrumentation products and solutions throughout
                    Africa.
                  </p>
                  <hr className="hr-gray-300" />
                  <ul className="list list-description d-inline-block d-md-block">
                    <li>
                      <span>-</span>
                      <span>Programmable Logic Controllers (PLC, s)</span>
                    </li>
                    <li>
                      <span>-</span>
                      <span>Distributed Control Systems (DCS systems)</span>
                    </li>
                    <li>
                      <span>-</span>
                      <span>
                        Level Indicators (Radar, Laser &amp; Microwave)
                      </span>
                    </li>
                    <li>
                      <span>-</span>
                      <span>Density Measurement (Nuclear &amp; Microwave)</span>
                    </li>
                    <li>
                      <span>-</span>
                      <span>Pressure Measurement</span>
                    </li>
                    <li>
                      <span>-</span>
                      <span>Proximity &amp; Temperature Sensors</span>
                    </li>
                    <li>
                      <span>-</span>
                      <span>Flow Meters (Electromagnetic)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Bootstrap tabs*/}
          </div>
        </section>
        {/* Related Products*/}

          {/* Footer */}
          <Footer />
          {/* Footer */}
      </div>
    </>
  );
};

export default ProductsInstrumentAutomationPage;

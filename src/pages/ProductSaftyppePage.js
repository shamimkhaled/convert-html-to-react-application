import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProductSaftyppePage = () => {
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
              <h3 className="breadcrumbs-custom-title">Safety PPE</h3>
              <div className="breadcrumbs-custom-decor" />
            </div>
            <div
              className="box-transform"
              style={{
                backgroundImage: "url(assets/images/products/safety-ppe/banner.png)",
              }}
            />
          </div>
          <div className="container">
            <ul className="breadcrumbs-custom-path">
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li className="active">Safety PPE</li>
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
                          src="assets/images/products/safety-ppe/1.png"
                          alt=''
                          width={530}
                          height={480}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="slick-product-figure">
                        <img
                          src="assets/images/products/safety-ppe/2.png"
                          alt=''
                          width={530}
                          height={480}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="slick-product-figure">
                        <img
                          src="assets/images/products/safety-ppe/3.png"
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
                          src="assets/images/products/safety-ppe/1.png"
                          alt=''
                          width={530}
                          height={480}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="slick-product-figure">
                        <img
                          src="assets/images/products/safety-ppe/2.png"
                          alt=''
                          width={530}
                          height={480}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="slick-product-figure">
                        <img
                          src="assets/images/products/safety-ppe/3.png"
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
                    Safety PPE
                  </h4>
                  <p>
                    Hlela Mining &amp; Projects Supplies Turnkey Safety Services
                    and Products to the industry.
                  </p>
                  <hr className="hr-gray-300" />
                  <ul className="list list-description d-inline-block d-md-block">
                    <li>
                      <span>-</span>
                      <span>Intrinsically Safe Barriers</span>
                    </li>
                    <li>
                      <span>-</span>
                      <span>Conveyors Pull Key Switches</span>
                    </li>
                    <li>
                      <span>-</span>
                      <span>Motor/Transformer Protection</span>
                    </li>
                    <li>
                      <span>-</span>
                      <span>Moving Machinery Safety Systems (PDS system)</span>
                    </li>
                    <li>
                      <span>-</span>
                      <span>MCC Fire Suppression Systems</span>
                    </li>
                    <li>
                      <span>-</span>
                      <span>Machinery &amp; Commodity Tracking Systems</span>
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

export default ProductSaftyppePage;

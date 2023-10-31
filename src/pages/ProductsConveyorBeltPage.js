import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProductsConveyorBeltPage = () => {
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
                Conveyor Belting &amp; Accessories
              </h3>
              <div className="breadcrumbs-custom-decor" />
            </div>
            <div
              className="box-transform"
              style={{
                backgroundImage:
                  "url(assets/images/products/conveyor-belting-accessories/banner.png)",
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
              <li className="active">Conveyor Belting &amp; Accessories</li>
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
                          src="assets/images/products/conveyor-belting-accessories/1.png"
                          alt=''
                          width={530}
                          height={480}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="slick-product-figure">
                        <img
                          src="assets/images/products/conveyor-belting-accessories/2.png"
                          alt=''
                          width={530}
                          height={480}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="slick-product-figure">
                        <img
                          src="assets/images/products/conveyor-belting-accessories/3.png"
                          alt=''
                          width={530}
                          height={480}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="slick-product-figure">
                        <img
                          src="assets/images/products/conveyor-belting-accessories/4.png"
                          alt=''
                          width={530}
                          height={480}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="slick-product-figure">
                        <img
                          src="assets/images/products/conveyor-belting-accessories/5.png"
                          alt=''
                          width={530}
                          height={480}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="slick-product-figure">
                        <img
                          src="assets/images/products/conveyor-belting-accessories/6.png"
                          alt=''
                          width={530}
                          height={480}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="slick-product-figure">
                        <img
                          src="assets/images/products/conveyor-belting-accessories/7.png"
                          alt=''
                          width={530}
                          height={480}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="slick-product-figure">
                        <img
                          src="assets/images/products/conveyor-belting-accessories/8.png"
                          alt=''
                          width={530}
                          height={480}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="slick-product-figure">
                        <img
                          src="assets/images/products/conveyor-belting-accessories/9.png"
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
                          src="assets/images/products/conveyor-belting-accessories/1.png"
                          alt=''
                          width={530}
                          height={480}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="slick-product-figure">
                        <img
                          src="assets/images/products/conveyor-belting-accessories/2.png"
                          alt=''
                          width={530}
                          height={480}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="slick-product-figure">
                        <img
                          src="assets/images/products/conveyor-belting-accessories/3.png"
                          alt=''
                          width={530}
                          height={480}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="slick-product-figure">
                        <img
                          src="assets/images/products/conveyor-belting-accessories/4.png"
                          alt=''
                          width={530}
                          height={480}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="slick-product-figure">
                        <img
                          src="assets/images/products/conveyor-belting-accessories/5.png"
                          alt=''
                          width={530}
                          height={480}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="slick-product-figure">
                        <img
                          src="assets/images/products/conveyor-belting-accessories/6.png"
                          alt=''
                          width={530}
                          height={480}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="slick-product-figure">
                        <img
                          src="assets/images/products/conveyor-belting-accessories/7.png"
                          alt=''
                          width={530}
                          height={480}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="slick-product-figure">
                        <img
                          src="assets/images/products/conveyor-belting-accessories/8.png"
                          alt=''
                          width={530}
                          height={480}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="slick-product-figure">
                        <img
                          src="assets/images/products/conveyor-belting-accessories/9.png"
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
                    Conveyor Belting &amp; Accessories
                  </h4>
                  <p>
                    Hlela Mining &amp; Projects offers a wide variety of
                    Conveyor Belt Accessories and Equipment.
                  </p>
                  <hr className="hr-gray-300" />
                  <ul className="list list-description d-inline-block d-md-block">
                    <li>
                      <span>-</span>
                      <span>
                        Conveyor Belt Fasteners &amp; Splicing Technologies
                      </span>
                    </li>
                    <li>
                      <span>-</span>
                      <span>Conveyor Belt Scrapers</span>
                    </li>
                    <li>
                      <span>-</span>
                      <span>Conveyor Belt Tracking Units</span>
                    </li>
                    <li>
                      <span>-</span>
                      <span>Conveyor Belt Impact Stations</span>
                    </li>
                    <li>
                      <span>-</span>
                      <span>Conveyor Belt Repair Kits</span>
                    </li>
                    <li>
                      <span>-</span>
                      <span>Pull Key Switches</span>
                    </li>
                    <li>
                      <span>-</span>
                      <span>Block Chute Detection</span>
                    </li>
                    <li>
                      <span>-</span>
                      <span>Slip Detection</span>
                    </li>
                    <li>
                      <span>-</span>
                      <span>PVG/PVC Conveyor Belting</span>
                    </li>
                    <li>
                      <span>-</span>
                      <span>Ply Rubber Conveyor Belting</span>
                    </li>
                    <li>
                      <span>-</span>
                      <span>Chevron Conveyor Belting</span>
                    </li>
                    <li>
                      <span>-</span>
                      <span>Food &amp; Beverage Conveyor Belting</span>
                    </li>
                    <li>
                      <span>-</span>
                      <span>Conveyor Belt Idlers (HDPE, Steel)</span>
                    </li>
                    <li>
                      <span>-</span>
                      <span>Conveyor Belt Idler Frames</span>
                    </li>
                    <li>
                      <span>-</span>
                      <span>
                        Conveyor Belt Pulley Manufacturing &amp; Refurbishments
                      </span>
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

export default ProductsConveyorBeltPage;

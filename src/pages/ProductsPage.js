import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProductsPage = () => {
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
              <h3 className="breadcrumbs-custom-title">Products</h3>
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
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li className="active">Products</li>
            </ul>
          </div>
        </section>
        {/* Services 2*/}
        <section className="section section-lg bg-default">
          <div className="container">
            <div className="row row-40 row-xl-60 justify-content-center box-ordered">
              <div className="col-sm-6 col-lg-4">
                {/* Services Creative*/}
                <article className="services-creative">
                  <Link
                    className="services-creative-figure"
                    to="/products-lvmvhv-electrical"
                  >
                    <img
                      src="assets/images/products/lvmvhv-electrical/main.png"
                      alt=''
                      width={370}
                      height={230}
                    />
                  </Link>
                  <div className="services-creative-caption">
                    <h5 className="services-creative-title">
                      <Link to="/products-lvmvhv-electrical">
                        LV/MV/HV Electrical Equipment
                      </Link>
                    </h5>
                    <p className="services-creative-text">
                      We supply industrial electrical products locally and in
                      Africa at competitive rates with an excellent support
                      structure.
                    </p>
                    <span className="services-creative-counter box-ordered-item" />
                  </div>
                </article>
              </div>
              <div className="col-sm-6 col-lg-4">
                {/* Services Creative*/}
                <article className="services-creative">
                  <Link
                    className="services-creative-figure"
                    to="/products-instrumentation-automation-equipment"
                  >
                    <img
                      src="assets/images/products/instrumentation-automation-equipment/main.png"
                      alt=''
                      width={370}
                      height={230}
                    />
                  </Link>
                  <div className="services-creative-caption">
                    <h5 className="services-creative-title">
                      <Link to="/products-instrumentation-automation-equipment">
                        Instrumentation &amp; Automation Equipment
                      </Link>
                    </h5>
                    <p className="services-creative-text">
                      Hlela Mining &amp; Projects supplies
                      Automation/Instrumentation products and solutions
                      throughout Africa.
                    </p>
                    <span className="services-creative-counter box-ordered-item" />
                  </div>
                </article>
              </div>
              <div className="col-sm-6 col-lg-4">
                {/* Services Creative*/}
                <article className="services-creative">
                  <Link
                    className="services-creative-figure"
                    to="/products-conveyor-belting-accessories"
                  >
                    <img
                      src="assets/images/products/conveyor-belting-accessories/main.png"
                      alt=''
                      width={370}
                      height={230}
                    />
                  </Link>
                  <div className="services-creative-caption">
                    <h5 className="services-creative-title">
                      <Link to="/products-conveyor-belting-accessories">
                        Conveyor Belting &amp; Accessories
                      </Link>
                    </h5>
                    <p className="services-creative-text">
                      Hlela Mining &amp; Projects offers a wide variety of
                      Conveyor Belt Accessories and Equipment.
                    </p>
                    <span className="services-creative-counter box-ordered-item" />
                  </div>
                </article>
              </div>
              <div className="col-sm-6 col-lg-4">
                {/* Services Creative*/}
                <article className="services-creative">
                  <Link
                    className="services-creative-figure"
                    to="/products-safety-ppe"
                  >
                    <img
                      src="assets/images/products/safety-ppe/main.png"
                      alt=''
                      width={370}
                      height={230}
                    />
                  </Link>
                  <div className="services-creative-caption">
                    <h5 className="services-creative-title">
                      <Link to="/products-safety-ppe">Safety PPE</Link>
                    </h5>
                    <p className="services-creative-text">
                      Hlela Mining &amp; Projects Supplies Safety Services and
                      Products to the industry.
                    </p>
                    <span className="services-creative-counter box-ordered-item" />
                  </div>
                </article>
              </div>
              <div className="col-sm-6 col-lg-4">
                {/* Services Creative*/}
                <article className="services-creative">
                  <Link
                    className="services-creative-figure"
                    to="/products-earthmoving-parts-components"
                  >
                    <img
                      src="assets/images/products/earthmoving-parts-components/main.png"
                      alt=''
                      width={370}
                      height={230}
                    />
                  </Link>
                  <div className="services-creative-caption">
                    <h5 className="services-creative-title">
                      <Link to="/products-earthmoving-parts-components">
                        Earthmoving Parts &amp; Components
                      </Link>
                    </h5>
                    <p className="services-creative-text">
                      Hlela Mining &amp; Projects is a leading supplier of a
                      wide range of Equipment in the Heavy Machinery Industry.
                    </p>
                    <span className="services-creative-counter box-ordered-item" />
                  </div>
                </article>
              </div>
              <div className="col-sm-6 col-lg-4">
                {/* Services Creative*/}
                <article className="services-creative">
                  <Link
                    className="services-creative-figure"
                    to="/products-weightometer-weighing-solutions"
                  >
                    <img
                      src="assets/images/products/weightometer-weighing-solutions/main.png"
                      alt=''
                      width={370}
                      height={230}
                    />
                  </Link>
                  <div className="services-creative-caption">
                    <h5 className="services-creative-title">
                      <Link to="/products-weightometer-weighing-solutions">
                        Weightometers &amp; Weighing Solutions
                      </Link>
                    </h5>
                    <p className="services-creative-text">
                      Hlela Mining &amp; Projects are proud manufacturers (OEM)
                      of the Hlela Weightometer Range.
                    </p>
                    <span className="services-creative-counter box-ordered-item" />
                  </div>
                </article>
              </div>
              <div className="col-sm-6 col-lg-4">
                {/* Services Creative*/}
                <article className="services-creative">
                  <Link
                    className="services-creative-figure"
                    to="/products-fabrication"
                  >
                    <img
                      src="assets/images/products/fabrication/main.png"
                      alt=''
                      width={370}
                      height={230}
                    />
                  </Link>
                  <div className="services-creative-caption">
                    <h5 className="services-creative-title">
                      <Link to="/products-fabrication">Fabrication</Link>
                    </h5>
                    <p className="services-creative-text">
                      Hlela Mining &amp; Projects offers Design and
                      Manufacturing of Mechanical Parts and Components.
                    </p>
                    <span className="services-creative-counter box-ordered-item" />
                  </div>
                </article>
              </div>
              <div className="col-sm-6 col-lg-4">
                {/* Services Creative*/}
                <article className="services-creative">
                  <Link
                    className="services-creative-figure"
                    to="/products-renewable-energy-products"
                  >
                    <img
                      src="assets/images/products/renewable-energy-products/main.png"
                      alt=''
                      width={370}
                      height={230}
                    />
                  </Link>
                  <div className="services-creative-caption">
                    <h5 className="services-creative-title">
                      <Link to="/products-renewable-energy-products">
                        Renewable Energy Products
                      </Link>
                    </h5>
                    <p className="services-creative-text">
                      Hlela Mining &amp; Projects offers state-of-the-art
                      Renewable Energy Solutions to keep up with the growing
                      trend of Going Green.
                    </p>
                    <span className="services-creative-counter box-ordered-item" />
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

         {/* Footer */}
         <Footer />
          {/* Header */}

      </div>
    </>
  );
};

export default ProductsPage;

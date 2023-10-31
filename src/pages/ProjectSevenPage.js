import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProjectSevenPage = () => {
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
                mine compliance to covid-19 procedures
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
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/flagship-projects">Flagship Projects</Link>
              </li>
              <li className="active">
                mine compliance to covid-19 procedures{" "}
              </li>
            </ul>
          </div>
        </section>
        {/* Project Page*/}
        <section className="section section-lg bg-default text-md-left">
          <div className="container">
            <div className="row row-60 flex-lg-row-reverse">
              <div className="col-lg-6 col-xl-7">
                <div className="slick-project">
                  {/* Slick Carousel*/}
                  <div
                    className="slick-slider carousel-parent"
                    data-arrows="true"
                    data-autoplay="true"
                    data-swipe="true"
                    data-items={1}
                    data-child="#child-carousel-7"
                    data-for="#child-carousel-7"
                    data-slide-effect="true"
                  >
                    <div className="item">
                      <img
                        src="assets/images/project-7-670x477.jpg"
                        alt=''
                        width={670}
                        height={477}
                      />
                      <div className="slick-project-caption">
                        <div className="slick-project-title">Photo #1</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table-custom-responsive">
                  <table className="table-custom table-custom-primary table-project">
                    <tbody>
                      <tr>
                        <td>
                          <span className="icon icon-26 mdi mdi-account" />
                        </td>
                        <td>
                          <span>Client:</span> South32{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="icon mdi mdi-calendar-today" />
                        </td>
                        <td>
                          <span>Year:</span> 2021
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="icon mdi mdi-map-marker" />
                        </td>
                        <td>
                          <span>Location:</span> Middelburg
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-lg-6 col-xl-5">
                <div className="project-page">
                  <h4>MINE COMPLIANCE TO COVID-19 PROCEDURES</h4>
                  <br />
                  Develop, implement &amp; manage all COVID-19 protocols &amp;
                  procedures across the KHU colliery
                  <br />
                  Development of COVID-19 procedures &amp; protocols
                  <br />
                  Daily controls &amp; management of CVOID-19 protocols
                  <br />
                  Weekly &amp; monthly infection trend analysis
                  <br />
                  Management dashboard reporting
                  <div className="group-sm group-middle">
                    <span className="project-page-social-title" />
                  </div>
                  <Link
                    className="button button-lg button-primary button-winona"
                    to="/contacts"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Subscribe to Our Newsletter*/}

         {/* Footer */}
         <Footer />
          {/* Footer */}
      </div>
    </>
  );
};

export default ProjectSevenPage;

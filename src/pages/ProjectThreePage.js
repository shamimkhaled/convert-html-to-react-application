import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const ProjectThreePage = () => {
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
                overland conveyor sheeting – kps extension project
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
                overland conveyor sheeting – kps extension project
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
                        src="assets/images/project-3-670x477.jpg"
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
                          <span>Client:</span> South32 – Klipspruit Colliery –
                          Extension Project{" "}
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
                  <h4>OVERLAND CONVEYOR SHEETING – KPS EXTENSION PROJECT</h4>
                  <br />
                  Overland conveyor sheeting installation
                  <br />
                  Site management
                  <br />
                  Safety management
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

export default ProjectThreePage;

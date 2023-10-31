import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const FlagshipProjectsPage = () => {
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
              <h3 className="breadcrumbs-custom-title">Flagship Projects</h3>
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
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li className="active">Flagship Projects</li>
            </ul>
          </div>
        </section>
        {/* Services 2*/}
        <section className="section section-lg bg-default">
          <div className="container isotope-wrap">
            <div className="row isotope" data-lightgallery="group">
              <div className="col-md-6 isotope-item" data-filter="Type 1">
                {/* Thumbnail Classic*/}
                <article className="thumbnail thumbnail-classic block-lg">
                  <a
                    className="thumbnail-classic-figure"
                    href="assets/images/project-1-1200x800-original.jpg"
                    data-lightgallery="item"
                  >
                    <img
                      src="assets/images/project-1-570x299.jpg"
                      alt=''
                      width={570}
                      height={299}
                    />
                  </a>
                  <div className="thumbnail-classic-caption">
                    <h6 className="thumbnail-classic-title">
                      <Link to="/project-project-1">
                        eMalahleni Phase 2B Expansion Project
                      </Link>
                    </h6>
                    <div className="thumbnail-classic-time">
                      <time dateTime="2021-04-05">
                        Anglo American &amp; Aveng Water{" "}
                      </time>
                    </div>
                    <div className="thumbnail-classic-time">
                      <time dateTime="2021-04-05">2014 – 2017</time>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-6 isotope-item" data-filter="Type 3">
                {/* Thumbnail Classic*/}
                <article className="thumbnail thumbnail-classic block-lg">
                  <a
                    className="thumbnail-classic-figure"
                    href="assets/images/project-2-1200x800-original.jpg"
                    data-lightgallery="item"
                  >
                    <img
                      src="assets/images/project-2-570x299.jpg"
                      alt=''
                      width={570}
                      height={299}
                    />
                  </a>
                  <div className="thumbnail-classic-caption">
                    <h6 className="thumbnail-classic-title">
                      <Link to="/project-project-2">
                        2ml water treatment <br />
                        plant
                      </Link>
                    </h6>
                    <div className="thumbnail-classic-time">
                      <time dateTime="2021-05-12">
                        South32 – Klipspruit Colliery
                      </time>
                    </div>
                    <div className="thumbnail-classic-time">
                      <time dateTime="2021-05-12">2019 – 2020</time>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-6 isotope-item" data-filter="Type 3">
                {/* Thumbnail Classic*/}
                <article className="thumbnail thumbnail-classic block-lg">
                  <a
                    className="thumbnail-classic-figure"
                    href="assets/images/project-3-1200x800-original.jpg"
                    data-lightgallery="item"
                  >
                    <img
                      src="assets/images/project-3-570x299.jpg"
                      alt=''
                      width={570}
                      height={299}
                    />
                  </a>
                  <div className="thumbnail-classic-caption">
                    <h6 className="thumbnail-classic-title">
                      <Link to="/project-project-3">
                        Overland Conveyor Sheeting – kps extension project
                      </Link>
                    </h6>
                    <div className="thumbnail-classic-time">
                      <time dateTime="2021-07-04">
                        South32 – Klipspruit Colliery – Extension Project
                      </time>
                    </div>
                    <div className="thumbnail-classic-time">
                      <time dateTime="2021-07-04">2021</time>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-6 isotope-item" data-filter="Type 4">
                {/* Thumbnail Classic*/}
                <article className="thumbnail thumbnail-classic block-lg">
                  <a
                    className="thumbnail-classic-figure"
                    href="assets/images/project-4-1200x800-original.jpg"
                    data-lightgallery="item"
                  >
                    <img
                      src="assets/images/project-4-570x299.jpg"
                      alt=''
                      width={570}
                      height={299}
                    />
                  </a>
                  <div className="thumbnail-classic-caption">
                    <h6 className="thumbnail-classic-title">
                      <Link to="/project-project-4">
                        tailings facility berm <br />
                        construction – rehabilitation
                      </Link>
                    </h6>
                    <div className="thumbnail-classic-time">
                      <time dateTime="2021-09-07">
                        South32 – Incident Management <br />
                        Team
                      </time>
                    </div>
                    <div className="thumbnail-classic-time">
                      <time dateTime="2021-09-07">2019 – 2020</time>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-6 isotope-item" data-filter="Type 4">
                {/* Thumbnail Classic*/}
                <article className="thumbnail thumbnail-classic block-lg">
                  <a
                    className="thumbnail-classic-figure"
                    href="assets/images/project-5-1200x800-original.jpg"
                    data-lightgallery="item"
                  >
                    <img
                      src="assets/images/project-5-570x299.jpg"
                      alt=''
                      width={570}
                      height={299}
                    />
                  </a>
                  <div className="thumbnail-classic-caption">
                    <h6 className="thumbnail-classic-title">
                      <Link to="/project-project-5">
                        mine closure – pre-feasibility on potential land use(s)
                      </Link>
                    </h6>
                    <div className="thumbnail-classic-time">
                      <time dateTime="2021-09-07">
                        South32 – Mine Closure Operations
                      </time>
                    </div>
                    <div className="thumbnail-classic-time">
                      <time dateTime="2021-09-07">2019 – 2020</time>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-6 isotope-item" data-filter="Type 4">
                {/* Thumbnail Classic*/}
                <article className="thumbnail thumbnail-classic block-lg">
                  <a
                    className="thumbnail-classic-figure"
                    href="assets/images/project-6-1200x800-original.jpg"
                    data-lightgallery="item"
                  >
                    <img
                      src="assets/images/project-6-570x299.jpg"
                      alt=''
                      width={570}
                      height={299}
                    />
                  </a>
                  <div className="thumbnail-classic-caption">
                    <h6 className="thumbnail-classic-title">
                      <Link to="/project-project-6">
                        WATERVAL SMELTER – SCF1 &amp; SLAG GRANUalt=''ION UPGRADE
                        PRE-FEASIBILITY
                      </Link>
                    </h6>
                    <div className="thumbnail-classic-time">
                      <time dateTime="2021-09-07">GLPS</time>
                    </div>
                    <div className="thumbnail-classic-time">
                      <time dateTime="2021-09-07">2019 – 2020</time>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-6 isotope-item" data-filter="Type 4">
                {/* Thumbnail Classic*/}
                <article className="thumbnail thumbnail-classic block-lg">
                  <a
                    className="thumbnail-classic-figure"
                    href="assets/images/project-7-1200x800-original.jpg"
                    data-lightgallery="item"
                  >
                    <img
                      src="assets/images/project-7-570x299.jpg"
                      alt=''
                      width={570}
                      height={299}
                    />
                  </a>
                  <div className="thumbnail-classic-caption">
                    <h6 className="thumbnail-classic-title">
                      <Link to="/project-project-7">
                        MINE COMPLIANCE TO COVID-19 PROCEDURES
                      </Link>
                    </h6>
                    <div className="thumbnail-classic-time">
                      <time dateTime="2021-09-07">South32</time>
                    </div>
                    <div className="thumbnail-classic-time">
                      <time dateTime="2021-09-07">2021</time>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-6 isotope-item" data-filter="Type 4">
                {/* Thumbnail Classic*/}
                <article className="thumbnail thumbnail-classic block-lg">
                  <a
                    className="thumbnail-classic-figure"
                    href="assets/images/project-8-1200x800-original.jpg"
                    data-lightgallery="item"
                  >
                    <img
                      src="assets/images/project-8-570x299.jpg"
                      alt=''
                      width={570}
                      height={299}
                    />
                  </a>
                  <div className="thumbnail-classic-caption">
                    <h6 className="thumbnail-classic-title">
                      <Link to="/project-project-8">
                        CAT 6060 rebuild <br />
                        project
                      </Link>
                    </h6>
                    <div className="thumbnail-classic-time">
                      <time dateTime="2021-09-07">South32</time>
                    </div>
                    <div className="thumbnail-classic-time">
                      <time dateTime="2021-09-07">2021</time>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-6 isotope-item" data-filter="Type 4">
                {/* Thumbnail Classic*/}
                <article className="thumbnail thumbnail-classic block-lg">
                  <a
                    className="thumbnail-classic-figure"
                    href="assets/images/project-9-1200x800-original.jpg"
                    data-lightgallery="item"
                  >
                    <img
                      src="assets/images/project-9-570x299.jpg"
                      alt=''
                      width={570}
                      height={299}
                    />
                  </a>
                  <div className="thumbnail-classic-caption">
                    <h6 className="thumbnail-classic-title">
                      <Link to="/project-project-9">
                        shovel shutdown &amp; refurbishment projects
                      </Link>
                    </h6>
                    <div className="thumbnail-classic-time">
                      <time dateTime="2021-09-07">
                        South32 (now Seriti Power)
                      </time>
                    </div>
                    <div className="thumbnail-classic-time">
                      <time dateTime="2021-09-07">2017 – 2021</time>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-6 isotope-item" data-filter="Type 4">
                {/* Thumbnail Classic*/}
                <article className="thumbnail thumbnail-classic block-lg">
                  <a
                    className="thumbnail-classic-figure"
                    href="assets/images/project-10-1200x800-original.jpg"
                    data-lightgallery="item"
                  >
                    <img
                      src="assets/images/project-10-570x299.jpg"
                      alt=''
                      width={570}
                      height={299}
                    />
                  </a>
                  <div className="thumbnail-classic-caption">
                    <h6 className="thumbnail-classic-title">
                      <Link to="/project-project-10">
                        rope shovel shutdown &amp; refurbishment project
                      </Link>
                    </h6>
                    <div className="thumbnail-classic-time">
                      <time dateTime="2021-09-07">Barloworld Equipment</time>
                    </div>
                    <div className="thumbnail-classic-time">
                      <time dateTime="2021-09-07">2021 - 2022</time>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-6 isotope-item" data-filter="Type 4">
                {/* Thumbnail Classic*/}
                <article className="thumbnail thumbnail-classic block-lg">
                  <a
                    className="thumbnail-classic-figure"
                    href="assets/images/project-11-1200x800-original.jpg"
                    data-lightgallery="item"
                  >
                    <img
                      src="assets/images/project-11-570x299.jpg"
                      alt=''
                      width={570}
                      height={299}
                    />
                  </a>
                  <div className="thumbnail-classic-caption">
                    <h6 className="thumbnail-classic-title">
                      <Link to="/project-project-11">
                        CAT 5 dragline relocation &amp; refurbishment project
                      </Link>
                    </h6>
                    <div className="thumbnail-classic-time">
                      <time dateTime="2021-09-07">
                        Barloworld Equipment &amp; Glencore Operations SA
                      </time>
                    </div>
                    <div className="thumbnail-classic-time">
                      <time dateTime="2021-09-07">2020</time>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-6 isotope-item" data-filter="Type 4">
                {/* Thumbnail Classic*/}
                <article className="thumbnail thumbnail-classic block-lg">
                  <a
                    className="thumbnail-classic-figure"
                    href="assets/images/project-12-1200x800-original.jpg"
                    data-lightgallery="item"
                  >
                    <img
                      src="assets/images/project-12-570x299.jpg"
                      alt=''
                      width={570}
                      height={299}
                    />
                  </a>
                  <div className="thumbnail-classic-caption">
                    <h6 className="thumbnail-classic-title">
                      <Link to="/project-project-12">
                        dragline shutdown &amp; refurbishment projects
                      </Link>
                    </h6>
                    <div className="thumbnail-classic-time">
                      <time dateTime="2021-09-07">
                        South32 &amp; Glencore Operations SA
                      </time>
                    </div>
                    <div className="thumbnail-classic-time">
                      <time dateTime="2021-09-07">2016 – 2021</time>
                    </div>
                  </div>
                </article>
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

export default FlagshipProjectsPage;

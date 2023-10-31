import React from "react";
//import Loader from './Loader';
import Header from "./Header";
import Footer from "./Footer";
//import { Helmet } from "react-helmet";
import Loader from "./Loader";
import '../styles/assets/css/style-6.css' 
//import '../../public/assets/css/style-6.css'
//import styles from './../styles/assets/css/style6.module.css'

const Layout = ({ title }) => {
  return (
    <>
     
     <Loader />

      <div>
        {/* <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
        </Helmet> */}
        <Header /> 

        <Footer />
      </div>
    </>
  );
};

// Layout.defaultProps = {
//   title: "Hlela Mining & Projects",
// };

export default Layout;

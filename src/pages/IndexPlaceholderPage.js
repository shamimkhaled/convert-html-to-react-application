import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const IndexPlaceholderPage = () => {
  return (
    <>
      <div>
         {/* Header */}
         <Header />
          {/* Header */}

        <div className="page"></div>
        {/* Global Mailform Output*/}
        <div className="snackbars" id="form-output-global" ></div>

         {/* Footer */}
         <Footer />
          {/* Footer */}
      </div>
    </>
  );
};

export default IndexPlaceholderPage;

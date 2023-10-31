import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";


const Loader = () => {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
      // Simulating a 3-second delay for the loader
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500);
  
      // Clean up the timer when the component unmounts
      return () => clearTimeout(timer);
    }, []);

  return (
    <>
    {isLoading && (
      <div>
        <div className="ie-panel">
          <Link to="http://windows.microsoft.com/en-US/internet-explorer/">
            <img
              src="assets/images/ie8-panel/warning_bar_0000_us.jpg"
              height={42}
              width={820}
              alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today."
            />
          </Link>
        </div>
        <div className="preloader">
          <div className="wrapper-triangle">
            <div className="pen">
              <div className="line-triangle">
                <div className="triangle" />
                <div className="triangle" />
                <div className="triangle" />
                <div className="triangle" />
                <div className="triangle" />
                <div className="triangle" />
                <div className="triangle" />
              </div>
              <div className="line-triangle">
                <div className="triangle" />
                <div className="triangle" />
                <div className="triangle" />
                <div className="triangle" />
                <div className="triangle" />
                <div className="triangle" />
                <div className="triangle" />
              </div>
              <div className="line-triangle">
                <div className="triangle" />
                <div className="triangle" />
                <div className="triangle" />
                <div className="triangle" />
                <div className="triangle" />
                <div className="triangle" />
                <div className="triangle" />
              </div>
            </div>
          </div>
        </div>
      </div>

    )}
    </>
  );
};

export default Loader;

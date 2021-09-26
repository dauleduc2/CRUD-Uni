import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
function HomePage() {
  return (
    <div className="homePageSection">
      <div className="content">
        <p className="text up">Discover universities</p>
        <p className="text down">in HCM city</p>
        <Link className="button" to="/universities">
          Get started
        </Link>
      </div>
    </div>
  );
}

export default HomePage;

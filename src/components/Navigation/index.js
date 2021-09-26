import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar">
        <div className="navbar__logo">
          <Link to="/" className="aTag">
            <FontAwesomeIcon icon={faGraduationCap} className="logo" />
          </Link>
          <Link to="/" className="aTag">
            <span className="navbar__team-name">CRUD</span>
          </Link>
        </div>
        <ul className="navbar__menu">
          <li className="navbar__item">
            <Link to="/universities" className="navbar__item-name">
              Universities
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/about-us" className="navbar__item-name">
              About us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;

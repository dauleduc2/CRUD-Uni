import React from "react";
import "./style.css";
function AboutUsPage() {
  return (
    <div classNameName="aboutUsSection">
      <div className="name-wow">
        <div className="name">
          <span className="name-C ">C</span>
          <span className="name-R ">R</span>
          <span className="name-U ">U</span>
          <span className="name-D ">D</span>
        </div>
      </div>

      <div className="details">
        <div className="name-meaning">
          <div className="letter C">
            <p className="letter__uppercase">C</p>
            <p className="letter__lowercase c">reate</p>
          </div>
          <div className="letter R">
            <p className="letter__uppercase">R</p>
            <p className="letter__lowercase r">eceive</p> <br />
          </div>
          <div className="letter U">
            <p className="letter__uppercase">U</p>
            <p className="letter__lowercase u">pdate</p> <br />
          </div>
          <div className="letter D">
            <p className="letter__uppercase">D</p>
            <p className="letter__lowercase d">elete</p> <br />
          </div>
        </div>
        <div className="about-us">
          <h1 id="about-us">About us</h1>
          <div className="group">
            <i className="about-us__icon fas fa-user-friends"></i>
            <p className="about-us__text">
              Group of four students in FPT University.
            </p>
          </div>
          <div className="goal">
            <i className="about-us__icon fas fa-bullseye"></i>
            <p className="about-us__text">
              The common goal: passing SSG103 and improve teamwork skill
            </p>
          </div>
        </div>
      </div>

      <div className="members">
        <div className="logo-CRUD">
          <h1 className="logo-CRUD__text">CRUD</h1>
        </div>
        <div className="member top-left">
          <div className="member__img Loc-Hong"></div>
          <div className="member__description">
            <h1 className="member__name-a-code">SE150057 - Nguyen Hoang Loc</h1>
            <p className="member__description-info">
              - Sports and games are dreams. <br /> - Role: planning, coding.{" "}
              <br />- Strength: can learn anything.
            </p>
          </div>
        </div>
        <div className="member top-right">
          <div className="member__img Duc"></div>
          <div className="member__description">
            <h1 className="member__name-a-code">SE150058 - dau le duc</h1>
            <p className="member__description-info">
              - A guy come from Khanh Hoa, love to play video game and doing
              something new. <br /> - Role: planning, coding. <br /> - Strength:
              have good discipline.
            </p>
          </div>
        </div>
        <div className="member bottom-left">
          <div className="member__img Loc-Xanh"></div>
          <div className="member__description">
            <h1 className="member__name-a-code">SE150060 - Nguyen Hoang Loc</h1>
            <p className="member__description-info">
              - This year 20 years old hobby is traveling around the world.{" "}
              <br /> - Role: information seeker. <br /> - Strength: adapt
              quickly, reliably.
            </p>
          </div>
        </div>
        <div className="member bottom-right">
          <div className="member__img Hoang-Anh"></div>
          <div className="member__description">
            <h1 className="member__name-a-code">SE150062 - Nguyen Hoang anh</h1>
            <p className="member__description-info">
              - A normal person in this world with no money. <br /> - Role: help
              other members. <br /> - Strength: can easily understand other
              people and help them solve problems.
            </p>
          </div>
        </div>
      </div>
      <div className="quote">
        <h1 className="quote-text">
          "Don't wish it easier <br /> Wish you were better"
          <h1 className="quote-author">Jim Rohn</h1>
        </h1>
      </div>
    </div>
  );
}

export default AboutUsPage;

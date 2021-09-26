import React, { useEffect } from "react";
import ActivitiesFormPage from "../ActivityFormPage";
import FacilitiesFormPage from "../FacilitiesFormPage";
import IntroductionFormPage from "../IntroductionFormPage";
import MajorsFormPage from "../MajorsFormPage";
import { database } from "../../const/database";
import { getPathFromString } from "../../utils";
function SchoolInformation(props) {
  let { match } = props;
  let { params } = match;
  let { university: universityPathName } = params;
  let data;
  for (let i = 0; i < database.length; i++) {
    const university = database[i];
    let url = getPathFromString(university.name);
    if (url === universityPathName) {
      data = university;
    }
  }
  const { name } = data;
  //remove all class
  function removeAllActiveClass() {
    const contentTabElements =
      document.getElementsByClassName("content__tab-item");
    for (let i = 0; i < contentTabElements.length; i++) {
      const element = contentTabElements[i];
      element.classList.remove("active");
    }
  }
  //effect
  useEffect(() => {
    const contentTabElements =
      document.getElementsByClassName("content__tab-item");
    const tabLine = document.getElementsByClassName("tab__line")[0];
    const slideContent = document.getElementsByClassName("slideContent")[0];
    const slideContentElements =
      document.getElementsByClassName("slideContent")[0];
    const mainContentElements = document.getElementsByClassName("mainContent");

    //set initial height of slideContent based on first slide show
    setTimeout(() => {
      slideContent.style.height = `${slideContentElements.childNodes[0].lastChild.offsetTop}px`;
    }, 300);

    for (let i = 0; i < contentTabElements.length; i++) {
      const element = contentTabElements[i];

      element.addEventListener("click", function () {
        removeAllActiveClass();
        let leftToMove = i * 25;
        tabLine.style.left = `${leftToMove}%`;
        element.classList.add("active");
        slideContent.style.transform = `translateX(-${i * 100}%)`;
        // set height of slideContent base on height of slide which are displaying
        // console.log(slideContentElements.childNodes[i].lastChild);
        slideContent.style.height = `${
          slideContentElements.childNodes[i].lastChild.offsetTop + 45
        }px`;
      });
    }
  });
  //render
  return (
    <div className="FPTUniversitySection">
      <header class="header">
        <div class="header__title">
          <h1>For your future</h1>
        </div>
      </header>
      <div class="content">
        <div class="conten__title">
          <h1>{name.trim()}</h1>
        </div>

        <div class="content__tabs">
          <div class="content__tab-item tab-item__introduction active">
            Introduction
          </div>
          <div class="content__tab-item tab-item__major">Major</div>
          <div class="content__tab-item tab-item__facilities">Facilities</div>
          <div class="content__tab-item tab-item__others  ">Activities</div>
          <div class="tab__line"></div>
        </div>
        <div class="carousel">
          <div className="slideContent">
            {/* introduction page */}
            <IntroductionFormPage data={data} />
            {/* majors page */}
            <MajorsFormPage data={data} />
            {/* facilities page */}
            <FacilitiesFormPage data={data} />
            {/* activities page */}
            <ActivitiesFormPage data={data} />
          </div>
        </div>
        {/* end carosel */}
      </div>
    </div>
  );
}

export default SchoolInformation;

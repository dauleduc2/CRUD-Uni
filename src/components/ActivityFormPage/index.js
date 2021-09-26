import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Markup } from "interweave";
function ActivitiesFormPage(props) {
  const [numberOfActivity, setNumberOfActivity] = useState(0);
  const { data } = props;
  const { others } = data;
  const { extracurricularActivitie } = others;
  const [currentPos, setCurrentPos] = useState(0);
  useEffect(() => {
    const activityContentElement = document.getElementById("activityContent");
    const activityElements = document.getElementsByClassName("activity");
    const numberOfActivity = activityElements.length;
    const backIconElement = document.getElementsByClassName("backIcon")[0];
    const forwardIcon = document.getElementsByClassName("forwardIcon")[0];
    const dotElements = document.getElementsByClassName("dot");
    const activityImageContentElement = document.getElementsByClassName(
      "activityImageContent"
    );
    const imageCarouselBackIconElement = document.getElementsByClassName(
      "imageCarouselBackIcon"
    );
    const imageCarouselFowardIconElement = document.getElementsByClassName(
      "imageCarouselFowardIcon"
    );

    // let currentPos = 0;
    for (let i = 0; i < dotElements.length; i++) {
      const element = dotElements[i];
      if (element.classList.contains("active")) {
        // currentPos = i;
        setCurrentPos(i);
      }
      element.addEventListener("click", function () {
        //remove all active classname of all dot element
        for (let j = 0; j < dotElements.length; j++) {
          const dotElement = dotElements[j];
          dotElement.classList.remove("active");
          if (dotElement === element) {
            // currentPos = j;
            setCurrentPos(j);
          }
        }
        //set active class for which element was clicked
        element.classList.add("active");
        activityContentElement.style.transform = `translateX(-${i * 100}%)`;
      });
    }
    // click event for content slide
    // backIconElement.addEventListener("click", function () {
    //   dotElements[currentPos]?.classList.remove("active");
    //   if (currentPos === 0) {
    //     // currentPos = numberOfActivity - 1;
    //     setCurrentPos(numberOfActivity - 1);
    //   } else {
    //     // currentPos -= 1;
    //     setCurrentPos(currentPos - 1);
    //   }

    //   dotElements[currentPos]?.classList.add("active");
    //   activityContentElement.style.transform = `translateX(-${
    //     currentPos * 100
    //   }%)`;
    // });
    // forwardIcon.addEventListener("click", function () {
    //   dotElements[currentPos]?.classList.remove("active");
    //   if (currentPos === numberOfActivity - 1) {
    //     // currentPos = 0;
    //     setCurrentPos(0);
    //   } else {
    //     // currentPos += 1;
    //     setCurrentPos(currentPos + 1);
    //   }
    //   dotElements[currentPos]?.classList.add("active");
    //   activityContentElement.style.transform = `translateX(-${
    //     currentPos * 100
    //   }%)`;
    // });

    //click event for image slide
    for (let i = 0; i < imageCarouselBackIconElement.length; i++) {
      const element = imageCarouselBackIconElement[i];
      element.addEventListener("click", function () {
        activityImageContentElement[i].scrollLeft -= 1000;
      });
    }
    for (let i = 0; i < imageCarouselFowardIconElement.length; i++) {
      const element = imageCarouselFowardIconElement[i];
      element.addEventListener("click", function () {
        activityImageContentElement[i].scrollLeft += 1000;
      });
    }

    //set numberOfActivity state
    setNumberOfActivity(numberOfActivity);
  });
  let RenderDotControl = () => {
    let result = [];
    for (let i = 0; i < numberOfActivity; i++) {
      if (i === 0) {
        result.push(<div className="dot active"></div>);
      } else {
        result.push(<div className="dot"></div>);
      }
    }

    return result;
  };
  let renderImage = (images) => {
    let result;
    result = images.map((imageLink) => {
      return <img src={imageLink} alt="imagess" />;
    });

    return result;
  };
  let onHandleArrowClick = (sign) => {
    const dotElements = document.getElementsByClassName("dot");
    const activityContentElement = document.getElementById("activityContent");
    let decoyPos = currentPos;
    if (sign === "forward") {
      dotElements[currentPos]?.classList.remove("active");

      if (currentPos === numberOfActivity - 1) {
        decoyPos = 0;
      } else {
        decoyPos = currentPos + 1;
      }
      dotElements[decoyPos]?.classList.add("active");
      activityContentElement.style.transform = `translateX(-${
        decoyPos * 100
      }%)`;
      setCurrentPos(decoyPos);
    }
    if (sign === "back") {
      dotElements[currentPos]?.classList.remove("active");
      if (currentPos === 0) {
        decoyPos = numberOfActivity - 1;
      } else {
        decoyPos = currentPos - 1;
      }

      dotElements[decoyPos]?.classList.add("active");
      activityContentElement.style.transform = `translateX(-${
        decoyPos * 100
      }%)`;
      setCurrentPos(decoyPos);
    }
  };
  let renderActivity = () => {
    let result;
    result = extracurricularActivitie.map((activity) => {
      let { nameOfActivity, descriptionOfActivity, imgs } = activity;
      return (
        <div className="activity">
          <h1 className="activity__name">{nameOfActivity}</h1>
          <p className="activity__description">
            <Markup eave content={descriptionOfActivity} />
          </p>
          <div className="activity__img">
            <div className="activityImageCarousel">
              <ArrowBackIosIcon className="imageCarouselBackIcon" />
              <div className="activityImageContent">{renderImage(imgs)}</div>
              <ArrowForwardIosIcon className="imageCarouselFowardIcon" />
            </div>
          </div>
        </div>
      );
    });
    return result;
  };
  return (
    <div className="mainContent content__activities">
      <div className="activities__box">
        <div className="upperLine">
          <ArrowBackIosIcon
            className="backIcon"
            onClick={() => onHandleArrowClick("back")}
          />
          <div className="dotLine">{RenderDotControl()}</div>
          <ArrowForwardIosIcon
            className="forwardIcon"
            onClick={() => onHandleArrowClick("forward")}
          />
        </div>

        <div className="activityCarousel">
          <div className="activityContent" id="activityContent">
            {renderActivity()}
          </div>
        </div>
      </div>
      <div className="endPoint"></div>
    </div>
  );
}

export default ActivitiesFormPage;

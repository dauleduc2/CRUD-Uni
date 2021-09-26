import React, { useEffect, useState } from "react";
import { getPathFromString } from "../../utils";
import UniversityRow from "../UniversityRow";
import "./style.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
function UniTable(props) {
  let { data } = props;
  const configDataOfPagination = {
    numberOfRow: 8,
    numberOfPageTwoSides: 2,
    range: 4,
  };
  const [positionOfCurrentPage, setPositionOfCurrentPage] = useState(1);
  const [numberOfUniversity, setNumberOfUniversity] = useState(data.length);
  const [numberOfPage, setNumberOfPage] = useState(
    Math.ceil(numberOfUniversity / configDataOfPagination.numberOfRow)
  );

  useEffect(() => {
    const squareElements = document.getElementsByClassName("square");
    for (let i = 0; i < squareElements.length; i++) {
      const element = squareElements[i];

      if (parseInt(element.innerHTML) === positionOfCurrentPage) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    }
  }, [positionOfCurrentPage]);
  let renderUniversity = () => {
    let result;
    let currentDataToShow = data.slice(
      (positionOfCurrentPage - 1) * 8,
      positionOfCurrentPage * 8
    );

    result = currentDataToShow.map((university) => {
      let {
        name,
        logoImg,
        headquarters,
        admissionBaseOnSchoolProfile,
        superMajor,
      } = university;
      let minimumMark = 0;
      let maximumMark = 0;
      let compareMark = "";
      let url = getPathFromString(name);
      let markArray = [];

      for (let i = 0; i < superMajor.length; i++) {
        const subMajor = superMajor[i].subMajor;
        for (let j = 0; j < subMajor.length; j++) {
          const major = subMajor[j];
          markArray.push(major.benchMark);
        }
      }

      minimumMark = Math.min(...markArray);
      maximumMark = Math.max(...markArray);
      compareMark = minimumMark + " - " + maximumMark;
      if (isNaN(minimumMark) || isNaN(maximumMark)) {
        compareMark = "-";
      }
      if (minimumMark === maximumMark) {
        compareMark = minimumMark;
      }
      return (
        <UniversityRow
          path={url}
          name={name}
          logoLink={logoImg}
          address={headquarters[0]}
          benchMark={compareMark}
          admissionBaseOnSchoolProfile={admissionBaseOnSchoolProfile}
        />
      );
    });
    if (currentDataToShow.length < 8) {
      for (let i = 0; i < 8 - currentDataToShow.length; i++) {
        result.push(<UniversityRow />);
      }
    }
    return result;
  };
  let handleSquareClick = (e) => {
    const clickedSquare = e.target;
    const valueOfClickSquare = parseInt(clickedSquare.innerHTML);
    setPositionOfCurrentPage(valueOfClickSquare);
  };
  let squareToPrint = (i, isActive = false) => {
    let result;

    if (isActive) {
      result = (
        <div onClick={(e) => handleSquareClick(e)} className="square active">
          {i}
        </div>
      );
    } else {
      result = (
        <div onClick={(e) => handleSquareClick(e)} className="square">
          {i}
        </div>
      );
    }
    return result;
  };

  let renderPage = () => {
    let { numberOfPageTwoSides } = configDataOfPagination;
    let result = [];

    let numberOfTruncateLeft = positionOfCurrentPage - numberOfPageTwoSides;
    let numberOfTruncateRight = positionOfCurrentPage + numberOfPageTwoSides;
    let range = numberOfPageTwoSides + 4;
    let count = 0;

    for (let i = 1; i <= numberOfPage; i++) {
      let isTruncate = false;
      let isActive = false;
      if (i === positionOfCurrentPage) {
        isActive = true;
        count = 0;
      }

      // truncate
      if (i > range) {
        if (i > numberOfTruncateRight) {
          isTruncate = true;
        }
        if (numberOfTruncateRight >= numberOfPage - 2) {
          isTruncate = false;
        }
      }

      if (numberOfTruncateLeft > 3) {
        if (i <= numberOfTruncateLeft - 1) {
          isTruncate = true;
        }
        if (numberOfTruncateRight >= numberOfPage - 2) {
          if (i > numberOfPage - range) {
            isTruncate = false;
          }
        }
      }

      //first & last button always display
      if (i === 1 || i === numberOfPage) {
        isTruncate = false;
      }
      if (!isTruncate) {
        result.push(squareToPrint(i, isActive));
      } else {
        if (count === 0) {
          result.push(<div className="dotdotdot">...</div>);
          count++;
        }
      }
    }

    return result;
  };
  let onArrowClick = (button) => {
    if (button === "back") {
      if (positionOfCurrentPage === 1) {
        setPositionOfCurrentPage(numberOfPage);
      } else {
        setPositionOfCurrentPage(positionOfCurrentPage - 1);
      }
    }
    if (button === "forward") {
      if (positionOfCurrentPage === numberOfPage) {
        setPositionOfCurrentPage(1);
      } else {
        setPositionOfCurrentPage(positionOfCurrentPage + 1);
      }
    }
  };

  return (
    <div className="tableSection">
      <div className="table">
        <table>
          <thead>
            <tr className="table-content">
              <th>Name</th>
              <th>Logo</th>
              <th>Location</th>
              <th>Benchmark</th>
            </tr>
          </thead>
          <tbody>{renderUniversity()}</tbody>
        </table>
        <div className="paginationWrapper">
          <div className="pagination">
            <ArrowBackIosIcon
              onClick={() => onArrowClick("back")}
              className="ArrowBackIosIcon"
            />
            {renderPage()}
            <ArrowForwardIosIcon
              onClick={() => onArrowClick("forward")}
              className="ArrowForwardIosIcon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UniTable;

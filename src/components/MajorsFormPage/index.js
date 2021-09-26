import React from "react";
import { Markup } from "interweave";
import "./style.css";
function MajorsFormPage(props) {
  let { data } = props;
  let { superMajor } = data;

  let renderMajorRow = (data, industryCode) => {
    let result;

    result = data.map((major) => {
      let { nameOfMajor, benchMark, fee } = major;
      return (
        <tr>
          <td>{nameOfMajor}</td>
          <td>{industryCode}</td>
          <td>{benchMark}</td>
          <td className="major__fee">{fee ? fee : "-  "}</td>
        </tr>
      );
    });
    return result;
  };

  let renderContent = () => {
    let result;
    result = superMajor.map((major) => {
      let { name, images, description, subMajor, industryCode } = major;
      return (
        <div className="majors__major">
          <div className="major__header">
            <img
              className="majors__major-img"
              src={images}
              alt={`${name} images`}
            />
            <div className="majors__major-description">
              <h1 className="major__name">{name}</h1>
              <p className="major__description">
                <Markup eave content={description} />
              </p>
            </div>
          </div>
          <div className="major__table">
            <table className="table major__list">
              <tr className="background1">
                <th>MAJOR</th>
                <th>MAJOR CODE</th>
                <th>BENCH MARK</th>
                <th>FEE</th>
              </tr>
              {renderMajorRow(subMajor, industryCode)}
            </table>
          </div>
        </div>
      );
    });
    return result;
  };
  return (
    <div className="mainContent content__majors">
      {renderContent()}
      <div className="endPoint"></div>
    </div>
  );
}

export default MajorsFormPage;

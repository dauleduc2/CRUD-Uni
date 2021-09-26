import React, { Fragment } from "react";
import { Markup } from "interweave";
function FacilitiesFormPage(props) {
  const { data } = props;
  const { infrastructure } = data;
  const { introduction, imageToDemonstrate } = infrastructure;
  let renderContent = () => {
    let result;
    result = imageToDemonstrate.map((content) => {
      let { imgs, smallText, description } = content;
      return (
        <Fragment>
          <div className="facilities__img">
            <img src={imgs} alt="Campus HCM Đại Học FPT" />
            <span className="img__description">{smallText}</span>
          </div>
          <p>
            <Markup eave content={description} />
          </p>
        </Fragment>
      );
    });

    return result;
  };
  return (
    <div className="mainContent content__facilities">
      <div className="facilities__content">
        <p className="facilities__introduction">
          <Markup eave content={introduction} />
        </p>
        {renderContent()}
      </div>
      <div className="endPoint"></div>
    </div>
  );
}

export default FacilitiesFormPage;

import React from "react";
import { Markup } from "interweave";
function IntroductionFormPage(props) {
  const { data } = props;
  const { introductionSection } = data;
  const { description, logo } = introductionSection;
  return (
    <div class="mainContent content__introduction">
      <div>
        <img src={logo} alt="img" class="introduction-img" />
      </div>
      <div class="introduction__description">
        <Markup eave content={description} />
      </div>

      <div className="endPoint"></div>
    </div>
  );
}

export default IntroductionFormPage;

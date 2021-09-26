import React, { useEffect, useState } from "react";
import "./style.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
function ActivitiesPage() {
  const [numberOfActivity, setNumberOfActivity] = useState(0);
  useEffect(() => {
    const activityContentElement = document.getElementById("activityContent");
    const activityElements = document.getElementsByClassName("activity");
    const numberOfActivity = activityElements.length;
    const backIconElement = document.getElementsByClassName("backIcon")[0];
    const forwardIcon = document.getElementsByClassName("forwardIcon")[0];
    const dotElements = document.getElementsByClassName("dot");
    const activityImageContentElement = document.getElementsByClassName(
      "activityImageContent"
    )[0];
    const imageCarouselBackIconElement = document.getElementsByClassName(
      "imageCarouselBackIcon"
    )[0];
    const imageCarouselFowardIconElement = document.getElementsByClassName(
      "imageCarouselFowardIcon"
    )[0];
    let currentPos = 0;
    for (let i = 0; i < dotElements.length; i++) {
      const element = dotElements[i];
      if (element.classList.contains("active")) {
        currentPos = i;
      }
      element.addEventListener("click", function () {
        //remove all active classname of all dot element
        for (let j = 0; j < dotElements.length; j++) {
          const dotElement = dotElements[j];
          dotElement.classList.remove("active");
        }
        //set active class for which element was clicked
        element.classList.add("active");
        activityContentElement.style.transform = `translateX(-${i * 100}%)`;
      });
    }
    // click event for content slide
    backIconElement.addEventListener("click", function () {
      console.log("before :", currentPos);
      dotElements[currentPos]?.classList.remove("active");
      if (currentPos === 0) {
        currentPos = numberOfActivity - 1;
      } else {
        currentPos -= 1;
      }
      console.log("after :", currentPos);
      dotElements[currentPos]?.classList.add("active");
      activityContentElement.style.transform = `translateX(-${
        currentPos * 100
      }%)`;
    });
    forwardIcon.addEventListener("click", function () {
      dotElements[currentPos]?.classList.remove("active");
      if (currentPos === numberOfActivity - 1) {
        currentPos = 0;
      } else {
        currentPos += 1;
      }
      dotElements[currentPos]?.classList.add("active");
      activityContentElement.style.transform = `translateX(-${
        currentPos * 100
      }%)`;
    });

    //click event for image slide
    imageCarouselBackIconElement.addEventListener("click", function () {
      activityImageContentElement.scrollLeft -= 450;
    });
    imageCarouselFowardIconElement.addEventListener("click", function () {
      activityImageContentElement.scrollLeft += 450;
    });

    //set numberOfActivity state
    setNumberOfActivity(numberOfActivity);
  });
  let RenderDotControl = () => {
    let result = [];
    for (let i = 0; i < numberOfActivity; i++) {
      if (i == 0) {
        result.push(<div className="dot active"></div>);
      } else {
        result.push(<div className="dot"></div>);
      }
    }

    return result;
  };
  return (
    <div className="mainContent content__activities">
      <div className="activities__box">
        <div className="upperLine">
          <ArrowBackIosIcon className="backIcon" />
          <div className="dotLine">{RenderDotControl()}</div>
          <ArrowForwardIosIcon className="forwardIcon" />
        </div>

        <div className="activityCarousel">
          <div className="activityContent" id="activityContent">
            <div className="activity">
              <h1 className="activity__name">48H CHUYỂN ĐỘNG</h1>
              <p className="activity__description">
                Chuyến 48h trải nghiệm đầu tiên được tổ chức vào học kỳ Fall năm
                2014. Đúng với tên gọi của chương trình, sinh viên tham gia sẽ
                có 2 ngày dịch chuyển không ngừng để khám phá những điều mới mẻ
                theo nội dung mà phòng Phát triển cá nhân (PDP) thiết kế riêng
                cho từng chuyến. Mỗi chương trình khép lại cũng là lúc sinh viên
                thu về cho mình nhiều kinh nghiệm sống bên cạnh kiến thức chuyên
                môn. <br /> <br />
                48h chuyển động không chỉ cho sinh viên FPT đặt chân đến với
                nhiều vùng miền khác nhau mà còn được trải nghiệm nhiều hoạt
                động sôi nổi. Đặc trưng mỗi vùng miền thường được lồng ghép
                trong các thử thách nên các nhiệm vụ của mỗi chuyến không trùng
                lắp, đủ hấp dẫn để sinh viên dù đã đi nhiều lần vẫn tiếp tục hào
                hứng tham gia chuyến tiếp theo.
                <br />
                <br />
                Điểm chung của 48h chuyển động là sinh viên được trau dồi kỹ
                năng sống trong điều kiện không tiện nghi, toàn bộ tiền và điện
                thoại không còn là “vật bất ly thân” khi sinh viên phải gửi lại
                các vật dụng để nhờ BTC giữ hộ trong suốt thời gian chương trình
                diễn ra.
              </p>
              <div className="activity__img">
                <div className="activityImageCarousel">
                  <ArrowBackIosIcon className="imageCarouselBackIcon" />
                  <div className="activityImageContent">
                    <img src="../../images/48h.jpg" alt="48H chuyển động" />
                    <img src="../../images/fpthcm3.jpg" alt="imagess" />
                    <img src="../../images/fptphcm9.jpg" alt="imagess" />
                    <img src="../../images/f-camp.jpg" alt="imagess" />
                  </div>
                  <ArrowForwardIosIcon className="imageCarouselFowardIcon" />
                </div>
              </div>
            </div>
            <div className="activity">
              <h1 className="activity__name">FPT University Talent</h1>
              <p className="activity__description">
                Cuộc thi FPT University Talent 2021 dành cho tất cả các học sinh
                THPT từ 16 – 19 tuổi (sinh năm 2002 – 2005) trên toàn quốc và có
                năng khiếu về: múa, hát, khiêu vũ, thể dục, thể thao, thơ văn.
                <br /> <br /> Tham dự cuộc thi, các thí sinh sẽ trải qua 2 vòng:
                Vòng sơ loại và vòng Chung kết. <br /> <br />
                Các thí sinh bước vào đêm chung kết sẽ có cơ hội đứng chung sân
                khấu với ca sỹ khách mời của chương trình – là các nghệ sĩ trẻ
                hàng đầu Việt Nam hiện nay. Đây là cơ hội đặc biệt để các thí
                sinh trực tiếp học hỏi và trưởng thành từ kinh nghiệm trình diễn
                thực tế. <br /> <br />
                Các thí sinh chiến thắng tại vòng chung kết FPT University
                Talent 2021 có cơ hội nhận được giải thưởng gồm tiền mặt và học
                bổng ĐH FPT các mức từ 50%, 70%, 100% với tổng trị giá lên tới
                hơn 3 tỷ đồng. Ngoài 3 giải chính, FPT University Talent 2021
                còn dành 5 giải phụ: Giải Ấn tượng, Giải Sáng tạo, Giải Phong
                cách, Giải Triển vọng, Giải Sao online cho các thí sinh có phần
                dự thi xuất sắc. Các thí sinh còn lại lọt vào vòng Chung kết
                cuộc thi đều nhận được học bổng 30% tại ĐH FPT.
              </p>
              <div className="activity__img">
                <img src="../../images/fu-talent.jpg" alt="FPT talent" />
              </div>
            </div>
            <div className="activity">
              <h1 className="activity__name">Cuộc thi TIKCOK</h1>
              <p className="activity__description">
                TikCok là một cuộc thi sáng tạo video thông qua nền tảng mạng xã
                hội TikTok được tổ chức bởi Câu lạc bộ Truyền thông Cóc Sài Gòn.
                Nối tiếp sự thành công rực rỡ của TikCok 2020, TikCok 2021 đã
                quay trở lại với “diện mạo” mới cùng những thử thách sáng tạo sẽ
                mang lại một cuộc thi gay cấn, đầy hấp dẫn hơn. <br /> <br />
                Cuộc thi mong muốn đánh thức trách nhiệm của mỗi người trong mùa
                cách ly, đặc biệt là những người trẻ đã mang lại cảm hứng cho
                cái tên “Quaranteens” – sự kết tinh của 2 khái niệm “Quarantine”
                và “Teens”. Với tinh thần đó, TikCok 2021 hứa hẹn sẽ tạo nên một
                sân chơi lành mạnh, nơi mà các sản phẩm cá nhân có thể lan tỏa
                các thông điệp tích cực đến cộng đồng trong tình hình dịch bệnh
                phức tạp.
              </p>
              <div className="activity__img">
                <img src="../../images/tikcok.jpg" alt="TIKCOK" />
              </div>
            </div>
            <div className="activity">
              <h1 className="activity__name">F - CAMP</h1>
              <p className="activity__description">
                F- Camp chương trình “đặc sản” thường niên chào đón “Cóc tân
                binh”do sinh viên khóa trước – dưới sự đồng hành và cố vấn của
                Phòng Hợp tác quốc tế và Phát triển cá nhân (IC-PDP) tổ chức.
                <br /> <br /> Giữa vô vàn sự kiện diễn ra quanh năm tại Đại học
                FPT, F-Camp có lẽ được coi là món quà mở màn đầy ý nghĩa với bất
                kì sinh viên nào khi bắt đầu bước chân vào cánh cổng trường 3
                chữ. Sân chơi này không chỉ giúp các bạn sinh viên thêm gắn bó
                với những người bạn cùng khóa mà còn nhận được sự quan tâm của
                những đàn anh, đàn chị khóa trên.
                <br /> <br /> F-Camp là một trong số những hoạt động hấp dẫn
                dành cho các “tân binh” bởi sự chuẩn bị chu đáo và sáng tạo của
                các anh chị sinh viên tiền bối đang theo học, là nơi lý tưởng để
                các bạn thoả sức vùng vẫy, sáng tạo, đôi lúc các tân sinh viên
                “KHÔNG ĐỦ SỨC” để tận hưởng tất các hoạt động và không khí của
                ngày hội!
                <br /> <br /> Điều đặc biệt ở F-camp chính là bạn chỉ có thể
                tham gia với tư cách được “chăm sóc” tận tình và chỉ có 1 lần
                duy nhất trong 4 năm học khi vừa mới vào trường.
                <div className="activity__img">
                  <img src="../../images/f-camp.jpg" alt="F-CAMP" />
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="endPoint"></div>
    </div>
  );
}

export default ActivitiesPage;

import React from "react";

function IntroductionPage() {
  return (
    <div class="mainContent content__introduction">
      <div class="introduction__description">
        <p>
          Đại học FPT Chính thức thành lập ngày 8/9/2006 theo Quyết định của Thủ
          tướng Chính phủ, Trường Đại học FPT trở thành trường đại học đầu tiên
          của Việt Nam do một doanh nghiệp đứng ra thành lập với 100% vốn đầu tư
          từ Tập đoàn FPT.
        </p>
        <p>
          Sự khác biệt của Trường Đại học FPT so với các trường đại học khác là
          đào tạo theo hình thức liên kết chặt chẽ với các doanh nghiệp, gắn đào
          tạo với thực tiễn, với nghiên cứu – triển khai và các công nghệ hiện
          đại nhất. Triết lý và phương pháp giáo dục hiện đại; Đào tạo con người
          toàn diện, hài hòa; Chương trình luôn được cập nhật và tuân thủ các
          chuẩn công nghệ quốc tế; Đặc biệt chú trọng kỹ năng ngoại ngữ; Tăng
          cường đào tạo quy trình tổ chức sản xuất, kỹ năng làm việc theo nhóm
          và các kỹ năng cá nhân khác là những điểm sẽ đảm bảo cho sinh viên tốt
          nghiệp có những cơ hội việc làm tốt nhất sau khi ra trường.
        </p>
      </div>
      <div>
        <img
          src="../../images/introduction.jpg"
          alt="Đại học FPT"
          class="introduction-img"
        />
        <span class="img__description">
          Campus đại học FPT. Ảnh: Đại học FPT HCM.
        </span>
      </div>
      <div>
        <h1 class="introduction__major-description">
          Trường hiện đang đào tạo các nhóm ngành:
          <br /> CNTT, Kinh tế, Ngôn ngữ, Mỹ thuật ứng dụng.
        </h1>
        <div class="English">
          <div>
            <p class="English__description">
              Tất cả sinh viên Đại học FPT đều phải trải qua 1 năm hoàn thiện
              tiếng Anh, để có thể theo học chương trình chính khoá được đào tạo
              bằng tiếng Anh. Trong một năm đầu tiên học tiếng Anh, sinh viên
              được gửi sang các trường đại học ở các nước nói tiếng Anh (trong
              vòng 2 tháng) để thật sự lưu loát ngôn ngữ bắt buộc cho học tập và
              làm việc sau này.
            </p>
          </div>
          <img
            src="../../images/luk.jpg"
            alt="Little UK Sai Gon"
            class="English-img"
          />
        </div>
      </div>

      <div class="OJT">
        <div>
          <p>
            Sau 5 học kỳ đầu tiên, với tiếng Anh và các kỹ năng cơ bản của ngành
            học, sinh viên được gửi vào làm thực tập sinh trong các công ty
            thành viên của tập đoàn FPT trong vòng 4 đến 8 tháng. Tại đây sinh
            viên được huấn luyện thực tế về nghề nghiệp tương lai, tham gia vào
            các dự án thật (real project) và có thể được trả lương. Đó là giai
            đoạn On-the-Job-Training (OJT) đặc thù của trường đại học FPT. Một
            số ngành như tiếng Nhật, Quản trị Khách sạn, sinh viên đi OJT tại
            Nhật Bản, tại Malaysia,…
          </p>
          <div class="OJT__img">
            <img
              src="../../images/pjt.jpg"
              alt="Sinh viên FPT đi thực tập tại doanh nghiệp"
            />
            <span class="img__description">
              Sinh viên FPT đi thực tập tại doanh nghiệp. Ảnh: Đại học FPT
            </span>
          </div>
          <p>
            Tỉ lệ việc làm của trường cũng đạt được con số ấn tượng. 96% sinh
            viên Đại học FPT có việc làm sau khi tốt nghiệp với mức lương bình
            quân khoảng 8,3 triệu đồng/người/tháng, 100% sinh viên có cơ hội làm
            việc ở FPT sau khi tốt nghiệp; 19% cựu sinh viên làm việc tại nước
            ngoài (số liệu năm 2017).
          </p>
        </div>
      </div>

      <div class="content__reference">
        <p>© 2021 Bản quyền thuộc về Trường Đại học FPT.</p>
      </div>
    </div>
  );
}

export default IntroductionPage;

import Header from "@/app/shared/components/layout/header";
import Floating from "@/app/shared/components/layout/floating";
import BottomNav from "@/app/shared/components/layout/bottomNav";

const CompanyPage = () => {
  return (
    <>
      <div className="sticky_menu">
        <Header title="회사소개" isBack />
      </div>
      
      <div id="contents" tabIndex={-1}>
        <Floating bottom={80} />
        <BottomNav />

        <section className="company_tit_area bg01">
          <h2>ART GUIDE RUN</h2>
          <p>
            소리로는 시작하는 예술가들의 <br />
            창작활동을 실현시킵니다.
          </p>
        </section>

        <div className="inner">
          <div className="company_text_area">
            <p>
              <strong>
                소리로는 소리로 표현하고 소리로 소통하고 소리로 세상을
                바꾼다는 의미를 지니고 있습니다.
              </strong>
            </p>
            <span>
              일상에서 아주 평범한 사람들과 함께 지역과 일상, 이야기가 담긴
              예술을 만들며 삶의 반경에서 예술을 바라봅니다.
            </span>
            <span>
              소리로는 장애 음악가와 청년 음악가, 경력단절 음악가들에 주목하며
              그들의 예술활동이 세상에 사회참여적으로 이바지할수 있는 토대를
              만들기 위해 노력합니다.
            </span>
          </div>
          <div className="company_text_area">
            <h3>MISSION</h3>
            <ul>
              <li>예술가들의 창작을 실현</li>
              <li>시작하는 예술가들의 자립 발판</li>
              <li>컨텐츠를 제작하고 유통</li>
            </ul>
          </div>
          <div className="company_text_area">
            <h3>VISION</h3>
            <ul>
              <li>소외계층 예술인이 가장 함께 일하고 싶은 회사</li>
              <li>소외계층 예술인과 가장 많이 협업하는 회사</li>
              <li>소외계층 예술인의 컨텐츠를 가장 많이 보유한 회사</li>
            </ul>
          </div>
          <div className="company_text_area">
            <h3>VALUES</h3>
            <div className="text_area">
              <p><strong>나눔 + 진정성 + 즐거움</strong></p>
            </div>
            <ul>
              <li>
                나눔과 진정성, 즐거움이 담긴 모두가 즐길 수 있는 예술 콘텐츠
                제작
              </li>
              <li>좋아하는 일은 밤새 수행</li>
              <li>밤새 일한 만큼 충분한 쉼을 가짐</li>
              <li>
                자신없는 일을 하기보다, 잘할수 있는 일을 최선을 다해 수행
              </li>
            </ul>
          </div>
        </div>

        <section className="pt_40 pb_150">
          <div className="inner">
            <p className="company_desc pb_24">
              <strong>
                장애예술인들이 마음껏 달리는 그날까지 <br />
                빠르게, 잠깐이 아니라 바르게, 끝까지 달립니다
              </strong>
            </p>

            <div className="agr_banner_wrap">
              <h2>
                1:1 맞춤 컨설팅 플랫폼 <br />
                아트가이드런
              </h2>
              <div className="text_area">
                <p>
                  <b>83.5%</b>
                  고객 성공 퍼센트
                </p>
                <p>
                  <b>1000명</b>
                  참여 아티스트 수
                </p>
                <p>
                  <b>254억원</b>
                  참여 사업 금액
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CompanyPage;

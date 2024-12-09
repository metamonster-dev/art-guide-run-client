import PageWrap from "@/app/shared/components/layout/pageWrap";
import Header from "@/app/shared/components/layout/header";
import Floating from "@/app/shared/components/layout/floating";
import BottomNav from "@/app/shared/components/layout/bottomNav";

const FaqPage = () => {
  return (
    <PageWrap
      sticky={<Header title="자주하는 질문" isBack />}
    >
      <Floating bottom={80} />
      <BottomNav />

      <div className="pb_150 border_top_8">
        {/* 데이터 없을 시, */}
        {/* <div className="no_data_area pt_40">
          <i aria-hidden="true"></i>
          <span>게시물이 없습니다.</span>
        </div> */}
        <div className="list_toggle_area">
          <ul>
            <li className="default_close">
              <button type="button" className="tg_tit">
                <span className="tit">
                  자주하는 질문 제목이 노출되는 영역입니다.
                </span>
                <span className="date">2024.10.08</span>
              </button>
              <div className="tg_cont">
                <p>
                  내용이 노출되는 영역입니다. <br />
                  별 하나에 추억과 별 하나에 사랑과 별 하나에 쓸쓸함과 별
                  하나에 동경과 별 하나에 시와 별 하나에 어머니, 어머니,
                  어머님, 나는 별 하나에 아름다운 말 한 마디씩 불러 봅니다.
                  나는 아무 걱정도 없이 가을 속의 별을 다 헬 듯합니다.
                </p>
              </div>
            </li>
            <li className="default_close">
              <button type="button" className="tg_tit">
                <span className="tit">
                  <b>[필독]</b> 공지사항 제목이 노출되는 영역입니다.
                </span>
                <span className="date">2024.10.08</span>
              </button>
              <div className="tg_cont">
                <p>
                  내용이 노출되는 영역입니다. 별 하나에 추억과 별 하나에
                  사랑과 별 하나에 쓸쓸함과 별 하나에 동경과 별 하나에 시와
                  별 하나에 어머니, 어머니, 어머님, 나는 별 하나에 아름다운
                  말 한 마디씩 불러 봅니다. 나는 아무 걱정도 없이 가을 속의
                  별을 다 헬 듯합니다.
                </p>
              </div>
            </li>
            <li className="default_close">
              <button type="button" className="tg_tit">
                <span className="tit">
                  공지사항 제목이 노출되는 영역입니다.
                </span>
                <span className="date">2024.10.08</span>
              </button>
              <div className="tg_cont">
                <p>
                  내용이 노출되는 영역입니다. 별 하나에 추억과 별 하나에
                  사랑과 별 하나에 쓸쓸함과 별 하나에 동경과 별 하나에 시와
                  별 하나에 어머니, 어머니, 어머님, 나는 별 하나에 아름다운
                  말 한 마디씩 불러 봅니다. 나는 아무 걱정도 없이 가을 속의
                  별을 다 헬 듯합니다.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="inner">
          <button
            type="button"
            className="btn btn_style03 btn_size_40 w_full mt_40"
          >
            더보기
            <i className="arrow bottom" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </PageWrap>
  );
};

export default FaqPage;

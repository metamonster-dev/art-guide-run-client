import Image from "next/image";
import PageWrap from "@/app/shared/components/layout/pageWrap";
import Header from "@/app/shared/components/layout/header";
import Floating from "@/app/shared/components/layout/floating";

const FindIdPage = () => {
  return (
    <PageWrap
      sticky={<Header title="이메일 아이디 찾기" isBack />}
    >
      <Floating />
      
      <div className="inner">
        <div className="find_info_area">
          <Image
            src="/images/icon_find_id.svg"
            alt="이메일 아이디 찾기 아이콘"
            aria-hidden="true"
            width={64}
            height={64}
          />
          <p>
            가입 시 인증한 휴대폰 번호를 입력하시면 <br />
            이메일 아이디를 알려드립니다.
          </p>
        </div>
        <div className="pb_80">
          <form id="findIdForm">
            <div className="input_list_area gap_24">
              <div className="label_input_area">
                <label htmlFor="phone" className="label">휴대폰 번호</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="input"
                  maxLength={11}
                  placeholder="- 없이 숫자만 입력해 주세요"
                />
              </div>

              <button type="submit" className="btn btn_style01 btn_size_52">
                이메일 아이디 찾기
              </button>
            </div>
          </form>
        </div>
      </div>
    </PageWrap>
  );
};

export default FindIdPage;

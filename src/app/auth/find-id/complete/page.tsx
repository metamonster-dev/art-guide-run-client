import Link from "next/link";
import Image from "next/image";
import PageWrap from "@/app/shared/components/layout/pageWrap";
import Header from "@/app/shared/components/layout/header";
import Floating from "@/app/shared/components/layout/floating";

const FindIdCompletePage = () => {
  return (
    <PageWrap
      sticky={<Header title="이메일 아이디 찾기" isBack />}
    >
      <Floating />

      <div className="inner">
        <div className="find_info_area">
          <Image
            src="/images/icon_complete.svg"
            alt="이메일 아이디 찾기 결과 아이콘"
            aria-hidden="true"
            width={64}
            height={64}
          />
          <p>
            가입하신 아이디(이메일) <br />
            정보를 알려드립니다.
          </p>
          <div className="email_info">
            <span>w***2@kakao.com</span>
          </div>
        </div>
        <div className="pb_80">
          <div className="input_list_area gap_12">
            <Link
              href="/auth/find-pw"
              className="btn btn_style02 btn_size_52"
            >
              비밀번호 찾기
            </Link>
            <Link
              href="/auth/login"
              className="btn btn_style01 btn_size_52"
            >
              로그인
            </Link>
          </div>
        </div>
      </div>
    </PageWrap>
  );
};

export default FindIdCompletePage;

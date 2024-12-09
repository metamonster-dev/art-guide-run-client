import Link from "next/link";
import Image from "next/image";
import PageWrap from "@/app/shared/components/layout/pageWrap";
import Header from "@/app/shared/components/layout/header";
import Floating from "@/app/shared/components/layout/floating";

const FindPwPage = () => {
  return (
    <PageWrap
      sticky={<Header title="비밀번호 찾기" isBack />}
    >
      <Floating />

      <div className="inner">
        <div className="find_info_area">
          <Image
            src="/images/icon_find_pw.svg"
            alt="비밀번호 찾기 아이콘"
            aria-hidden="true"
            width={64}
            height={64}
          />
          <p>
            본인확인이 필요합니다. <br />
            아래 방식으로 진행해 주세요.
          </p>
        </div>
        <div className="pb_80">
          <Link
            href="/auth/find-pw/email"
            className="identity_btn type01"
          >
            <i className="icon03" aria-hidden="true"></i>
            <span>
              <b>이메일 인증</b>
              가입 시 입력한 이메일 아이디로 인증
            </span>
          </Link>
        </div>
      </div>
    </PageWrap>
  );
};

export default FindPwPage;

import Link from "next/link";
import Image from "next/image";
import PageWrap from "@/app/shared/components/layout/pageWrap";
import Header from "@/app/shared/components/layout/header";
import Floating from "@/app/shared/components/layout/floating";

const JoinCompletePage = () => {
  return (
    <PageWrap
      sticky={<Header title="가입완료" isBack />}
    >
      <Floating />

      <section className="join_complete_area">
        <div className="inner">
          <Image
            src="/images/icon_complete.svg"
            alt="가입완료 페이지 아이콘"
            aria-hidden="true"
            width={64}
            height={64}
          />
          <h2>김아트님, 환영합니다!</h2>
          <p>아트가이드런에서 예술인 생활을 즐겨보아요!</p>
          <Link
            href="/"
            className="btn btn_style01 btn_size_52"
          >
            홈으로 가기
          </Link>
        </div>
      </section>
    </PageWrap>
  );
};

export default JoinCompletePage;

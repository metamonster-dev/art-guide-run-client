"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/app/shared/components/layout/header";
import Floating from "@/app/shared/components/layout/floating";
import IsJoinModal from "@/app/auth/_components/isJoinModal";

const FindIdPage = () => {
  const [isJoinOpen, setIsJoinOpen] = useState(false);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsJoinOpen(true);
  };

  return (
    <>
      <div className="sticky_menu">
        <Header title="로그인" isBack />
      </div>
      
      <div id="contents" tabIndex={-1}>
        <Floating />

        <div className="pt_32 pb_80">
          <div className="inner">
            <form id="loginForm" onSubmit={onFormSubmit}>
              <div className="input_list_area gap_24">
                <div className="label_input_area">
                  <label htmlFor="email" className="label">이메일 아이디</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="input"
                    placeholder="이메일을 입력해주세요"
                  />
                  <span className="error_msg d_none">오류 메시지</span>
                </div>

                <div className="label_input_area">
                  <label htmlFor="password" className="label">비밀번호</label>
                  <div className="input_pw_area">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="input"
                      placeholder="비밀번호를 입력해주세요"
                    />
                    <button type="button">
                      <span>비밀번호 보기</span>
                    </button>
                  </div>
                  <span className="error_msg d_none">오류 메시지</span>
                </div>

                <button
                  type="submit"
                  className="btn btn_style01 btn_size_52"
                  // disabled
                >
                  로그인
                </button>
              </div>
            </form>

            <div className="login_btns_area">
              <Link href="/auth/join">이메일 가입</Link>
              <i aria-hidden="true"></i>
              <Link href="/auth/find-id">아이디 찾기</Link>
              <i aria-hidden="true"></i>
              <Link href="/auth/find-pw">비밀번호 찾기</Link>
            </div>
            <div className="login_sns_area">
              <div className="tit">
                <p>소셜미디어로 시작</p>
              </div>
              <div className="btns">
                <button type="button" aria-label="구글 로그인">
                  <Image
                    src="/images/icon_google.png"
                    alt="구글 로그인"
                    aria-hidden="true"
                    width={48}
                    height={48}
                  />
                </button>
                <button type="button" aria-label="카카오 로그인">
                  <Image
                    src="/images/icon_kakao.png"
                    alt="카카오 로그인"
                    aria-hidden="true"
                    width={48}
                    height={48}
                  />
                </button>
                <button type="button" aria-label="네이버 로그인">
                  <Image
                    src="/images/icon_naver.png"
                    alt="네이버 로그인"
                    aria-hidden="true"
                    width={48}
                    height={48}
                  />
                </button>
                <button type="button" aria-label="애플 로그인">
                  <Image
                    src="/images/icon_apple.png"
                    alt="애플 로그인"
                    aria-hidden="true"
                    width={48}
                    height={48}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <IsJoinModal open={isJoinOpen} onClose={() => setIsJoinOpen(false)} />
    </>
  );
};

export default FindIdPage;

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/app/shared/components/layout/header";
import Floating from "@/app/shared/components/layout/floating";
import Modal from "@/app/shared/components/modal/modal";

const FindIdPage = () => {
  const [msgOpen, setMsgOpen] = useState(false);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMsgOpen(true);
  };

  return (
    <>
      <div className="sticky_menu">
        <Header title="비밀번호 재설정" isBack />
      </div>
      
      <div id="contents" tabIndex={-1}>
        <Floating />

        <div className="inner">
          <div className="find_info_area">
            <Image
              src="/images/icon_complete.svg"
              alt="본인인증 완료 아이콘"
              aria-hidden="true"
              width={64}
              height={64}
            />
            <p>
              본인인증이 완료되었습니다. <br />
              새로운 비밀번호를 입력해 주세요.
            </p>
          </div>
          <div className="pb_80">
            <form id="resetPwForm" onSubmit={onFormSubmit}>
              <div className="input_list_area gap_24">
                <div className="label_input_area">
                  <label htmlFor="password" className="label">새 비밀번호 입력</label>
                  <div className="input_pw_area">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="input"
                      placeholder="8-16자리 영문,숫자,특수문자 조합"
                    />
                    <button type="button">
                      <span>비밀번호 보기</span>
                    </button>
                  </div>
                </div>
                <div className="label_input_area">
                  <label htmlFor="password_confirm" className="label">
                    새 비밀번호 확인
                  </label>
                  <div className="input_pw_area">
                    <input
                      type="password"
                      name="password_confirm"
                      id="password_confirm"
                      className="input"
                      placeholder="비밀번호를 한번 더 입력해주세요"
                    />
                    <button type="button">
                      <span>비밀번호 보기</span>
                    </button>
                  </div>
                </div>
                <button type="submit" className="btn btn_style01 btn_size_52">
                  확인
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <Modal type="msg" open={msgOpen}>
        <span>비밀번호가 <br />변경되었습니다.</span>
        <div className="btn_area">
          <Link
            href="/auth/login"
            className="btn btn_style01 btn_size_52"
          >
            확인
          </Link>
        </div>
      </Modal>
    </>
  );
};

export default FindIdPage;

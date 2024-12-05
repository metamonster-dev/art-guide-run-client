"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Header from "@/app/shared/components/layout/header";
import Floating from "@/app/shared/components/layout/floating";
import Modal from "@/app/shared/components/modal/modal";
import EmailForm from "@/app/auth/find-pw/email/_components/emailForm";
import VerifyForm from "@/app/auth/find-pw/email/_components/verifyForm";

const FindPwEmailPage = () => {
  const verifyInputRef = useRef<HTMLInputElement>(null);
  const [verifyFormShow, setVerifyFormShow] = useState(false);
  const [msgOpen, setMsgOpen] = useState(false);

  // email form submit
  const onEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setVerifyFormShow(true);
    setMsgOpen(true);
  }

  // verify form submit
  const onFindPwSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  // modal close click
  const onMsgClose = () => {
    setMsgOpen(false);
    verifyInputRef.current?.focus();
  }

  return (
    <>
      <div className="sticky_menu">
        <Header title="비밀번호 찾기" isBack />
      </div>
      
      <div id="contents">
        <Floating />

        <div className="inner">
          <div className="find_info_area">
            <Image
              src="/images/icon_email.svg"
              alt="비밀번호 찾기 이메일 아이콘"
              aria-hidden="true"
              width={64}
              height={64}
            />
            <p>
              가입 시 입력한 이메일 아이디로 <br />
              인증번호를 보내드립니다.
            </p>
          </div>
          <div className="pb_80">
            <EmailForm onSubmit={onEmailSubmit} />
            {verifyFormShow && (
              <VerifyForm onSubmit={onFindPwSubmit} inputRef={verifyInputRef} />
            )}
          </div>
        </div>
      </div>

      {/* MODAL */}
      <Modal type="msg" open={msgOpen}>
        <p>인증번호가 전송되었습니다.</p>
        <span>5분 이내에 입력해 주세요.</span>
        <div className="btn_area">
          <button
            type="button"
            className="btn btn_style01 btn_size_52"
            onClick={onMsgClose}
          >
            확인
          </button>
        </div>
      </Modal>
    </>
  );
};

export default FindPwEmailPage;

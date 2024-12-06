"use client";

import { useState } from "react";
import Header from "@/app/shared/components/layout/header";
import Floating from "@/app/shared/components/layout/floating";
import CustomSelect from "@/app/shared/components/form/customSelect";
import { SelectOption } from "@/app/shared/types/select.type";
import { SPECIALIZATION } from "@/utils/specialization";

const JoinPage = () => {
  const [options, setOptions] = useState<SelectOption[]>([{
    id: "세부 전문분야를 선택해 주세요", 
    text: "세부 전문분야를 선택해 주세요",
  }]);

  const onSpecializationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const valueDetails = SPECIALIZATION.find((item) => value in item)?.[value] || [];
    setOptions(valueDetails);
  };

  return (
    <>
      <div className="sticky_menu">
        <Header title="회원가입" isBack />
      </div>
      
      <div id="contents" tabIndex={-1}>
        <Floating />

        <div className="pt_32 pb_80">
          <div className="inner">
            <form id="joinForm">
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
                </div>

                <div className="label_input_area">
                  <label htmlFor="password" className="label">비밀번호</label>
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
                    비밀번호 확인
                  </label>
                  <div className="input_pw_area">
                    <input
                      type="password"
                      name="password_confirm"
                      id="password_confirm"
                      className="input"
                      placeholder="비밀번호를 한번 더 입력해 주세요"
                    />
                    <button type="button">
                      <span>비밀번호 보기</span>
                    </button>
                  </div>
                </div>

                {/* 본인인증 정보 */}
                <div className="label_input_area">
                  <span className="label">본인인증</span>
                  {/* 본인인증 진행 전, */}
                  <button type="button" className="identity_btn type01">
                    <i className="icon01" aria-hidden="true"></i>
                    <span>
                      <b>본인인증</b>
                      본인 휴대폰 번호로 인증
                    </span>
                  </button>
                  {/* 본인인증 완료 시, */}
                  {/* <button type="button" className="identity_btn type02">
                    <i className="icon02" aria-hidden="true"></i>
                    <span>본인인증이 완료되었습니다.</span>
                  </button> */}
                </div>

                <div className="label_input_area">
                  <label htmlFor="name" className="label">이름</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="input"
                    value="김아트"
                    disabled
                  />
                </div>

                <div className="label_input_area">
                  <label htmlFor="phone" className="label">연락처</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="input"
                    value="010-1234-5678"
                    disabled
                  />
                </div>

                <div className="label_input_area">
                  <label htmlFor="birth" className="label">생년월일</label>
                  <input
                    type="text"
                    name="birth"
                    id="birth"
                    className="input"
                    value="1985-02-06"
                    disabled
                  />
                </div>

                <div className="label_input_area">
                  <span className="label">성별</span>
                  <div
                    className="select_custom"
                    role="combobox"
                    aria-expanded="false"
                    aria-haspopup="listbox"
                    aria-labelledby="select_btn01"
                  >
                    <button
                      type="button"
                      id="select_btn01"
                      aria-controls="select_option01"
                      disabled
                    >
                      성별
                    </button>
                    <ul id="select_option01" role="listbox">
                      <li role="option" data-value="1" tabIndex={0}>여성</li>
                      <li role="option" data-value="2" tabIndex={0}>남성</li>
                    </ul>
                  </div>
                </div>
                {/* // 본인인증 정보 */}

                <div className="label_input_area">
                  <label htmlFor="affiliation" className="label">소속</label>
                  <input
                    type="text"
                    name="affiliation"
                    id="affiliation"
                    className="input"
                    placeholder="소속을 입력해 주세요"
                  />
                </div>

                <fieldset>
                  <legend className="label mb_8">전문분야 선택</legend>
                  <div className="label_input_area">
                    <div className="chk_list_area grid02">
                      {SPECIALIZATION.map((item, index) => {
                        const key = Object.keys(item)[0] ?? "";
                        return (
                          <div key={index} className="chk_custom">
                            <input
                              type="radio"
                              name="specialty"
                              id={`specialty_${index}`}
                              value={key}
                              onChange={onSpecializationChange}
                            />
                            <label htmlFor={`specialty_${index}`}>{key}</label>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </fieldset>

                <div className="label_input_area">
                  <span className="label">세부 전문분야 선택</span>
                  <CustomSelect 
                    type="top" 
                    id="specialty_detail" 
                    placeholder="세부 전문분야를 선택해 주세요" 
                    options={options} 
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn_style01 btn_size_52 w_full"
                >
                  다음
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinPage;

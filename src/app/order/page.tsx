"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import PageWrap from "@/app/shared/components/layout/pageWrap";
import Header from "@/app/shared/components/layout/header";
import Floating from "@/app/shared/components/layout/floating";
import CustomSelect from "@/app/shared/components/form/customSelect";
import UseModal from "@/app/shared/components/modal/useModal";
import FinancialModal from "@/app/shared/components/modal/financialModal";

const OrderPage = () => {
  const useBtnRef = useRef<HTMLButtonElement>(null);
  const financialBtnRef = useRef<HTMLButtonElement>(null);
  const [useOpen, setUseOpen] = useState(false);
  const [financialOpen, setFinancialOpen] = useState(false);

  const onUseClose = () => {
    setUseOpen(false);
    useBtnRef.current?.focus();
  };
  const onFinancialClose = () => {
    setFinancialOpen(false);
    financialBtnRef.current?.focus();
  };

  return (
    <PageWrap className="bg_gray_f8" sticky={<Header title="주문/결제" isBack isSearch />}>
      <Floating />

      {/* 상품 정보 */}
      <div className="toggle_area active">
        <button type="button" className="tg_tit">
          상품 정보
        </button>
        <div className="tg_cont">
          <div className="item_area">
            <div className="img_area rect01">
              <Image
                src="/images/product/product_img01.jpg"
                alt="예술기획분야 취창업 전문 컨설팅 이미지"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="text_area">
              <span className="cate">1:1 컨설팅</span>
              <p className="tit">예술기획분야 취창업 전문 컨설팅</p>
              <div className="price_text">
                <span className="percent">10%</span>
                <span className="price">40,500원</span>
              </div>
            </div>
          </div>
          <div className="tit_desc_area text_style02 mt_16">
            <p className="tit">결제 금액</p>
            <span className="desc">30,000원</span>
          </div>
        </div>
      </div>

      {/* 이용 정보 */}
      <div className="toggle_area active">
        <button type="button" className="tg_tit">
          이용 정보
        </button>
        <div className="tg_cont">
          <div className="order_use_text">
            <p className="desc">
              결제완료 시 주문확인 후 관리자가 개별 연락드립니다.
              <br />
              (컨설팅 및 클래스 일정 협의 / 상품 주문확인 등)
            </p>
            <p className="note">
              ※ 환불정책은 아래
              <span
                role="button"
                tabIndex={0}
                aria-label="결제 전 주의사항 자세한 내용 보기"
                // onClick="onScrollMove('caution')"
                // onkeypress="if (event.key === 'Enter') onScrollMove('caution');"
              >
                결제 전 주의사항
              </span>
              확인해주세요.
            </p>
          </div>
        </div>
      </div>

      {/* 주문자 정보 */}
      <div className="toggle_area active">
        <button type="button" className="tg_tit">
          주문자 정보
        </button>
        <div className="tg_cont">
          <div className="list_area list_style05">
            <dl>
              <dt>이름</dt>
              <dd>김아트</dd>

              <dt>연락처</dt>
              <dd>010-1234-1234</dd>

              <dt>이메일</dt>
              <dd>art@gmail.com</dd>

              <dt>생년월일</dt>
              <dd>1992.06.05</dd>

              <dt>성별</dt>
              <dd>여성</dd>
            </dl>
          </div>
        </div>
      </div>

      {/* 배송지 정보 */}
      <div className="toggle_area active">
        <button type="button" className="tg_tit">
          배송지 정보
        </button>
        <div className="tg_cont">
          <div className="input_list_area gap_24">
            <div className="label_input_area">
              <label htmlFor="name" className="label required">
                이름
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="input"
                placeholder="이름을 입력해주세요"
              />
            </div>

            <div className="label_input_area">
              <label htmlFor="phone" className="label required">
                연락처
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="input"
                placeholder="‘-’없이 입력해 주세요."
              />
            </div>

            <div className="label_input_area">
              <span className="label required">주소</span>

              <div className="input_btn_area">
                <label htmlFor="zone_code" className="hidden_text">
                  우편번호
                </label>
                <input
                  type="text"
                  name="zone_code"
                  id="zone_code"
                  className="input"
                  placeholder="우편번호"
                  disabled
                />
                <button type="button" className="btn btn_style02 btn_size_52">
                  주소 검색
                </button>
              </div>

              <label htmlFor="address" className="hidden_text">
                주소
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="input"
                placeholder="주소"
                disabled
              />

              <label htmlFor="address_detail" className="hidden_text">
                상세 주소
              </label>
              <input
                type="text"
                name="address_detail"
                id="address_detail"
                className="input"
                placeholder="상세 주소를 입력해 주세요"
              />
            </div>

            <div className="label_input_area">
              <span className="label">배송메모</span>
              <CustomSelect
                id="memo"
                placeholder="선택해주세요."
                options={[
                  { id: "1", text: "배송 전 연락바랍니다." },
                  { id: "2", text: "부재 시 경비실(관리실)에 맡겨주세요." },
                  { id: "3", text: "부재 시 문 앞에 놓아주세요." },
                  { id: "etc", text: "직접 입력" },
                ]}
              />
              <div className="d_none">
                <label htmlFor="memo_etc" className="hidden_text">
                  메모 직접 입력
                </label>
                <input
                  type="text"
                  name="memo_etc"
                  id="memo_etc"
                  className="input"
                  placeholder="메모 직접 입력"
                />
              </div>
            </div>
          </div>
          <span className="input_desc_text">* 기본 배송지로 배송지관리에 등록됩니다.</span>
        </div>
      </div>
      {/* 배송지 정보 등록 후, */}
      {/* <div className="toggle_area active">
        <div className="tg_tit">
          <p className="tit">배송지 정보</p>
          <button type="button">변경</button>
        </div>
        <div className="tg_cont">
          <div className="item_area02 border_bottom mb_24 pb_24">
            <div className="tit_area">
              <p className="tit">김아트(회사)</p>
              <span className="tag">기본배송지</span>
            </div>
            <div className="text_area">
              <p className="addr">
                [12345] 서울 구로구 디지털로26길 43 대륭포스트타워 8차 L동 805호
              </p>
              <span className="phone">010-1234-1234</span>
            </div>
          </div>
          <div className="label_input_area">
            <span className="label">배송메모</span>
            <CustomSelect
              id="memo"
              placeholder="선택해주세요."
              options={[
                { id: "1", text: "배송 전 연락바랍니다." },
                { id: "2", text: "부재 시 경비실(관리실)에 맡겨주세요." },
                { id: "3", text: "부재 시 문 앞에 놓아주세요." },
                { id: "etc", text: "직접 입력" },
              ]}
            />
            <div className="d_none">
              <label htmlFor="memo_etc" className="hidden_text">
                메모 직접 입력
              </label>
              <input
                type="text"
                name="memo_etc"
                id="memo_etc"
                className="input"
                placeholder="메모 직접 입력"
              />
            </div>
          </div>
        </div>
      </div> */}

      {/* 결제 수단 */}
      <div className="toggle_area active">
        <button type="button" className="tg_tit">
          결제 수단
        </button>
        <div className="tg_cont">
          <fieldset>
            <legend className="hidden_text">결제 수단</legend>
            <div className="label_input_area">
              <div className="chk_list_area grid02">
                <div className="chk_custom h_80">
                  <input type="radio" name="payment_method" id="payment_method01" value="1" />
                  <label htmlFor="payment_method01">신용카드</label>
                </div>
                <div className="chk_custom h_80">
                  <input type="radio" name="payment_method" id="payment_method02" value="2" />
                  <label htmlFor="payment_method02">무통장 입금</label>
                </div>
                {/* 네이버페이 히든 처리 요청 */}
                {/* <div className="chk_custom h_80">
                <input type="radio" name="payment_method" id="payment_method03" value="3" />
                <label htmlFor="payment_method03" aria-label="네이버페이">
                  <img src="/images/icon_naver_pay.png" alt="네이버페이" aria-hidden="true" />
                </label>
              </div> */}
                <div className="chk_custom h_80">
                  <input type="radio" name="payment_method" id="payment_method04" value="4" />
                  <label htmlFor="payment_method04" aria-label="카카오페이">
                    <img src="/images/icon_kakao_pay.png" alt="카카오페이" aria-hidden="true" />
                  </label>
                </div>
                <div className="chk_custom h_80">
                  <input type="radio" name="payment_method" id="payment_method05" value="5" />
                  <label htmlFor="payment_method05" aria-label="토스페이">
                    <img src="/images/icon_toss_pay.png" alt="토스페이" aria-hidden="true" />
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>

      {/* 결제 정보 */}
      <div className="toggle_area active">
        <button type="button" className="tg_tit" id="caution">
          결제 정보
        </button>
        <div className="tg_cont">
          <div className="tit_desc_area text_style01">
            <p className="tit">총 결제금액</p>
            <span className="desc">30,000원</span>
          </div>
          <div className="tit_desc_area text_style03 mt_24">
            <p className="tit">최종 결제 금액</p>
            <span className="desc">30,000원</span>
          </div>
          <div className="order_caution_text">
            <p className="tit">결제 전 주의사항</p>
            <span className="text color_red">
              취소 시점에 따라 취소 수수료가 발생할 수 있습니다. <br />
              컨설팅 일정 확정 이후에는 취소 및 부분 환불이 불가합니다.
            </span>
            <span className="text">
              1. 환불 신청 가능 기간 <br />
              - 구매 후 3일~7일 이내(일정 미확정) : 구매 후 일정 확정 전 까지는 전액 환불이
              가능합니다. <br />- 일정 확정 후 시작 전(부분 환불 가능) : 컨설팅 및 강의 등 구매 항목
              시작일이 확정된 이후로 환불을 요청할 경우, 일정에 따라 부분 환불이 적용됩니다.
            </span>
            <span className="text">
              2. 부분 환불 기준(일정 기준에 따른 환불 규정) <br />
              - 일정 확정 전: 컨설팅 및 강의 등 구매 항목 시작일이 확정 및 진행되기 전까지 환불 요청
              시, 전액 환불이 가능합니다. <br />
              - 일정 확정 후, 컨설팅 및 강의 시작 3일 전까지 : 일정이 확정된 후, 시작일 3일 전까지는
              50% 환불이 가능합니다. <br />- 시작 2일 이내 또는 진행 중 : 컨설팅 및 강의 등 구매
              항목 시작일 이틀 전이거나 이미 진행 중인 경우, 환불이 불가합니다. (서비스 준비 및
              제공이 시작된 이후에는 환불이 어렵습니다.)
            </span>
            <span className="text">
              3. 기타 환불 조건 <br />- 컨설팅, 강의 자료 제공 후 환불 불가 : 기타 컨설팅 및 강의 등
              구매 항목
            </span>
          </div>
        </div>
      </div>

      {/* 약관 */}
      <div className="order_agree_btn_area">
        <div className="list_area list_style06 border_bottom mb_16 pb_16">
          <ul>
            <li>
              <span>전자금융거래 이용약관</span>
              <button
                type="button"
                id="financial_btn"
                ref={financialBtnRef}
                onClick={() => setFinancialOpen(true)}
              >
                보기
              </button>
            </li>
            <li>
              <span>개인정보의 수집 및 이용동의</span>
              <button type="button" id="use_btn" ref={useBtnRef} onClick={() => setUseOpen(true)}>
                보기
              </button>
            </li>
          </ul>
        </div>
        <div className="chk_custom03">
          <input type="checkbox" name="agree" id="agree" value="1" />
          <label htmlFor="agree">
            <b>결제 내역 확인 및 모든 약관에 동의합니다.</b>
          </label>
        </div>
        <button type="button" className="btn btn_style01 btn_size_52 mt_40 w_full">
          30,000원 결제하기
        </button>
      </div>

      {/* MODAL */}
      <UseModal open={useOpen} onClose={onUseClose} />
      <FinancialModal open={financialOpen} onClose={onFinancialClose} />
    </PageWrap>
  );
};

export default OrderPage;

"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PageWrap from "@/app/shared/components/layout/pageWrap";
import Header from "@/app/shared/components/layout/header";
import Floating from "@/app/shared/components/layout/floating";
import ProductConsultModal from "@/app/order/complete/_components/consultModal";

const OrderPage = () => {
  const consultBtnRef = useRef<HTMLButtonElement>(null);
  const [consultOpen, setConsultOpen] = useState(false);

  const onConsultClose = () => {
    setConsultOpen(false);
    consultBtnRef.current?.focus();
  };

  return (
    <PageWrap className="bg_gray_f8" sticky={<Header title="주문상세" isBack isSearch />}>
      <Floating />

      {/* 주문 정보 */}
      <div className="order_number_area">
        <p className="num">
          주문번호 <b>20240912345</b>
        </p>
        <span className="date">2024.09.30</span>
      </div>

      {/* 상품 정보 */}
      <div className="toggle_area active">
        <div className="tg_tit">
          <p className="tit">가이드런</p>
          <button
            type="button"
            id="consult_btn"
            ref={consultBtnRef}
            onClick={() => setConsultOpen(true)}
          >
            상품 문의
          </button>
        </div>
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
            </div>
          </div>
          <span className="tag_text tag_style01 mt_16">결제완료</span>
          {/* <span className="tag_text tag_style02 mt_16">주문취소</span> */}
          {/* <span className="tag_text tag_style03 mt_16">진행완료</span> */}
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
          <div className="list_area list_style05">
            <dl>
              <dt>이름</dt>
              <dd>김아트</dd>

              <dt>연락처</dt>
              <dd>010-1234-1234</dd>

              <dt>주소</dt>
              <dd>
                [12345] 서울특별시 구로구 디지털로 32길 30 구로동 코오롱 디지털타워빌란트 1510호
              </dd>

              <dt>배송메모</dt>
              <dd>부재 시 문앞에 놓아주세요.</dd>
            </dl>
          </div>
        </div>
      </div>

      {/* 이용 정보 */}
      <div className="toggle_area active">
        <button type="button" className="tg_tit">
          이용 정보
        </button>
        <div className="tg_cont">
          <div className="list_area list_style05">
            <dl>
              <dt>이용안내</dt>
              <dd>결제 이후 신청자 대상으로 개별 연락으로 안내드립니다. (컨설팅 일정 협의)</dd>
            </dl>
          </div>
        </div>
      </div>

      {/* 결제 정보 */}
      <div className="toggle_area active mb_0">
        <button type="button" className="tg_tit">
          결제 정보
        </button>
        <div className="tg_cont">
          <div className="list_area list_style05">
            <dl>
              <dt>결제 수단</dt>
              <dd>간편결제(토스)</dd>

              <dt>총 결제 금액</dt>
              <dd>30,000</dd>

              <dt>거래 일시</dt>
              <dd>24/09/30 10:08</dd>
            </dl>
          </div>

          <Link
            href="/mypage/history_guide_run"
            className="btn btn_style02 btn_size_52 w_full mt_40 mb_20"
          >
            목록으로
          </Link>
        </div>
      </div>

      {/* MODAL */}
      <ProductConsultModal open={consultOpen} onClose={onConsultClose} />
    </PageWrap>
  );
};

export default OrderPage;

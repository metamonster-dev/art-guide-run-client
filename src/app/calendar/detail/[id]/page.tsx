"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/app/shared/components/layout/header";
import Floating from "@/app/shared/components/layout/floating";

const CalendarDetailPage = () => {
  const [tabActive, setTabActive] = useState("0");

  return (
    <>
      <div className="sticky_menu">
        <Header title="공모사업 상세" isBack />
      </div>
      
      <div id="contents" tabIndex={-1}>
        <Floating bottom={86} />

        <section className="item_area03">
          <div className="inner">
            <div className="text_area">
              <div className="tags">
                <span className="tag_text02 tag_style01">지원공모사업</span>
              </div>
              <h2 className="tit">
                문화예술 지원사업 문화예술 지원사업 문화예술 지원사업
              </h2>
              <div className="desc">
                <p className="date">2024.08.20</p>
                <p className="view">조회수 333</p>
              </div>
            </div>
          </div>
        </section>

        <div className="pt_20 pb_150">
          <div className="inner">
            <div className="tit_desc_area02 text_style01">
              <p className="tit">진행일정</p>
              <span className="desc">2024.08.22 ~ 2024.08.30</span>
            </div>

            <div className="editor_area pt_20">
              <Image
                src="/images/product/work_img01.jpg"
                alt="에디터 등록 이미지"
                width={480}
                height={0}
                style={{
                  width: 'auto',
                  height: 'auto',
                }}
              />
              <br />
              내용이 노출되는 영역입니다. <br />
              별 하나에 추억과 별 하나에 사랑과 별 하나에 쓸쓸함과 별 하나에
              동경과 별 하나에 시와 별 하나에 어머니, 어머니, 어머님, 나는 별
              하나에 아름다운 말 한 마디씩 불러 봅니다. 나는 아무 걱정도 없이
              가을 속의 별을 다 헬 듯합니다.
            </div>
          </div>
        </div>

        <div className="btn_wrap btn_btm_fixed">
          <button type="button" className="btn btn_style02 btn_size_52">
            문의하기
          </button>
          <button type="button" className="btn btn_style01 btn_size_52">
            지원하기
          </button>
        </div>
      </div>
    </>
  );
};

export default CalendarDetailPage;

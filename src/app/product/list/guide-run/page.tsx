"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/app/shared/components/layout/header";
import Floating from "@/app/shared/components/layout/floating";
import BottomNav from "@/app/shared/components/layout/bottomNav";
import TabBtnSlider from "@/app/shared/components/slider/tabBtn";
import SortModal from '@/app/product/_components/sortModal';

const GuideRunListPage = () => {
  const sortBtnRef = useRef<HTMLButtonElement>(null);
  const [tabActive, setTabActive] = useState("0");
  const [sortOpen, setSortOpen] = useState(false);
  
  const onSortClose = () => {
    setSortOpen(false);
    sortBtnRef.current?.focus();
  };

  return (
    <>
      <div className="sticky_menu">
        <Header title="가이드런" isBack isSearch />
        <TabBtnSlider
          className="tab_style02"
          tabs={[
            { id: "0", text: "전체" },
            { id: "1", text: "1:1 컨설팅" },
            { id: "2", text: "클래스" },
            { id: "3", text: "포트폴리오 멘토링" },
            { id: "4", text: "공모사업 지원가이드" },
          ]}
          active={tabActive}
          setActive={setTabActive}
        />
      </div>
      
      <div id="contents" tabIndex={-1}>
        <Floating bottom={80} />
        <BottomNav />

        <div className="pt_24 pb_150 border_top_8">
          <div className="inner">
            <div className="list_tit_area">
              <p>총 <b>63</b>건</p>
              <button
                type="button"
                className="select_btn"
                id="sort_btn"
                ref={sortBtnRef}
                onClick={() => setSortOpen(true)}
              >
                인기순
              </button>
            </div>

            {/* 데이터 없을 시, */}
            {/* <div className="no_data_area pt_40">
              <i aria-hidden="true"></i>
              <span>상품이 없습니다.</span>
            </div> */}
            <div className="list_area list_style01 border_top mt_16 pt_24">
              <ul>
                <li>
                  <button type="button" className="heart_btn on">
                    <i aria-hidden="true"></i><span>관심 취소</span>
                  </button>
                  <Link href={`/product/detail/${1}`}>
                    <div className="img_area rect01">
                      <Image
                        src="/images/product/product_img02.jpg"
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
                  </Link>
                </li>
                <li>
                  <button type="button" className="heart_btn">
                    <i aria-hidden="true"></i><span>관심 등록</span>
                  </button>
                  <Link href={`/product/detail/${1}`}>
                    <div className="img_area rect01">
                      <Image
                        src="/images/product/product_img02.jpg"
                        alt="아트마켓 공예 클래스 이미지"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="text_area">
                      <span className="cate">클래스</span>
                      <p className="tit">아트마켓 공예 클래스</p>
                      <div className="price_text">
                        <span className="price">40,500원</span>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <button type="button" className="heart_btn">
                    <i aria-hidden="true"></i><span>관심 등록</span>
                  </button>
                  <Link href={`/product/detail/${1}`}>
                    <div className="img_area rect01">
                      <Image
                        src="/images/product/product_img01.jpg"
                        alt="아트가이드런이 추천하는 실무활용 가이드 이미지"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="text_area">
                      <span className="cate">공모사업 지원가이드</span>
                      <p className="tit">
                        아트가이드런이 추천하는 실무활용 가이드
                      </p>
                      <div className="price_text">
                        <span className="price">40,500원</span>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <button type="button" className="heart_btn">
                    <i aria-hidden="true"></i><span>관심 등록</span>
                  </button>
                  <Link href={`/product/detail/${1}`}>
                    <div className="img_area rect01">
                      <Image
                        src="/images/product/product_img01.jpg"
                        alt="아트가이드런이 추천하는 실무활용 가이드 이미지"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="text_area">
                      <span className="cate">공모사업 지원가이드</span>
                      <p className="tit">
                        아트가이드런이 추천하는 실무활용 가이드
                      </p>
                      <div className="price_text">
                        <span className="price">40,500원</span>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <button type="button" className="heart_btn">
                    <i aria-hidden="true"></i><span>관심 등록</span>
                  </button>
                  <Link href={`/product/detail/${1}`}>
                    <div className="img_area rect01">
                      <Image
                        src="/images/product/product_img02.jpg"
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
                  </Link>
                </li>
                <li>
                  <button type="button" className="heart_btn">
                    <i aria-hidden="true"></i><span>관심 등록</span>
                  </button>
                  <Link href={`/product/detail/${1}`}>
                    <div className="img_area rect01">
                      <Image
                        src="/images/product/product_img02.jpg"
                        alt="아트마켓 공예 클래스 이미지"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="text_area">
                      <span className="cate">클래스</span>
                      <p className="tit">아트마켓 공예 클래스</p>
                      <div className="price_text">
                        <span className="price">40,500원</span>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* MODAL */}
      <SortModal open={sortOpen} onClose={onSortClose} />
    </>
  );
};

export default GuideRunListPage;

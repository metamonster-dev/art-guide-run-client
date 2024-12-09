"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import PageWrap from "@/app/shared/components/layout/pageWrap";
import Header from "@/app/shared/components/layout/header";
import Floating from "@/app/shared/components/layout/floating";
import ProductImageSlider from "@/app/product/detail/[id]/_components/imageSlider";
import ProductTopInfo from "@/app/product/detail/[id]/_components/topInfo";
import ProductItemInfo from "@/app/product/detail/[id]/_components/itemInfo";

const ProductDetailPage = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [tabActive, setTabActive] = useState(0);

  const handleTabClick = (index: number) => {
    const offset = -109;

    const sectionEl = sectionRefs.current[index];
    if (sectionEl) {
      const sectionTop = sectionEl.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop + offset,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    // 탭
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 109;
      // const scrollPosition = window.scrollY + window.innerHeight / 2;

      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setTabActive(index);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <PageWrap
      sticky={<Header title="상품 상세" isHideTitle isBack isSearch />}
    >
      <Floating bottom={86} />

      <div className="prod_detail_fixed_btn">
        <button type="button" className="heart_btn">
          <span className="hidden_text">관심 등록</span>
        </button>
        {/* 관심 등록 시, */}
        {/* <button type="button" className="heart_btn on">
          <span className="hidden_text">관심 취소</span>
        </button> */}
        <Link href="/order" className="btn btn_style01 btn_size_48">
          구매하기
        </Link>
      </div>

      <ProductImageSlider />

      <ProductTopInfo />

      <div className="prod_detail_tab_area tab_area tab_style03">
        <ul>
          <li className={tabActive === 0 ? "on" : ""}>
            <button type="button" onClick={() => handleTabClick(0)}>상품정보</button>
          </li>
          <li className={tabActive === 1 ? "on" : ""}>
            <button type="button" onClick={() => handleTabClick(1)}>후기 (27)</button>
          </li>
        </ul>
      </div>

      <section 
        className="section" 
        ref={(el) => {
          sectionRefs.current[0] = el;
        }}
      >
        <ProductItemInfo />
      </section>

      <section 
        className="section" 
        ref={(el) => {
          sectionRefs.current[1] = el;
        }}
      >
        <div className="prod_detail_review_wrap">
          <div className="inner">
            <div className="total_area">
              <p>사용자 총 평점</p>
              <span>4.0</span>
              <div className="star_area">
                <span className="hidden_text">5점 만점에 4점</span>
                <div
                  className="star_on"
                  aria-hidden="true"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <h3 className="hidden_text">후기</h3>
            {/* 데이터 없을 시, */}
            {/* <div className="no_data_area mt_40">
              <i aria-hidden="true"></i>
              <span>게시물이 없습니다.</span>
            </div> */}
            <div className="list_area list_style04">
              <ul>
                <li>
                  <div className="review_top_area">
                    <span className="review">4.0</span>
                    <div className="writer_date">
                      <span>홍*동</span>
                      <span>2024.09.24</span>
                    </div>
                  </div>
                  <p className="review_text">
                    1:1 컨설팅을 통해 제가 가지고 있던 고민과 목표를 명확하게
                    해결할 수 있었습니다. 전문가의 깊이 있는 조언과 친절한
                    피드백 덕분에 방향성을 잡는 데 큰 도움이 되었고, 제게 맞춤
                    맞춤형 솔루션을 제시해주어 매우 만족스러웠습니다.
                  </p>
                  <div className="review_img_area">
                    <div
                      className="img_area rect01"
                      role="button"
                      tabIndex={0}
                      aria-label="이미지 크게 보기"
                    >
                      <img
                        src="/images/product/product_img04.jpg"
                        alt="사용자 등록 리뷰 이미지"
                      />
                    </div>
                    <div
                      className="img_area rect01"
                      role="button"
                      tabIndex={0}
                      aria-label="이미지 크게 보기"
                    >
                      <img
                        src="/images/product/product_img04.jpg"
                        alt="사용자 등록 리뷰 이미지"
                      />
                    </div>
                    <div
                      className="img_area rect01"
                      role="button"
                      tabIndex={0}
                      aria-label="이미지 크게 보기"
                    >
                      <img
                        src="/images/product/product_img04.jpg"
                        alt="사용자 등록 리뷰 이미지"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="review_top_area">
                    <span className="review">4.0</span>
                    <div className="writer_date">
                      <span>홍*동</span>
                      <span>2024.09.24</span>
                    </div>
                  </div>
                  <p className="review_text">
                    1:1 컨설팅을 통해 제가 가지고 있던 고민과 목표를 명확하게
                    해결할 수 있었습니다. 전문가의 깊이 있는 조언과 친절한
                    피드백 덕분에 방향성을 잡는 데 큰 도움이 되었고, 제게 맞춤
                    맞춤형 솔루션을 제시해주어 매우 만족스러웠습니다.
                  </p>
                  <div className="review_img_area">
                    <div
                      className="img_area rect01"
                      role="button"
                      tabIndex={0}
                      aria-label="이미지 크게 보기"
                    >
                      <img
                        src="/images/product/product_img04.jpg"
                        alt="사용자 등록 리뷰 이미지"
                      />
                    </div>
                  </div>
                </li>
              </ul>
              <button
                type="button"
                className="btn btn_style03 btn_size_40 w_full mt_40"
              >
                후기 더보기 <i className="arrow bottom" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageWrap>
  );
};

export default ProductDetailPage;

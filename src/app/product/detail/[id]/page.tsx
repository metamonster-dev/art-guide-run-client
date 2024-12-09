"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import PageWrap from "@/app/shared/components/layout/pageWrap";
import Header from "@/app/shared/components/layout/header";
import Floating from "@/app/shared/components/layout/floating";
import ProductImageSlider from "@/app/product/detail/[id]/_components/imageSlider";
import ProductTopInfo from "@/app/product/detail/[id]/_components/topInfo";
import ProductItemInfo from "@/app/product/detail/[id]/_components/itemInfo";
import ProductItemReview from "@/app/product/detail/[id]/_components/itemReview";

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
        behavior: "smooth",
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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <PageWrap sticky={<Header title="상품 상세" isHideTitle isBack isSearch />}>
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

      <ProductTopInfo onReviewClick={() => handleTabClick(1)} />

      <div className="prod_detail_tab_area tab_area tab_style03">
        <ul>
          <li className={tabActive === 0 ? "on" : ""}>
            <button type="button" onClick={() => handleTabClick(0)}>
              상품정보
            </button>
          </li>
          <li className={tabActive === 1 ? "on" : ""}>
            <button type="button" onClick={() => handleTabClick(1)}>
              후기 (27)
            </button>
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
        <ProductItemReview />
      </section>
    </PageWrap>
  );
};

export default ProductDetailPage;

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import SwiperCore, { Swiper as SwiperClass } from 'swiper';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

const ProductImageSlider = () => {
  const sliderWrapRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperCore | null>(null);

  useEffect(() => {
    if (!sliderWrapRef.current) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!swiperRef.current) return;
      if (e.key === "ArrowRight") swiperRef.current.slideNext();
      else if (e.key === "ArrowLeft") swiperRef.current.slidePrev();
    };

    const sliderElement = sliderWrapRef.current;
    sliderElement.addEventListener("keydown", handleKeyDown);

    return () => {
      sliderElement.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className="prod_detail_visual_wrap img_slider"
      role="region"
      aria-label="상품 이미지 슬라이드"
      tabIndex={0}
      ref={sliderWrapRef}
    >
      <Swiper
        modules={[Pagination]}
        pagination={{
          el: ".img_slider .page",
          type: 'fraction',
        }}
        onSwiper={(swiper: SwiperClass) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={() => {
          const slides = sliderWrapRef.current?.querySelectorAll(".swiper-slide");
        
          slides?.forEach((slide) => {
            slide.setAttribute(
              "aria-live",
              slide.classList.contains("swiper-slide-active") ? "polite" : "off"
            );
          });
        }}
      >
        <SwiperSlide>
          <div className="img_area rect01">
            <Image
              src="/images/product/product_img04.jpg"
              alt="예술기획분야 취창업 예술인 등록을 위한 1:1 맞춤형 클래스 이미지 1"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img_area rect01">
            <Image
              src="/images/product/product_img03.jpg"
              alt="예술기획분야 취창업 예술인 등록을 위한 1:1 맞춤형 클래스 이미지 2"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <p className="page"></p>
    </div>
  );
};

export default ProductImageSlider;

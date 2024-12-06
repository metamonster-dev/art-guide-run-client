import React, { useEffect, useRef } from 'react';
import SwiperCore, { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TabBtn } from '@/app/shared/types/tab.type';

interface Props {
  className?: string;
  spaceBetween?: number;
  tabs: TabBtn[];
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

const TabBtnSlider = ({
  className,
  spaceBetween,
  tabs,
  active,
  setActive,
}: Props) => {
  const swiperRef = useRef<SwiperCore | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      const activeIndex = tabs?.findIndex((tab) => tab.id === active);
      swiperRef.current.slideTo(activeIndex);

      swiperRef.current.update();
    }
  }, [tabs, active]);

  return tabs?.length > 0 ? (
    <Swiper
      className={`tab_area tab_slider ${className ?? ""}`}
      spaceBetween={spaceBetween ?? 0}
      slidesPerView="auto"
      onSwiper={(swiper: SwiperClass) => {
        swiperRef.current = swiper;
      }}
    >
      {tabs?.map((tab) => {
        return (
          <SwiperSlide key={tab.id} className={active === tab.id ? 'on' : ''}>
            <button type="button" onClick={() => setActive(tab.id)}>
              {tab.text}
            </button>
          </SwiperSlide>
        );
      })}
    </Swiper>
  ) : null;
}

export default TabBtnSlider;

"use client";

import { useEffect, useState } from "react";
import { CustomStyle } from "@/app/shared/types/style.type";
import $ from "jquery";

interface FloatingProps {
  bottom?: number;
}

const Floating = ({ bottom }: FloatingProps) => {
  const [floatingShow, setFloatingShow] = useState(true);
  const [zoomsActive, setZoomsActive] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isIPhoneDevice, setIsIPhoneDevice] = useState(false);

  // top click
  const onGoTop = () => {
    $("html, body").animate({ scrollTop: 0 }, 500);
  };
  
  // zoom click
  const onZoomOut = () => {
    const newZoomLevel = Math.max(zoomLevel - 0.1, 0.7);
    if (newZoomLevel <= 0.7) return alert("최소 화면 크기입니다.");
    (document.body.style as CustomStyle).zoom = newZoomLevel.toString();

    if (isIPhoneDevice)
      document.documentElement.style.setProperty("--scale-factor", newZoomLevel.toString());
    setZoomLevel(newZoomLevel);
  };
  const onZoomIn = () => {
    const newZoomLevel = Math.min(zoomLevel + 0.1, 1.4);
    if (newZoomLevel >= 1.4) return alert("최대 화면 크기입니다.");
    (document.body.style as CustomStyle).zoom = newZoomLevel.toString();

    if (isIPhoneDevice)
      document.documentElement.style.setProperty("--scale-factor", newZoomLevel.toString());
    setZoomLevel(newZoomLevel);
  };

  useEffect(() => {
    // iPhone 여부 확인
    const userAgent = typeof navigator !== "undefined" ? navigator.userAgent : "";
    setIsIPhoneDevice(/iPhone|iPad|iPod/i.test(userAgent));

    // 스크롤 이벤트
    let lastScrollY = 0;
    let isScrolling: number | undefined;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setFloatingShow(false);
      } else {
        setFloatingShow(true);
      }
      lastScrollY = currentScrollY;

      if (isScrolling) clearTimeout(isScrolling);
      isScrolling = window.setTimeout(() => {
        setFloatingShow(true);
      }, 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="floating_menu" className={`${floatingShow ? "show" : ""} ${bottom ? `b_${bottom}` : ""}`}>
      <div className={`zoom_area ${zoomsActive ? "active" : ""}`}>
        <button type="button" className="zoom_btn" onClick={() => setZoomsActive((state) => !state)}>
          <span className="hidden_text">{zoomsActive ? "화면 확대/축소 선택 닫기" : "화면 확대/축소 선택 열기"}</span>
        </button>
        <div className="btns_area">
          <button type="button" onClick={onZoomOut}>
            <span className="hidden_text">화면 축소</span>
          </button>
          <button type="button" onClick={onZoomIn}>
            <span className="hidden_text">화면 확대</span>
          </button>
        </div>
      </div>
      <button type="button" className="top_btn" onClick={onGoTop}>
        <span className="hidden_text">홈페이지 상단으로 이동</span>
      </button>
    </div>
  );
};

export default Floating;

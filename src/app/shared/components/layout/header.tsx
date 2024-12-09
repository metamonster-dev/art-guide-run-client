"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import $ from "jquery";

interface HeaderProps {
  title?: string;
  isHideTitle?: boolean;
  isLogo?: boolean;
  isSearch?: boolean;
  isHome?: boolean;
  isBack?: boolean;
  backFunc?: () => void;
}

const Header = ({
  title, isHideTitle, isLogo, isSearch, isHome, isBack, backFunc
}: HeaderProps) => {
  const router = useRouter();
  const [menuShow, setMenuShow] = useState(false);

  // header menu click
  const onMenuOpen = () => {
    setMenuShow(true);
    $("#m_menu a, #m_menu button").eq(0).focus();
  };
  const onMenuClose = () => {
    setMenuShow(false);
    $("#header .menu_btn").focus();
  };

  useEffect(() => {
    // depth01 focus & click
    $("#m_menu .gnb > ul > li > button").on("click focus", function () {
      $(this).parent().addClass("active").siblings().removeClass("active");
    });

    // 메뉴 Tab 이동 제어
    $("#contents a, #contents button, #contents input")
      .eq(0)
      .on("keydown", function (e) {
        if (
          $("#m_menu").css("display") === "block" &&
          e.shiftKey &&
          e.key === "Tab"
        ) {
          e.preventDefault();
          $("#header .menu_btn").focus();
        }
      });
    $("#header .menu_btn").on("keydown", function (e) {
      if (!$("#m_menu").hasClass("show") && !e.shiftKey && e.key === "Tab") {
        e.preventDefault();
        if ($(".sticky_menu .tab_area").length > 0)
          $(".sticky_menu .tab_area button, .sticky_menu .tab_area a")
            .first()
            .focus();
        else $("#contents a, #contents button, #contents input").eq(0).focus();
      }
    });
    $("#m_menu .back_btn").on("keydown", function (e) {
      if (e.shiftKey && e.key === "Tab") {
        e.preventDefault();
        $("#m_menu .gnb > ul > li")
          .last()
          .addClass("active")
          .siblings()
          .removeClass("active");
        $("#m_menu .gnb > ul > li > button").last().focus();
      }
    });
    $("#m_menu a, #m_menu button")
      .last()
      .on("keydown", function (e) {
        if (!e.shiftKey && e.key === "Tab") {
          e.preventDefault();
          $("#m_menu .back_btn").focus();
        }
      });
  }, []);

  return (
    <>
      {/* SKIP NAV */}
      <Link href="#contents" id="skip_nav">본문 바로가기</Link>

      {/* HEADER */}
      <header id="header" className={isLogo ? "hd_bg02" : ""}>
        <div className="inner">
          {isLogo && (
            <h1>
              <Link href="/" className="hd_icon logo">
                <span>ART GUIDE RUN 메인 페이지로 이동</span>
              </Link>
            </h1>
          )}
          <div className="hd_flex">
            {isBack && (
              <button type="button" className="hd_icon icon03" onClick={() => backFunc ? backFunc() : router.back()}>
                <span>이전 페이지로 이동</span>
              </button>
            )}
            {title && <h1 className={isHideTitle ? "hidden_text" : ""}>{title}</h1>}
          </div>
          <div className="hd_flex">
            {isSearch && (
              <Link href="/search" className={`hd_icon ${isLogo ? "icon01" : "icon05"}`}>
                <span>검색 페이지로 이동</span>
              </Link>
            )}
            {isHome && (
              <Link href="/" className="hd_icon icon07">
                <span>메인 페이지로 이동</span>
              </Link>
            )}
            <button
              type="button"
              className={`menu_btn hd_icon ${isLogo ? "icon02" : "icon04"}`}
              onClick={onMenuOpen}
            >
              <span>카테고리 메뉴 보기</span>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE_MENU */}
      <div id="m_menu" className={menuShow ? "show" : ""}>
        <div className="m_header">
          <div className="inner">
            <div className="m_flex">
              <button type="button" className="back_btn" onClick={onMenuClose}>
                <span>카테고리 메뉴 닫기</span>
              </button>
              <p>카테고리</p>
            </div>
            <button type="button" className="close_btn" onClick={onMenuClose}>
              <span>카테고리 메뉴 닫기</span>
            </button>
          </div>
        </div>
        <nav className="gnb" aria-label="주 네비게이션">
          <ul>
            <li className="active">
              <button type="button">회사소개</button>
              <ul className="depth02">
                <li><Link href="/company">회사소개</Link></li>
              </ul>
            </li>
            <li>
              <button type="button">가이드런</button>
              <ul className="depth02">
                <li><Link href="/product/list/guide-run">1:1 컨설팅</Link></li>
                <li><Link href="javascript:;">클래스</Link></li>
                <li><Link href="javascript:;">포트폴리오 멘토링</Link></li>
                <li><Link href="javascript:;">공모사업 지원가이드</Link></li>
              </ul>
            </li>
            <li>
              <button type="button">딥파인더</button>
              <ul className="depth02">
                <li><Link href="/product/list/deep-finder">예술인 등록</Link></li>
                <li><Link href="javascript:;">작품 저작권 등록</Link></li>
                <li><Link href="javascript:;">협회가입, 작품등록</Link></li>
                <li><Link href="javascript:;">기획운영 대행</Link></li>
                <li><Link href="javascript:;">디지털 퍼블리싱</Link></li>
              </ul>
            </li>
            <li>
              <button type="button">아트마켓</button>
              <ul className="depth02">
                <li><Link href="/product/list/art-market">공연</Link></li>
                <li><Link href="javascript:;">작품</Link></li>
                <li><Link href="javascript:;">판매</Link></li>
              </ul>
            </li>
            <li>
              <button type="button">아트게더링</button>
              <ul className="depth02">
                <li><Link href="/gathering/gathering_list">게더링</Link></li>
                <li><Link href="/gathering/artist_list">아티스트</Link></li>
                <li><Link href="/gathering/work_list">작품 소개</Link></li>
                <li><Link href="/gathering/vod_list">VOD</Link></li>
                <li><Link href="/gathering/sheet_share_list">점자 악보</Link></li>
              </ul>
            </li>
            <li>
              <button type="button">소식</button>
              <ul className="depth02">
                <li><Link href="/news/notice">공지사항</Link></li>
                <li><Link href="/news/faq">자주 묻는 질문</Link></li>
                <li><Link href="/news/contact">문의하기</Link></li>
                <li><Link href="/news/promotion">홍보, 광고문의</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;

"use client";

import Link from "next/link";

interface BottomNavProps {
  active?: "home" | "calendar" | "interest" | "mypage";
}

const BottomNav = ({ active }: BottomNavProps) => {
  return (
    <nav id="bottom_nav" aria-label="하단 고정 네비게이션">
      <ul>
        <li className={active === "home" ? "active" : ""}>
          <Link href="/">
            <i className="icon01" aria-hidden="true"></i>
            <span>홈</span>
          </Link>
        </li>
        <li className={active === "calendar" ? "active" : ""}>
          <Link href="/calendar/calendar">
            <i className="icon02" aria-hidden="true"></i>
            <span>캘린더</span>
          </Link>
        </li>
        <li className={active === "interest" ? "active" : ""}>
          <Link href="/interest/interest">
            <i className="icon03" aria-hidden="true"></i>
            <span>관심</span>
          </Link>
        </li>
        <li className={active === "mypage" ? "active" : ""}>
          <Link href="/mypage/mypage">
            <i className="icon04" aria-hidden="true"></i>
            <span>마이</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;

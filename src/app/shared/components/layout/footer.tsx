"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import PrivacyModal from "@/app/shared/components/modal/privacyModal";
import TermsModal from "@/app/shared/components/modal/termsModal";

const Footer = () => {
  const privacyBtnRef = useRef<HTMLButtonElement>(null);
  const termsBtnRef = useRef<HTMLButtonElement>(null);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  const onPrivacyClose = () => {
    setPrivacyOpen(false);
    privacyBtnRef.current?.focus();
  };
  const onTermsClose = () => {
    setTermsOpen(false);
    termsBtnRef.current?.focus();
  };

  return (
    <>
      {/* FOOTER */}
      <footer id="footer">
        <div className="ft_top">
          <div className="inner">
            <nav aria-label="하단 보조 네비게이션">
              <ul>
                <li>
                  <button
                    type="button"
                    id="privacy_btn"
                    ref={privacyBtnRef}
                    onClick={() => setPrivacyOpen(true)}
                  >
                    <b>개인정보처리방침</b>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    id="terms_btn"
                    ref={termsBtnRef}
                    onClick={() => setTermsOpen(true)}
                  >
                    이용약관
                  </button>
                </li>
                <li>
                  <Link href="/company/company">회사소개</Link>
                </li>
                <li>
                  <a href="javascript:;">고객센터</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      
        <div className="ft_btm">
          <div className="inner">
            <ul>
              <li>(주)아트가이드런</li>
              <li>대표 : 소수정</li>
              <li>소재지 : 경기도 안양시 동안구 경수대로 733번길 23, 103-1202</li>
              <li>사업자등록번호 : 819-11-00230</li>
              <li>통신판매업신고번호 : 000-1234-1234</li>
            </ul>
      
            <hr />
      
            <p>고객센터 <br /><a href="tel:0507-1037-5064">0507-1037-5064</a></p>
            <ul>
              <li>고객센터 운영시간 : 오전 10시~오후 5시</li>
              <li>고객센터 톡 운영시간 : 오전 11시~오후 11시</li>
              <li>(점심시간 12:00~14:00)</li>
            </ul>
            <span>Copyright@Art Guide Runner. All rights reserved</span>
          </div>
        </div>
      </footer>

      {/* MODAL */}
      <PrivacyModal open={privacyOpen} onClose={onPrivacyClose} />
      <TermsModal open={termsOpen} onClose={onTermsClose} />
    </>
  );
};

export default Footer;

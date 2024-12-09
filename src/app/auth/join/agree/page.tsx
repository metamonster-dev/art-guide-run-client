"use client";

import { useRef, useState } from "react";
import Header from "@/app/shared/components/layout/header";
import Floating from "@/app/shared/components/layout/floating";
import TermsModal from "@/app/shared/components/modal/termsModal";
import PrivacyModal from "@/app/shared/components/modal/privacyModal";
import MarketingModal from "@/app/shared/components/modal/marketingModal";

const JoinAgreePage = () => {
  const termsBtnRef = useRef<HTMLButtonElement>(null);
  const privacyBtnRef = useRef<HTMLButtonElement>(null);
  const marketingBtnRef = useRef<HTMLButtonElement>(null);
  const [checked, setChecked] = useState<number[]>([]);
  const [termsOpen, setTermsOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [marketingOpen, setMarketingOpen] = useState(false);

  const onCheckAllClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(checked && setChecked)) return;

    if (e.target.checked) {
      setChecked([1, 2, 3, 4]);
      return;
    }
    setChecked([]);
  };
  const onCheckClick = (id: number) => {
    if (!(checked && setChecked)) return;
    const newChecked = checked.includes(id)
      ? checked.filter((item) => item !== id)
      : [...checked, id];

    setChecked(newChecked);
  };

  const onTermsClose = () => {
    setTermsOpen(false);
    termsBtnRef.current?.focus();
  };
  const onPrivacyClose = () => {
    setPrivacyOpen(false);
    privacyBtnRef.current?.focus();
  };
  const onMarketingClose = () => {
    setMarketingOpen(false);
    marketingBtnRef.current?.focus();
  };
  
  return (
    <>
      <div className="sticky_menu">
        <Header title="가입완료" isBack />
      </div>
      
      <div id="contents" tabIndex={-1}>
        <Floating />

        <section>
          <div className="join_tit_area">
            <div className="inner">
              <h2>약관에 동의해주세요</h2>
              <p>서비스 이용을 위해 약관에 동의해주세요</p>
            </div>
          </div>
          <div className="pt_32 pb_80">
            <div className="inner">
              <form id="joinForm">
                <fieldset>
                  <legend className="hidden_text">약관 동의</legend>
                  <div className="input_list_area gap_24">
                    <div className="chk_custom03">
                      <input
                        type="checkbox"
                        name="agree"
                        id="agree_1"
                        onChange={() => onCheckClick(1)}
                        checked={checked?.indexOf(1) !== -1}
                      />
                      <label htmlFor="agree_1">
                        만 14세 이상입니다.<span>(필수)</span>
                      </label>
                    </div>
                    <div className="chk_btn_area">
                      <div className="chk_custom03">
                        <input
                          type="checkbox"
                          name="agree"
                          id="agree_2"
                          value={2}
                          onChange={() => onCheckClick(2)}
                          checked={checked?.indexOf(2) !== -1}
                        />
                        <label htmlFor="agree_2">
                          이용약관 동의<span>(필수)</span>
                        </label>
                      </div>
                      <button
                        type="button"
                        id="terms_btn"
                        ref={termsBtnRef}
                        onClick={() => setTermsOpen(true)}
                      >
                        보기
                      </button>
                    </div>
                    <div className="chk_btn_area">
                      <div className="chk_custom03">
                        <input
                          type="checkbox"
                          name="agree"
                          id="agree_3"
                          value={3}
                          onChange={() => onCheckClick(3)}
                          checked={checked?.indexOf(3) !== -1}
                        />
                        <label htmlFor="agree_3">
                          개인정보 수집 및 이용동의<span>(필수)</span>
                        </label>
                      </div>
                      <button
                        type="button"
                        id="privacy_btn"
                        ref={privacyBtnRef}
                        onClick={() => setPrivacyOpen(true)}
                      >
                        보기
                      </button>
                    </div>
                    <div className="chk_btn_area">
                      <div className="chk_custom03">
                        <input
                          type="checkbox"
                          name="agree"
                          id="agree_4"
                          value={4}
                          onChange={() => onCheckClick(4)}
                          checked={checked?.indexOf(4) !== -1}
                        />
                        <label htmlFor="agree_4">
                          선택정보 수집 및 마케팅 수신 동의(선택)
                        </label>
                      </div>
                      <button
                        type="button"
                        id="marketing_btn"
                        ref={marketingBtnRef}
                        onClick={() => setMarketingOpen(true)}
                      >
                        보기
                      </button>
                    </div>
                  </div>
                </fieldset>

                <div className="chk_custom03 border_top mt_24 pt_24">
                  <input
                    type="checkbox"
                    name="agree_all"
                    id="agree_all"
                    onChange={onCheckAllClick}
                    checked={checked?.length === 4}
                  />
                  <label htmlFor="agree_all">
                    <b>모두 동의합니다.</b>
                  </label>
                </div>
                <span className="error_msg mt_16 d_none">
                  필수 약관 항목에 동의해주세요.
                </span>

                <button
                  type="submit"
                  className="btn btn_style01 btn_size_52 w_full mt_40"
                >
                  다음
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* MODAL */}
      <TermsModal open={termsOpen} onClose={onTermsClose} />
      <PrivacyModal open={privacyOpen} onClose={onPrivacyClose} />
      <MarketingModal open={marketingOpen} onClose={onMarketingClose} />
    </>
  );
};

export default JoinAgreePage;

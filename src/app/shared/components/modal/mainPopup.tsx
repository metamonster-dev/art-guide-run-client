"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from '@/app/shared/components/modal/modal';

const MainPopup = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  // popup close click
  const onPopupClose = () => {
    setPopupOpen(false);
  }

  return (
    <Modal type="middle" open={popupOpen}>
      <div className="md_cont">
        <div className="md_popup_area">
          <Link href="javascript:;">
            <span className="img_area rect01">
              <Image src="/images/popup_img.jpg" alt="팝업 이미지" />
            </span>
          </Link>
          <div className="btn_area">
            <div className="chk_custom03">
              <input type="checkbox" name="not_today" id="not_today" value="1" />
              <label htmlFor="not_today">오늘 그만보기</label>
            </div>
            <button type="button" onClick={onPopupClose}>닫기</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MainPopup;

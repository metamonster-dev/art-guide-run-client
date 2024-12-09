"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const ProductItemInfo = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [isLimit, setIsLimit] = useState(true);
  // const [open, setOpen] = useState(false);

  useEffect(() => {
    if (elementRef.current) {
      const hideH = Math.floor(elementRef.current.offsetHeight / 4 / 100) * 100;
      if (hideH > 250) setHeight(hideH);
      else setIsLimit(false);
    }
  }, []);

  return (
    <div className="prod_detail_info_wrap">
      <div className="inner">
        <h3 className="hidden_text">상품정보</h3>
        <div className={`editor_area ${isLimit ? "hide" : ""}`} style={isLimit ? { height } : {}}>
          <div ref={elementRef}>
            <Image
              src="/images/product/product_info_img.jpg"
              alt="상품 상세 영역 예시 이미지"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        {isLimit && (
          <button
            type="button"
            className="btn btn_style03 btn_size_40 w_full"
            id="more_show_btn"
            onClick={() => setIsLimit(false)}
          >
            상품 정보 더보기 <i className="arrow bottom" aria-hidden="true"></i>
          </button>
        )}
        {!isLimit && (
          <button
            type="button"
            className="btn btn_style03 btn_size_40 w_full mt_16"
            id="more_hide_btn"
            onClick={() => setIsLimit(true)}
          >
            상품 정보 접기 <i className="arrow top" aria-hidden="true"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductItemInfo;

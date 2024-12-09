import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ProductShareModal from "@/app/product/detail/[id]/_components/shareModal";

const ProductTopInfo = () => {
  const shareBtnRef = useRef<HTMLButtonElement>(null);
  const [shareOpen, setShareOpen] = useState(false);

  const onShareClose = () => {
    setShareOpen(false);
    shareBtnRef.current?.focus();
  };

  return (
    <>
      <section className="prod_detail_tit_wrap">
        <div className="top_area">
          <div className="inner">
            <Link href="javascript:;">
              1:1 컨설팅 <i aria-hidden="true"></i>
            </Link>
            <button
              type="button"
              id="share_btn"
              aria-label="상품 공유하기"
              ref={shareBtnRef}
              onClick={() => setShareOpen(true)}
            >
              <Image
                src="/images/icon_share.svg"
                alt="상품 공유하기"
                aria-hidden="true"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
        <div className="btm_area">
          <div className="inner">
            <h2>예술기획분야 취창업 예술인 등록을 위한 1:1 맞춤형 클래스</h2>
            <div className="star_review">
              <div className="star_area">
                <span className="hidden_text">5점 만점에 4점</span>
                <div className="star_on" aria-hidden="true" style={{ width: "80%" }}></div>
              </div>
              <button type="button">후기 23건</button>
            </div>
            <div className="price_text">
              <span className="percent">10%</span>
              <p className="price">40,500원</p>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      <ProductShareModal open={shareOpen} onClose={onShareClose} />
    </>
  );
};

export default ProductTopInfo;

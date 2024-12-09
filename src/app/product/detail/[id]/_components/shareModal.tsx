import Image from "next/image";
import ModalWrap from "@/app/shared/components/modal/modalWrap";

interface ProductShareModalProps {
  open: boolean;
  onClose: () => void;
}

const ProductShareModal = ({ open, onClose }: ProductShareModalProps) => {
  return (
    <ModalWrap type="bottom" title="상품 공유" open={open} onClose={onClose}>
      <div className="md_share_area">
        <button type="button">
          <Image
            src="/images/icon_share_url.svg"
            alt="URL 복사 아이콘"
            aria-hidden="true"
            width={48}
            height={48}
          />
          <span>URL 복사</span>
        </button>
        <button type="button">
          <Image
            src="/images/icon_share_kakao.svg"
            alt="카카오톡 아이콘"
            aria-hidden="true"
            width={48}
            height={48}
          />
          <span>카카오톡</span>
        </button>
      </div>
    </ModalWrap>
  );
};

export default ProductShareModal;

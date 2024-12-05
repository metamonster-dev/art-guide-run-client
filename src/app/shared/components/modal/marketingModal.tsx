import ModalWrap from "@/app/shared/components/modal/modalWrap";

interface MarketingModalProps {
  open: boolean;
  onClose: () => void;
}

const MarketingModal = ({ open, onClose }: MarketingModalProps) => {
  return (
    <ModalWrap type="full" title="선택정보 수집 및 마케팅 수신 동의" open={open} onClose={onClose}>
      <div className="md_agree_area">
        <div className="inner">
          <div>
            <p><b>분류</b></p>
            <p>선택정보</p>
          </div>
          <div>
            <p><b>수집 · 이용목적</b></p>
            <p>수집이용목적 내용 텍스트</p>
          </div>
          <div>
            <p><b>수집 · 이용목적</b></p>
            <p>수집이용항목 내용 텍스트</p>
          </div>
          <div>
            <p><b>보유 및 이용기간</b></p>
            <p>보유 및 이용기간 내용 텍스트</p>
          </div>
        </div>
      </div>
    </ModalWrap>
  );
};

export default MarketingModal;

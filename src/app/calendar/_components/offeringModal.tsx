import Link from "next/link";
import ModalWrap from "@/app/shared/components/modal/modalWrap";

interface OfferingModalProps {
  open: boolean;
  onClose: () => void;
}

const OfferingModal = ({ open, onClose }: OfferingModalProps) => {
  return (
    <ModalWrap type="bottom" title="공모사업" open={open} onClose={onClose}>
      <div className="md_offering_area">
        <dl>
          <dt>사업명</dt>
          <dd>
            <strong>
              문화예술 지원사업문화예술 지원사업문화예술 지원사업
            </strong>
          </dd>

          <dt>일정</dt>
          <dd>
            <strong>2024.08.22 ~ 2024.08.30</strong>
          </dd>

          <dt>기타</dt>
          <dd>기타사항 간략히 정보 노출</dd>
        </dl>
      </div>
      <Link
        href={`/calendar/detail/${1}`}
        className="btn btn_style01 btn_size_48 w_full mt_24"
      >
        상세보기
      </Link>
    </ModalWrap>
  );
};

export default OfferingModal;

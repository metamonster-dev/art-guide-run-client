import Image from "next/image";
import ModalWrap from "@/app/shared/components/modal/modalWrap";

interface IsJoinModalProps {
  open: boolean;
  onClose: () => void;
}

const IsJoinModal = ({ open, onClose }: IsJoinModalProps) => {
  return (
    <ModalWrap type="bottom" title="가입 내역 안내" open={open} onClose={onClose}>
      <div className="md_is_member_area">
        <p>이미 다른 계정에 가입되어 있습니다.</p>
        <div className="sns_info">
          <Image
            src="/images/icon_kakao.png"
            alt="카카오톡 로고 이미지"
            width={20}
            height={20}
          />
          <span>w***2@kakao.com</span>
        </div>
        <button
          type="button"
          className="btn btn_style01 btn_size_48"
          onClick={onClose}
        >
          확인
        </button>
      </div>
    </ModalWrap>
  );
};

export default IsJoinModal;

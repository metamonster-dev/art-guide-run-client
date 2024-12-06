import ModalWrap from "@/app/shared/components/modal/modalWrap";

interface UseModalProps {
  open: boolean;
  onClose: () => void;
}

const UseModal = ({ open, onClose }: UseModalProps) => {
  return (
    <ModalWrap type="full" title="개인정보 수집 및 이용동의" open={open} onClose={onClose}>
      <div className="md_agree_area">
        <div className="inner">
          <p><b>제1장 총칙</b></p>
          <div>
            <p><b>제1조(목적)</b></p>
            <p>개인정보 수집 및 이용동의 내용</p>
          </div>
          <div>
            <p><b>제2조(정의)</b></p>
            <p>
              이 약관에서 사용하는 용어의 정의는 다음 각 호와 같으며, 정의되지
              않은 용어에 대한 해석은 관계 법령 및 지침, 본 이용약관, 개인정보
              처리방침, 상관례 등에 따릅니다.이 약관에서 사용하는 용어의 정의는
              다음 각 호와 같으며, 정의되지 않은 용어에 대한 해석은 관계 법령 및
              지침, 본 이용약관, 개인정보 처리방침, 상관례 등에 따릅니다.이
              약관에서 사용하는 용어의 정의는 다음 각 호와 같으며, 정의되지 않은
              용어에 대한 해석은 관계 법령 및 지침, 본 이용약관, 개인정보
              처리방침, 상관례 등에 따릅니다.이 약관에서 사용하는 용어의 정의는
              다음 각 호와 같으며, 정의되지 않은 용어에 대한 해석은 관계 법령 및
              지침, 본 이용약관, 개인정보 처리방침, 상관례 등에 따릅니다.이
              약관에서 사용하는 용어의 정의는 다음 각 호와 같으며, 정의되지 않은
              용어에 대한 해석은 관계 법령 및 지침, 본 이용약관, 개인정보
              처리방침, 상관례 등에 따릅니다.이 약관에서 사용하는 용어의 정의는
              다음 각 호와 같으며, 정의되지 않은 용어에 대한 해석은 관계 법령 및
              지침, 본 이용약관, 개인정보 처리방침, 상관례 등에 따릅니다.
            </p>
          </div>
        </div>
      </div>
    </ModalWrap>
  );
};

export default UseModal;

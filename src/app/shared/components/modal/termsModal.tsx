import ModalWrap from "@/app/shared/components/modal/modalWrap";

interface TermsModalProps {
  open: boolean;
  onClose: () => void;
}

const TermsModal = ({ open, onClose }: TermsModalProps) => {
  return (
    <ModalWrap type="full" title="이용약관" open={open} onClose={onClose}>
      <div className="md_agree_area">
        <div className="inner">
          <p><b>제1장 총칙</b></p>
          <div>
            <p><b>제1조(목적)</b></p>
            <p>
              이 약관은 ㅇㅇ주식회사(이하 &quot;회사&quot;)가 인터넷 사이트와 인터넷
              홈페이지를 통해 운영, 제공하는 아트가이드런 서비스(이하
              &quot;서비스&quot;)를 이용함에 있어 &quot;회사&quot;와 &quot;회원(제2조에서 정의됨)&quot;과의
              권리, 의무 및 책임사항, 기타 필요한 사항을 규정하는 것을 목적으로
              합니다.
            </p>
          </div>
          <div>
            <p><b>제2조(정의)</b></p>
            <p>
              이 약관에서 사용하는 용어의 정의는 다음 각 호와 같으며, 정의되지
              않은 용어에 대한 해석은 관계 법령 및 지침, 본 이용약관, 개인정보
              처리방침, 상관례 등에 따릅니다. 이용약관 내용이용약관 내용이용약관
              내용이용약관 내용이용약관 내용이용약관 내용이용약관 내용이용약관
              내용이용약관 내용이용약관 내용이용약관 내용이용약관 내용
            </p>
          </div>
        </div>
      </div>
    </ModalWrap>
  );
};

export default TermsModal;

import ModalWrap from "@/app/shared/components/modal/modalWrap";

interface PrivacyModalProps {
  open: boolean;
  onClose: () => void;
}

const PrivacyModal = ({ open, onClose }: PrivacyModalProps) => {
  return (
    <ModalWrap type="full" title="개인정보 처리방침" open={open} onClose={onClose}>
      <div className="md_agree_area">
        <div className="inner">
          <p>
            회사(이하 &quot;ㅇㅇ&quot; 또는 &quot;서비스&quot;)는 정보주체의 자유와 권리 보호를 위해
            「개인정보 보호법」 및 관계 법령이 정한 바를 준수하여, 적법하게
            개인정보를 처리하고 안전하게 관리하고 있습니다. 이에 「개인정보
            보호법」 제30조에 따라 정보주체에게 개인정보 처리에 관한 절차 및
            기준을 안내하고, 이와 관련한 고충을 신속하고 원활하게 처리할 수
            있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립하며
            공개합니다.
          </p>
          <div>
            <p><b>1. 개인정보의 처리 목적</b></p>
            <p>
              아트가이드런은 다음의 목적을 위하여 개인정보를 처리합니다.
              처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지
              않으며, 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에
              따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
              개인정보처리방침내용 개인정보처리방침내용 개인정보처리방침내용
              개인정보처리방침내용 개인정보처리방침내용 개인정보처리방침내용
              개인정보처리방침내용
            </p>
          </div>
        </div>
      </div>
    </ModalWrap>
  );
};

export default PrivacyModal;

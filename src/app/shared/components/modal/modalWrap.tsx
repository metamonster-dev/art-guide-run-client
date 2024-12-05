import Modal from "@/app/shared/components/modal/modal";

interface ModalWrapProps {
  type: "full" | "bottom";
  title: string;
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

const ModalWrap = ({ type, title, children, open, onClose }: ModalWrapProps) => {
  return (
    <Modal type={type ?? "full"} open={open}>
      <div className="md_tit">
        <p>{title}</p>
        <button
          type="button"
          className="x_btn"
          onClick={onClose}
        >
          <span>모달창 닫기</span>
        </button>
      </div>
      <div className="md_cont">
        {children}
      </div>
    </Modal>
  );
};

export default ModalWrap;

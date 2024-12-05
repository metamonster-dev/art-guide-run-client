import { useEffect } from "react";
import Modal from "@/app/shared/components/modal/modal";
import $ from "jquery";

interface ModalFullProps {
  title: string;
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

const ModalFull = ({ title, children, open, onClose }: ModalFullProps) => {
  useEffect(() => {
    if (open) $('.modal_wrap button, .modal_wrap a').first().focus();
  }, [open]);
  
  return (
    <Modal type="full" open={open}>
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

export default ModalFull;

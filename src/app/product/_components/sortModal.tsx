import ModalWrap from "@/app/shared/components/modal/modalWrap";

interface SortModalProps {
  open: boolean;
  onClose: () => void;
}

const SortModal = ({ open, onClose }: SortModalProps) => {
  return (
    <ModalWrap type="bottom" title="상품 정렬" open={open} onClose={onClose}>
      <div className="pt_16">
        <fieldset>
          <legend className="hidden_text">상품 정렬</legend>
          <div className="label_input_area">
            <div className="chk_list_area grid01">
              <div className="chk_custom">
                <input
                  type="radio"
                  name="order"
                  id="order01"
                  value="1"
                  defaultChecked
                />
                <label htmlFor="order01">인기순</label>
              </div>
              <div className="chk_custom">
                <input
                  type="radio"
                  name="order"
                  id="order02"
                  value="2"
                />
                <label htmlFor="order02">최신순</label>
              </div>
              <div className="chk_custom">
                <input
                  type="radio"
                  name="order"
                  id="order03"
                  value="3"
                />
                <label htmlFor="order03">가격 높은순</label>
              </div>
              <div className="chk_custom">
                <input
                  type="radio"
                  name="order"
                  id="order04"
                  value="4"
                />
                <label htmlFor="order04">가격 낮은순</label>
              </div>
            </div>
          </div>
        </fieldset>

        <button
          type="button"
          className="btn btn_style01 btn_size_52 w_full mt_24"
        >
          정렬하기
        </button>
      </div>
    </ModalWrap>
  );
};

export default SortModal;

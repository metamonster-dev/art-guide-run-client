import Image from "next/image";
import ModalWrap from "@/app/shared/components/modal/modalWrap";
import MultiImageUpload from "@/app/shared/components/form/multiImageUpload";

interface ProductConsultModalProps {
  open: boolean;
  onClose: () => void;
}

const ProductConsultModal = ({ open, onClose }: ProductConsultModalProps) => {
  return (
    <ModalWrap type="full" title="상품 문의하기" open={open} onClose={onClose}>
      <div className="md_consult_area">
        <div className="item_area">
          <div className="img_area rect01">
            <Image
              src="/images/product/product_img01.jpg"
              alt="예술기획분야 취창업 전문 컨설팅 이미지"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="text_area">
            <span className="cate">1:1 컨설팅</span>
            <p className="tit">예술기획분야 취창업 전문 컨설팅</p>
          </div>
        </div>

        <div className="pt_24 pb_60">
          <div className="inner">
            <div className="input_list_area gap_24">
              <div className="label_input_area">
                <label htmlFor="title" className="label">
                  제목
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="input"
                  placeholder="제목을 입력해 주세요."
                />
              </div>

              <div className="label_input_area">
                <label htmlFor="content" className="label">
                  내용
                </label>
                <textarea
                  name="content"
                  id="content"
                  cols={30}
                  rows={10}
                  className="textarea"
                  placeholder="내용을 입력해 주세요."
                ></textarea>
              </div>

              <div className="label_input_area">
                <span className="label">이미지 첨부</span>
                <MultiImageUpload />
              </div>
            </div>

            <button type="button" className="btn btn_style01 btn_size_52 w_full mt_40">
              등록
            </button>
          </div>
        </div>
      </div>
    </ModalWrap>
  );
};

export default ProductConsultModal;

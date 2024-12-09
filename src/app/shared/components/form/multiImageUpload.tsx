// import Image from "next/image";

const MultiImageUpload = () => {
  return (
    <>
      <div className="img_input_list_area">
        <div className="img_input">
          <input
            type="file"
            name="img"
            id="img"
            accept=".jpg, .jpeg, .png"
          />
          <label htmlFor="img"><span>이미지 첨부</span></label>
        </div>
        {/* <div className="img_input">
          <Image
            src="/images/product/product_img05.jpg"
            alt="이미지 등록"
            fill
            style={{ objectFit: "cover" }}
          />
          <button type="button" className="img_x_btn">
            <span>등록한 이미지 삭제</span>
          </button>
        </div> */}
      </div>
      <span className="input_desc_text02">
        * 10MB 이하 JPG, PNG만 등록 가능합니다. (최대3장)
      </span>
    </>
  );
};

export default MultiImageUpload;

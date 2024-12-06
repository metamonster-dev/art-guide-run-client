import Header from "@/app/shared/components/layout/header";
import Floating from "@/app/shared/components/layout/floating";
import BottomNav from "@/app/shared/components/layout/bottomNav";

const ContactPage = () => {
  return (
    <>
      <div className="sticky_menu">
        <Header title="문의하기" isBack />
      </div>
      
      <div id="contents" tabIndex={-1}>
        <Floating bottom={80} />
        <BottomNav />

        <div className="pt_32 pb_150">
          <div className="inner">
            <form id="contactForm">
              <div className="input_list_area gap_24">
                <div className="label_input_area">
                  <label htmlFor="title" className="label">제목</label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="input"
                    placeholder="제목을 입력해 주세요."
                  />
                </div>

                <div className="label_input_area">
                  <label htmlFor="content" className="label">내용</label>
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
                  </div>
                  <span className="input_desc_text02">
                    * 10MB 이하 JPG, PNG만 등록 가능합니다. (최대3장)
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn_style01 btn_size_52 w_full mt_40"
              >
                확인
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;

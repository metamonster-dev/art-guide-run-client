import Image from "next/image";
import Header from "@/app/shared/components/layout/header";
import Floating from "@/app/shared/components/layout/floating";

const JoinPage = () => {
  return (
    <>
      <div className="sticky_menu">
        <Header title="회원가입" isBack />
      </div>
      
      <div id="contents" tabIndex={-1}>
        <Floating />

        <section>
          <div className="join_tit_area">
            <div className="inner">
              <h2>관심있는 분야를 <br />선택해주세요</h2>
              <p>관심분야 콘텐츠를 제안해드려요!</p>
            </div>
          </div>
          <div className="pt_24 pb_80">
            <div className="inner">
              <form id="joinForm">
                <div className="input_list_area gap_40">
                  <fieldset>
                    <legend className="mb_8">
                      <h3 className="label_tit">예술분야</h3>
                    </legend>
                    <div className="label_input_area">
                      <div className="chk_list_area grid03">
                        <div className="chk_custom02">
                          <input
                            type="checkbox"
                            name="field"
                            id="field01"
                            value="1"
                          />
                          <label htmlFor="field01">
                            <Image
                              src="/images/icon_field01.png"
                              alt="문학(책) 아이콘"
                              aria-hidden="true"
                              width={48}
                              height={48}
                            />
                            <span>문학</span>
                          </label>
                        </div>
                        <div className="chk_custom02">
                          <input
                            type="checkbox"
                            name="field"
                            id="field02"
                            value="2"
                          />
                          <label htmlFor="field02">
                            <Image
                              src="/images/icon_field02.png"
                              alt="사진(이미지) 아이콘"
                              aria-hidden="true"
                              width={48}
                              height={48}
                            />
                            <span>사진</span>
                          </label>
                        </div>
                        <div className="chk_custom02">
                          <input
                            type="checkbox"
                            name="field"
                            id="field03"
                            value="3"
                          />
                          <label htmlFor="field03">
                            <Image
                              src="/images/icon_field03.png"
                              alt="건축(집 + 연필 + 자) 아이콘"
                              aria-hidden="true"
                              width={48}
                              height={48}
                            />
                            <span>건축</span>
                          </label>
                        </div>
                        <div className="chk_custom02">
                          <input
                            type="checkbox"
                            name="field"
                            id="field04"
                            value="4"
                          />
                          <label htmlFor="field04">
                            <Image
                              src="/images/icon_field04.png"
                              alt="국악(한국 북) 아이콘"
                              aria-hidden="true"
                              width={48}
                              height={48}
                            />
                            <span>국악</span>
                          </label>
                        </div>
                        <div className="chk_custom02">
                          <input
                            type="checkbox"
                            name="field"
                            id="field05"
                            value="5"
                          />
                          <label htmlFor="field05">
                            <Image
                              src="/images/icon_field05.png"
                              alt="무용(춤) 아이콘"
                              aria-hidden="true"
                              width={48}
                              height={48}
                            />
                            <span>무용</span>
                          </label>
                        </div>
                        <div className="chk_custom02">
                          <input
                            type="checkbox"
                            name="field"
                            id="field06"
                            value="6"
                          />
                          <label htmlFor="field06">
                            <Image
                              src="/images/icon_field06.png"
                              alt="연극(가면) 아이콘"
                              aria-hidden="true"
                              width={48}
                              height={48}
                            />
                            <span>연극</span>
                          </label>
                        </div>
                        <div className="chk_custom02">
                          <input
                            type="checkbox"
                            name="field"
                            id="field07"
                            value="7"
                          />
                          <label htmlFor="field07">
                            <Image
                              src="/images/icon_field07.png"
                              alt="음악(악보 + 음표) 아이콘"
                              aria-hidden="true"
                              width={48}
                              height={48}
                            />
                            <span>음악</span>
                          </label>
                        </div>
                        <div className="chk_custom02">
                          <input
                            type="checkbox"
                            name="field"
                            id="field08"
                            value="8"
                          />
                          <label htmlFor="field08">
                            <Image
                              src="/images/icon_field08.png"
                              alt="영화(영화 필름) 아이콘"
                              aria-hidden="true"
                              width={48}
                              height={48}
                            />
                            <span>영화</span>
                          </label>
                        </div>
                        <div className="chk_custom02">
                          <input
                            type="checkbox"
                            name="field"
                            id="field09"
                            value="9"
                          />
                          <label htmlFor="field09">
                            <Image
                              src="/images/icon_field09.png"
                              alt="만화(캐릭터) 아이콘"
                              aria-hidden="true"
                              width={48}
                              height={48}
                            />
                            <span>만화</span>
                          </label>
                        </div>
                        <div className="chk_custom02">
                          <input
                            type="checkbox"
                            name="field"
                            id="field10"
                            value="10"
                          />
                          <label htmlFor="field10">
                            <Image
                              src="/images/icon_field10.png"
                              alt="연예(TV) 아이콘"
                              aria-hidden="true"
                              width={48}
                              height={48}
                            />
                            <span>연예</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </fieldset>

                  <fieldset>
                    <legend className="mb_8">
                      <h3 className="label_tit">예술활동 유형</h3>
                    </legend>
                    <div className="label_input_area">
                      <div className="chk_list_area grid02">
                        <div className="chk_custom">
                          <input
                            type="radio"
                            name="activity"
                            id="activity01"
                            value="1"
                          />
                          <label htmlFor="activity01">창작</label>
                        </div>
                        <div className="chk_custom">
                          <input
                            type="radio"
                            name="activity"
                            id="activity02"
                            value="2"
                          />
                          <label htmlFor="activity02">실연</label>
                        </div>
                        <div className="chk_custom">
                          <input
                            type="radio"
                            name="activity"
                            id="activity03"
                            value="3"
                          />
                          <label htmlFor="activity03">기술지원</label>
                        </div>
                        <div className="chk_custom">
                          <input
                            type="radio"
                            name="activity"
                            id="activity04"
                            value="4"
                          />
                          <label htmlFor="activity04">기획</label>
                        </div>
                      </div>
                    </div>
                  </fieldset>

                  <button
                    type="submit"
                    className="btn btn_style01 btn_size_52 w_full"
                  >
                    다음
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default JoinPage;

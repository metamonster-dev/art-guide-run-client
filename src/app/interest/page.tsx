"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/app/shared/components/layout/header";
import Floating from "@/app/shared/components/layout/floating";
import BottomNav from "@/app/shared/components/layout/bottomNav";
import Link from "next/link";

const InterestPage = () => {
  const [checked, setChecked] = useState<number[]>([]);

  const onCheckAllClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(checked && setChecked)) return;

    if (e.target.checked) {
      setChecked([1, 2, 3, 4]);
      return;
    }
    setChecked([]);
  };
  const onCheckClick = (id: number) => {
    if (!(checked && setChecked)) return;
    const newChecked = checked.includes(id)
      ? checked.filter((item) => item !== id)
      : [...checked, id];

    setChecked(newChecked);
  };

  return (
    <>
      <div className="sticky_menu">
        <Header title="관심 콘텐츠" isBack />
      </div>
      
      <div id="contents" tabIndex={-1}>
        <Floating bottom={80} />
        <BottomNav active={"interest"} />

        <div className="pt_24 pb_150">
          <div className="inner">
            <div className="list_tit_area">
              <p>총 <b>4</b>건</p>
            </div>

            {/* 데이터 없을 시, */}
            {/* <div className="no_data_area pt_40">
              <i className="icon02" aria-hidden="true"></i>
              <span>
                관심 가이드런 상품이 없습니다. <br />
                클릭 한 번으로 관심 콘텐츠를 담아보세요!
              </span>
            </div> */}
            <div className="list_tit_area pt_20">
              <div className="chk_custom03">
                <input
                  type="checkbox"
                  name="interest_all"
                  id="interest_all"
                  onChange={onCheckAllClick}
                  checked={checked?.length === 4}

                />
                <label htmlFor="interest_all">전체</label>
              </div>
              <button type="button" className="btn btn_style04 btn_size_32 px_8">
                선택 삭제
              </button>
            </div>
            <fieldset>
              <legend className="hidden_text">관심 콘텐츠 목록</legend>
              <div className="list_area list_style01 border_top mt_16 pt_24">
                <ul>
                  <li>
                    <div className="chk_img">
                      <input
                        type="checkbox"
                        name="interest"
                        id="interest01"
                        value={1}
                        onChange={() => onCheckClick(1)}
                        checked={checked?.indexOf(1) !== -1}
                      />
                      <label htmlFor="interest01">
                        <span className="img_area rect01">
                          <Image
                            src="/images/product/product_img02.jpg"
                            alt="예술기획분야 취창업 전문 컨설팅 이미지"
                            layout="fill"
                            objectFit="cover"
                          />
                        </span>
                      </label>
                    </div>
                    <Link href={`/product/detail/${1}`}>
                      <div className="text_area">
                        <span className="cate">1:1 컨설팅</span>
                        <p className="tit">예술기획분야 취창업 전문 컨설팅</p>
                        <div className="price_text">
                          <span className="percent">10%</span>
                          <span className="price">40,500원</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <div className="chk_img">
                      <input
                        type="checkbox"
                        name="interest"
                        id="interest02"
                        value={2}
                        onChange={() => onCheckClick(2)}
                        checked={checked?.indexOf(2) !== -1}
                      />
                      <label htmlFor="interest02">
                        <span className="img_area rect01">
                          <Image
                            src="/images/product/product_img02.jpg"
                            alt="아트마켓 공예 클래스 이미지"
                            layout="fill"
                            objectFit="cover"
                          />
                        </span>
                      </label>
                    </div>
                    <Link href={`/product/detail/${1}`}>
                      <div className="text_area">
                        <span className="cate">클래스</span>
                        <p className="tit">아트마켓 공예 클래스</p>
                        <div className="price_text">
                          <span className="price">40,500원</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <div className="chk_img">
                      <input
                        type="checkbox"
                        name="interest"
                        id="interest03"
                        value={3}
                        onChange={() => onCheckClick(3)}
                        checked={checked?.indexOf(3) !== -1}
                      />
                      <label htmlFor="interest03">
                        <span className="img_area rect01">
                          <Image
                            src="/images/product/product_img01.jpg"
                            alt="아트가이드런이 추천하는 실무활용 가이드 이미지"
                            layout="fill"
                            objectFit="cover"
                          />
                        </span>
                      </label>
                    </div>
                    <Link href={`/product/detail/${1}`}>
                      <div className="text_area">
                        <span className="cate">지원가이드</span>
                        <p className="tit">
                          아트가이드런이 추천하는 실무활용 가이드
                        </p>
                        <div className="price_text">
                          <span className="price">40,500원</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <div className="chk_img">
                      <input
                        type="checkbox"
                        name="interest"
                        id="interest04"
                        value={4}
                        onChange={() => onCheckClick(4)}
                        checked={checked?.indexOf(4) !== -1}
                      />
                      <label htmlFor="interest04">
                        <span className="img_area rect01">
                          <Image
                            src="/images/product/product_img01.jpg"
                            alt="아트가이드런이 추천하는 실무활용 가이드 이미지"
                            layout="fill"
                            objectFit="cover"
                          />
                        </span>
                      </label>
                    </div>
                    <Link href={`/product/detail/${1}`}>
                      <div className="text_area">
                        <span className="cate">지원가이드</span>
                        <p className="tit">
                          아트가이드런이 추천하는 실무활용 가이드
                        </p>
                        <div className="price_text">
                          <span className="price">40,500원</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </>
  );
};

export default InterestPage;

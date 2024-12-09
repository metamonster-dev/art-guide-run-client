import Link from "next/link";
import Image from "next/image";
import PageWrap from "@/app/shared/components/layout/pageWrap";
import Header from "@/app/shared/components/layout/header";
import Floating from "@/app/shared/components/layout/floating";

const OrderCompletePage = () => {
  return (
    <PageWrap sticky={<Header title="주문완료" isHome />}>
      <Floating />

      <div className="inner">
        <div className="order_info_area">
          <Image
            src="/images/icon_complete.svg"
            alt="주문완료 아이콘"
            aria-hidden="true"
            width={64}
            height={64}
          />
          <p>
            주문이 정상적으로 <br />
            완료되었습니다!
          </p>
        </div>

        <div className="item_area border mb_16">
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

        <div className="list_area list_style07">
          <dl>
            <dt>주문번호</dt>
            <dd className="color_key_01">20240912345</dd>
          </dl>
          <dl>
            <dt>결제정보</dt>
            <dd>30,000원</dd>
          </dl>
        </div>

        <div className="mt_40 pb_80">
          <Link href={`/order/detail/${1}`} className="btn btn_style01 btn_size_52 w_full">
            주문 상세 보기
          </Link>
          <Link href="/" className="btn btn_style02 btn_size_52 w_full mt_12">
            홈으로 가기
          </Link>
        </div>
      </div>
    </PageWrap>
  );
};

export default OrderCompletePage;

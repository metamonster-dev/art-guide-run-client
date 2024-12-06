import Header from "@/app/shared/components/layout/header";
import Floating from "@/app/shared/components/layout/floating";
import BottomNav from "@/app/shared/components/layout/bottomNav";

const PromotionPage = () => {
  return (
    <>
      <div className="sticky_menu">
        <Header title="홍보/광고 문의" isBack />
      </div>
      
      <div id="contents" tabIndex={-1}>
        <Floating bottom={80} />
        <BottomNav />

      </div>
    </>
  );
};

export default PromotionPage;

import Header from "@/app/shared/components/layout/header";
import Floating from "@/app/shared/components/layout/floating";
import BottomNav from "@/app/shared/components/layout/bottomNav";

const NoticePage = () => {
  return (
    <>
      <div className="sticky_menu">
        <Header title="공지사항" isBack />
      </div>
      
      <div id="contents" tabIndex={-1}>
        <Floating bottom={80} />
        <BottomNav />

      </div>
    </>
  );
};

export default NoticePage;

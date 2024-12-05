import Header from "@/app/shared/components/layout/header";
import Footer from "@/app/shared/components/layout/footer";
import Floating from "@/app/shared/components/layout/floating";

const FindIdPage = () => {
  return (
    <>
      <div className="sticky_menu">
        <Header isLogo isSearch />
      </div>
      
      <div id="contents">
        <Floating className="b_80" />
      </div>
      
      <Footer />
    </>
  );
};

export default FindIdPage;

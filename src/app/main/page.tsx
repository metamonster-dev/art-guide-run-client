import useGetBanner from "@/app/main/_hooks/useGetBanner";
import Banner from "@/app/main/_components/banner";

const MainPage = () => {
  const banner = useGetBanner();
  return <Banner banner={banner} />;
};

export default MainPage;

"use client";

import { BannerType } from "@/app/main/_types/banner.type";
import { useRouter } from "next/navigation";

interface BannerProps {
  banner: BannerType;
}

const Banner = ({ banner }: BannerProps) => {
  const router = useRouter();

  const handleClickBanner = () => {
    router.push("/main/1?test=test");
  };
  return <div onClick={handleClickBanner}>{banner.title}</div>;
};

export default Banner;

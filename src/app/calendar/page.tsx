"use client";

import { useState } from "react";
import PageWrap from "@/app/shared/components/layout/pageWrap";
import Header from "@/app/shared/components/layout/header";
import Floating from "@/app/shared/components/layout/floating";
import BottomNav from "@/app/shared/components/layout/bottomNav";
import TabBtnSlider from "@/app/shared/components/slider/tabBtn";
import Calendar from "@/app/calendar/_components/calendar";

const CalendarPage = () => {
  const [tabActive, setTabActive] = useState("0");

  return (
    <PageWrap
      sticky={
        <>
          <Header title="캘린더" isBack />
          <TabBtnSlider
            className="tab_style02"
            tabs={[
              { id: "0", text: "전체" },
              { id: "1", text: "지원 공모사업" },
              { id: "2", text: "취업공고" },
              { id: "3", text: "창업/경영" },
              { id: "4", text: "교육사업" },
              { id: "5", text: "지역사업" },
              { id: "6", text: "기타행사" },
            ]}
            active={tabActive}
            setActive={setTabActive}
          />
        </>
      }
    >
      <Floating bottom={80} />
      <BottomNav active={"calendar"} />

      <div className="pt_24 pb_150 border_top_8">
        <div className="inner">
          <Calendar />
        </div>
      </div>
    </PageWrap>
  );
};

export default CalendarPage;

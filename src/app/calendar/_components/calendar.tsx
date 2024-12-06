"use client";

import { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import OfferingModal from "@/app/calendar/_components/offeringModal";

const Calendar = () => {
  const calendarRef = useRef<FullCalendar>(null);
  const calendarWrapRef = useRef<HTMLDivElement | null>(null);
  const [ariaLabel, setAriaLabel] = useState("월별 캘린더 테이블");
  const [offeringOpen, setOfferingOpen] = useState(false);

  const onOfferingClose = () => {
    setOfferingOpen(false);
  };

  const updateAriaLabel = () => {
    const currentTitle = calendarRef.current?.getApi()?.view.title;
    setAriaLabel(`현재 달력 : ${currentTitle}`);
  };

  useEffect(() => {
    const calendarEl = calendarWrapRef.current;
  
    if (calendarEl) {
      const handleEvent = (event: WheelEvent | KeyboardEvent | TouchEvent) => {
        const calendarApi = calendarRef.current?.getApi();
  
        // 스크롤 이벤트
        if (event instanceof WheelEvent) {
          event.preventDefault();
          if (event.deltaY < 0) calendarApi?.prev()
          else calendarApi?.next();
        }
  
        // 키보드 이벤트
        if (event instanceof KeyboardEvent) {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            calendarApi?.prev();
          } else if (event.key === "ArrowRight") {
            event.preventDefault();
            calendarApi?.next();
          }
        }
  
        // 터치 이벤트
        if (event instanceof TouchEvent) {
          if (event.type === "touchstart") {
            startX = event.touches[0].clientX;
          } else if (event.type === "touchend") {
            const endX = event.changedTouches[0].clientX;
            const diffX = startX - endX;
            if (Math.abs(diffX) > 50) {
              if (diffX > 0) calendarApi?.next()
              else calendarApi?.prev();
            }
          }
        }
  
        updateAriaLabel();
      };
  
      let startX = 0;
  
      // 이벤트 등록
      calendarEl.addEventListener("wheel", handleEvent as EventListener);
      calendarEl.addEventListener("keydown", handleEvent as EventListener);
      calendarEl.addEventListener("touchstart", handleEvent as EventListener);
      calendarEl.addEventListener("touchend", handleEvent as EventListener);
  
      return () => {
        // 이벤트 제거
        calendarEl.removeEventListener("wheel", handleEvent as EventListener);
        calendarEl.removeEventListener("keydown", handleEvent as EventListener);
        calendarEl.removeEventListener("touchstart", handleEvent as EventListener);
        calendarEl.removeEventListener("touchend", handleEvent as EventListener);
      };
    }
  }, []);

  return (
    <>
      <div className="calendar_area">
        <div
          id="calendar"
          tabIndex={0}
          role="application"
          aria-live="polite"
          aria-label={ariaLabel}
          ref={calendarWrapRef}
        >
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            locale="ko"
            height="auto"
            headerToolbar={{
              left: "",
              center: "title",
              right: "",
            }}
            titleFormat={({ date }) =>
              `${date.year}.${String(date.month + 1).padStart(2, "0")}`
            }
            dayCellContent={(args) => args.date.getDate().toString()}
            datesSet={() => {
              const tableEl = document.querySelector("table.fc-scrollgrid");
              if (tableEl && !tableEl.querySelector("caption")) {
                const caption = document.createElement("caption");
                caption.className = "hidden_text";
                caption.textContent = "캘린더 테이블 : 월별 일정 표시";
                tableEl.prepend(caption);
              }

              const headerEl = document.querySelector("table.fc-col-header");
              if (headerEl && !headerEl.querySelector("caption")) {
                const caption = document.createElement("caption");
                caption.className = "hidden_text";
                caption.textContent = "캘린더 테이블 : 월별 일정에서 요일 표시 영역";
                headerEl.prepend(caption);
              }
            }}

            // DATA
            events={[
              {
                title: "문화예술 지원사업",
                start: "2024-12-04",
                end: "2024-12-07",
              },
              {
                title: "문화예술 지원사업",
                start: "2024-12-05",
                allDay: true,
              },
              {
                title: "아트전시 박람회",
                start: "2024-12-12",
                end: "2024-12-15",
              },
            ]}
            eventClick={() => {
              setOfferingOpen(true);
            }}
          />
        </div>
      </div>

      {/* MODAL */}
      <OfferingModal open={offeringOpen} onClose={onOfferingClose} />
    </>
  );
}

export default Calendar;

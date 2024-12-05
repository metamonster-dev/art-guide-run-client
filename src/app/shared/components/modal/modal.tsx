import React, { useEffect } from "react";
import $ from "jquery";

interface ModalProps {
  type: "full" | "bottom" | "middle" | "msg";
  open: boolean;
  children: React.ReactNode;
}

const Modal = ({ type, open, children }: ModalProps) => {
  useEffect(() => {
    if (open) $('.modal_wrap button, .modal_wrap a').first().focus();
  }, [open]);
  
  useEffect(() => {
    // modal event
    $(document).on("click", ".modal_wrap", function (e) {
      const modal = $(e.target).parents(".modal_wrap");
      if (!modal.hasClass("modal_wrap")) {
        $(".modal_wrap").removeClass("active");
      }
    });
    $(document).on(
      "keydown",
      ".modal_wrap.middle.active, .modal_wrap.bottom.active",
      function (e) {
        if (e.key === "Escape") $(this).removeClass("active");
      }
    );
    $(document).on(
      "keydown",
      ".modal_wrap.active button, .modal_wrap.active a, .modal_wrap.active input",
      function (e) {
        const focusEls = $(
          ".modal_wrap.active button, .modal_wrap.active a, .modal_wrap.active input"
        );
        if ($(this).is(focusEls.last()) && !e.shiftKey && e.key === "Tab") {
          e.preventDefault();
          focusEls.first().focus();
        } else if (
          $(this).is(focusEls.first()) &&
          e.shiftKey &&
          e.key === "Tab"
        ) {
          e.preventDefault();
          focusEls.last().focus();
        }
      }
    );
  }, []);
  
  return open ? (
    <div className={`modal_wrap ${type} ${open ? "active" : ""}`}>
      <div className="modal_area">
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;

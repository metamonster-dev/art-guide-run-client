"use client";

import React, { useEffect } from "react";
import { SelectOption } from "@/app/shared/types/select.type";
import $ from "jquery";

interface CustomSelectProps {
  type?: "top";
  id: string;
  options: SelectOption[];
  placeholder?: string;
}

const CustomSelect = ({ 
  id, 
  type, 
  options, 
  placeholder, 
}: CustomSelectProps) => {
  useEffect(() => {
    $(document).on("click", ".select_custom button", function () {
      const expanded = $(this).parent().attr("aria-expanded") === "true";
      $(this).parent().attr("aria-expanded", (!expanded).toString());
      $(this).parent().toggleClass("active");
    });
    $(document).on("keydown", ".select_custom button", function (e) {
      const expanded = $(this).parent().attr("aria-expanded") === "true";

      if (e.key === "Enter") {
        e.preventDefault();
        $(this).parent().attr("aria-expanded", (!expanded).toString());
        $(this).parent().toggleClass("active");
      } else if (expanded && e.key === "ArrowDown") {
        e.preventDefault();
        $(this).parent().find("ul li").first().focus();
      } else if (expanded && (e.key === "Tab" || e.key === "Escape")) {
        e.preventDefault();
        $(this).parent().attr("aria-expanded", "false").removeClass("active");
        $(this).focus();
      }
    });
    $(document).on("click", ".select_custom ul li", function () {
      $(this)
        .parents(".select_custom")
        .attr("aria-expanded", "false")
        .removeClass("active");
      $(this)
        .parents(".select_custom")
        .find("button")
        .text($(this).text())
        .focus();
      if ($(this).attr("data-value") === "etc")
        $(this).parents(".select_custom").next().removeClass("d_none");
      else $(this).parents(".select_custom").next().addClass("d_none");
    });
    $(document).on("keydown", ".select_custom ul li", function (e) {
      e.preventDefault();
      if (e.key === "Enter") {
        $(this)
          .parents(".select_custom")
          .attr("aria-expanded", "false")
          .removeClass("active");
        $(this)
          .parents(".select_custom")
          .find("button")
          .text($(this).text())
          .focus();
        if ($(this).attr("data-value") === "etc")
          $(this).parents(".select_custom").next().removeClass("d_none");
        else $(this).parents(".select_custom").next().addClass("d_none");
      } else if (e.key === "ArrowDown") {
        $(this).next().length && $(this).next().focus();
      } else if (e.key === "ArrowUp") {
        $(this).prev().length && $(this).prev().focus();
      } else if (e.key === "Tab" || e.key === "Escape") {
        $(this)
          .parents(".select_custom")
          .attr("aria-expanded", "false")
          .removeClass("active");
        $(this).parents(".select_custom").find("button").focus();
      }
    });
  }, []);

  return (
    <div
      id={id}
      className={`select_custom ${type ?? ""}`}
      role="combobox"
      aria-expanded="false"
      aria-haspopup="listbox"
      aria-labelledby={`select_btn_${id}`}
    >
      <button
        type="button"
        id={`select_btn_${id}`}
        aria-controls={`select_option_${id}`}
      >
        {placeholder ?? options?.[0]?.text}
      </button>
      <ul id={`select_option_${id}`} role="listbox">
        {options?.length > 0 && options?.map((op, idx) => {
          return (
            <li key={idx} role="option" data-value={op.id} tabIndex={-1}>
              {op.text}
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default CustomSelect;

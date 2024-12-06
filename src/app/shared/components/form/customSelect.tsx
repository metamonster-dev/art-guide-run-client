"use client";

import React, { useEffect, useRef, useState } from "react";
import { SelectOption } from "@/app/shared/types/select.type";

interface CustomSelectProps {
  type?: "top";
  id: string;
  options: SelectOption[];
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  disabled?: boolean;
}

const CustomSelect = ({ 
  id, 
  type, 
  options, 
  placeholder, 
  disabled = false,
  value,
  setValue,
}: CustomSelectProps) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedText, setSelectedText] = useState<string | undefined>(
    placeholder ?? options?.[0]?.text
  );

  const toggleDropdown = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleOptionSelect = (option: SelectOption) => {
    setSelectedText(option.text);
    setValue?.(option.id);
    setIsExpanded(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement | HTMLLIElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (e.currentTarget.tagName === "BUTTON") {
        toggleDropdown();
      } else if (e.currentTarget.tagName === "LI") {
        const selectedOption = options.find(
          (op) => op.id === e.currentTarget.getAttribute("data-value")
        );
        if (selectedOption) handleOptionSelect(selectedOption);

        selectRef.current?.querySelector("button")?.focus();
      }
    } else if (isExpanded && (e.key === "Tab" || e.key === "Escape")) {
      e.preventDefault();
      setIsExpanded(false);
      selectRef.current?.querySelector("button")?.focus();
    } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const currentElement = document.activeElement as HTMLLIElement;
      const allOptions = selectRef.current?.querySelectorAll("li");
      if (!allOptions) return;

      const currentIndex = Array.from(allOptions).indexOf(currentElement);
      const nextIndex = e.key === "ArrowDown"
        ? (currentIndex + 1) % allOptions.length
        : (currentIndex - 1 + allOptions.length) % allOptions.length;

      allOptions[nextIndex]?.focus();
    }
  };

  useEffect(() => {
    setValue?.("");
    setSelectedText(placeholder ?? options?.[0]?.text);
  }, [placeholder, options, setValue]);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      id={id}
      className={`select_custom ${type ?? ""} ${isExpanded ? "active" : ""}`}
      role="combobox"
      aria-controls={`select_option_${id}`}
      aria-expanded={isExpanded}
      aria-haspopup="listbox"
      aria-labelledby={`select_btn_${id}`}
      ref={selectRef}
    >
      <button
        type="button"
        id={`select_btn_${id}`}
        disabled={disabled}
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
      >
        {selectedText}
      </button>
      <ul id={`select_option_${id}`} role="listbox">
        {options?.length > 0 && options?.map((op, idx) => {
          return (
            <li 
              key={idx} 
              role="option" 
              aria-selected={value === op.id}
              data-value={op.id} 
              tabIndex={0}
              onClick={() => handleOptionSelect(op)}
              onKeyDown={handleKeyDown}
            >
              {op.text}
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default CustomSelect;

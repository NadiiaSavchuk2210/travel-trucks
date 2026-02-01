"use client";

import { useMemo } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerProps {
  value?: string;
  onChange: (value: string) => void;
  error?: string;
  className?: string;
  placeholderText?: string;
}

export default function DatePicker({
  value,
  onChange,
  placeholderText,
}: DatePickerProps) {
  const selectedDate = useMemo<Date | null>(() => {
    if (!value) return null;
    const date = new Date(`${value}T00:00:00`);
    return isNaN(date.getTime()) ? null : date;
  }, [value]);

  return (
    <ReactDatePicker
      selected={selectedDate}
      onChange={(date: Date | null) =>
        onChange(date ? date.toISOString().slice(0, 10) : "")
      }
      placeholderText={placeholderText}
      dateFormat="yyyy-MM-dd"
      isClearable
      popperPlacement="bottom-start"
    />
  );
}

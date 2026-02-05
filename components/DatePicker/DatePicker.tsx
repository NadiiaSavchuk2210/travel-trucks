"use client";

import { useMemo } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from "./DatePicker.module.css";
import Icon from "../Icon/Icon";
import { format } from "date-fns";
import { enGB } from "date-fns/locale/en-GB";

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
      calendarClassName={css.myDatepicker}
      dateFormat="yyyy-MM-dd"
      minDate={new Date()}
      enableTabLoop={false}
      placeholderText={placeholderText}
      selected={selectedDate}
      showIcon={false}
      popperPlacement="bottom"
      onChange={(date: Date | null) => {
        if (!date) return onChange("");
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");

        onChange(`${year}-${month}-${day}`);
      }}
      isClearable={false}
      locale={enGB}
      calendarStartDay={1}
      formatWeekDay={(d) => d.slice(0, 3).toUpperCase()}
      renderCustomHeader={({ monthDate, decreaseMonth, increaseMonth }) => (
        <div className={css.header}>
          <button onClick={decreaseMonth} className={css.navBtn}>
            <Icon
              name="icon-arrow-left"
              label="Arrow left"
              className={css.navBtnIcon}
              width={9}
              height={16}
            />
          </button>
          <span>{format(monthDate, "MMMM yyyy", { locale: enGB })}</span>
          <button onClick={increaseMonth} className={css.navBtn}>
            <Icon
              name="icon-arrow-right"
              label="Arrow right"
              className={css.navBtnIcon}
              width={9}
              height={16}
            />
          </button>
        </div>
      )}
    />
  );
}

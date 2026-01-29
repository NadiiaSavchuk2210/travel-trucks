import { clsx } from "clsx";
import css from "./CheckableInput.module.css";

type CheckableInputProps = {
  type: "checkbox" | "radio";
  id: string;
  name?: string;
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  icon: React.ReactNode;
};

export const CheckableInput = ({
  type,
  id,
  name,
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  icon,
}: CheckableInputProps) => {
  return (
    <label
      className={css.checkableLabel}
      data-checked={checked || defaultChecked}
    >
      <input
        type={type}
        id={id}
        name={name}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
        className={css.checkableInput}
      />

      <span className={clsx(css.custom, css[type])}>
        <span className={css.checkableIcon}>{icon}</span>
      </span>

      {label && (
        <span className={clsx(css.checkableText, disabled && css.disabledText)}>
          {label}
        </span>
      )}
    </label>
  );
};

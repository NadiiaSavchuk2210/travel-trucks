import clsx from "clsx";
import css from "./TextInput.module.css";

type TextInputProps = {
  id: string;
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
};

export const TextInput = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  disabled,
  icon,
  iconPosition = "left",
}: TextInputProps) => {
  return (
    <label className={css.textInputLabel}>
      {label && <span className={css.textInputLabelText}>{label}</span>}
      <div
        className={clsx(
          css.textInputWrapper,
          icon && css.hasIcon,
          icon && iconPosition === "left" && css.left,
          icon && iconPosition === "right" && css.right,
        )}
      >
        <input
          id={id}
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder || " "}
          disabled={disabled}
          className={css.textInput}
        />
        {icon && iconPosition === "left" && (
          <span className={css.textInputIcon}>{icon}</span>
        )}
        {icon && iconPosition === "right" && (
          <span className={css.textInputIcon}>{icon}</span>
        )}
      </div>
    </label>
  );
};

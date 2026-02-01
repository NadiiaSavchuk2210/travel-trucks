import clsx from "clsx";
import css from "./TextInput.module.css";

type TextInputProps = {
  id: string;
  label?: string;
  name: string;
  value?: string;
  defaultValue?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  placeholder?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  minLength?: number;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
  hasError?: boolean;
  errorMessage?: string;
};

export const TextInput = ({
  id,
  label,
  name,
  value,
  defaultValue,
  onChange,
  placeholder,
  disabled,
  icon,
  iconPosition = "left",
  minLength = 3,
  required,
  multiline = false,
  rows = 4,
  hasError = false,
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
          hasError && css.errorInputWrapper,
        )}
      >
        {multiline ? (
          <textarea
            id={id}
            name={name}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            placeholder={!value ? placeholder : undefined}
            disabled={disabled}
            className={clsx(css.textarea, hasError && css.errorInput)}
            rows={rows}
          />
        ) : (
          <input
            id={id}
            type="text"
            name={name}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            placeholder={placeholder || " "}
            disabled={disabled}
            className={clsx(css.textInput, hasError && css.errorInput)}
            minLength={minLength}
            required={required}
          />
        )}
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

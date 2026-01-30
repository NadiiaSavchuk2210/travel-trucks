import clsx from "clsx";
import css from "./TextInput.module.css";

type TextInputProps = {
  id: string;
  label?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  minLength?: number;
  required?: boolean;
  name: string;
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
          name={name}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          placeholder={placeholder || " "}
          disabled={disabled}
          className={css.textInput}
          minLength={minLength}
          required={required}
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

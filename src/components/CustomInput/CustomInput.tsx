import React from "react";
import styles from "./CustomInput.module.scss";
import { CustomInputProps } from "./CustomInputProps";

const CustomInput: React.FC<CustomInputProps> = ({
  type,
  name,
  placeholder,
  disabled,
  value,
  label,
  onChange,
  ...rest
}) => {
  const inputClassName = `${styles["customInputContainer"]} ${
    disabled ? styles["isDisabled"] : ""
  } ${name === "submit" ? styles["submitButton"] : ""} ${
    name === "cancel" ? styles["cancelButton"] : ""
  }`;

  return (
    <div className={inputClassName}>
      {label && <label>{label}</label>}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={(e) => {
          onChange(e);
        }}
        {...rest}
      />
    </div>
  );
};

export default CustomInput;

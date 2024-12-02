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
  size = "default",
  onChange,
  ...rest
}) => {
  const inputClassName = `
    ${styles.customInputContainer} 
    ${size === "small" ? styles["customInputContainer--small"] : ""} 
    ${disabled ? styles["isDisabled"] : ""}
  `.trim();

  return (
    <div className={inputClassName}>
      {label && <label>{label}</label>}

      <input
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={(e) => {
          onChange(e);
        }}
        {...rest}
      />
    </div>
  );
};

export default CustomInput;

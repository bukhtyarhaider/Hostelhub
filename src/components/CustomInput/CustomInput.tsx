import React from "react";
import styles from "./CustomInput.module.scss";
import { CustomInputProps } from "./CustomInputProps";

const CustomInput: React.FC<CustomInputProps> = ({
  type,
  placeholder,
  isDisabled,
  value,
  setValue,
  label,
  onChange,
}) => {
  const inputClassName = `${styles["customInputContainer"]} ${
    isDisabled ? styles["isDisabled"] : ""
  }`;

  return (
    <div className={inputClassName}>
      {label && <label>{label}</label>}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={isDisabled}
        onChange={(e) => {
          setValue(e.target.value);
          if (onChange) {
            onChange(e);
          }
        }}
      />
    </div>
  );
};

export default CustomInput;

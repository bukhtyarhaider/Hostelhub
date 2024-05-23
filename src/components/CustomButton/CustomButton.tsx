import React from "react";
import styles from "./CustomButton.module.scss";
import { CustomButtonProps } from "./CustomButtonProps";

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  variant,
  size,
  extraWidth,
  isDisabled,
  onClick,
}) => {
  const buttonClassName = `${styles["custom-button"]}  ${styles[variant]} ${
    styles[size]
  } ${extraWidth ? styles["extra-width"] : ""} ${
    styles[isDisabled ? "isDisabled" : ""]
  }`;

  return (
    <button className={buttonClassName} onClick={onClick} disabled={isDisabled}>
      {title}
    </button>
  );
};

export default CustomButton;

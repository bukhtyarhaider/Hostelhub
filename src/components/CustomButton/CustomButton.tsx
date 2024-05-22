import React from "react";
import styles from "./CustomButton.module.scss";
import { CustomButtonProps } from "./CustomButtonProps";

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  variant,
  size,
  extraWidth,
  onClick,
}) => {
  const buttonClassName = `${styles["custom-button"]}  ${styles[variant]} ${
    styles[size]
  } ${extraWidth ? styles["extra-width"] : ""}`;

  return (
    <button className={buttonClassName} onClick={onClick}>
      {title}
    </button>
  );
};

export default CustomButton;

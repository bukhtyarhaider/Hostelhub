import React from "react";
import { ctaBG } from "../../assets";
import CustomButton from "../CustomButton/CustomButton";
import styles from "./CTA.module.scss";
import { CTAProps } from "./CTAProp";

const CTA: React.FC<CTAProps> = ({
  primaryText,
  secondaryText,
  onPrimaryBtn,
  onSecondaryBtn,
}) => {
  return (
    <div className={styles.authCTAContainer}>
      <div className={styles.contentWrapper}>
        <h2>{primaryText}</h2>
        <p>{secondaryText}</p>
      </div>
      <div className={styles.buttonsWrapper}>
        <CustomButton
          title="Sign In"
          variant="outline"
          size="small"
          onClick={onPrimaryBtn}
        />
        <CustomButton
          title="Register"
          variant="filled"
          size="small"
          onClick={onSecondaryBtn}
        />
      </div>
      <img src={ctaBG} className={styles.ctaBG} alt="CTA Background" />
    </div>
  );
};

export default CTA;

import { ctaBG } from "../../assets";
import CustomButton from "../CustomButton/CustomButton";
import styles from "./CTA.module.scss";
import { CTAProps } from "./CTAProp";

const CTA: React.FC<CTAProps> = ({
  primaryText,
  secondaryText,
  primaryBtn,
  secondaryBtn,
}) => {
  return (
    <div className={styles.authCTAContainer}>
      <div className={styles.contentWrapper}>
        <h2>{primaryText}</h2>
        <p>{secondaryText}</p>
      </div>
      <div className={styles.buttonsWrapper}>
        <CustomButton variant={"outline"} size={"medium"} {...primaryBtn} />
        <CustomButton variant={"filled"} size={"medium"} {...secondaryBtn} />
      </div>

      <img src={ctaBG} className={styles.ctaBG} />
    </div>
  );
};

export default CTA;

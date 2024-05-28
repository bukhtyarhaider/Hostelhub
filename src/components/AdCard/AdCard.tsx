import React from "react";
import styles from "./AdCard.module.scss";
import { AdCardProps } from "./AdCardProps";
import CustomButton from "../CustomButton/CustomButton";

const AdCard: React.FC<AdCardProps> = ({
  image,
  title,
  location,
  description,
  onShowDetails,
}) => {
  return (
    <div className={styles.adCardContainer}>
      <div className={styles.imageContainer}>
        <div className={styles.imgWrapper}>
          <img src={image} />
        </div>
      </div>
      <div className={styles.contentContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.link}>{location}</p>
        <p className={styles.description}>{description}</p>
        <CustomButton
          title="Show Details"
          variant="filled"
          extraWidth
          onClick={onShowDetails}
          size="small"
        />
      </div>
    </div>
  );
};

export default AdCard;

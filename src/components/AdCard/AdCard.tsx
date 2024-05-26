import React from "react";
import styles from "./AdCard.module.scss";
import { AdCardProps } from "./AdCardProps";
import CustomButton from "../CustomButton/CustomButton";

const AdCard: React.FC<AdCardProps> = ({
  image,
  title,
  location,
  description,
  showDetailsBtn,
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
        <CustomButton extraWidth {...showDetailsBtn} />
      </div>
    </div>
  );
};

export default AdCard;

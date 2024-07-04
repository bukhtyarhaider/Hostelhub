import React, { useState } from "react";
import CustomButton from "../../../components/CustomButton/CustomButton";
import { hostelNoticeCardsData } from "../../../content";
import styles from "./MyHostelNotices.module.scss";

const NoticeDetail = ({ data, onBack }) => {
  return (
    <div className={styles.noticeDetail}>
      <button className={styles.backButton} onClick={onBack}>
        Back
      </button>
      <h6 className={styles.title}>Urgent Notice!</h6>
      {data.detailedDescription.map((desc, index) => (
        <div className={styles.detail} key={index}>
          <h6>{desc.heading}</h6>
          <p>{desc.description}</p>
        </div>
      ))}
      <p className={styles.signature}>{data.wardenSign}</p>
      <p className={styles.date}>{data.date}</p>
    </div>
  );
};

const MyHostelNotices = () => {
  const [selectedNotice, setSelectedNotice] = useState(null);

  const handleReadClick = (card) => {
    setSelectedNotice(card);
  };

  const handleBackClick = () => {
    setSelectedNotice(null);
  };

  return (
    <div className={styles.myHostelNoticesContainer}>
      {selectedNotice ? (
        <NoticeDetail data={selectedNotice} onBack={handleBackClick} />
      ) : (
        hostelNoticeCardsData.map((card, index) => (
          <div className={styles.noticeCard} key={index}>
            <div className={styles.cardHeader}>
              <h6 className={styles.cardTitle}>{card.title}</h6>
              {card.newNotice && <div className={styles.alert}>New</div>}
            </div>
            <div className={styles.cardBody}>
              <p>{card.description}</p>
              <p className={styles.date}>{card.date}</p>
            </div>
            <div className={styles.cardFooter}>
              <div className={styles.buttons}>
                <CustomButton
                  title={card.newNotice ? "Mark As Read" : "Opened"}
                  variant={"outline"}
                  size={"medium"}
                  disabled={!card.newNotice}
                />
                <CustomButton
                  onClick={() => handleReadClick(card)}
                  title={"Read"}
                  variant={"filled"}
                  size={"medium"}
                />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyHostelNotices;

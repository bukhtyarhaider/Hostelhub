import React, { useState } from "react";
import styles from "./MyHostel.module.scss";
import MyHostelDetails from "./MyHostelDetails/MyHostelDetails";
import MyHostelNotices from "./MyHostelNotices/MyHostelNotices";

const MyHostel = () => {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <div className={styles.myHostelContainer}>
      <div className={styles.tabs}>
        <button
          className={activeTab === "details" ? styles.activeTab : ""}
          onClick={() => setActiveTab("details")}
        >
          Hostel Details
        </button>
        <button
          className={activeTab === "notices" ? styles.activeTab : ""}
          onClick={() => setActiveTab("notices")}
        >
          Hostel Notices
        </button>
      </div>
      <div className={styles.tabContent}>
        {activeTab === "details" && <MyHostelDetails />}
        {activeTab === "notices" && <MyHostelNotices />}
      </div>
    </div>
  );
};

export default MyHostel;

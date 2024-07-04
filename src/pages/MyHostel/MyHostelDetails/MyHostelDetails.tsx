import { infoIcon } from "../../../assets";
import styles from "./MyHostelDetails.module.scss";
import { Flex, Progress } from "antd";
const MyHostelDetails = () => {
  return (
    <div className={styles.myHostelDetailsContainer}>
      <h3 className={styles.title}>Downing Hostel</h3>

      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <h4 className={styles.cardTitle}>Reservation Holder Details</h4>
          <div className={styles.detail}>
            <h5>Reservation Holder Name:</h5>
            <p>Naomi Doe</p>
          </div>
          <div className={styles.detail}>
            <h5>Reservation Holder Email:</h5>
            <p>naomi@gmail.com</p>
          </div>
          <div className={styles.detail}>
            <h5>Reservation Holder Phone Number:</h5>
            <p>+1 (206) 349 9724</p>
          </div>
          <div className={styles.detail}>
            <h5>Start Date:</h5>
            <p>12-May-2024</p>
          </div>
          <div className={styles.detail}>
            <h5>End Date:</h5>
            <p>12-May-2026</p>
          </div>
        </div>
        <div className={styles.card}>
          <h4 className={styles.cardTitle}>Reservation Overview</h4>
          <div className={styles.notice}>
            <div className={styles.iconWrapper}>
              <img src={infoIcon} />
            </div>
            <div className={styles.contentWrapper}>
              <h2>Important:</h2>
              <p>
                Your profile details have been used for your reservation at
                “Downing Hostel”. These details can’t be changed manually by
                your user portal. Contact your warden if you wish to change
                anything.
              </p>
            </div>
          </div>

          <div className={styles.daysDetails}>
            <div className={styles.daysHeader}>
              <h2>Days</h2>
              <h2>12 of 30 Days</h2>
            </div>
            <Flex vertical gap="small">
              <Progress strokeLinecap="butt" percent={45} showInfo={false} />
            </Flex>

            <p className={styles.daysDescription}>
              18 days remaining until your reservation
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <h4 className={styles.cardTitle}>Hostel Details</h4>
          <div className={styles.detail}>
            <h5>Warden Name:</h5>
            <p>Mr. John Doe</p>
          </div>
          <div className={styles.detail}>
            <h5>Warden Email:</h5>
            <p>warden@downinghostel.com</p>
          </div>
          <div className={styles.detail}>
            <h5>Warden Number:</h5>
            <p>+1 (206) 349 9724</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyHostelDetails;

import { infoIcon } from "../../../assets";
import { hostelDetailsData } from "../../../content";
import styles from "./MyHostelDetails.module.scss";
import { Flex, Progress } from "antd";

const MyHostelDetails = () => {
  const spentDays = hostelDetailsData.reservation_overview.spent_days;
  const totalDays = hostelDetailsData.reservation_overview.total_days;
  const percent = (spentDays / totalDays) * 100;

  return (
    <div className={styles.myHostelDetailsContainer}>
      <h3 className={styles.title}>{hostelDetailsData.hostel_name}</h3>

      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <h4 className={styles.cardTitle}>Reservation Holder Details</h4>
          <div className={styles.detail}>
            <h5>Reservation Holder Name:</h5>
            <p>{hostelDetailsData.reservation_holder_details.holder_name}</p>
          </div>
          <div className={styles.detail}>
            <h5>Reservation Holder Email:</h5>
            <p>{hostelDetailsData.reservation_holder_details.holder_email}</p>
          </div>
          <div className={styles.detail}>
            <h5>Reservation Holder Phone Number:</h5>
            <p>
              {hostelDetailsData.reservation_holder_details.holder_phone_number}
            </p>
          </div>
          <div className={styles.detail}>
            <h5>Start Date:</h5>
            <p>{hostelDetailsData.reservation_holder_details.start_date}</p>
          </div>
          <div className={styles.detail}>
            <h5>End Date:</h5>
            <p>{hostelDetailsData.reservation_holder_details.end_date}</p>
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
              <p>{hostelDetailsData.reservation_overview.alert}</p>
            </div>
          </div>

          <div className={styles.daysDetails}>
            <div className={styles.daysHeader}>
              <h2>Days</h2>
              <h2>
                {hostelDetailsData.reservation_overview.spent_days} of{" "}
                {hostelDetailsData.reservation_overview.total_days} Days
              </h2>
            </div>
            <Flex vertical gap="small">
              <Progress
                strokeLinecap="butt"
                percent={percent}
                showInfo={false}
              />
            </Flex>

            <p className={styles.daysDescription}>
              {hostelDetailsData.reservation_overview.remaining_days} days
              remaining until your reservation
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <h4 className={styles.cardTitle}>Hostel Details</h4>
          <div className={styles.detail}>
            <h5>Warden Name:</h5>
            <p>{hostelDetailsData.hostel_details.warden_name}</p>
          </div>
          <div className={styles.detail}>
            <h5>Warden Email:</h5>
            <p>{hostelDetailsData.hostel_details.warden_email}</p>
          </div>
          <div className={styles.detail}>
            <h5>Warden Number:</h5>
            <p>{hostelDetailsData.hostel_details.warden_phone_number}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyHostelDetails;

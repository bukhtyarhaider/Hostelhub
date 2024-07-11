import React from "react";
import CustomButton from "../../../components/CustomButton/CustomButton";
import styles from "./ReviewConfirm.module.scss";

interface ReviewConfirmProps {
  formData: any;
}

const ReviewConfirm: React.FC<ReviewConfirmProps> = ({ formData }) => {
  return (
    <div className={styles.reviewConfirmContainer}>
      <h2 className={styles.heading}>Review & Confirm</h2>

      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <h4 className={styles.cardTitle}>Your Details</h4>
          <div className={styles.detail}>
            <h5>Hostel Name:</h5>
            <p>{formData.hostelName}</p>
          </div>
          <div className={styles.detail}>
            <h5>Hostel Type:</h5>
            <p>{formData.hostelType}</p>
          </div>
          <div className={styles.detail}>
            <h5>Hostel ID:</h5>
            <p>{formData.hostelId}</p>
          </div>
          <div className={styles.detail}>
            <h5>Room Number:</h5>
            <p>{formData.roomNumber}</p>
          </div>
          <div className={styles.detail}>
            <h5>Room Type:</h5>
            <p>{formData.roomType}</p>
          </div>
          <div className={styles.detail}>
            <h5>Stay Duration:</h5>
            <p>{formData.stayDuration}</p>
          </div>
          <div className={styles.detail}>
            <h5>Start Date:</h5>
            <p>{formData.startDate}</p>
          </div>
          <div className={styles.detail}>
            <h5>End Date:</h5>
            <p>{formData.endDate}</p>
          </div>
        </div>

        <div className={styles.card}>
          <h4 className={styles.cardTitle}>Reservation Details</h4>
          <div className={styles.detail}>
            <h5>Duration:</h5>
            <p>{"duration"}</p>
          </div>
          <div className={styles.detail}>
            <h5>Start Date:</h5>
            <p>{"start_date"}</p>
          </div>
          <div className={styles.detail}>
            <h5>End Date:</h5>
            <p>{"end_date"}</p>
          </div>
          <div className={styles.detail}>
            <h5>Hostel Type:</h5>
            <p>{"hostel_type"}</p>
          </div>
          <div className={styles.detail}>
            <h5>Rent (per month):</h5>
            <p>{"rent"}</p>
          </div>
        </div>

        <div className={styles.card}>
          <h4 className={styles.cardTitle}>Your Documents</h4>
          {formData.cnicFront && (
            <div className={styles.detail}>
              <div>
                <p>CNIC Front Side</p>
                <p>{formData.cnicFront.name}</p>
              </div>
              <CustomButton
                title={"Download"}
                variant={"filled"}
                size={"medium"}
              />
            </div>
          )}
          {formData.cnicBack && (
            <div className={styles.detail}>
              <div>
                <p>CNIC Back Side</p>
                <p>{formData.cnicBack.name}</p>
              </div>
              <CustomButton
                title={"Download"}
                variant={"filled"}
                size={"medium"}
              />
            </div>
          )}
          {formData.studentId && (
            <div className={styles.detail}>
              <div>
                <p>Student ID</p>
                <p>{formData.studentId.name}</p>
              </div>
              <CustomButton
                title={"Download"}
                variant={"filled"}
                size={"medium"}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewConfirm;

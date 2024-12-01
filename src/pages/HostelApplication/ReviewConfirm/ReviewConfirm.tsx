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
            <h5>Full Name:</h5>
            <p>{formData.fullName}</p>
          </div>
          <div className={styles.detail}>
            <h5>Email:</h5>
            <p>{formData.email}</p>
          </div>
          <div className={styles.detail}>
            <h5>Phone Number:</h5>
            <p>{formData.phoneNumber}</p>
          </div>
          <div className={styles.detail}>
            <h5>Selected Hostel:</h5>
            <p>{formData.hostelName}</p>
          </div>
          <div className={styles.detail}>
            <h5>Selected Room:</h5>
            <p>{formData.roomNumber}</p>
          </div>
        </div>

        <div className={styles.card}>
          <h4 className={styles.cardTitle}>Reservation Details</h4>
          <div className={styles.detail}>
            <h5>Duration:</h5>
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
          <div className={styles.detail}>
            <h5>Hostel Type:</h5>
            <p>{formData.hostelType}</p>
          </div>
          <div className={styles.detail}>
            <h5>Rent (per month):</h5>
            <p>Rs: {formData.hostelRent}</p>
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

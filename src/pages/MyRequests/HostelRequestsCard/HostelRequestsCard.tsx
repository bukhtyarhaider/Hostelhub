import { useState } from "react";
import CustomButton from "../../../components/CustomButton/CustomButton";
import RequestDecisionModal from "../RequestDecisionModal/RequestDecisionModal";
import styles from "./HostelRequestsCard.module.scss";
import { HostelRequestsCardProps } from "./HostelRequestsCardProps";

const HostelRequestsCard: React.FC<HostelRequestsCardProps> = ({
  applicationData,
}) => {
  const [isDecisionModalOpen, setIsDecisionModalOpen] = useState(false);

  const toggleDecisionModal = () => {
    setIsDecisionModalOpen(!isDecisionModalOpen);
  };
  return (
    <>
      <div className={styles.hostelRequestsCardContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.imgWrapper}>
            <img src={applicationData.hostel.image} alt="Hostel" />
          </div>
          <div className={styles.contentWrapper}>
            <div className={styles.content}>
              <h2 className={styles.title}>{applicationData.hostel.name}</h2>
              <p>{applicationData.hostel.location}</p>
              <p>{applicationData.hostel.type}</p>
              <p>{`Rs. ${applicationData.booking.hostelRent}`}</p>
            </div>
            <div className={styles.button}>
              <CustomButton
                title="Show Details"
                variant="filled"
                extraWidth
                onClick={() => {
                  toggleDecisionModal();
                }}
                size="small"
                disabled={applicationData.status === "pending"}
              />
            </div>
          </div>
        </div>
        <div className={styles.rightSide}>
          {applicationData.status === "pending" ? (
            <div className={styles.pending}>Pending</div>
          ) : (
            <CustomButton
              title="Show Details"
              variant="filled"
              onClick={() => {
                toggleDecisionModal();
              }}
              size="small"
            />
          )}
        </div>
      </div>
      <RequestDecisionModal
        isDecisionModalOpen={isDecisionModalOpen}
        toggleDecisionModal={toggleDecisionModal}
        applicationData={applicationData}
      />
    </>
  );
};

export default HostelRequestsCard;

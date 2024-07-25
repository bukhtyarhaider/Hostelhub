import { useState } from "react";
import CustomButton from "../../../components/CustomButton/CustomButton";
import RequestDecisionModal from "../RequestDecisionModal/RequestDecisionModal";
import styles from "./HostelRequestsCard.module.scss";
import { HostelRequestsCardProps } from "./HostelRequestsCardProps";

const HostelRequestsCard: React.FC<HostelRequestsCardProps> = ({
  image,
  title,
  location,
  type,
  price,
  status,
  decisionDetails,
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
            <img src={image} alt="Hostel" />
          </div>
          <div className={styles.contentWrapper}>
            <div className={styles.content}>
              <h2 className={styles.title}>{title}</h2>
              <p>{location}</p>
              <p>{type}</p>
              <p>{price}</p>
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
                disabled={status === "Pending"}
              />
            </div>
          </div>
        </div>
        <div className={styles.rightSide}>
          <CustomButton
            title="Show Details"
            variant="filled"
            onClick={() => {
              toggleDecisionModal();
            }}
            size="small"
            disabled={status === "Pending"}
          />
        </div>

        {status === "Pending" && <div className={styles.pending}>Pending</div>}
      </div>
      <RequestDecisionModal
        isDecisionModalOpen={isDecisionModalOpen}
        toggleDecisionModal={toggleDecisionModal}
        status={status}
        decisionDetails={decisionDetails}
      />
    </>
  );
};

export default HostelRequestsCard;

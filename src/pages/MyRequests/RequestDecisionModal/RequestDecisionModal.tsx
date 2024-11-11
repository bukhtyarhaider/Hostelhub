import { Modal } from "antd";
import styles from "./RequestDecisionModal.module.scss";
import { crossIcon } from "../../../assets";
import CustomButton from "../../../components/CustomButton/CustomButton";
import { RequestDecisionModalProps } from "./RequestDecisionModalProps";

const RequestDecisionModal: React.FC<RequestDecisionModalProps> = ({
  isDecisionModalOpen,
  toggleDecisionModal,
  status,
}) => {
  return (
    <Modal
      open={isDecisionModalOpen}
      onCancel={toggleDecisionModal}
      centered
      footer={null}
      closable={false}
      width={600}
    >
      <div className={styles.modalBody}>
        <div className={styles.header}>
          <div />
          <h2 className={styles.title}>Hostel Request Decision</h2>
          <img src={crossIcon} onClick={toggleDecisionModal} />
        </div>

        <div className={styles.body}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.heading}>Decision Result:</h3>
              <div className={styles[status]}>{status}</div>
            </div>
            {/* {TODO: Need to fix this Decision modal later} */}
            <div className={styles.cardContent}>
              <p className={styles.name}>Dear Miss Naomi!</p>

              <p className={styles.signature}>Warden Signature</p>
              <p className={styles.date}>Dated: 2-May-2024</p>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <CustomButton
            title={"Cancel"}
            variant={"outline"}
            size={"medium"}
            onClick={toggleDecisionModal}
          />
          {status === "approved" && (
            <CustomButton
              title={"Book This Hostel"}
              variant={"filled"}
              size={"medium"}
            />
          )}
        </div>
      </div>
    </Modal>
  );
};

export default RequestDecisionModal;

import { Modal } from "antd";
import styles from "./RequestDecisionModal.module.scss";
import { crossIcon } from "../../../assets";
import CustomButton from "../../../components/CustomButton/CustomButton";
import { RequestDecisionModalProps } from "./RequestDecisionModalProps";
import { BookingApplication } from "../../../types/types";

const RequestDecisionModal: React.FC<RequestDecisionModalProps> = ({
  isDecisionModalOpen,
  toggleDecisionModal,
  applicationData,
}) => {
  interface NoticeProps {
    application: BookingApplication;
    wardenName?: string;
    reason?: string;
  }

  const Notice: React.FC<NoticeProps> = ({
    application,
    wardenName = "",
    reason = "",
  }) => {
    const { fullName, hostel, booking, status } = application;

    if (status === "approved") {
      return (
        <div>
          <h2>Hostel Room Allocation Confirmation</h2>
          <p>Dear {fullName},</p>
          <p>
            We are pleased to inform you that your request for accommodation at{" "}
            <strong>{hostel.name}</strong> has been <strong>approved</strong>.
            Below are the details of your allocated room:
          </p>
          <ul>
            <li>
              <strong>Room Number:</strong> {booking.roomNumber}
            </li>
            <li>
              <strong>Location:</strong> {hostel.location}
            </li>
            <li>
              <strong>Room Rent:</strong> PKR {booking.hostelRent}
            </li>
            <li>
              <strong>Accommodation Type:</strong> {booking.roomType}
            </li>
            <li>
              <strong>Stay Duration:</strong> {booking.stay.duration} (
              {booking.stay.startDate} to {booking.stay.endDate})
            </li>
          </ul>
          <p>
            Please proceed to complete the necessary documentation and fee
            payment at the hostel office.
          </p>
          <br />
          <p>Regards,</p>
          <p>
            {wardenName}
            Warden, {hostel.name}
          </p>
        </div>
      );
    } else if (status === "rejected") {
      return (
        <div>
          <h2>Hostel Room Request Declined</h2>
          <p>Dear {fullName},</p>
          <br />
          <p>
            We regret to inform you that your request for accommodation at{" "}
            <strong>{hostel.name}</strong> has been <strong>declined</strong>
            {reason ? ` due to ${reason}.` : "."}
          </p>
          <br />
          <p>
            We encourage you to reach out to the hostel office for any further
            assistance or alternative arrangements.
          </p>
          <br />
          <p>Regards,</p>
          <p>
            {wardenName}
            Warden, {hostel.name}
          </p>
        </div>
      );
    }

    return null;
  };

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
              <div className={styles[applicationData.status]}>
                {applicationData.status}
              </div>
            </div>
            <div className={styles.cardContent}>
              <Notice application={applicationData} />
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
          {applicationData.status === "approved" && (
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

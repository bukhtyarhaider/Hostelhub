import { BookingApplication } from "../../../types/types";

export interface RequestDecisionModalProps {
  /**
   * Flag to determine if the decision modal is open.
   */
  isDecisionModalOpen: boolean;

  /**
   * Function to toggle the decision modal.
   */
  toggleDecisionModal: () => void;

  applicationData: BookingApplication;

  onBookThisHostel: () => void;
}

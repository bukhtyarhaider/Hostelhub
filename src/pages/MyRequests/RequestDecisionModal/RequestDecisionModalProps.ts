import { BookingApplicationStatus } from "../../../types/types";

export interface RequestDecisionModalProps {
  /**
   * Flag to determine if the decision modal is open.
   */
  isDecisionModalOpen: boolean;

  /**
   * Function to toggle the decision modal.
   */
  toggleDecisionModal: () => void;

  /**
   * The status of the request decision.
   */
  status: BookingApplicationStatus;
}

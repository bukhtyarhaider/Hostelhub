import { BookingApplication } from "../../../types/types";

export interface HostelRequestsCardProps {
  applicationData: BookingApplication;
  onBookThisHostel: () => void;
}

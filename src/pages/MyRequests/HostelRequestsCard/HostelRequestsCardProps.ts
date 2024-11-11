import { BookingApplicationStatus } from "../../../types/types";

export interface HostelRequestsCardProps {
  /**
   * The image source for the hostel request card.
   */
  image: string;

  /**
   * The title of the hostel request.
   */
  title: string;

  /**
   * The location of the hostel.
   */
  location: string;

  /**
   * The type of the hostel.
   */
  type: string;

  /**
   * The price of the hostel.
   */
  price: string;

  /**
   * The status of the request decision.
   */
  status: BookingApplicationStatus;
}

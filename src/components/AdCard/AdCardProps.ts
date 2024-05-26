import { CustomButtonProps } from "../CustomButton/CustomButtonProps";

/**
 * Props for the AdCard component.
 */
export interface AdCardProps {
  /**
   * The title of the card.
   */
  title: string;

  /**
   * The description of the card.
   */
  description: string;

  /**
   * The URL of the image to be displayed on the card.
   */
  image: string;

  /**
   * The location information to be displayed on the card.
   */
  location: string;

  /**
   * Properties for the show details button.
   */
  showDetailsBtn: CustomButtonProps;
}

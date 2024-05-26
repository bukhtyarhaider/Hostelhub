import { CustomButtonProps } from "../CustomButton/CustomButtonProps";

export interface CTAProps {
  primaryText: string;
  secondaryText: string;
  primaryBtn: Partial<CustomButtonProps>;
  secondaryBtn: Partial<CustomButtonProps>;
}

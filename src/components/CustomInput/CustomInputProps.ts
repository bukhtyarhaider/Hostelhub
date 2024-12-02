/**
 * Props for the CustomInput component.
 */
export interface CustomInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  /**
   * The type of the input field (e.g., "text", "password", "email").
   */
  type: string;

  /**
   * The placeholder text for the input field.
   */
  placeholder?: string;

  /**
   * Boolean to disable the input field.
   */
  disabled?: boolean;

  /**
   * The value of the input field.
   */
  value: string;

  /**
   * The label text for the input field.
   */
  label?: string;

  /**
   * The size of the input field.
   * Default is "small". Other sizes can be added later.
   */
  size?: "small" | "default";

  /**
   * Event handler for the input change.
   */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

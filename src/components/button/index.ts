import Button from "./button";

export interface ButtonProps {
  type?: "submit" | "reset" | "button";
  label: string;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  fullRounded?: boolean;
  className?: string;
  icon?: React.ReactNode;
  iconClass?: string;
  loading?: boolean;
  loadingColor?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default Button;

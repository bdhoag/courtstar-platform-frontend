import ConfirmAlert from "./confirm-alert";

export interface AlertProps {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel?: () => void;
}

export interface ConfirmAlertProps extends AlertProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
}

export default ConfirmAlert;

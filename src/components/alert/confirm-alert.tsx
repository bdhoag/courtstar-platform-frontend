import ConfirmOptions, { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

interface CustomConfirmOptions extends ConfirmOptions {
  customUI?: ({ onClose }: { onClose: () => void }) => JSX.Element;
}

const showAlert = (options: CustomConfirmOptions) => {
  confirmAlert(options);
};

export default showAlert;

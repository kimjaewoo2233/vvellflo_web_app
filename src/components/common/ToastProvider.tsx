"use client";

import {
  ToastContainer,
  ToastContainerProps,
  CloseButtonProps,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TOAST_AUTO_CLOSE = 3200;

const ToastCloseButton = ({ closeToast }: CloseButtonProps) => (
  <button
    type="button"
    onClick={closeToast}
    className="vvellflo-toast-close"
    aria-label="알림 닫기"
  >
    <span aria-hidden>×</span>
  </button>
);

const toastContainerConfig: ToastContainerProps = {
  position: "top-center",
  autoClose: TOAST_AUTO_CLOSE,
  hideProgressBar: false,
  newestOnTop: true,
  closeOnClick: true,
  draggable: false,
  pauseOnHover: true,
  pauseOnFocusLoss: false,
  theme: "dark",
  limit: 3,
  closeButton: ToastCloseButton,
  className: "vvellflo-toast-container",
};

export default function ToastProvider() {
  return <ToastContainer {...toastContainerConfig} />;
}

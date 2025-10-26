"use client";

import {
  ToastContainer,
  ToastContainerProps,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TOAST_AUTO_CLOSE = 3200;

const toastContainerConfig: ToastContainerProps = {
  position: "top-right",
  autoClose: TOAST_AUTO_CLOSE,
  hideProgressBar: false,
  newestOnTop: true,
  closeOnClick: true,
  draggable: true,
  pauseOnHover: true,
  pauseOnFocusLoss: false,
  theme: "dark",
  limit: 3,
  className: "vvellflo-toast-container",
};

export default function ToastProvider() {
  return <ToastContainer {...toastContainerConfig} />;
}

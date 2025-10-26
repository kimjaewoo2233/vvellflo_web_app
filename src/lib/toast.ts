"use client";

import { createElement } from "react";
import {
  toast,
  ToastOptions,
  TypeOptions,
  IconProps,
} from "react-toastify";
import type { IconType } from "react-icons";
import {
  FiCheckCircle,
  FiInfo,
  FiAlertTriangle,
  FiAlertCircle,
} from "react-icons/fi";

const baseOptions: ToastOptions = {
  draggable: true,
  pauseOnHover: true,
  closeButton: true,
};

const iconMap: Partial<Record<TypeOptions, IconType>> = {
  success: FiCheckCircle,
  info: FiInfo,
  warning: FiAlertTriangle,
  error: FiAlertCircle,
  default: FiInfo,
};

function showToast(
  message: string,
  type: TypeOptions = "default",
  options?: ToastOptions
) {
  const IconComponent = iconMap[type];
  const icon: ToastOptions["icon"] = IconComponent
    ? ((props: IconProps) =>
        createElement(IconComponent, {
          size: 22,
          color: props.theme === "dark" ? "#ffffff" : "#0b172a",
        }))
    : undefined;
  return toast(message, {
    type,
    icon,
    ...baseOptions,
    ...options,
  });
}

export const toastSuccess = (message: string, options?: ToastOptions) =>
  showToast(message, "success", options);

export const toastInfo = (message: string, options?: ToastOptions) =>
  showToast(message, "info", options);

export const toastWarning = (message: string, options?: ToastOptions) =>
  showToast(message, "warning", options);

export const toastError = (message: string, options?: ToastOptions) =>
  showToast(message, "error", options);

export default showToast;

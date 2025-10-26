import { PropsWithClassName } from "@/types/utils";
import clsx from "clsx";
import { PropsWithChildren } from "react";

export default function Container({
  children,
  className,
}: PropsWithClassName<PropsWithChildren>) {
  return <section className={clsx("", className)}>{children}</section>;
}

import { ComponentProps } from "react";

export type ButtonVariant = "primary" | "secondary" | "outline";

export type ButtonProps = ComponentProps<"button"> & {
  variant?: ButtonVariant;
}
import { ComponentProps } from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | 'text';

export type ButtonProps = ComponentProps<"button"> & {
  variant?: ButtonVariant;
}
import { ButtonVariant } from "./Button.types";

export const baseStyles = "flex items-center justify-center gap-2 rounded-lg text-sm px-4 py-2 transition";

export const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-primary-dark-1",
  secondary: "bg-gray-200 hover:bg-gray-300",
  outline: "border border-primary text-primary hover:bg-primary/10",
  text: "hover:bg-gray-100",
};

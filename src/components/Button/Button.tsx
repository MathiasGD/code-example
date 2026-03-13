import { cn } from "@/lib/utils";
import { ButtonProps } from "./Button.types";
import { baseStyles, buttonVariants } from "./Button.styles";

export const Button = ({
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(baseStyles, buttonVariants[variant], className)}
      {...props}
    />
  );
};

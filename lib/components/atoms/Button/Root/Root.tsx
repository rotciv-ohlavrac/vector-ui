import React from "react";
import { cva } from "class-variance-authority";
import { Size, Variant } from "../../../../types";

interface ButtonRootProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const buttonStyles = cva(
  [
    "px-4 py-2 rounded-4xl border transition duration-200 ease-in-out text-center relative",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-black text-white font-semibold border-black hover:border-white",
        secondary: "bg-white text-black border-white hover:border-black",
      },
      size: {
        small: "h-6",
        medium: "h-10",
        large: "h-14",
      },
    },
  }
);

function ButtonRoot({
  size = "medium",
  variant = "primary",
  className = "",
  ...props
}: ButtonRootProps) {
  return (
    <button
      className={`${buttonStyles({ size, variant })} ${className}`}
      {...props}
      data-testid="component-button"
    />
  );
}

export { ButtonRoot as Root };
export type { ButtonRootProps };

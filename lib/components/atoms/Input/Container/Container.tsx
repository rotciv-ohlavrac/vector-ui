import React from "react";
import { cva } from "class-variance-authority";

interface InputContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "secondary";
}

const inputContainerStyles = cva(
  [
    "rounded h-12 shadow-gray-400 shadow-sm border border-gray-400 relative p-2",
  ],
  {
    variants: {
      variant: { primary: [""], secondary: [""] },
    },
  }
);

function InputContainer({
  className = "",
  variant = "primary",
  ...props
}: InputContainerProps) {
  return (
    <div
      data-testid="component-input-container"
      className={`${inputContainerStyles({ variant })} ${className}`}
      {...props}
    />
  );
}

export { InputContainer as Container };
export type { InputContainerProps };

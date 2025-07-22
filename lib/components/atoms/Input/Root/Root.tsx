import React from "react";
import { cva } from "class-variance-authority";

interface InputRootProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const inputRootStyles = cva([
  "h-full",
  "w-full",
  "text-gray-900",
  "placeholder:text-gray-500",
  "focus:outline-none",
  "rounded-md",
]);

function InputRoot({ className = "", ...props }: InputRootProps) {
  return (
    <input
      data-testid="component-input-root"
      className={`${inputRootStyles()} ${className}`}
      {...props}
    />
  );
}

export { InputRoot as Root };
export type { InputRootProps };

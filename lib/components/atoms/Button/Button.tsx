import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ ...props }: ButtonProps) {
  return <button {...props} data-testid="component-button" />;
}

export { Button };

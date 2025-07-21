import React from "react";
import * as Icons from "../../icons";
import { cva } from "class-variance-authority";
import { Size } from "@/types";

interface IconProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "children"> {
  icon?: keyof typeof Icons;
  size?: Size;
}

const iconStyles = cva([""], {
  variants: {
    size: {
      small: "w-4 h-4",
      medium: "w-6 h-6",
      large: "w-8 h-8",
    },
  },
});

function Icon({
  icon = "Email",
  size = "medium",
  className = "",
  ...props
}: IconProps) {
  const IconComponent = Icons[icon];
  return (
    <span className={`${iconStyles({ size })} ${className}`} {...props}>
      <IconComponent />
    </span>
  );
}

export { Icon };
export type { IconProps };

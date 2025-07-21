import { ButtonAtoms, Icon } from "@/components/atoms";
import type { IconProps } from "@/components/atoms";
import { Side } from "@/types";
import { cva } from "class-variance-authority";

interface CustomIconProps extends IconProps {
  side?: Side;
}

interface ButtonProps extends ButtonAtoms.ButtonRootProps {
  iconProps?: CustomIconProps;
}

const buttonStyles = cva(["flex items-center justify-center gap-2"]);

function Button({
  iconProps = { side: "left" },
  children,
  className = "",
  ...props
}: ButtonProps) {
  function renderChildren() {
    if (!iconProps) return children;
    const { side, ...rest } = iconProps;
    if (side === "left")
      return [<Icon {...rest} />, children].map((child) => child);
    return [children, <Icon {...rest} />].map((child) => child);
  }
  return (
    <ButtonAtoms.Root className={`${buttonStyles()} ${className}`} {...props}>
      {renderChildren()}
    </ButtonAtoms.Root>
  );
}

export { Button };
export type { ButtonProps };

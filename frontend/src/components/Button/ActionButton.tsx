import React, { ComponentProps } from "react";
import { cn } from "../../utils/classnames";

type ActionButtonProps = ComponentProps<"button">;

const ActionButton = ({
  children,
  className,
  ...props
}: ComponentProps<"button">) => {
  return (
    <button
      className={cn(
        "px-2 py-1 rounded-md border border-zinc-400/50 hover:border-zinc-600/50 transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default ActionButton;
export type { ActionButtonProps };

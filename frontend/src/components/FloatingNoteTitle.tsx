import { ComponentProps } from "react";
import { cn } from "../utils/classnames";

const FloatingNoteTitle = ({ className, ...props }: ComponentProps<"div">) => {
  const title = "Title";
  return (
    <div className={cn("flex justify-center", className)} {...props}>
      <span className="text-gray-400">{title}</span>
    </div>
  );
};

export default FloatingNoteTitle;

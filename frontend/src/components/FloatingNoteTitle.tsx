import { ComponentProps } from "react";
import { cn } from "../utils/classnames";
import { useAtomValue } from "jotai";
import { selectedNoteAtom } from "../store";

const FloatingNoteTitle = ({ className, ...props }: ComponentProps<"div">) => {
  const selectedNote = useAtomValue(selectedNoteAtom);

  return (
    <div className={cn("flex justify-center", className)} {...props}>
      <span className="text-gray-400">{selectedNote?.title}</span>
    </div>
  );
};

export default FloatingNoteTitle;

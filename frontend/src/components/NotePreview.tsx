import { ComponentProps } from "react";
import { NoteInfo } from "../shared/models";
import { cn } from "../utils/classnames";
import { formatDateFromMs } from "../utils/dateformatter";

export type NotePreviewProps = NoteInfo & {
  isActive?: boolean;
} & ComponentProps<"div">;

const NotePreview = ({
  isActive = false,
  title,
  lastEditTime,
  className,
  ...props
}: NotePreviewProps) => {
  return (
    <div
      className={cn(
        "cursor-pointer px-2.5 py-3 rounded-md transition-colors border border-zinc-400/30 hover:border-zinc-500/30",
        {
          "bg-zinc-400/50": isActive,
          "hover:bg-zinc-500/50": !isActive,
        },
        className
      )}
      {...props}
    >
      <h3 className="mb-1 font-bold truncate">{title}</h3>
      <p className="inline-block w-full mb-1 text-xs font-light text-left">
        {formatDateFromMs(lastEditTime)}
      </p>
    </div>
  );
};

export default NotePreview;

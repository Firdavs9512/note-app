import { ComponentProps } from "react";
import { notesMock } from "../store/mocks";
import { cn } from "../utils/classnames";
import NotePreview from "./NotePreview";

const NoteList = ({ className, ...props }: ComponentProps<"ul">) => {
  if (notesMock.length === 0) {
    return (
      <ul>
        <li>
          <p className="text-center text-gray-400">No notes yet</p>
        </li>
      </ul>
    );
  }

  return (
    <ul className={cn(className)} {...props}>
      {notesMock.map((note, index) => (
        <NotePreview key={index} {...note} />
      ))}
    </ul>
  );
};

export default NoteList;

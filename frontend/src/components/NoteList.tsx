import { ComponentProps } from "react";
import { cn } from "../utils/classnames";
import NotePreview from "./NotePreview";
import { useNotesList } from "../hooks/useNotesList";

type NoteListProps = ComponentProps<"ul"> & {
  onSelect?: () => void;
};

const NoteList = ({ onSelect, className, ...props }: NoteListProps) => {
  const { notes, selectedNote, handleSelectNote } = useNotesList({ onSelect });

  if (notes.length === 0) {
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
      {notes.map((note, index) => (
        <NotePreview
          key={index}
          isActive={selectedNote?.id === note.id}
          onClick={() => handleSelectNote(note)}
          {...note}
        />
      ))}
    </ul>
  );
};

export default NoteList;

import { useAtom, useAtomValue } from "jotai";
import { noteAtom, selectedNoteAtom } from "../store";
import { NoteContent, NoteInfo } from "../shared/models";

export const useNotesList = ({ onSelect }: { onSelect?: () => void }) => {
  const notes = useAtomValue(noteAtom);

  const [selectedNote, setSelectedNote] = useAtom(selectedNoteAtom);

  const handleSelectNote = (note: NoteInfo) => {
    setSelectedNote(note);

    if (onSelect) {
      onSelect();
    }
  };

  return { notes, selectedNote, handleSelectNote };
};

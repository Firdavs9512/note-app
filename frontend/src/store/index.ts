import { atom } from "jotai";
import { NoteInfo } from "../shared/models";
import { notesMock } from "./mocks";
import { v4 as uuidv4 } from "uuid";

export const noteAtom = atom<NoteInfo[]>(notesMock);

export const selectedNoteAtom = atom<NoteInfo | null>(null);

export const createEmptyNoteAtom = atom(null, (get, set) => {
  const notes = get(noteAtom);

  const newNote: NoteInfo = {
    id: uuidv4(),
    title: "New note",
    content: "",
    lastEditTime: new Date().getTime(),
  };

  set(noteAtom, [...notes, newNote]);
  set(selectedNoteAtom, newNote);
});

export const deleteNoteAtom = atom(null, (get, set) => {
  const notes = get(noteAtom);
  const selectedNote = get(selectedNoteAtom);

  if (!selectedNote) return;

  const newNotes = notes.filter((note) => note.id !== selectedNote.id);

  set(noteAtom, newNotes);
  set(selectedNoteAtom, null);
});

export const updateNoteAtom = atom(
  null,
  (get, set, update: Partial<NoteInfo>) => {
    const notes = get(noteAtom);
    const selectedNote = get(selectedNoteAtom);

    if (!selectedNote) return;

    const newNotes = notes.map((note) => {
      if (note.id === selectedNote.id) {
        return { ...note, ...update, lastEditTime: new Date().getTime() };
      }

      return note;
    });

    set(noteAtom, newNotes);
    set(selectedNoteAtom, { ...selectedNote, ...update });
  }
);

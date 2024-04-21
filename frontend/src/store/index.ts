import { atom } from "jotai";
import { NoteInfo } from "../shared/models";
import { notesMock } from "./mocks";

export const noteAtom = atom<NoteInfo[]>(notesMock);

export const selectedNoteAtom = atom<NoteInfo | null>(null);

export const createEmptyNoteAtom = atom(
  null,
  (get, set, id, title, content, createdAt) => {
    const notes = get(noteAtom);

    // if check for id
    const oldNote = notes.find((note) => note.id === id);
    if (oldNote) {
      set(selectedNoteAtom, oldNote);
      return;
    }

    const newNote: NoteInfo = {
      id: (id as number).toString(),
      title: title as string,
      content: content as string,
      lastEditTime: createdAt as number,
    };

    set(noteAtom, [...notes, newNote]);
    set(selectedNoteAtom, newNote);
  }
);

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

import { atom } from "jotai";
import { NoteInfo } from "../shared/models";
import { notesMock } from "./mocks";
import { UpdateNote } from "../../wailsjs/go/main/App";

export const noteAtom = atom<NoteInfo[]>(notesMock);

export const selectedNoteAtom = atom<NoteInfo | null>(null);

export const createEmptyNoteAtom = atom(
  null,
  (get, set, id, title, content, createdAt, selected = false) => {
    const notes = get(noteAtom);

    // if check for id
    const oldNote = notes.find((note) => note.id === id);
    if (oldNote && selected) {
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
    if (selected) set(selectedNoteAtom, newNote);
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
  async (get, set, update: Partial<NoteInfo>) => {
    const notes = get(noteAtom);
    const selectedNote = get(selectedNoteAtom);

    if (!selectedNote) return;

    const promises = notes.map((note) => {
      if (note.id === selectedNote.id) {
        return UpdateNote(parseInt(note.id), note.title, note.content)
          .then(() => ({ ...note, ...update }))
          .catch(() => {
            return note; // Return the original note if update fails
          });
      }
      return Promise.resolve(note);
    });

    const newNotes = await Promise.all(promises);

    set(noteAtom, newNotes);
    set(selectedNoteAtom, { ...selectedNote, ...update });
  }
);

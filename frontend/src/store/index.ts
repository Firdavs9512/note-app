import { atom } from "jotai";
import { NoteInfo } from "../shared/models";
import { notesMock } from "./mocks";

export const noteAtom = atom<NoteInfo[]>(notesMock);

export const selectedNoteAtom = atom<NoteInfo | null>(null);

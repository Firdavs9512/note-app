import { NoteInfo } from "../../shared/models";

export const notesMock: NoteInfo[] = [
  {
    title: "Note 1",
    lastEditTime: new Date().getTime(),
    content: "This is the content of note 1",
  },
  {
    title: "Note 2",
    lastEditTime: 1630400000000,
    content: "This is the content of note 2",
  },
  {
    title: "Note 3",
    lastEditTime: new Date().getTime(),
    content: "This is the content of note 3",
  },
];
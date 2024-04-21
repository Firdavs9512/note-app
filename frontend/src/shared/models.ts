export type NoteInfo = {
  id: string;
  title: string;
  lastEditTime: number;
  content: NoteContent;
};

export type NoteContent = string;

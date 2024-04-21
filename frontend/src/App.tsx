import { useEffect, useRef, useState } from "react";
import { GetNotes } from "../wailsjs/go/main/App";
import { Content, DraggableTopBar, RootLayout, Sidebar } from "./components";
import ActionButtonsRow from "./components/ActionButtonsRow";
import NoteList from "./components/NoteList";
import MarkdownEditor from "./components/MarkdownEditor";
import FloatingNoteTitle from "./components/FloatingNoteTitle";
import { useSetAtom } from "jotai";
import { createEmptyNoteAtom } from "./store";

function App() {
  const contentContainerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const createEmptyNote = useSetAtom(createEmptyNoteAtom);

  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0, 0);
  };

  useEffect(() => {
    GetNotes().then((notes: any[]) => {
      notes.forEach((note) => {
        createEmptyNote(
          note.ID,
          note.title,
          note.content,
          new Date(note.CreatedAt).getTime()
        );
      });
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="mt-10 text-center">Loading</div>;
  }

  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p-2">
          <ActionButtonsRow className="flex flex-row justify-between mb-1" />
          <NoteList className="mt-3 space-y-1" onSelect={resetScroll} />
        </Sidebar>
        <Content
          className="border-l bg-zinc-900/50 border-l-white/20"
          ref={contentContainerRef}
        >
          <FloatingNoteTitle className="pt-2" />
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
  );
}

export default App;

import { useRef, useState } from "react";
import { Greet } from "../wailsjs/go/main/App";
import { Content, DraggableTopBar, RootLayout, Sidebar } from "./components";
import ActionButtonsRow from "./components/ActionButtonsRow";
import NoteList from "./components/NoteList";
import MarkdownEditor from "./components/MarkdownEditor";
import FloatingNoteTitle from "./components/FloatingNoteTitle";

function App() {
  const contentContainerRef = useRef<HTMLDivElement>(null);

  const [resultText, setResultText] = useState(
    "Please enter your name below 👇"
  );
  const [name, setName] = useState("");
  const updateName = (e: any) => setName(e.target.value);
  const updateResultText = (result: string) => setResultText(result);

  function greet() {
    Greet(name).then(updateResultText);
  }

  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0, 0);
  };

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

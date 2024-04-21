import { useState } from "react";
import { Greet } from "../wailsjs/go/main/App";
import { Content, DraggableTopBar, RootLayout, Sidebar } from "./components";
import ActionButtonsRow from "./components/ActionButtonsRow";
import NoteList from "./components/NoteList";

function App() {
  const [resultText, setResultText] = useState(
    "Please enter your name below 👇"
  );
  const [name, setName] = useState("");
  const updateName = (e: any) => setName(e.target.value);
  const updateResultText = (result: string) => setResultText(result);

  function greet() {
    Greet(name).then(updateResultText);
  }

  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p-2">
          <ActionButtonsRow className="mb-1 flex justify-between flex-row" />
          <NoteList className="mt-3 space-y-1" />
        </Sidebar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20">
          Content
        </Content>
      </RootLayout>
    </>
  );
}

export default App;

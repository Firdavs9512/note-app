import { useSetAtom } from "jotai";
import ActionButton, { ActionButtonProps } from "./ActionButton";
import { LuFileSignature } from "react-icons/lu";
import { createEmptyNoteAtom } from "../../store";
import { CreateNote } from "../../../wailsjs/go/main/App";

const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom);

  const handleClick = async () => {
    CreateNote("Note title", "").then((note: any) => {
      createEmptyNote(
        note.ID,
        note.title,
        "",
        new Date(note.CreatedAt).getTime()
      );
    });
  };

  return (
    <ActionButton onClick={handleClick} {...props}>
      <LuFileSignature className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  );
};

export default NewNoteButton;

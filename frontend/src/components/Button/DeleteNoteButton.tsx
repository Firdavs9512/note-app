import { useSetAtom } from "jotai";
import ActionButton, { ActionButtonProps } from "./ActionButton";
import { FaRegTrashCan } from "react-icons/fa6";
import { deleteNoteAtom } from "../../store";
import { DeleteNote } from "../../../wailsjs/go/main/App";
import { useNotesList } from "../../hooks/useNotesList";

const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
  const deleteNote = useSetAtom(deleteNoteAtom);
  const { selectedNote } = useNotesList({});

  const handleClick = () => {
    if (!selectedNote) return;

    // Convert string to int
    DeleteNote(parseInt(selectedNote.id)).then(() => {
      deleteNote();
    });
  };

  return (
    <ActionButton onClick={handleClick} {...props}>
      <FaRegTrashCan className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  );
};

export default DeleteNoteButton;

import { useSetAtom } from "jotai";
import ActionButton, { ActionButtonProps } from "./ActionButton";
import { FaRegTrashCan } from "react-icons/fa6";
import { deleteNoteAtom } from "../../store";

const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
  const deleteNote = useSetAtom(deleteNoteAtom);

  const handleClick = () => {
    deleteNote();
  };

  return (
    <ActionButton onClick={handleClick} {...props}>
      <FaRegTrashCan className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  );
};

export default DeleteNoteButton;

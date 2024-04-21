import ActionButton, { ActionButtonProps } from "./ActionButton";
import { FaRegTrashCan } from "react-icons/fa6";

const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
  return (
    <ActionButton {...props}>
      <FaRegTrashCan className="h-4 w-4 text-zinc-300" />
    </ActionButton>
  );
};

export default DeleteNoteButton;

import { useSetAtom } from "jotai";
import ActionButton, { ActionButtonProps } from "./ActionButton";
import { LuFileSignature } from "react-icons/lu";
import { createEmptyNoteAtom } from "../../store";

const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom);

  const handleClick = () => {
    createEmptyNote();
  };

  return (
    <ActionButton onClick={handleClick} {...props}>
      <LuFileSignature className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  );
};

export default NewNoteButton;

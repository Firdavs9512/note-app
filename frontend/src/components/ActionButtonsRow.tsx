import React, { ComponentProps } from "react";
import NewNoteButton from "./Button/NewNoteButton";
import DeleteNoteButton from "./Button/DeleteNoteButton";

const ActionButtonsRow = ({ ...props }: ComponentProps<"div">) => {
  return (
    <div {...props}>
      <NewNoteButton />
      <DeleteNoteButton />
    </div>
  );
};

export default ActionButtonsRow;

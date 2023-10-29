import Heading from "../../ui/Heading";
import { openAddColumnModal } from "./boardSlice";

import { useDispatch } from "react-redux";

function NewColumn() {
  const dispatch = useDispatch();
  return (
    <div
      className=" flex flex-col gap-10"
      onClick={() => dispatch(openAddColumnModal(true))}
    >
      <Heading type="column" />
      <div className="flex w-[19rem] grow cursor-pointer items-center justify-center rounded-md bg-secondary px-6 py-6 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:opacity-50 active:brightness-125">
        <h1 className="text-2xl font-bold  text-primaryGray">+ New Column</h1>
      </div>
    </div>
  );
}

export default NewColumn;

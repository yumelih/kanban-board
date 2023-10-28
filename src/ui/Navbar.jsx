import { useDispatch, useSelector } from "react-redux";
import SettingsButton from "../features/settings/SettingsButton";
import Button from "./Button";
import { getBoard, openAddTaskModal } from "../features/board/boardSlice";

function Navbar({ onAddTask }) {
  const dispatch = useDispatch();
  const boardName = useSelector(getBoard).name;

  return (
    <div className="flex items-center bg-secondary px-6 shadow-sm shadow-neutral-50">
      <h1 className="text-2xl font-semibold text-primaryWhite ">{boardName}</h1>
      <div className="ml-auto mr-2">
        <Button render={() => dispatch(openAddTaskModal(true, "addTaskModal"))}>
          + Add a New Task
        </Button>
      </div>
      <SettingsButton />
    </div>
  );
}

export default Navbar;

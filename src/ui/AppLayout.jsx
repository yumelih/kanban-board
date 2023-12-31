import Board from "../features/board/Board";
import AddTaskModal from "../features/board/AddTaskModal";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import TaskDetails from "../features/board/TaskDetails";

import { useSelector } from "react-redux";
import {
  getAddColumnOpen,
  getAddTaskOpen,
  getDetailTaskOpen,
} from "../features/board/boardSlice";
import AddColumn from "../features/board/AddColumn";
import EditBoardModal from "../features/board/EditBoardModal";
import EditTaskModal from "../features/board/EditTaskModal";

//main background color: bg-slate-900
//secondary background color: bg-slate-800

function AppLayout() {
  const isAddTaskOpen = useSelector(getAddTaskOpen);
  const isDetailTaskOpen = useSelector(getDetailTaskOpen);
  const isAddColumnOpen = useSelector(getAddColumnOpen);
  const isEditBoard = useSelector((state) => state.boards.isEditBoard);
  const isEditTask = useSelector((state) => state.boards.isEditTask);
  const boardName = useSelector(
    (state) =>
      state.boards.boards.find((board) => board.id === isEditBoard)?.name,
  );

  return (
    <>
      {isDetailTaskOpen.open && <TaskDetails />}
      {isAddTaskOpen.open && <AddTaskModal />}
      {isEditTask && <EditTaskModal />}
      {isAddColumnOpen && <AddColumn />}
      {isEditBoard && <EditBoardModal boardName={boardName} />}
      <div className=" relative grid h-full w-full grid-cols-[minmax(6rem,max-content)_1fr] grid-rows-[minmax(5rem,max-content)_1fr] gap-x-[0.5px] bg-primary md:grid-cols-[minmax(18rem,max-content)_1fr] ">
        <Sidebar />
        <Navbar />
        <Board />
      </div>
    </>
  );
}

export default AppLayout;

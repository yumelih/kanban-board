import Board from "../features/board/Board";
import AddTaskModal from "../features/board/AddTaskModal";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import TaskDetails from "../features/board/TaskDetails";
import { useState } from "react";

//main background color: bg-slate-900
//secondary background color: bg-slate-800

function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* <TaskDetails /> */}
      {isOpen && <AddTaskModal onAddTask={setIsOpen} />}
      <div className=" relative grid h-full w-full grid-cols-[minmax(18rem,max-content)_1fr] grid-rows-[minmax(5rem,max-content)_1fr] gap-x-[0.5px]  bg-primary ">
        <Sidebar />
        <Navbar onAddTask={setIsOpen} />
        <Board />
      </div>
    </>
  );
}

export default AppLayout;

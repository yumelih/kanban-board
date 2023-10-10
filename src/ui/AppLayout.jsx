import Board from "../features/board/Board";
import AddTaskModal from "../features/board/AddTaskModal";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import TaskDetails from "../features/board/TaskDetails";

//main background color: bg-slate-900
//secondary background color: bg-slate-800

function AppLayout() {
  return (
    <>
      {/* <TaskDetails /> */}
      {/* <AddTaskModal /> */}
      <div className=" relative grid h-full w-full grid-cols-[minmax(18rem,max-content)_1fr]  grid-rows-[minmax(5rem,max-content)_1fr] gap-x-[0.5px] overflow-auto bg-primary ">
        <Sidebar />
        <Navbar />
        <Board />
      </div>
    </>
  );
}

export default AppLayout;

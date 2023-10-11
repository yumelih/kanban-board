import { useSelector } from "react-redux";
import Heading from "../../ui/Heading";
import Task from "./Task";
import { getBoard } from "./boardSlice";

function Column({ index }) {
  // const tasks = useSelector(getAllTasks);
  const board = useSelector(getBoard);
  const tasks = board.todos;
  const colors = [
    "bg-red-300",
    "bg-blue-300",
    "bg-green-300",
    "bg-violet-300",
    "bg-yellow-300",
    "bg-purple-300",
  ];
  const currentColumnTasks = tasks.reduce(
    (acc, cur) =>
      acc + (cur.currentColumn === board.columnNames[index] ? 1 : 0),
    0,
  );

  return (
    <div className="grid auto-cols-[20rem] content-start gap-6">
      <Heading type="column">
        <span
          className={`${colors[index]} mr-3 inline-block h-4 w-4 rounded-full`}
        ></span>
        <span>{board.columnNames[index]}&nbsp;</span>
        <span className="text-[12px]">({currentColumnTasks})</span>
      </Heading>
      {tasks.map(
        (task) =>
          board.columnNames[index] === task.currentColumn && (
            <Task
              key={task.id}
              title={task.taskTitle}
              subtasks={task.subtasks}
            />
          ),
      )}
      {/* {currentColumnTasks === 0 && (
        <div className="h-auto w-[19rem] cursor-pointer rounded-md bg-secondary px-6 py-6 text-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:opacity-80">
          + Add Tasks{" "}
        </div>
      )} */}
    </div>
  );
}

export default Column;

import { useDispatch, useSelector } from "react-redux";
import Heading from "../../ui/Heading";
import Task from "./Task";
import { dragTask, getBoard } from "./boardSlice";

function Column({ index, onShowDetails }) {
  // const tasks = useSelector(getAllTasks);

  const board = useSelector(getBoard);
  const columnName = board.columnNames[index];
  const dispatch = useDispatch();
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
    (acc, cur) => acc + (cur.currentColumn === columnName ? 1 : 0),
    0,
  );

  function handleDragStart(e, id) {
    e.dataTransfer.setData("taskId", id);
  }

  function handleDrop(e) {
    const taskId = e.dataTransfer.getData("taskId");
    dispatch(dragTask(taskId, columnName));
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  return (
    <div
      className="grid auto-cols-[20rem] content-start gap-6"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <Heading type="column">
        <span
          className={`${colors[index]} mr-3 inline-block h-4 w-4 rounded-full`}
        ></span>
        <span>{columnName}&nbsp;</span>
        <span className="text-[12px]">({currentColumnTasks})</span>
      </Heading>
      {tasks.map(
        (task) =>
          columnName === task.currentColumn && (
            <Task
              key={task.taskId}
              id={task.taskId}
              title={task.taskTitle}
              subtasks={task.subtasks}
              onShowDetails={onShowDetails}
              handleDragStart={handleDragStart}
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

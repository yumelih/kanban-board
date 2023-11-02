import Heading from "../../ui/Heading";
import { openEditTaskModal, openTaskDetailModal } from "./boardSlice";
import { deleteTask as deleteTaskRedux } from "./boardSlice";
import editIcon from "../../assets/edit-icon.png";
import trashIcon from "../../assets/trash-icon.png";

import { useDispatch } from "react-redux";
import { useState } from "react";

function Task({ id, title, subtasks }) {
  const [isTaskHovered, setIsTaskHovered] = useState(false);
  const dispatch = useDispatch();

  function editTask(e, id) {
    e.stopPropagation();
    dispatch(openEditTaskModal(id));
  }

  function deleteTask(e, id) {
    e.stopPropagation();
    dispatch(deleteTaskRedux(id));
  }

  return (
    <div
      className="flex h-auto w-[19rem] cursor-pointer justify-between rounded-md bg-secondary px-6 py-6 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:opacity-80"
      onMouseEnter={() => setIsTaskHovered(true)}
      onMouseLeave={() => setIsTaskHovered(false)}
      onClick={() => dispatch(openTaskDetailModal(id))}
    >
      <div>
        <Heading type="task">{title}</Heading>
        <p className="mt-1 text-xs font-semibold text-primaryGray">
          {`${subtasks.reduce(
            (acc, cur) => acc + Number(cur.finished),
            0,
          )} of ${subtasks.length} subtasks`}
        </p>
      </div>
      {isTaskHovered && (
        <div className="flex items-start space-x-2">
          <img
            className="w-8 rounded-md border border-gray-600 p-[3px] hover:bg-gray-800"
            src={editIcon}
            alt="edit"
            onClick={(e) => editTask(e, id)}
          />
          <img
            className="w-8 rounded-md border border-gray-600 p-[3px] hover:bg-gray-800"
            src={trashIcon}
            alt="edit"
            onClick={(e) => deleteTask(e, id)}
          />
        </div>
      )}
    </div>
  );
}

export default Task;

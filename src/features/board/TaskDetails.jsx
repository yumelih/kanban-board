import { useSelector } from "react-redux";
import Checkbox from "../../ui/Checkbox";

import Modal from "../../ui/Modal";

import { getTaskDetail, updateSubtask } from "./boardSlice";

function TaskDetails() {
  const task = useSelector(getTaskDetail);

  const numberOfSubtasks = task.subtasks.length;
  const subTasksCompleted = task?.subtasks.reduce(
    (acc, cur) => acc + Number(cur.finished),
    0,
  );

  return (
    <Modal type="taskDetail">
      <h1 className="mb-4 text-xl font-semibold">{task?.taskTitle}</h1>
      <p className="pb-1 text-primaryGray">{task?.taskDescription}</p>

      <div className="space-y-2.5">
        <p className="label">
          Subtasks({subTasksCompleted} of {numberOfSubtasks})
        </p>
        {task.subtasks.map((subtask) => (
          <Checkbox
            key={subtask.subtaskId}
            label={subtask.subtaskTitle}
            checked={subtask.finished}
            updateFunction={(isChecked) =>
              updateSubtask(task.taskId, subtask.subtaskId, isChecked)
            }
          />
        ))}
      </div>
      {/* <Select label="Status" /> */}
    </Modal>
  );
}

export default TaskDetails;

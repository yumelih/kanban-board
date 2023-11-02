import { useEffect, useState } from "react";
import Button from "../../ui/Button";

import Input from "../../ui/Input";
import Modal from "../../ui/Modal";
import Select from "../../ui/Select";
import Subtask from "./Subtask";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  editTask,
  getBoard,
  getEditTask,
  openEditTaskModal,
} from "./boardSlice";
import randomIdGenerator from "../../utils/randomIdGenerator";

function EditTaskModal() {
  const [subtasksState, setSubtasksState] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const currentTask = useSelector(getEditTask);
  const { columnNames } = useSelector(getBoard);
  const dispatch = useDispatch();

  function handleAddSubtask(e) {
    e.preventDefault();
    const randomId = randomIdGenerator();
    const SubtaskComponent = {
      subtaskId: `subtask-${randomId}`,
    };
    setSubtasksState((s) => [...s, SubtaskComponent]);
  }

  function deleteSubtask(e, id) {
    e.preventDefault();
    setSubtasksState((prev) => prev.filter((subt) => subt.subtaskId !== id));
  }

  function onTaskSubmit(data) {
    const subtasks = [];

    for (const [key, value] of Object.entries(data)) {
      if (key.includes("subtask")) {
        const existingSubTask = subtasksState.find(
          (sub) => sub.subtaskId === key,
        );

        const subtask = existingSubTask
          ? {
              subtaskId: key,
              subtaskTitle: value,
              finished: existingSubTask.finished,
            }
          : {
              subtaskId: key,
              subtaskTitle: value,
              finished: false,
            };
        subtasks.push(subtask);
      }
    }

    const taskData = {
      taskId: currentTask.taskId,
      taskTitle: data.taskTitle,
      taskDescription: data.taskDescription,
      currentColumn: data.currentColumn,
      subtasks,
    };

    console.log(taskData);

    dispatch(editTask(currentTask?.taskId, taskData));
    dispatch(openEditTaskModal(null));
  }

  function onError(err) {
    // console.log(err);
  }

  useEffect(
    function () {
      const newSubtasks = currentTask?.subtasks?.map((sub) => {
        return {
          subtaskId: sub.subtaskId,
          defaultValue: sub.subtaskTitle,
          finished: sub.finished,
        };
      });

      setSubtasksState(newSubtasks);
    },
    [currentTask?.subtasks],
  );

  return (
    <Modal type="editTask">
      <h1 className="mb-4 text-xl font-semibold">Edit Task</h1>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(onTaskSubmit, onError)}
      >
        <Input
          id="taskTitle"
          register={register}
          errors={errors}
          validationSchema={{ required: "This field is required" }}
          defaultValue={currentTask.taskTitle}
        >
          Title
        </Input>

        <Input
          id="taskDescription"
          type="textarea"
          register={register}
          defaultValue={currentTask.taskDescription}
        >
          Description
        </Input>

        <fieldset className="flex flex-col gap-2">
          <h3 className="label">Subtasks</h3>
          {/* <Subtask id="subtask1" placeholder="e.g. Make coffee" />
          <Subtask id="subtask2" placeholder="e.g. Drink coffee and smile" /> */}
          {subtasksState.map((s, i) => {
            return (
              <Subtask
                key={s.subtaskId}
                id={s.subtaskId}
                placeholder={`subtask-${i}`}
                onSubtaskDelete={deleteSubtask}
                register={register}
                validationSchema={{ required: "This field is required" }}
                errors={errors}
                defaultValue={s?.defaultValue}
              />
            );
          })}
          <Button type="white" render={handleAddSubtask}>
            + Add New Subtask
          </Button>
        </fieldset>

        <Select
          id="currentColumn"
          label="Column"
          options={columnNames}
          register={register}
        />
        <Button>Edit Task</Button>
      </form>
    </Modal>
  );
}

export default EditTaskModal;

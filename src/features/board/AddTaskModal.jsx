import { useState } from "react";
import Button from "../../ui/Button";

import Input from "../../ui/Input";
import Modal from "../../ui/Modal";
import Select from "../../ui/Select";
import Subtask from "./Subtask";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addTask, getBoard } from "./boardSlice";
import randomIdGenerator from "../../utils/randomIdGenerator";
import { openAddTaskModal } from "./boardSlice";

function AddTaskModal() {
  const [subtasks, setSubtasks] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { columnNames } = useSelector(getBoard);
  const dispatch = useDispatch();

  function handleAddSubtask(e) {
    e.preventDefault();
    const randomId = randomIdGenerator();
    const SubtaskComponent = {
      id: `subtask-${randomId}`,
    };
    setSubtasks((s) => [...s, SubtaskComponent]);
  }

  function deleteSubtask(e, id) {
    e.preventDefault();
    setSubtasks((prev) => prev.filter((subt) => subt.id !== id));
  }

  function onTaskSubmit(data) {
    const subtasks = [];

    for (const [key, value] of Object.entries(data)) {
      if (key.includes("subtask")) {
        const subtask = {
          subtaskId: key,
          subtaskTitle: value,
          finished: false,
        };
        subtasks.push(subtask);
      }
    }

    const taskData = {
      taskId: randomIdGenerator(),
      taskTitle: data.taskTitle,
      taskDescription: data.taskDescription,
      currentColumn: data.currentColumn,
      subtasks,
    };

    dispatch(addTask(taskData));
    dispatch(openAddTaskModal(false));
  }

  function onError(err) {
    // console.log(err);
  }

  return (
    <Modal type="addTask">
      <h1 className="mb-4 text-xl font-semibold">Add New Task</h1>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(onTaskSubmit, onError)}
      >
        <Input
          id="taskTitle"
          register={register}
          errors={errors}
          validationSchema={{ required: "This field is required" }}
        >
          Title
        </Input>

        <Input
          id="taskDescription"
          type="textarea"
          register={register}
          validationSchema={{}}
        >
          Description
        </Input>

        <fieldset className="flex flex-col gap-2">
          <h3 className="label">Subtasks</h3>
          {/* <Subtask id="subtask1" placeholder="e.g. Make coffee" />
          <Subtask id="subtask2" placeholder="e.g. Drink coffee and smile" /> */}
          {subtasks.map((s, i) => {
            return (
              <Subtask
                key={s.id}
                id={s.id}
                placeholder={`subtask-${i}`}
                onSubtaskDelete={deleteSubtask}
                register={register}
                validationSchema={{ required: "This field is required" }}
                errors={errors}
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
        <Button>Create Task</Button>
      </form>
    </Modal>
  );
}

export default AddTaskModal;

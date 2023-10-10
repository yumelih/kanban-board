import Button from "../../ui/Button";

import Input from "../../ui/Input";
import Modal from "../../ui/Modal";
import Select from "../../ui/Select";
import Subtask from "../../ui/Subtask";

function AddTaskModal() {
  return (
    <Modal>
      <h1 className="mb-4 text-xl font-semibold">Add New Task</h1>
      <form className="flex flex-col gap-4">
        <Input id="title">Title</Input>

        <Input id="description" type="textarea">
          Description
        </Input>

        <fieldset className="flex flex-col gap-2">
          <h3 className="label">Subtasks</h3>
          <Subtask id="subtask1" placeholder="e.g. Make coffee" />
          <Subtask id="subtask2" placeholder="e.g. Drink coffee and smile" />
          <Button type="white">+ Add New Subtask</Button>
        </fieldset>

        <Select />
        <Button>Create Task</Button>
      </form>
    </Modal>
  );
}

export default AddTaskModal;

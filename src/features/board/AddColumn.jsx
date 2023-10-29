import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import { addColumn, openAddColumnModal } from "./boardSlice";
import { useDispatch } from "react-redux";

function AddColumn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  function onAddColumn(data) {
    dispatch(addColumn(data.columnName));
    dispatch(openAddColumnModal(false));
  }

  return (
    <Modal type="addColumn">
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(onAddColumn)}
      >
        <Input
          id="columnName"
          register={register}
          placeholder="e.g. Reviewing"
          errors={errors}
        >
          <span className="text-base">Column Name</span>
        </Input>
        <Button>Add Column</Button>
      </form>
    </Modal>
  );
}

export default AddColumn;

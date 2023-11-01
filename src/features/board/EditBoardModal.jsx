import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import { editBoard, openEditBoardModal } from "./boardSlice";
import { useDispatch } from "react-redux";

function EditBoardModal({ boardName }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  function onEditBoard(data) {
    dispatch(editBoard(data.columnName));
    dispatch(openEditBoardModal(null));
  }

  return (
    <Modal type="editBoard">
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(onEditBoard)}
      >
        <Input
          id="columnName"
          register={register}
          placeholder="e.g. Reviewing"
          errors={errors}
          defaultValue={boardName}
        >
          <span className="text-base">Board Name</span>
        </Input>
        <Button>Edit Board</Button>
      </form>
    </Modal>
  );
}

export default EditBoardModal;

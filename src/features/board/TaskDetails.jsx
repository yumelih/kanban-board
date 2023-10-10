import Checkbox from "../../ui/Checkbox";
import Input from "../../ui/Input";
import Modal from "../../ui/Modal";
import Select from "../../ui/Select";

function TaskDetails() {
  return (
    <Modal>
      <h1 className="mb-4 text-xl font-semibold">
        Task Details blalalalalallalalal alal dsadsaasdasd as das dsa d sa dsa a
        dsa sa da
      </h1>
      <p className="pb-1 text-primaryGray">
        War changed me! Bla change the man of the warfare century hello I don't
        who I am losers and winners, good game means gg
      </p>

      <div className="space-y-2.5">
        <p className="label">Subtasks(2 of 3)</p>
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </div>
      <Select label="Status" />
    </Modal>
  );
}

export default TaskDetails;

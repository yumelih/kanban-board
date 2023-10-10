import Heading from "../../ui/Heading";

function Task({ title, subtasks }) {
  return (
    <div className="h-auto w-[19rem] cursor-pointer rounded-md bg-secondary px-6 py-6 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:opacity-80">
      <Heading type="task">{title}</Heading>
      <p className="mt-1 text-xs font-semibold text-primaryGray">
        {`${subtasks.reduce((acc, cur) => acc + Number(cur.finished), 0)} of ${
          subtasks.length
        } subtasks`}
      </p>
    </div>
  );
}

export default Task;

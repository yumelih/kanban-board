import { useRef } from "react";
import { useDispatch } from "react-redux";
import {
  openAddColumnModal,
  openAddTaskModal,
  openEditBoardModal,
  openTaskDetailModal,
  openEditTaskModal,
} from "../features/board/boardSlice";

function Modal({ type, children }) {
  const isOpen = useRef(true);
  const dispatch = useDispatch();

  function handleOpen() {
    isOpen.current = !isOpen.current;

    if (type === "addTask") dispatch(openAddTaskModal(isOpen.current));

    if (type === "taskDetail") dispatch(openTaskDetailModal(null));

    if (type === "addColumn") dispatch(openAddColumnModal(isOpen.current));

    if (type === "editBoard") dispatch(openEditBoardModal(null));

    if (type === "editTask") dispatch(openEditTaskModal(null));
  }

  return (
    <div
      className="fixed z-50 flex h-screen w-screen items-center justify-center bg-gray-800/20 backdrop-brightness-50"
      onClick={handleOpen}
    >
      <div
        className=" max-h-[50rem] w-[30rem] space-y-4 overflow-auto bg-secondary p-8 text-primaryWhite"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;

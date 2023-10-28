import { useRef } from "react";
import { useDispatch } from "react-redux";
import {
  openAddTaskModal,
  openTaskDetailModal,
} from "../features/board/boardSlice";

function Modal({ type, children }) {
  const isOpen = useRef(false);
  const dispatch = useDispatch();

  function handleOpen() {
    isOpen.current = !isOpen.current;

    if (type === "addTask") dispatch(openAddTaskModal(!isOpen.current));
    if (type === "taskDetail") dispatch(openTaskDetailModal(null));
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

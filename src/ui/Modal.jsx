import { useState } from "react";

function Modal({ addTask, onAddTask, children }) {
  const [isOpen, setIsOpen] = useState(false);

  if (addTask) return;

  return (
    <div
      className="fixed z-50 flex h-screen w-screen items-center justify-center bg-gray-800/20 backdrop-brightness-50"
      onClick={() => onAddTask(false)}
    >
      <div
        className="w-[30rem] space-y-4 bg-secondary p-8 text-primaryWhite"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;

import { useEffect, useState } from "react";

function Modal({ onOpen, children }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen((prev) => !prev);
  }

  useEffect(
    function () {
      onOpen((prev) => !prev);
    },
    [isOpen, onOpen],
  );

  if (isOpen) return;

  return (
    <div
      className="fixed z-50 flex h-screen w-screen items-center justify-center bg-gray-800/20 backdrop-brightness-50"
      onClick={handleOpen}
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

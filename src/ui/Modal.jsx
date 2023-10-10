import { useState } from "react";

function Modal({ onCloseModal, children }) {
  const [closeModal, setCloseModal] = useState(false);

  if (closeModal) return;

  return (
    <div
      className="fixed z-50 flex h-screen w-screen items-center justify-center bg-gray-800/20 backdrop-brightness-50"
      onClick={() => setCloseModal(true)}
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

import { cloneElement, createContext, useContext, useState } from "react";

const DropdownContext = createContext();

function Dropdown({ children }) {
  const [openName, setOpenName] = useState("");

  function handleOpen(openName) {
    setOpenName((prev) => (prev ? null : openName));
  }

  return (
    <DropdownContext.Provider value={{ openName, handleOpen }}>
      {children}
    </DropdownContext.Provider>
  );
}

function Toggle({ opens: opensWindowName, children }) {
  const { handleOpen } = useContext(DropdownContext);

  return (
    <div className="z-50">
      {cloneElement(children, { onClick: () => handleOpen(opensWindowName) })}
    </div>
  );
}

function List({ opens: openToggleName, children }) {
  const { openName } = useContext(DropdownContext);

  if (openName !== openToggleName) return null;

  return (
    <ul className="absolute right-9 top-16 h-auto w-32 animate-fade-up list-none divide-y-2 divide-gray-500 bg-slate-700 font-semibold animate-once">
      {children}
    </ul>
  );
}

function Item({ color, onClick, children }) {
  return (
    <li
      className={`${color} cursor-pointer p-3 hover:bg-slate-600`}
      onClick={onClick}
    >
      {children}
    </li>
  );
}

Dropdown.Toggle = Toggle;
Dropdown.List = List;
Dropdown.Item = Item;

export default Dropdown;
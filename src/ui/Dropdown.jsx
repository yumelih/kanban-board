import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const DropdownContext = createContext();

function Dropdown({ children }) {
  const [openName, setOpenName] = useState("");

  function handleOpen(openName) {
    setOpenName((prev) => (prev ? null : openName));
  }

  const close = () => setOpenName(null);

  return (
    <DropdownContext.Provider value={{ openName, handleOpen, close }}>
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
  const ref = useRef(null);
  const { openName, close } = useContext(DropdownContext);

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          close();
        }
      }

      document.addEventListener("click", handleClick, true);

      return () => document.removeEventListener("click", handleClick, true);
    },
    [close],
  );

  if (openName !== openToggleName) return null;

  return (
    <ul
      className="absolute right-9 top-16 h-auto w-32 animate-fade-up list-none divide-y-2 divide-gray-500 bg-slate-700 font-semibold animate-once"
      ref={ref}
    >
      {children}
    </ul>
  );
}

function Item({ color, onClick, children }) {
  const { close } = useContext(DropdownContext);

  return (
    <li
      className={`${color} cursor-pointer p-3 hover:bg-slate-600`}
      onClick={() => {
        onClick();
        close();
      }}
    >
      {children}
    </li>
  );
}

Dropdown.Toggle = Toggle;
Dropdown.List = List;
Dropdown.Item = Item;

export default Dropdown;

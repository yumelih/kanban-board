import tableWhite from "../../assets/tableWhite.png";

function BoardTitle({ title, id, isActive, onActive }) {
  const base = "list";
  const activeStyle =
    base + " bg-primaryPurple font-semibold text-primaryWhite";
  const hoverStyle = " hover:bg-gray-800 hover:bg-opacity-40";

  return (
    <li
      className={id === isActive ? activeStyle : base + hoverStyle}
      key={id}
      onClick={() => onActive(id)}
    >
      <img className="mr-2 w-5" src={tableWhite} alt="table" />
      <span className="select-none">{title}</span>
    </li>
  );
}

export default BoardTitle;

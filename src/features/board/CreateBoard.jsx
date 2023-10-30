import tablePurple from "../../assets/tablePurple.png";

function CreateBoard({ onClick }) {
  return (
    <li
      className="list hover:bg-gray-800 hover:bg-opacity-40"
      onClick={onClick}
    >
      <img className="mr-2 w-5" src={tablePurple} alt="table" />
      <span className="font-semibold text-primaryPurple ">
        + Create New Board
      </span>
    </li>
  );
}

export default CreateBoard;

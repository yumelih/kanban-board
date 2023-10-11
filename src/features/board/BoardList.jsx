import CreateBoard from "./CreateBoard";
import BoardTitle from "./BoardTitle";
import Heading from "../../ui/Heading";
import { useDispatch, useSelector } from "react-redux";
import { getAllBoards, getBoard, switchBoard } from "./boardSlice";

// const boards = [
//   {
//     id: 1,
//     title: "Platform Launch",
//   },
//   {
//     id: 2,
//     title: "Marketting Plan",
//   },
//   {
//     id: 3,
//     title: "Roadmap",
//   },
// ];

function BoardList() {
  const dispatch = useDispatch();

  const boards = useSelector(getAllBoards);
  const currentBoard = useSelector(getBoard);

  function handleClick(id) {
    dispatch(switchBoard(id));
  }

  return (
    <div className="mt-12">
      <Heading type="sidebar">All boards ({boards.length})</Heading>
      <ul className="grid grid-flow-row gap-3 text-sm">
        {boards.map((board) => {
          return (
            <BoardTitle
              title={board.name}
              id={board.id}
              key={board.id}
              isActive={currentBoard.id}
              onActive={handleClick}
            />
          );
        })}
        <CreateBoard />
      </ul>
    </div>
  );
}

export default BoardList;

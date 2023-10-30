import CreateBoard from "./CreateBoard";
import BoardTitle from "./BoardTitle";
import Heading from "../../ui/Heading";
import tableWhite from "../../assets/tableWhite.png";

import { useDispatch, useSelector } from "react-redux";
import { addBoard, getAllBoards, getBoard, switchBoard } from "./boardSlice";
import { useCallback, useEffect, useRef, useState } from "react";

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
  const inputEl = useRef(null);
  const [boardName, setBoardName] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(false);
  const dispatch = useDispatch();

  const boards = useSelector(getAllBoards);
  const currentBoard = useSelector(getBoard);

  function handleClick(id) {
    dispatch(switchBoard(id));
  }

  const hideInputBox = useCallback(function () {
    setIsInputVisible(false);
  }, []);

  const handleAddBoard = useCallback(
    function () {
      dispatch(addBoard(boardName));
      setIsInputVisible(false);
    },
    [boardName, dispatch],
  );

  useEffect(
    function () {
      if (isInputVisible) {
        inputEl.current.focus();
      }

      function handleClick(e) {
        if (inputEl.current && !inputEl.current.contains(e.target)) {
          hideInputBox();
        }
      }

      document.addEventListener("click", handleClick, true);

      return () => document.removeEventListener("click", handleClick, true);
    },
    [hideInputBox, isInputVisible],
  );

  useEffect(
    function () {
      function handleEnter(e) {
        if (e.code === "Enter") {
          handleAddBoard();
        }
      }

      if (isInputVisible) {
        document.addEventListener("keydown", handleEnter);
      }

      return () => document.removeEventListener("keydown", handleEnter);
    },
    [handleAddBoard, isInputVisible],
  );

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
        {isInputVisible && (
          <li
            className="list font-semibold"
            // onClick={() => onActive(id)}
          >
            <img className="mr-2 w-5" src={tableWhite} alt="table" />
            <input
              ref={inputEl}
              className="bg-transparent p-1 brightness-125"
              value={boardName}
              onChange={(e) => setBoardName(e.target.value)}
            />
          </li>
        )}
        <CreateBoard
          onClick={() =>
            setIsInputVisible((prev) => {
              return !prev;
            })
          }
        />
      </ul>
    </div>
  );
}

export default BoardList;

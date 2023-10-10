import { useState } from "react";
import CreateBoard from "./CreateBoard";
import BoardTitle from "./BoardTitle";
import Heading from "../../ui/Heading";

const boards = [
  {
    id: 1,
    title: "Platform Launch",
  },
  {
    id: 2,
    title: "Marketting Plan",
  },
  {
    id: 3,
    title: "Roadmap",
  },
];

function BoardList() {
  const [isActive, setIsActive] = useState(1);

  function handleClick(id) {
    setIsActive(id);
  }

  return (
    <div className="mt-12">
      <Heading type="sidebar">All boards ({boards.length})</Heading>
      <ul className="grid grid-flow-row gap-3 text-sm">
        {boards.map((board) => {
          return (
            <BoardTitle
              title={board.title}
              id={board.id}
              key={board.id}
              isActive={isActive}
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

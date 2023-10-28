import { useSelector } from "react-redux";
import Column from "./Column";
import NewColumn from "./NewColumn";
import { getBoard } from "./boardSlice";

function Board({ onShowDetails }) {
  const { columnNames } = useSelector(getBoard);

  return (
    <div className="grid auto-cols-max grid-flow-col content-start gap-6 overflow-auto px-12 py-8">
      {Array.from(columnNames, (x, i) => (
        <Column key={x} index={i} onShowDetails={onShowDetails} />
      ))}
      <NewColumn />
    </div>
  );
}

export default Board;
